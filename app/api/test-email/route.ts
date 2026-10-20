import { Resend } from "resend";

export async function POST() {
  // This test endpoint is available only during local development.
  if (process.env.NODE_ENV !== "development") {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.RESUME_NOTIFICATION_EMAIL;
  const sender = process.env.RESUME_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return Response.json(
      { error: "Missing email settings in .env.local" },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      subject: "Your portfolio email setup works!",
      text: "Hello Nirmal! Your local Next.js website successfully sent this test email.",
    });

    if (error) {
      console.error("Email provider error:", error.message);

      return Response.json(
        { error: "Email could not be sent. Check your server Terminal." },
        { status: 502 },
      );
    }

    return Response.json({
      message: "Test email accepted for delivery. Check your inbox.",
    });
  } catch {
    return Response.json(
      { error: "Unable to connect to the email service. Try again." },
      { status: 500 },
    );
  }
}