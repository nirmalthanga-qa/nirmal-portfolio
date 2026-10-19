import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <Link href="/" className="text-xl font-bold text-teal-400">
          Nirmal.
        </Link>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-teal-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}