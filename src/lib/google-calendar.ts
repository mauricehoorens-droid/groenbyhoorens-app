import { google } from "googleapis";

// Authenticatie via een service account.
// Voorkeur: GOOGLE_SERVICE_ACCOUNT_B64 = de volledige JSON-sleutel als base64
// (geen newline-problemen). Fallback: losse GOOGLE_CLIENT_EMAIL + GOOGLE_PRIVATE_KEY.
function getCreds(): { email: string; key: string } {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_B64;
  if (b64 && b64.trim()) {
    const json = JSON.parse(
      Buffer.from(b64.replace(/\s/g, ""), "base64").toString("utf8")
    );
    const key = String(json.private_key || "");
    // Veilige diagnostiek (geen geheimen): welke route + of de sleutel geldig oogt
    console.log(
      "AUTH via B64 | email:",
      json.client_email,
      "| keyStartsWithBEGIN:",
      key.startsWith("-----BEGIN")
    );
    return { email: json.client_email, key };
  }
  const key = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n").replace(/\r/g, "");
  console.log("AUTH via losse vars | keyStartsWithBEGIN:", key.startsWith("-----BEGIN"));
  return { email: process.env.GOOGLE_CLIENT_EMAIL as string, key };
}

function getAuth() {
  const { email, key } = getCreds();
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
}

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID as string; // bv. mauricehoorens@gmail.com

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
  startISO: string;
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
