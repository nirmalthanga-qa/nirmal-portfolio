import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-slate-800 bg-slate-950">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5"
            >
                <Link href="/" className="text-xl font-bold text-teal-400">
                    Nirmal.
                </Link>

                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-300">
                    <a href="#home" className="hover:text-teal-400">
                        Home
                    </a>
                    <a href="#about" className="hover:text-teal-400">
                        About
                    </a>
                    <a href="#skills" className="hover:text-teal-400">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-teal-400">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-teal-400">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
}