// Pobiera kalendarze iCal z Booking.com i zapisuje zajete terminy do public/occupied.json
// Linki do kalendarzy podawane sa przez zmienne srodowiskowe (sekrety GitHuba):
//   ROOM1_ICAL, ROOM2_ICAL
import { writeFileSync, mkdirSync } from 'node:fs';

const sources = {
  room1: process.env.ROOM1_ICAL,
  room2: process.env.ROOM2_ICAL,
};

// "20260812" albo "20260812T140000Z" -> "2026-08-12"
function toIsoDate(v) {
  const m = String(v).trim().match(/^(\d{4})(\d{2})(\d{2})/);
  if (!m) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

function parseIcs(text) {
  // sklejanie linii zawinietych (iCal lamie dlugie linie spacja na poczatku)
  const unfolded = text.replace(/\r?\n[ \t]/g, '');
  const events = [];
  let current = null;
  for (const rawLine of unfolded.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (line === 'BEGIN:VEVENT') current = {};
    else if (line === 'END:VEVENT') {
      if (current?.start && current?.end) events.push(current);
      current = null;
    } else if (current) {
      if (line.startsWith('DTSTART')) current.start = toIsoDate(line.split(':').pop());
      if (line.startsWith('DTEND')) current.end = toIsoDate(line.split(':').pop());
    }
  }
  return events;
}

const result = { room1: [], room2: [] };
let hadError = false;

for (const [room, url] of Object.entries(sources)) {
  if (!url) {
    console.log(`${room}: brak linku (sekret nie ustawiony) - pomijam`);
    continue;
  }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'willa-jagiellonka-sync' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (!text.includes('BEGIN:VCALENDAR')) throw new Error('odpowiedz nie jest kalendarzem iCal');
    result[room] = parseIcs(text);
    console.log(`${room}: ${result[room].length} rezerwacji`);
  } catch (err) {
    hadError = true;
    console.error(`${room}: BLAD - ${err.message}`);
  }
}

if (hadError) {
  console.error('Nie nadpisuje pliku z powodu bledow pobierania.');
  process.exit(1);
}

mkdirSync('public', { recursive: true });
writeFileSync('public/occupied.json', JSON.stringify(result, null, 2) + '\n');
console.log('Zapisano public/occupied.json');
