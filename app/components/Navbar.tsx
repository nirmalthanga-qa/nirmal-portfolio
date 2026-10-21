import Link from "next/link";
import RotatingRole from "./RotatingRole";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-700">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5"
      >
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-2">
          <Link
            href="/"
            className="whitespace-nowrap text-sm font-bold text-white sm:text-xl"
          >
            Nirmal Kumar
          </Link>

          <span aria-hidden="true" className="text-slate-400">
            |
          </span>

          <div className="whitespace-nowrap text-sm font-semibold text-teal-400 sm:min-w-[15rem] sm:text-xl">
            <RotatingRole />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-teal-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}