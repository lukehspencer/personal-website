"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Luke Spencer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted max-w-xl mx-auto">
          Data Scientist &amp; AI/ML Engineer
        </p>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white shadow-md hover:shadow-lg transition-shadow"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-muted/40 flex justify-center pt-2"
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
