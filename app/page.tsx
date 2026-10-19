import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6">
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

          <a
            href="https://github.com/nirmalthanga-qa"
            className="mt-8 inline-flex rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
          >
            Explore GitHub
          </a>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-t border-slate-800 py-20"
        >
          <h2 id="about-heading" className="text-3xl font-bold">
            About me
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            I’m a Senior SDET with experience in UI and API automation.
            My primary tools are Playwright and TypeScript, supported by
            GitHub Actions and Docker. This website is where I’ll share
            my projects and what I learn along the way.
          </p>
        </section>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer name="Nirmal" />
    </div>
  );
}