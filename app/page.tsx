import Link from "next/link";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-24">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
          Leveraging{" "}
          <span className="text-teal-400">Automation and AI</span>{" "}
          to Drive Quality
        </h1>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            Core Tools & Technologies
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            TypeScript · Playwright · Postman · GitHub Actions · Docker
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-300"
          >
            View my projects
          </Link>

          <a
            href="/nirmal-kumar-resume.pdf"
            download
            className="inline-flex items-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-teal-400 transition-colors hover:border-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}