"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "SQL",
  "TensorFlow",
  "React",
  "Data Visualization",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          About Me
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Profile photo placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-card border border-border flex items-center justify-center text-muted text-sm">
              Your Photo Here
            </div>
          </motion.div>

          {/* Bio + skills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed">
              I&rsquo;m a Data Scientist and AI/ML Engineer with a passion for
              turning complex data into actionable insights. With experience
              spanning data analysis, machine learning, and full-stack
              development, I build end-to-end solutions that bridge the gap
              between raw data and real-world impact. I love working at the
              intersection of statistics, engineering, and design.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-light px-4 py-1.5 text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
