import type { NextApiRequest, NextApiResponse } from "next";
import { appendSubmission } from "../../utils/googleSheets";

type Data =
  | { success: true }
  | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  const { name, email, message, formType } = req.body || {};

  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !email.trim()
  ) {
    return res
      .status(400)
      .json({ success: false, error: "Name, email, and message are required." });
  }

  const type = typeof formType === "string" && formType.trim() ? formType.trim() : "Unknown";
  const row = [
    new Date().toISOString(),
    type,
    name.trim(),
    email.trim(),
    message.trim(),
  ];

  try {
    await appendSubmission(row);
    return res.status(200).json({ success: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Google Sheets append error:", error);
    return res.status(500).json({ success: false, error: "Failed to record submission." });
  }
}