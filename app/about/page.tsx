import ProfilePortrait from "../components/ProfilePortrait";

const graduateStudies = [
  "Software Quality Assurance",
  "Technology Management",
  "Operations Management",
  "Project Management",
  "Lean Six Sigma",
  "Organizational Dynamics",
];

export default function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-7xl px-6 py-20"
    >
      <h1 id="about-heading" className="text-3xl font-bold">
        About me
      </h1>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="order-2 min-w-0 space-y-5 text-justify text-lg leading-relaxed text-slate-300 lg:order-1">
          <p>
            I’m{" "}
            <span className="font-semibold text-teal-400">
              Nirmal Kumar
            </span>
            , a Senior Software Development Engineer in Test with 8 years
            of experience in quality engineering. My work focuses on
            understanding how software should behave, identifying risks,
            and building reliable automated tests that help teams release
            with confidence.
          </p>

          <p>
            I hold a{" "}
            <span className="font-semibold text-white">
              Master of Science in Technology
            </span>{" "}
            from the{" "}
            <span className="font-semibold text-white">
              University of Central Missouri, USA
            </span>
            . My graduate studies strengthened my foundation in quality
            engineering and management, project management, operations
            management, lean manufacturing, Six Sigma methodology, and
            software quality assurance.
          </p>

          <p>
            This education broadened my perspective on quality beyond
            testing alone. It helped me connect software quality with
            process improvement, efficient operations, and effective
            project delivery. I bring that perspective to understanding
            requirements, improving test coverage, and collaborating
            with development and product teams.
          </p>

          <p>
            My experience includes US Federal Healthcare IT projects
            such as the Quality Payment Program (QPP), Measure Authoring
            Tool (MAT), and Medicaid and CHIP (MAC). Working in this
            domain has reinforced my focus on clear requirements,
            dependable workflows, and careful validation of software
            that supports healthcare programs.
          </p>

          <p>
            My current automation toolkit centres on Playwright and
            TypeScript for UI and API testing, supported by Postman,
            GitHub Actions, and Docker. I also bring previous experience
            with Cypress and JavaScript, alongside accessibility testing
            using keyboard navigation, screen readers, and color
            contrast checks.
          </p>

          <p>
            I’m continuing to develop my understanding of performance
            testing with k6 and exploring AI quality engineering,
            AI-assisted test design, and AI agents. Building this
            portfolio is also part of my learning journey—expanding my
            skills in Python and AI Engineering.
          </p>

          <p>
            I believe quality is a shared responsibility, supported by
            thoughtful engineering, clear communication, and continuous
            learning. My goal is to help teams build software that people
            can trust while making testing more useful, maintainable,
            and effective.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <ProfilePortrait />
        </div>
      </div>

      <section
        aria-labelledby="education-heading"
        className="mt-12 rounded-xl border border-slate-700 bg-slate-800 p-6 sm:p-8"
      >
        <h2
          id="education-heading"
          className="text-2xl font-semibold text-teal-400"
        >
          Education & academic foundation
        </h2>

        <h3 className="mt-4 text-xl font-semibold text-white">
          Master of Science in Technology
        </h3>

        <p className="mt-2 text-slate-300">
          University of Central Missouri, USA
        </p>

        <ul
          aria-label="Areas of graduate study"
          className="mt-6 flex flex-wrap gap-3"
        >
          {graduateStudies.map((subject) => (
            <li
              key={subject}
              className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-300"
            >
              {subject}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="interests-heading"
        className="mt-12 grid items-center gap-10 lg:grid-cols-2"
      >
        {/* Left column: description */}
        <div>
          <h2
            id="interests-heading"
            className="text-2xl font-semibold text-teal-400"
          >
            Beyond work
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-justify text-slate-300">
            Outside quality engineering, my interests include art, automotive,
            and travel. I enjoy exploring creativity, technology, and new
            places—interests that bring a different perspective to my life
            beyond software.
          </p>
        </div>

        {/* Right column: interest illustrations */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {/* Art */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex aspect-square w-full max-w-20 items-center justify-center rounded-2xl border"
              style={{
                backgroundColor: "#252B32",
                borderColor: "#414952",
              }}
            >
              <svg
                viewBox="0 0 80 80"
                className="h-16 w-16"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M42 12C25 12 12 24 12 40S25 68 40 68H44C50 68 53 62 49 58L46 55C43 52 45 47 49 47H57C65 47 69 42 68 35C66 21 56 12 42 12Z"
                  stroke="#FF946B"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <circle cx="28" cy="30" r="4" fill="#F45520" />
                <circle cx="42" cy="24" r="4" fill="#E9BF6B" />
                <circle cx="55" cy="32" r="4" fill="#82B38C" />
                <circle cx="25" cy="45" r="4" fill="#C5A2DE" />
              </svg>
            </div>

            <span className="text-sm font-medium text-slate-300">
              Art
            </span>
          </div>

          {/* Automotive */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex aspect-square w-full max-w-20 items-center justify-center rounded-2xl border"
              style={{
                backgroundColor: "#252B32",
                borderColor: "#414952",
              }}
            >
              <svg
                viewBox="0 0 80 80"
                className="h-16 w-16"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M17 39L24 23H55L63 39"
                  stroke="#FF946B"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 39H63L68 46V60H12V46L17 39Z"
                  stroke="#FF946B"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 60V66M62 60V66M32 51H48"
                  stroke="#FF946B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M22 48H27M53 48H58"
                  stroke="#F8FAFC"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M29 29H50"
                  stroke="#74808C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="text-sm font-medium text-slate-300">
              Automotive
            </span>
          </div>

          {/* Travel */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="flex aspect-square w-full max-w-20 items-center justify-center rounded-2xl border"
              style={{
                backgroundColor: "#252B32",
                borderColor: "#414952",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="#FF946B"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M17.8 8.2 20 6c2-2 2-4 1-5s-3-1-5 1l-2.2 2.2L3 2 1 4l8 5-5 5-3-1-1 1 4 3 3 4 1-1-1-3 5-5 5 8 2-2-2.2-10.8Z" />
              </svg>
            </div>

            <span className="text-sm font-medium text-slate-300">
              Travel
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}