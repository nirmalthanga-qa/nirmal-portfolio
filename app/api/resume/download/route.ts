import { readFile } from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";
import { verifyResumeToken } from "../../../lib/resume-token";

function errorResponse(message: string, status: number) {
  return new Response(message, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(request: Request) {
  // Local testing only until we finish production setup.
  if (process.env.NODE_ENV !== "development") {
    return errorResponse("Not found.", 404);
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return errorResponse("Invalid download request.", 400);
  }

  const token = formData.get("token");

  if (typeof token !== "string" || token.length > 4096) {
    return errorResponse("Missing or invalid access token.", 400);
  }

  const payload = verifyResumeToken(token);

  if (!payload) {
    return errorResponse(
      "This link is invalid or expired. Return to the homepage and request a new link.",
      403,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.RESUME_FROM_EMAIL;
  const recipient = process.env.RESUME_NOTIFICATION_EMAIL;

  if (!apiKey || !sender || !recipient) {
    return errorResponse("Email settings are missing.", 500);
  }

let pdf: ArrayBuffer;

  try {
    const filePath = path.join(
      process.cwd(),
      "private",
      "nirmal-kumar-resume.pdf",
    );

    const fileBuffer = await readFile(filePath);
    pdf = new ArrayBuffer(fileBuffer.byteLength);
    new Uint8Array(pdf).set(fileBuffer);

  } catch {
    return errorResponse(
      "The resume file is unavailable. Please contact Nirmal.",
      500,
    );
  }

  // Notification failures should not prevent a valid download.
  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      subject: "New resume download request",
      text: [
        "Someone used a resume access link to request your PDF.",
        "",
        `Email associated with the link: ${payload.email}`,
        `Time (UTC): ${new Date().toISOString()}`,
        "",
        "This records a download request, not confirmation that the browser saved the file.",
      ].join("\n"),
    });

    if (error) {
      console.error("Download notification failed:", error.message);
    }
  } catch {
    console.error("Unable to send the download notification.");
  }

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Nirmal-Kumar-Resume.pdf"',
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}