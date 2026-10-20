import Link from "next/link";
import ResumeRequest from "./components/ResumeRequest";
import CodeIllustration from "./components/CodeIllustration";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* Left: introduction and buttons */}
        <div className="min-w-0">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
            Leveraging{" "}
            <span className="text-teal-400">
              Automation and AI
            </span>{" "}
            to Drive Quality.
          </h1>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Core Tools & Technologies
            </h2>

            <p className="mt-3 text-lg leading-relaxed text-slate-300">
              TypeScript · Playwright · Postman · GitHub Actions · Docker · AI
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-start gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-300"
            >
              View my projects
            </Link>

            <ResumeRequest />
          </div>
        </div>

        {/* Right: code illustration */}
        <div className="mx-auto w-full min-w-0 max-w-xl">
          <CodeIllustration />
        </div>
      </div>
    </section>
  );
}