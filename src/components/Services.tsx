"use client";

import {
  Android,
  Ansible,
  Anthropic,
  AppleLight,
  AWS,
  Django,
  Docker,
  FastAPI,
  Kubernetes,
  MongoDB,
  NextJs,
  NodeJs,
  OpenAI,
  PostgreSQL,
  Python,
  PyTorch,
  React as ReactIcon,
  Serverless as ServerlessIcon,
  Tensorflow,
  Terraform,
  TypeScript,
  VueJs,
} from "developer-icons";
import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";

type IconType = ComponentType<{ size?: number; className?: string }>;

type Service = {
  title: string;
  description: string;
  glyph: ReactNode;
  features: string[];
  tags: { name: string; Icon: IconType }[];
};

const services: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web development across the entire stack, covering frontend, backend, and everything between to ship complete, production-ready products.",
    glyph: <path d="M7 8l-4 4 4 4m10-8l4 4-4 4M14 4l-4 16" />,
    features: [
      "Web Application Development",
      "Frontend & Backend Development",
      "API Development & Integration",
      "Database Design",
    ],
    tags: [
      { name: "React", Icon: ReactIcon },
      { name: "Node.js", Icon: NodeJs },
      { name: "TypeScript", Icon: TypeScript },
      { name: "Vue", Icon: VueJs },
      { name: "Next.js", Icon: NextJs },
    ],
  },
  {
    title: "AI / ML & GenAI",
    description:
      "AI and machine learning that automates the busywork, surfaces hidden insight, and makes your product genuinely smart.",
    glyph: (
      <>
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
        <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" />
      </>
    ),
    features: [
      "Machine Learning",
      "LLM Apps & RAG Pipelines",
      "Computer Vision",
      "Predictive Analytics",
    ],
    tags: [
      { name: "OpenAI", Icon: OpenAI },
      { name: "Claude", Icon: Anthropic },
      { name: "TensorFlow", Icon: Tensorflow },
      { name: "PyTorch", Icon: PyTorch },
      { name: "Python", Icon: Python },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "High-performance mobile apps that feel native on every device. One team covers both platforms, beautifully consistent throughout.",
    glyph: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Deployment",
      "Maintenance & Support",
    ],
    tags: [
      { name: "React Native", Icon: ReactIcon },
      { name: "TypeScript", Icon: TypeScript },
      { name: "Android", Icon: Android },
      { name: "iOS", Icon: AppleLight },
    ],
  },
  {
    title: "Data Engineering & Databases",
    description:
      "Solid data foundations that turn scattered information into something you can act on, with migrations, pipelines, and analytics in Python.",
    glyph: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    features: [
      "Data Migration & ETL",
      "Microservices & APIs",
      "Warehousing & Analytics",
      "Performance Optimization",
    ],
    tags: [
      { name: "Python", Icon: Python },
      { name: "FastAPI", Icon: FastAPI },
      { name: "Django", Icon: Django },
      { name: "PostgreSQL", Icon: PostgreSQL },
      { name: "MongoDB", Icon: MongoDB },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient cloud infrastructure and automated delivery, so shipping is fast, scaling is painless, and uptime takes care of itself.",
    glyph: (
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.98A6 6 0 0 0 6.2 9.2 4 4 0 0 0 6.5 19h11z" />
    ),
    features: [
      "Cloud Architecture",
      "CI/CD Automation",
      "Containerization & Orchestration",
      "Monitoring & Cost Optimization",
    ],
    tags: [
      { name: "AWS", Icon: AWS },
      { name: "Docker", Icon: Docker },
      { name: "Kubernetes", Icon: Kubernetes },
      { name: "Terraform", Icon: Terraform },
      { name: "Ansible", Icon: Ansible },
    ],
  },
  {
    title: "IoT & Serverless",
    description:
      "Connected hardware and serverless backends, from sensors and edge devices to Lambda functions that scale to zero.",
    glyph: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2" />
      </>
    ),
    features: [
      "AWS IoT Core & Greengrass",
      "Edge to Cloud Telemetry",
      "Serverless Lambda APIs",
      "Device Fleet Management",
    ],
    tags: [
      { name: "AWS", Icon: AWS },
      { name: "Serverless", Icon: ServerlessIcon },
      { name: "Python", Icon: Python },
      { name: "Node.js", Icon: NodeJs },
    ],
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 ${className ?? ""}`}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            What we do
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-subtitle">
            We design &amp; build. We architect &amp; automate. Your personal
            team of developers.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group flex flex-col rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  {service.glyph}
                </svg>
              </div>

              <h3 className="mt-5 text-xl font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-subtitle">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-[15px] text-neutral-700"
                  >
                    <Check className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-black/5 pt-6">
                <ul className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag.name}
                      className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm"
                    >
                      <tag.Icon size={14} />
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
