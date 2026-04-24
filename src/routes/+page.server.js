import { fail } from '@sveltejs/kit';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { google } from 'googleapis';
import { env } from '$env/dynamic/private';

// Local JSON backup (works locally and on /tmp on Vercel; not persistent across deploys).
const DATA_DIR = process.env.VERCEL ? '/tmp' : 'data';
const RSVP_FILE = join(DATA_DIR, 'rsvps.json');

const UNLOCK_COOKIE = 'rsvp_unlocked';
const UNLOCK_COOKIE_VALUE = '1';
const UNLOCK_MAX_AGE = 60 * 60 * 24 * 60; // 60 days

function getRsvps() {
  if (!existsSync(RSVP_FILE)) return [];
  try {
    return JSON.parse(readFileSync(RSVP_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function saveRsvps(rsvps) {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(RSVP_FILE, JSON.stringify(rsvps, null, 2));
}

function sheetsConfigured() {
  return Boolean(
    env.GOOGLE_SHEET_ID &&
      env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      env.GOOGLE_PRIVATE_KEY
  );
}

const FOOD_OPTIONS = ['Fisk', 'Vegetarisk', 'Ingen'];

// Format like "2026-04-24 18:31:00" in Stockholm time so Google Sheets
// parses it as a datetime (sortable + formattable in the UI).
function stockholmTimestamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Stockholm',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).formatToParts(date);
  const get = (t) => parts.find((p) => p.type === t)?.value ?? '';
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')}`;
}

async function appendToSheet(rows) {
  // Vercel/dotenv often store the key with literal "\n" sequences — normalize them.
  const privateKey = env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const range = env.GOOGLE_SHEET_RANGE || 'Sheet1!A:C';

  await sheets.spreadsheets.values.append({
    spreadsheetId: env.GOOGLE_SHEET_ID,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: rows.map((r) => [r.timestamp, r.name, r.food])
    }
  });
}

function isUnlocked(cookies) {
  // If no password is configured, the form is open to everyone.
  if (!env.RSVP_PASSWORD) return true;
  return cookies.get(UNLOCK_COOKIE) === UNLOCK_COOKIE_VALUE;
}

function setUnlockCookie(cookies) {
  cookies.set(UNLOCK_COOKIE, UNLOCK_COOKIE_VALUE, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: UNLOCK_MAX_AGE
  });
}

export const load = ({ cookies }) => {
  return {
    unlocked: isUnlocked(cookies),
    passwordRequired: Boolean(env.RSVP_PASSWORD)
  };
};

export const actions = {
  unlock: async ({ request, cookies }) => {
    const data = await request.formData();
    const password = String(data.get('password') || '');

    if (!env.RSVP_PASSWORD) {
      // No password configured — just unlock.
      setUnlockCookie(cookies);
      return { unlocked: true };
    }

    if (password !== env.RSVP_PASSWORD) {
      return fail(401, { error: 'Fel lösenord. Försök igen.' });
    }

    setUnlockCookie(cookies);
    return { unlocked: true };
  },

  rsvp: async ({ request, cookies }) => {
    if (!isUnlocked(cookies)) {
      return fail(401, { error: 'Du måste ange lösenordet först.' });
    }

    const data = await request.formData();
    const rawNames = data.getAll('member_name').map((s) => String(s).trim());
    const rawFoods = data.getAll('member_food').map((s) => String(s));

    const members = [];
    for (let i = 0; i < rawNames.length; i++) {
      const name = rawNames[i];
      if (!name) continue;
      const food = FOOD_OPTIONS.includes(rawFoods[i]) ? rawFoods[i] : 'Fisk';
      members.push({ name, food });
    }

    if (members.length === 0) {
      return fail(400, { error: 'Lägg till minst en person med namn.' });
    }

    const timestamp = stockholmTimestamp();
    const entries = members.map((m) => ({
      timestamp,
      name: m.name,
      food: m.food
    }));

    // Always keep a local backup (best-effort).
    try {
      const rsvps = getRsvps();
      for (const entry of entries) rsvps.push(entry);
      saveRsvps(rsvps);
    } catch (err) {
      console.error('Failed to write local RSVP backup:', err);
    }

    if (sheetsConfigured()) {
      try {
        await appendToSheet(entries);
      } catch (err) {
        console.error('Failed to append RSVP to Google Sheet:', err);
        return fail(500, {
          error: 'Något gick fel när din anmälan skickades. Försök igen om en stund.'
        });
      }
    } else {
      console.warn(
        'Google Sheets not configured — RSVP saved only to local file. ' +
          'Set GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY to enable.'
      );
    }

    return { success: true, count: entries.length };
  }
};
