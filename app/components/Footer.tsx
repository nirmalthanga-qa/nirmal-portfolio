const contact = {
    phone: "+91 9962311993",
    email: "nirmalthanga.qa@gmail.com",
    linkedin: "https://www.linkedin.com/in/nirmal-thanga",
};

export default function Footer() {
    const iconStyle =
        "inline-flex h-11 w-11 items-center justify-center rounded-full " +
        "border border-slate-700 text-teal-400 transition-colors " +
        "hover:bg-slate-800 focus-visible:outline-2 " +
        "focus-visible:outline-offset-4 focus-visible:outline-teal-400";

    return (
        <footer className="border-t border-slate-700">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8">
                <p className="max-w-xl text-sm text-slate-300">
                    Thanks for stopping by. Let’s put quality at the heart of software.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href="#top"
                        className="mr-3 text-sm font-medium text-teal-400 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                    >
                        Back to top ↑
                    </a>

                    {/* Mobile
                    <a
                        href={`tel:${contact.phone}`}
                        aria-label="Call Nirmal"
                        title="Call Nirmal"
                        className={iconStyle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <rect x="6" y="2" width="12" height="20" rx="2" />
                            <path d="M11 18h2" />
                        </svg>
                    </a> */}

                    {/* Email */}
                    <a
                        href={`mailto:${contact.email}`}
                        aria-label="Email Nirmal"
                        title="Email Nirmal"
                        className={iconStyle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="m3 7 9 6 9-6" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Nirmal’s LinkedIn profile (opens in a new tab)"
                        title="LinkedIn"
                        className={iconStyle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}