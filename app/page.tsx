import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className="py-24 sm:py-32">
      <p className="mb-4 text-lg font-medium text-teal-400">
        வணக்கம்! I’m Nirmal.
      </p>

      <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
        Senior SDET.
        <span className="mt-2 block text-slate-400">
          Building confidence in software.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
        I have 8 years of experience in quality engineering. I work with
        Playwright, TypeScript, API testing, GitHub Actions, and Docker.
        I’m also exploring AI-powered testing.
      </p>

      <Link
        href="/projects"
        className="mt-8 inline-flex rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 hover:bg-teal-300"
      >
        View my projects
      </Link>
    </section>
  );
}