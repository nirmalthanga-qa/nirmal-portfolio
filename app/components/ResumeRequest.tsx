"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ResumeRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setMessage("");

    try {
      const response = await fetch("/api/resume/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Unable to send the link. Please try again.");
        return;
      }

      setMessage("Your résumé link has been sent. Check your inbox and spam folder.");
      setEmail("");
    } catch {
      setMessage("Unable to connect. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-controls="resume-request-form"
        className="inline-flex rounded-lg border border-slate-700 px-6 py-3 font-semibold text-teal-400 hover:border-teal-400"
      >
        Request Resume
      </button>

      <div id="resume-request-form" hidden={!isOpen}>
        <form
          onSubmit={handleSubmit}
          aria-busy={isSending}
          className="mt-4 w-full max-w-md rounded-xl border border-slate-700 bg-slate-900 p-6"
        >
          <label
            htmlFor="resume-email"
            className="block text-sm font-medium text-white"
          >
            Your email address
          </label>

          <input
            id="resume-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            disabled={isSending}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setMessage("");
            }}
            aria-describedby="resume-email-help"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:opacity-60"
          />

          <p
            id="resume-email-help"
            className="mt-3 text-sm leading-relaxed text-slate-300"
          >
            Your email will be used to send a resume access link valid
            for 15 minutes. Nirmal will be notified when you use it to
            request the PDF. This won’t subscribe you to marketing emails.
          </p>

          <button
            type="submit"
            disabled={isSending}
            className="mt-5 rounded-lg bg-teal-400 px-5 py-3 font-semibold text-slate-950 hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? "Sending…" : "Send resume link"}
          </button>

          <p role="status" className="mt-3 text-sm text-slate-300">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}