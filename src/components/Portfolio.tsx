"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "ML Fraud Detection Pipeline",
    description:
      "Built an end-to-end machine learning pipeline for detecting fraudulent transactions in real time, achieving 97% precision on production data.",
    stack: ["Python", "Scikit-learn", "Apache Kafka", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "NLP Sentiment Dashboard",
    description:
      "Developed an interactive dashboard that analyzes customer sentiment from reviews using transformer-based NLP models and visualizes trends over time.",
    stack: ["Python", "Hugging Face", "FastAPI", "React"],
    github: "https://github.com",
  },
  {
    title: "Real-Time Analytics Platform",
    description:
      "Designed and deployed a scalable analytics platform processing millions of events daily, with live dashboards for business stakeholders.",
    stack: ["TypeScript", "Next.js", "ClickHouse", "Docker"],
    github: "https://github.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          Portfolio
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white border border-border p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
