"use client";

import Link from "next/link";
import type { ReactNode } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why us?", href: "#why-us" },
  { label: "Clients", href: "#clients" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const contacts: { value: string; href: string; icon: ReactNode }[] = [
  {
    value: "308 Ingalls Dr, Middletown, MD, 21769",
    href: "https://www.google.com/maps/search/?api=1&query=308+Ingalls+Dr+Middletown+MD+21769",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    value: "240 501 0875",
    href: "tel:+12405010875",
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    ),
  },
  {
    value: "codepremi@gmail.com",
    href: "mailto:codepremi@gmail.com",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
];

export default function Footer() {
  const speak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance("Code Pray Me");
    utterance.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <footer className="w-full bg-[#120F17] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand + pronunciation */}
          <div className="lg:col-span-2">
            <Link href="#home" className="text-2xl font-bold tracking-tight">
              Code<span className="text-primary">Premi</span>
            </Link>

            <div className="mt-6 flex items-center gap-2 text-lg font-bold">
              Pronounced
              <button
                type="button"
                onClick={speak}
                aria-label="Play pronunciation"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary transition-colors hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M11 5 6 9H2v6h4l5 4V5z" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" />
                </svg>
              </button>
              <span className="text-primary">[Code-Pray-Me]</span>
            </div>
            <p className="mt-2 max-w-md text-[15px] leading-7 text-white/60">
              &ldquo;Premi&rdquo; is a word from Hindi, meaning
              &ldquo;Lover&rdquo;. For our love of code, we are the Code Lovers{" "}
              <span className="text-primary">&#9829;</span>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-4">
              {contacts.map((contact) => (
                <li key={contact.href}>
                  <Link
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3 text-[15px] text-white/70 transition-colors hover:text-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    >
                      {contact.icon}
                    </svg>
                    {contact.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay connected */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Stay Connected
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/codepremi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodePremi on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.94H5.56v8.4h2.78zM6.95 8.7a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22zm11.4 9.64v-4.6c0-2.42-1.3-3.55-3.03-3.55a2.62 2.62 0 0 0-2.37 1.3v-1.12H10.2v8.4h2.78v-4.44c0-.6.04-1.17.9-1.17.86 0 .87.8.87 1.22v4.39h2.6z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/riteshapatel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodePremi on GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.1-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} CodePremi. Born to code.
          </p>
          <p className="text-sm text-white/50">
            Made with <span className="text-primary">&#9829;</span> by CodePremi
          </p>
        </div>
      </div>
    </footer>
  );
}
