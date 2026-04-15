import { fail } from '@sveltejs/kit';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = 'data';
const RSVP_FILE = join(DATA_DIR, 'rsvps.json');

function getRsvps() {
  if (!existsSync(RSVP_FILE)) return [];
  return JSON.parse(readFileSync(RSVP_FILE, 'utf-8'));
}

function saveRsvps(rsvps) {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  writeFileSync(RSVP_FILE, JSON.stringify(rsvps, null, 2));
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();

    if (!name) {
      return fail(400, { error: 'Vänligen ange ditt namn.', name, phone });
    }
    if (!phone) {
      return fail(400, { error: 'Vänligen ange ditt telefonnummer.', name, phone });
    }

    const rsvps = getRsvps();
    rsvps.push({ name, phone, timestamp: new Date().toISOString() });
    saveRsvps(rsvps);

    return { success: true };
  }
};
