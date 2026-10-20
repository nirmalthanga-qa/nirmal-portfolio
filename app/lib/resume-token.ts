import {
  createHmac,
  timingSafeEqual,
} from "node:crypto";

type ResumeTokenPayload = {
  email: string;
  expiresAt: number;
};

function getSecret() {
  const secret = process.env.RESUME_LINK_SECRET;

  if (!secret) {
    throw new Error("Missing RESUME_LINK_SECRET");
  }

  return secret;
}

export function createResumeToken(email: string) {
  const payload: ResumeTokenPayload = {
    email,
    expiresAt: Date.now() + 15 * 60 * 1000,
  };

  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");

  const signature = createHmac("sha256", getSecret())
    .update(encoded)
    .digest("base64url");

  return `${encoded}.${signature}`;
}

export function verifyResumeToken(
  token: string,
): ResumeTokenPayload | null {
  try {
    const parts = token.split(".");

    if (parts.length !== 2) return null;

    const [encoded, signature] = parts;

    const expected = createHmac("sha256", getSecret())
      .update(encoded)
      .digest();

    const received = Buffer.from(signature, "base64url");

    if (
      received.length !== expected.length ||
      !timingSafeEqual(received, expected)
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8"),
    );

    if (
      typeof payload.email !== "string" ||
      typeof payload.expiresAt !== "number" ||
      !Number.isFinite(payload.expiresAt) ||
      payload.expiresAt <= Date.now()
    ) {
      return null;
    }

    return {
      email: payload.email,
      expiresAt: payload.expiresAt,
    };
  } catch {
    return null;
  }
}