type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  status,
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
    </article>
  );
}