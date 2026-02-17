"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Data Science Researcher",
    company: "UC Berkeley, Rausser College of Natural Resources",
    period: "Sep. 2025 — Present",
    description:
      "Building data pipelines in Python and R to analyze 5M+ rows of Colombian migration data, uncovering patterns between climate events and population movement.",
  },
  {
    role: "Coding Instructor",
    company: "iCode School",
    period: "Apr. 2025 — Aug. 2025",
    description:
      "Led hands-on programming classes for young learners and grew program enrollment by 15% through STEM workshops and community outreach.",
  },
  {
    role: "Data Science Researcher",
    company: "UC Santa Barbara, Bren School of Environmental Science & Management",
    period: "Jun. 2024 — Jul. 2024",
    description:
      "Modeled long-term coral reef ecosystem dynamics in R and co-authored a research paper on how parrotfish grazing influences algae and coral populations.",
  },
];

const education = [
  {
    degree: "B.A. in Applied Mathematics & Data Science",
    school: "University of California, Berkeley",
    period: "",
    details: "GPA: 3.87",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          Resume
        </motion.h2>

        {/* Experience */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-8">
            Experience
          </h3>
          <div className="space-y-10 border-l-2 border-border pl-8">
            {experience.map((item) => (
              <div key={item.role} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-accent" />
                <p className="text-xs text-muted">{item.period}</p>
                <h4 className="mt-1 text-lg font-semibold">{item.role}</h4>
                <p className="text-sm text-accent">{item.company}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-8">
            Education
          </h3>
          <div className="space-y-8 border-l-2 border-border pl-8">
            {education.map((item) => (
              <div key={item.degree} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full bg-accent" />
                <p className="text-xs text-muted">{item.period}</p>
                <h4 className="mt-1 text-lg font-semibold">{item.degree}</h4>
                <p className="text-sm text-accent">{item.school}</p>
                {"details" in item && item.details && (
                  <p className="mt-1 text-sm text-muted">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/luke_spencer_resume.docx.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white shadow-md hover:shadow-lg transition-shadow"
          >
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
