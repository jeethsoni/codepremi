"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Stat = { value: string; label: string };

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  stats: Stat[];
};

const slides: Slide[] = [
  {
    image: "/sliders/bg-00.jpeg",
    eyebrow: "Howdy!",
    title: "CodePremi: { Born: To Code }",
    subtitle: "Yes, we love to code!",
    stats: [
      { value: "120+", label: "Projects Shipped" },
      { value: "40+", label: "Clients Worldwide" },
      { value: "10+", label: "Years of Code" },
    ],
  },
  {
    image: "/sliders/bg-22.jpeg",
    eyebrow: "Do you need Full Stack?",
    title: "We Do It All!",
    subtitle: "Node / Python / React / Vue / React Native",
    stats: [
      { value: "5+", label: "Core Stacks" },
      { value: "60+", label: "Apps Built" },
      { value: "100%", label: "End-to-End" },
    ],
  },
  {
    image: "/sliders/bg-33.jpeg",
    eyebrow: "In The Cloud",
    title: "We Do Automation",
    subtitle: "Bring Your Stack :)",
    stats: [
      { value: "99.9%", label: "Uptime" },
      { value: "3", label: "Cloud Providers" },
      { value: "500+", label: "Pipelines Automated" },
    ],
  },
  {
    image: "/sliders/bg-55.jpeg",
    eyebrow: "Do you have a Legacy App?",
    title: "We can Facelift!",
    subtitle: "Listen / Learn / Accept Challenge",
    stats: [
      { value: "50+", label: "Apps Modernized" },
      { value: "0", label: "Downtime Migrations" },
      { value: "2x", label: "Faster After Refactor" },
    ],
  },
];

const SLIDE_DURATION = 6000;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => goTo(index + 1), SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, goTo]);

  const active = slides[index];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4rem)] w-full items-center overflow-hidden bg-[#120F17]"
    >
      {/* Background slides (crossfade + slow zoom) */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            preload={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40" />

      {/* Slide text */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="flex flex-col items-center"
          >
            <motion.span
              variants={item}
              className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-primary/30"
            >
              {active.eyebrow}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              {active.title}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-lg font-medium text-white/80 sm:text-xl"
            >
              {active.subtitle}
            </motion.p>

            <motion.dl
              variants={item}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
            >
              {active.stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <dt className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {value}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white/70">
                    {label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
