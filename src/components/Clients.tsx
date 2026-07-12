"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Curate", src: "/clients/curate.png" },
  { name: "DOE", src: "/clients/doe.gif" },
  { name: "Inciter", src: "/clients/inciter.png" },
  { name: "Ingenium", src: "/clients/ingenium.png" },
  { name: "OGSystems", src: "/clients/ogsystems.png" },
  { name: "PwC", src: "/clients/pwc.png" },
  { name: "Queen CG", src: "/clients/queencg.png" },
  { name: "Smartronix", src: "/clients/smartronix.png" },
  { name: "Upside", src: "/clients/upside.png" },
  { name: "Vertex", src: "/clients/vrtx.png" },
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

export default function Clients() {
  return (
    <section id="clients" className="relative w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            Clients
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Our Clients
          </h2>
          <p className="mt-4 text-lg leading-8 text-subtitle">
            Our prestigious and happy clients.
          </p>
        </div>

        {/* Logo wall */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={item}
              className="group flex h-28 items-center justify-center rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="relative h-full w-full">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 18vw"
                  unoptimized={client.src.endsWith(".gif")}
                  className="object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
