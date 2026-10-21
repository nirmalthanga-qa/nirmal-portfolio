import ContactIllustration from "./ContactIllustration";

const contact = {
  email: "nirmalthanga.qa@gmail.com",
  github: "https://github.com/nirmalthanga-qa",
  linkedin: "https://www.linkedin.com/in/nirmal-thanga",
};

export default function Contact() {
  const linkStyle =
    "inline-flex rounded-lg border border-portfolio-border px-5 py-3 " +
    "font-medium text-portfolio-text transition-colors " +
    "hover:border-teal-400 hover:text-teal-400 " +
    "focus-visible:outline-2 focus-visible:outline-offset-4 " +
    "focus-visible:outline-teal-400";

  return (
    <section
      id="contact"
      data-testid="contact-page"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-7xl px-6 py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left: heading, description, and links */}
        <div className="min-w-0">
          <h1 id="contact-heading" className="text-3xl font-bold">
            Let’s connect
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-portfolio-muted">
            Interested in discussing quality engineering, test automation,
            or something I’m building? Get in touch.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              data-testid="contact-email"
              className={linkStyle}
            >
              Email me
            </a>

            <a
              href={contact.github}
              data-testid="contact-github"
              className={linkStyle}
            >
              GitHub
            </a>

            <a
              href={contact.linkedin}
              data-testid="contact-linkedin"
              className={linkStyle}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="w-full min-w-0 max-w-sm justify-self-end">
          <ContactIllustration />
        </div>
      </div>
    </section>
  );
}