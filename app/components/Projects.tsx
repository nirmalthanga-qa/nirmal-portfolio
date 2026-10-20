import ProjectCard from "./ProjectCard";

const healthcareProjects = [
  {
    title: "Quality Payment Program (QPP)",
    description:
      "A CMS program supporting high-quality, value-based healthcare by " +
      "connecting Medicare clinician payments to performance. It supports " +
      "quality reporting and participation in value-based payment pathways.",
    technologies: [
      "MEAN Stack (Angular 2+)",
      "JavaScript",
      "Protractor",
      "Selenium",
      "Cypress",
      "Postman",
      "BDD",
    ],
  },
  {
    title: "Measure Authoring Tool (MAT)",
    description:
      "A web-based tool used by measure developers to create electronic " +
      "clinical quality measures (eCQMs). It helps define measure logic " +
      "and structure for evaluating healthcare quality using electronic data.",
    technologies: [
      "Google Web Toolkit (GWT)",
      "Java JDK",
      "MySQL",
      "JavaScript",
      "Cypress",
      "GitHub Actions",
    ],
  },
  {
    title: "Medicaid and CHIP (MAC)",
    description:
      "Medicaid and the Children’s Health Insurance Program (CHIP) provide " +
      "health coverage to eligible populations. Medicaid serves eligible " +
      "low-income adults, children, pregnant women, older adults, and people " +
      "with disabilities, while CHIP extends coverage to eligible children.",
    technologies: [
      "Drupal",
      "Angular 2+",
      "TypeScript",
      "D3.js",
      "Playwright",
      "Postman",
      "GitHub Actions",
      "Docker",
    ],
  },
];

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20" aria-labelledby="projects-heading">
      <h1 id="projects-heading" className="text-3xl font-bold">
        Projects
      </h1>

      <p className="mt-4 text-lg text-portfolio-muted">
        Software QA projects and my personal development journey.
      </p>

      <section
        aria-labelledby="healthcare-heading"
        className="mt-12"
      >
        <h2
          id="healthcare-heading"
          className="text-2xl font-semibold text-teal-400"
        >
          US Federal Healthcare IT
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {healthcareProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="personal-projects-heading"
        className="mt-14"
      >
        <h2
          id="personal-projects-heading"
          className="text-2xl font-semibold text-teal-400"
        >
          Personal projects
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Personal portfolio"
            description="My personal website showcasing my quality engineering
              experience, skills, and development journey. Planned additions
              include a blog, Playwright tests, and a CI pipeline."
            technologies={[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
            ]}
            status="In progress"
          />
        </div>
      </section>
    </section>
  );
}