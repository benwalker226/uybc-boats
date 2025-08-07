# Next.js Contact Form Minimal Example

A minimal, fully-typed Next.js (v14) contact form app ready for Vercel deployment.  
Features a simple, responsive form with validation and API route.

## 🚀 One-Click Deploy

Click the button below to deploy to Vercel instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repo=https://github.com/YOUR_GITHUB_REPO_HERE)

_Replace `YOUR_GITHUB_REPO_HERE` with the repo URL if self-hosting._

---

## Local Development

```bash
npm install
npm run dev
```

- App runs at [http://localhost:3000](http://localhost:3000)
- Production build: `npm run build` then `npm start`

## Project Structure

- All files are in the project root (no subfolders).
- Pages use Next.js "pages" router for maximum Vercel compatibility.
- TypeScript, ESLint, and basic config included.

## Features

- Responsive, centered contact form at `/`
- POSTs to `/api/submit` (no database)
- Blue button, white background, accessible, mobile-friendly

---

## Google Sheets Integration

This project supports saving form submissions to a Google Sheet using a Google Service Account.

### Setup

1. **Create a Google Service Account**  
   In the [Google Cloud Console](https://console.cloud.google.com/), create a Service Account and generate a key in JSON format.

2. **Share your Google Sheet**  
   Create a Google Sheet and share it with your Service Account email (can edit).

3. **Configure Environment Variables**  
   Copy `.env.example` to `.env.local` and fill in the following values:

   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` – from your service account JSON
   - `GOOGLE_PRIVATE_KEY` – from your service account JSON (use double quotes and preserve `\n` newlines)
   - `GOOGLE_SHEETS_ID` – found in the Google Sheet URL (between `/d/` and `/edit`)
   - `GOOGLE_SHEETS_TAB` – (optional) tab name, defaults to `Sheet1`

4. **Deploy**  
   On Vercel or locally, ensure the above environment variables are set.

### Troubleshooting

- If you see errors about authentication or permissions, double-check the service account, private key, and that the Sheet is shared to the service account email.
- For local dev, restart the server after editing `.env.local`.

---

## License

MIT