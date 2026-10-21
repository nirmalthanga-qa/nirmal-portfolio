const skills = [
  {
    name: "Software QA Concepts",
    description:
      "SDLC, STLC, test planning, test design techniques, defect lifecycle, " +
      "functional testing, regression testing, smoke testing, and exploratory testing.",
  },
  { name: "TypeScript", description: "Building maintainable automation code using type safety, interfaces, reusable functions, and asynchronous programming." },
  { name: "Playwright", description: "Automating UI and API tests with reliable locators, assertions, fixtures, and cross-browser execution." },
  { name: "Postman", description: "Validating APIs through requests, response checks, authentication, collections, and environment variables." },
  { name: "GitHub Actions", description: "Running automated tests in CI pipelines and publishing test results to support release decisions." },
  { name: "Docker", description: "Creating consistent, container-based environments for running applications and automated tests." },
  { name: "Cypress", description: "Previous experience automating web application workflows using JavaScript, assertions, and network interception." },
  { name: "Accessibility Testing", description: "Evaluating accessibility through manual keyboard navigation, JAWS and NVDA screen readers, and color contrast checks." },
  { name: "k6", description: "Foundational knowledge of performance testing, including virtual users, load scenarios, response times, and thresholds." },
  { name: "AI Quality Engineering", description: "Exploring AI-assisted test design, automation, and defect analysis, alongside evaluating AI-generated responses for accuracy and consistency." },
  {
    name: "Test Management",
    description: "Managing defects and work items with Jira, documentation with Confluence, and test cases and execution with TestRail and Zephyr.",
  },
  {
    name: "Methodologies",
    description: "Working within Agile Scrum practices, with foundational knowledge of SAFe, to support collaborative testing and continuous improvement.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-portfolio-border mx-auto w-full max-w-7xl px-6 py-20"
    >
      <h1 id="skills-heading" className="text-3xl font-bold">
        Skills & tools
      </h1>

      <p className="mt-4 text-lg text-portfolio-muted">
        The technologies I work with and learn.
      </p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-semibold text-teal-400">
              {skill.name}
            </h2>

            <p className="mt-3 leading-relaxed text-slate-300">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
      {/* Soft Skills */}
      <article
        data-testid="soft-skills-card"
        className="mt-8 rounded-xl border border-slate-700 bg-slate-800 p-6"
      >
        <h2 className="text-xl font-semibold text-teal-400">
          Soft Skills
        </h2>

        <p className="mt-3 leading-relaxed text-slate-300">
          Building strong working relationships, supporting teams, and approaching
          challenges with empathy, clarity, and sound judgment.
        </p>

        <ul
          aria-label="Soft skills"
          className="mt-5 flex flex-wrap gap-2"
        >
          {[
            "Communication",
            "Active Listening",
            "Negotiation",
            "Leadership",
            "Conflict Resolution",
            "Mentoring",
            "Critical Thinking",
            "Adaptability",
            "Emotional Intelligence",
          ].map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-slate-900 px-3 py-1 text-sm text-slate-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}