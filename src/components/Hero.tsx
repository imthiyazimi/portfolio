"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { PROFILE_PHOTO } from "@/lib/profilePhoto";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-offwhite">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating crosses (medical symbol - abstract) */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[20%] text-6xl font-light text-teal-deep/10"
        >
          +
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-[10%] top-[35%] text-4xl font-light text-coral/10"
        >
          +
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[25%] right-[25%] text-5xl font-light text-gold/10"
        >
          +
        </motion.div>

        {/* Subtle circles */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-deep/5" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-coral/5" />
      </div>

      <div className="container-max relative z-10 px-6 pt-24 pb-20 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="label mb-4 text-coral"
            >
              Healthcare IT Specialist
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="heading-lg mb-6 text-charcoal"
            >
              Mohammed
              <br />
              Imthiyaz A
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="heading-sm mb-6 font-sans font-light text-slate-600"
            >
              Quality Analyst & Business Analysis Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="body-lg mb-8 max-w-lg text-balance text-charcoal/70"
            >
              I make sure hospital software works flawlessly
              <span className="font-semibold text-coral"> — because lives depend on it.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex gap-4"
            >
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:flex lg:justify-center lg:items-center"
          >
            <div className="relative">
              {/* Profile photo */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={PROFILE_PHOTO}
                  alt="Mohammed Imthiyaz A"
                  className="h-[480px] w-auto object-cover"
                />
                {/* Subtle teal overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-teal-deep/20 to-transparent" />
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-teal-deep/20" />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-8 z-20 rounded-xl bg-white px-4 py-2 shadow-lg"
              >
                <span className="font-mono text-sm font-semibold text-teal-deep">
                  0 Defects
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-6 bottom-12 z-20 rounded-xl bg-white px-4 py-2 shadow-lg"
              >
                <span className="font-mono text-sm font-semibold text-coral">
                  150+ Hospitals
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-slate-600">
            Scroll
          </span>
          <ArrowDown size={16} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
