"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RotatingRole from "./RotatingRole";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function linkStyle(href: string) {
    const active =
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

    return {
      active,
      className: `border-b-2 pb-1 transition-colors ${
        active
          ? "border-current font-semibold text-teal-400"
          : "border-transparent text-slate-300 hover:text-teal-400"
      }`,
    };
  }

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-6 py-5"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            document.getElementById("mobile-menu-toggle")?.focus();
          }
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Name and rotating role */}
          <div className="flex min-w-0 flex-col gap-1 lg:flex-row lg:items-center lg:gap-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold text-white sm:text-xl"
            >
              Nirmal Kumar
            </Link>

            <span
              aria-hidden="true"
              className="hidden text-slate-400 lg:inline"
            >
              |
            </span>

            <div className="text-sm font-semibold text-teal-400 sm:text-xl">
              <RotatingRole />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            data-testid="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 text-white lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {links.map((link) => {
              const { active, className } = linkStyle(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile links */}
        <div
          id="mobile-navigation"
          hidden={!menuOpen}
          className="mt-5 lg:hidden"
        >
          <div className="flex flex-col items-start gap-5 text-sm font-medium">
            {links.map((link) => {
              const { active, className } = linkStyle(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
