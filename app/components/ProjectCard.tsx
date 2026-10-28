type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  status,
  href,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-slate-800 p-6">
      {status && (
        <p className="mb-3 text-sm font-medium text-teal-400">
          {status}
        </p>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-relaxed text-slate-300">
        {description}
      </p>

      <ul
        aria-label="Technologies used"
        className="mt-5 flex flex-wrap gap-2"
      >
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="project-live-link"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4 hover:text-teal-400"
        >
          Visit {title}
          <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  );
}