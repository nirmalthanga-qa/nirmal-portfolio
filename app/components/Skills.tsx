const skills = [
  { name: "Playwright", description: "UI and API test automation" },
  { name: "TypeScript", description: "My primary automation language" },
  { name: "Postman", description: "Manual API validation" },
  { name: "GitHub Actions", description: "Automated CI workflows" },
  { name: "Docker", description: "Container-based environments" },
  { name: "Cypress", description: "Previous E2E automation experience" },
  { name: "Accessibility", description: "Testing inclusive user experiences" },
  { name: "k6", description: "Foundational performance testing knowledge" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-slate-800 py-20"
    >
      <h2 id="skills-heading" className="text-3xl font-bold">
        Skills & tools
      </h2>

      <p className="mt-4 text-lg text-slate-300">
        The technologies I work with and learn.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-lg font-semibold text-teal-400">
              {skill.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}