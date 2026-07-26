import { google } from "googleapis";

// Service-account authenticatie. De private key staat in .env.local
// (GOOGLE_PRIVATE_KEY) met echte newlines als \n — die zetten we hier terug om.
function getAuth() {
  const email = process.env.GOOGLE_CLIENT_EMAIL as string;
  const key = (process.env.GOOGLE_PRIVATE_KEY as string)?.replace(/\\n/g, "\n");
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
}

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID as string; // bv. groenbyhoorens@gmail.com

/** Geeft de bezette periodes terug uit de Google-agenda tussen twee tijdstippen. */
export async function getBusy(timeMinISO: string, timeMaxISO: string) {
  const calendar = google.calendar({ version: "v3", auth: getAuth() });
  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: timeMinISO,
      timeMax: timeMaxISO,
      timeZone: "Europe/Brussels",
      items: [{ id: CALENDAR_ID }],
    },
  });
  const cal = res.data.calendars?.[CALENDAR_ID];
  return (cal?.busy ?? []) as { start?: string | null; end?: string | null }[];
}

/** Maakt een afspraak-event aan in de Google-agenda. Geeft het event-id terug. */
export async function createEvent(params: {
  startISO: string; // lokale ISO zonder offset, bv. 2026-07-27T08:00:00
  endISO: string;
  naam: string;
  adres: string;
  email: string;
  telefoon?: string;
  bericht?: string;
  dagdeel: string;
}) {
  const calendar = google.calendar({ version: "v3", auth: getAuth() });
  const beschrijving = [
    `Klant: ${params.naam}`,
    `Adres: ${params.adres}`,
    params.telefoon ? `Telefoon: ${params.telefoon}` : "",
    `E-mail: ${params.email}`,
    params.bericht ? `\nBericht: ${params.bericht}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const res = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: {
      summary: `Tuinwerken – ${params.naam}`,
      location: params.adres,
      description: beschrijving,
      start: { dateTime: params.startISO, timeZone: "Europe/Brussels" },
      end: { dateTime: params.endISO, timeZone: "Europe/Brussels" },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "popup", minutes: 24 * 60 },
          { method: "popup", minutes: 60 },
        ],
      },
    },
  });
  return res.data.id as string;
}

/** Verwijdert een afspraak-event uit de Google-agenda (bij annulatie). */
export async function deleteEvent(eventId: string) {
  const calendar = google.calendar({ version: "v3", auth: getAuth() });
  await calendar.events.delete({ calendarId: CALENDAR_ID, eventId });
}
