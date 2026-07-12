"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Why us?", href: "#why-us" },
  { label: "Clients", href: "#clients" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .filter((link) => link.href.startsWith("#"))
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // If we're scrolled near the top, treat Home as active.
        if (window.scrollY < 80) {
          setActiveHref("/");
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg shadow-black/5">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="CodePremi home">
          <Image
            src="/img/cp-logo.png"
            alt="CodePremi"
            width={1628}
            height={308}
            className="h-6 w-auto"
            preload
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => {
            const isActive = activeHref === href;
            return (
              <motion.li
                key={label}
                className="relative"
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-neutral-800"
                  }`}
                >
                  {label}
                </Link>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary"
                  variants={{
                    rest: { scaleX: isActive ? 1 : 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-4 w-6">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-6 rounded-full bg-neutral-800"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-neutral-800"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-neutral-800"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </nav>

      {/* Pink separator */}
      <div className="h-px w-full bg-primary" />

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white md:hidden"
          >
            <ul className="flex flex-col items-center gap-1 px-4 py-3">
              {navLinks.map(({ label, href }) => {
                const isActive = activeHref === href;
                return (
                  <li key={label} className="w-full">
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-center rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-neutral-800 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
