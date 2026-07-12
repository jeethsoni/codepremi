"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

type Trait = {
  title: string;
  description: string;
  icon: ReactNode;
};

const traits: Trait[] = [
  {
    title: "Heart On Sleeve",
    description:
      "Transparent team without any fine prints. Yes, no fine prints. No BS! Just work.",
    icon: (
      <path d="M19 14c1.5-1.5 3-3.4 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7z" />
    ),
  },
  {
    title: "At Your Fingertips",
    description:
      "Reliable and readily available team at your fingertips. We work in the wee hours!",
    icon: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  },
  {
    title: "Made In USA",
    description:
      "We are a local agency. And we never outsource. Just elite home-grown developers!",
    icon: (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <path d="M4 22v-7" />
      </>
    ),
  },
  {
    title: "On Time",
    description:
      "Yet to miss a deadline, say what? Yes we are on time. Meetings or delivery. Time is money: for you and us.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Clean Code",
    description:
      "That's a no-brainer. Really! No crappy code. No excuses. Write, Test & Build is our motto!",
    icon: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
  },
  {
    title: "Facelift",
    description: "We tackle legacy. We give a facelift. We love challenges.",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
        <path d="M21 3v5h-5" />
      </>
    ),
  },
  {
    title: "Creative",
    description:
      "We love creative. We love to sprinkle colors. Design to meet your eyes.",
    icon: (
      <>
        <path d="M12 19l7-7a2.8 2.8 0 0 0-4-4l-7 7" />
        <path d="M8 15a3 3 0 0 0-3 3c0 1-1 2-2 2 1.3 1.3 3.5 1.3 5 0a3 3 0 0 0 0-5z" />
      </>
    ),
  },
  {
    title: "Listen & Learn",
    description:
      "We listen. We learn about your unique needs. And then go to work.",
    icon: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="2" y="14" width="4" height="6" rx="1" />
        <rect x="18" y="14" width="4" height="6" rx="1" />
      </>
    ),
  },
  {
    title: "Mentors",
    description:
      "We teach. We nurture talent. We invest in future Code Premis!",
    icon: (
      <>
        <path d="M22 9L12 5 2 9l10 4 10-4z" />
        <path d="M6 11v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      </>
    ),
  },
  {
    title: "Ownership",
    description:
      "Your project is ours. We take ownership. We put our soul into your product.",
    icon: (
      <>
        <path d="M12 2l8 3v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V5l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

const steps = [
  {
    title: "Listen & Learn",
    description:
      "We dig into your goals, users, and constraints before writing a single line of code.",
  },
  {
    title: "Design & Architect",
    description:
      "We shape the architecture and experience, mapping the fastest path to a solid product.",
  },
  {
    title: "Build & Test",
    description:
      "We ship in tight iterations with clean, tested code, so you see progress every week.",
  },
  {
    title: "Launch & Support",
    description:
      "We deploy, monitor, and stay on to maintain and grow what we built together.",
  },
];

const promises = [
  "Transparent, upfront pricing. No surprise invoices.",
  "You own 100% of the code and IP.",
  "A direct line to the engineers building it.",
  "Post-launch support and maintenance.",
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-primary"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 shrink-0 rotate-90 self-center text-primary/50 lg:rotate-0"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            Why us
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            What Do We Bring?
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-5 text-lg leading-8 text-subtitle">
            We bring years of experience designing &amp; building great
            products. We love our clients and our clients love us :)
          </p>
        </div>

        {/* Traits grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {traits.map((trait) => (
            <motion.div
              key={trait.title}
              variants={item}
              className={`flex gap-4 ${
                trait.title === "Ownership" ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {trait.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {trait.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-7 text-subtitle">
                  {trait.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How we work */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              How We Work
            </h3>
            <p className="mt-4 text-lg leading-8 text-subtitle">
              A simple, transparent process from first call to long after launch.
            </p>
          </div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch"
          >
            {steps.map((step, i) => (
              <Fragment key={step.title}>
                <motion.div
                  variants={item}
                  className="flex-1 rounded-2xl border border-black/10 bg-white p-7"
                >
                  <h4 className="text-lg font-semibold text-neutral-900">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-7 text-subtitle">
                    {step.description}
                  </p>
                </motion.div>
                {i < steps.length - 1 && <Arrow />}
              </Fragment>
            ))}
          </motion.div>
        </div>

        {/* Promise band */}
        <div className="mt-24 overflow-hidden rounded-3xl border border-primary/15 bg-primary/4 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Our Promise To You
              </h3>
              <p className="mt-4 text-lg leading-8 text-subtitle">
                We treat your product like our own. Straight talk, senior
                engineers, and skin in the game from day one.
              </p>
              <Link
                href="#contact"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover"
              >
                Let&apos;s Build Together
              </Link>
            </div>

            <ul className="space-y-4">
              {promises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-start gap-3 text-[15px] leading-7 text-neutral-800"
                >
                  <Check />
                  {promise}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
