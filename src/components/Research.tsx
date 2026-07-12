"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Project FlDraw",
    description:
      "We partnered with a local firm in Virginia to integrate Draw2D, an HTML5 canvas library, with a modern JavaScript stack. We built a proof-of-concept flow-charting app in under two months, dissecting the library internals and extending native code for a highly customized integration. We wrote a Node.js API to serialize and deserialize diagrams as JSON.",
  },
  {
    name: "Project Tocotou",
    description:
      "A bird from Amazon! In 2019 we researched building a desktop application for AWS using Electron, Node.js and a modern JavaScript stack. The app allows browserless connectivity to AWS, no browser required, and lets users switch AWS accounts on the fly. A cloud provider with hundreds of clients? Switch accounts and manage resources with ease. Plug & play, with more to follow.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Research() {
  return (
    <section
      id="research"
      className="relative w-full bg-neutral-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            Research
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Research &amp; Development
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-5 text-lg leading-8 text-subtitle">
            We <span className="text-primary">&#9829;</span> research. It feeds
            our soul!
          </p>
        </div>

        {/* Featured project */}
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fade}
          className="mt-16 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-2">
            {/* Text */}
            <div className="order-2 flex flex-col justify-center p-8 sm:p-10 lg:order-1">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Featured Research
              </span>
              <h3 className="mt-4 text-2xl font-bold text-neutral-900 sm:text-3xl">
                Project Nomadify
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-subtitle">
                We partnered on an autonomous vehicle project with{" "}
                <Link
                  href="https://www.linkedin.com/in/josephraetano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Dr. Joseph Raetano, Director of Artificial Intelligence
                </Link>
                , an outstanding research fellow. Our objective was to identify
                the personality of a vehicle: connecting a smart recreational
                vehicle with Amazon Cloud. In short, making an RV talk to the
                Cloud. How cool!
              </p>
              <p className="mt-4 text-[15px] leading-7 text-subtitle">
                The vehicle was equipped with 8 cameras, solar panels and WiFi.
                We installed and configured the NVIDIA TX2, one of the fastest,
                most power-efficient embedded computing devices, and ran Lambda @
                the Edge to read and push sensor, communication and coach data
                onto Amazon Cloud for processing across the AWS stack.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-subtitle">
                We had the privilege of partnering with the AI team at the
                University of Waterloo, ON, brought in for our Python expertise.
                Proudly, our smart RV was selected to support Hurricane Relief
                efforts in Puerto Rico. Want to see the vehicle in person? Reach
                out and maybe we can make that happen!
              </p>
            </div>

            {/* Image */}
            <div className="relative order-1 min-h-[280px] lg:order-2 lg:min-h-full">
              <Image
                src="/img/van.jpg"
                alt="Project Nomadify smart recreational vehicle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.article>

        {/* Other projects */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fade}
              className="flex flex-col rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
            >
              <h3 className="text-2xl font-bold text-neutral-900">
                {project.name}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-subtitle">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
