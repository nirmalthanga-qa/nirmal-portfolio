"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function DownloadForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    return (
      <div>
        <p>This link is missing its access token.</p>
        <Link href="/" className="mt-4 inline-block text-teal-400">
          Return home to request a new link
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p className="mt-4 text-slate-300">
        Click below to download the PDF. Nirmal will be notified of your
        request. Links expire 15 minutes after they are issued.
      </p>

      <form action="/api/resume/download" method="POST">
        <input type="hidden" name="token" value={token} />

        <button
          type="submit"
          className="mt-6 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-300"
        >
          Download Resume
        </button>
      </form>
    </div>
  );
}

export default function ResumeDownloadPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20">
      <h1 className="text-3xl font-bold">Nirmal Kumar’s Resume</h1>

      <Suspense fallback={<p className="mt-4">Loading your link…</p>}>
        <DownloadForm />
      </Suspense>
    </section>
  );
}