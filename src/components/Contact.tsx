"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useState } from "react";

const details: { label: string; value: string; href: string; icon: ReactNode }[] =
  [
    {
      label: "Address",
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
      label: "Phone",
      value: "240 501 0875",
      href: "tel:+12405010875",
      icon: (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
      ),
    },
    {
      label: "Email",
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

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New message from ${name || "the website"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:codepremi@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Shall We Chat?
          </h2>
          <p className="mt-4 text-lg leading-8 text-subtitle">
            Have a project in mind? Drop us a line and we&apos;ll get back to
            you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {details.map((detail) => (
              <Link
                key={detail.label}
                href={detail.href}
                target={detail.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  detail.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {detail.icon}
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-widest text-subtitle">
                    {detail.label}
                  </span>
                  <span className="mt-0.5 text-base font-medium text-neutral-900">
                    {detail.value}
                  </span>
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5 rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-800">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-12 rounded-xl border border-black/15 bg-white px-4 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-xl border border-black/15 bg-white px-4 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-800">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="resize-y rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
