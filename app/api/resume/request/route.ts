import { Resend } from "resend";
import { createResumeToken } from "../../../lib/resume-token";

export async function POST(request: Request) {
  // Keep this endpoint local while we finish the download flow
  // and add protection against automated email requests.
  if (process.env.NODE_ENV !== "development") {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof body.email === "string"
      ? body.email.trim()
      : "";

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.RESUME_FROM_EMAIL;
  const appUrl = process.env.APP_URL;

  if (
    !apiKey ||
    !sender ||
    !appUrl ||
    !process.env.RESUME_LINK_SECRET
  ) {
    return Response.json(
      { error: "Email or download settings are missing." },
      { status: 500 },
    );
  }

  try {
    const token = createResumeToken(email);

    const downloadUrl = new URL("/resume/download", appUrl);
    downloadUrl.searchParams.set("token", token);

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: email,
      subject: "Your link to Nirmal Kumar’s résumé",
      text: [
        "Thanks for your interest in my profile!",
        "",
        "Use the following link to access my résumé:",
        downloadUrl.toString(),
        "",
        "This link expires in 15 minutes.",
        "Nirmal will be notified when you request the PDF through this link.",
        "",
        "If you didn’t request this email, you can ignore it.",
      ].join("\n"),
    });

    if (error) {
      console.error("Résumé email error:", error.message);

      return Response.json(
        { error: "Unable to send the email. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({
      message: "Your résumé link has been sent. Check your inbox.",
    });
  } catch {
    return Response.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 },
    );
  }
}