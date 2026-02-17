"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "SQL",
  "R",
  "TypeScript",
  "TensorFlow",
  "Scikit-Learn",
  "Pandas",
  "Next.js",
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
            <Image
              src="/IMG_6885.JPG"
              alt="Luke Spencer"
              width={320}
              height={480}
              className="w-64 md:w-80 rounded-2xl border border-border"
            />
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
              I&rsquo;m Luke Spencer, a student at UC Berkeley studying Applied
              Mathematics and Data Science. I&rsquo;m passionate about transforming
              complex data into actionable insights through machine learning,
              statistical modeling, and scalable data pipelines.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Currently, I&rsquo;m a Data Science Researcher at UC Berkeley
              processing millions of rows of migration data to analyze
              climate-migration patterns. I&rsquo;ve built predictive models
              achieving 98% accuracy on image classification, developed
              full-stack AI platforms analyzing 13K+ tools, and created an NBA
              MVP predictor with 75.5% precision. My work spans Python, R, SQL,
              TensorFlow, and modern web frameworks like Next.js.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              When I&rsquo;m not analyzing datasets or building models,
              you&rsquo;ll find me watching soccer (Manchester United) and
              football (Las Vegas Raiders), hiking, or building LEGOs. I&rsquo;m
              actively seeking data analyst, data scientist, and product roles
              where I can apply my technical skills and research experience to
              drive real-world impact.
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
