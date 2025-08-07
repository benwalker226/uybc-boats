import { google } from "googleapis";

const getEnv = (key: string, required = true): string => {
  const value = process.env[key];
  if (!value && required) throw new Error(`Missing env var: ${key}`);
  return value || "";
};

const processPrivateKey = (key: string): string => {
  // Handles both escaped and real newlines
  return key.replace(/\\n/g, "\n");
};

export async function appendSubmission(row: (string | number)[]): Promise<void> {
  const client_email = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  let private_key = getEnv("GOOGLE_PRIVATE_KEY");
  private_key = processPrivateKey(private_key);
  const spreadsheetId = getEnv("GOOGLE_SHEETS_ID");
  const tab = process.env.GOOGLE_SHEETS_TAB || "Sheet1";
  if (!Array.isArray(row) || row.length !== 5) {
    throw new Error("Row must be an array with exactly 5 elements.");
  }

  const jwt = new google.auth.JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth: jwt });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${tab}!A:E`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}