"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Elytra",
    description:
      "An AI-powered platform that helps companies discover the best tools for their needs from a database of 13K+ options. Features LLM-generated reports and a full-stack architecture with a Next.js frontend and FastAPI backend.",
    stack: ["Python", "TypeScript", "Next.js", "FastAPI", "Pandas"],
    link: "https://elytra-a2rn3u2jy-luke-spencers-projects-92efbd74.vercel.app/",
    linkLabel: "View Live Site",
  },
  {
    title: "Harvard CS50AI",
    description:
      "A collection of AI projects including a traffic sign classifier that reaches 98% accuracy across 43 sign classes and a Q-learning agent that masters the game of Nim through 50K+ rounds of self-play.",
    stack: ["Python", "TensorFlow", "Scikit-Learn"],
    link: "https://github.com/lukehspencer/harvard-cs50ai-projects",
    linkLabel: "View on GitHub",
  },
  {
    title: "NBA MVP Predictor",
    description:
      "End-to-end ML pipeline that scrapes 30+ years of NBA stats and predicts MVP winners using a Random Forest model with custom-engineered features, reaching 75.5% mean average precision.",
    stack: ["Python", "Selenium", "Pandas", "Scikit-Learn", "Matplotlib"],
    link: "https://github.com/lukehspencer/nba-mvp-predictor",
    linkLabel: "View on GitHub",
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
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                {project.linkLabel === "View on GitHub" ? (
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                )}
                {project.linkLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
