import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-slate-800 py-20"
    >
      <h2 id="projects-heading" className="text-3xl font-bold">
        Projects
      </h2>

      <p className="mt-4 text-lg text-slate-300">
        What I’m building and learning along the way.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Personal portfolio"
          description="My personal website showcasing my quality engineering
            experience, skills, and development journey. Planned additions
            include a blog, Playwright tests, and a CI pipeline."
          technologies={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
          status="In progress"
        />
      </div>
    </section>
  );
}