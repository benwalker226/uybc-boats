import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { success: true }
  | { success: false; error: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  const { name, message } = req.body || {};

  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim()
  ) {
    return res
      .status(400)
      .json({ success: false, error: "Name and message are required." });
  }

  // No storage; just respond with success.
  return res.status(200).json({ success: true });
}