"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

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

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Abstract hospital system illustration */}
              <svg
                viewBox="0 0 500 500"
                className="h-auto w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Central node */}
                <circle cx="250" cy="250" r="60" fill="#0D7377" opacity="0.15" />
                <circle cx="250" cy="250" r="40" fill="#0D7377" opacity="0.25" />
                <circle cx="250" cy="250" r="20" fill="#0D7377" />

                {/* Cross symbol in center */}
                <rect x="245" y="235" width="10" height="30" rx="2" fill="white" />
                <rect x="235" y="245" width="30" height="10" rx="2" fill="white" />

                {/* Connection lines */}
                <motion.line
                  x1="250" y1="190" x2="250" y2="100"
                  stroke="#0D7377" strokeWidth="2" opacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.line
                  x1="310" y1="250" x2="400" y2="250"
                  stroke="#0D7377" strokeWidth="2" opacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.line
                  x1="250" y1="310" x2="250" y2="400"
                  stroke="#E8505B" strokeWidth="2" opacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
                <motion.line
                  x1="190" y1="250" x2="100" y2="250"
                  stroke="#E8505B" strokeWidth="2" opacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />

                {/* Diagonal connections */}
                <motion.line
                  x1="292" y1="208" x2="370" y2="130"
                  stroke="#D4A843" strokeWidth="2" opacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                />
                <motion.line
                  x1="208" y1="208" x2="130" y2="130"
                  stroke="#D4A843" strokeWidth="2" opacity="0.3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                />

                {/* Outer nodes */}
                <motion.circle
                  cx="250" cy="80" r="30" fill="white" stroke="#0D7377" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
                <motion.text
                  x="250" y="85" textAnchor="middle" fill="#0D7377" fontSize="14" fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  EMR
                </motion.text>

                <motion.circle
                  cx="420" cy="250" r="30" fill="white" stroke="#0D7377" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                />
                <motion.text
                  x="420" y="255" textAnchor="middle" fill="#0D7377" fontSize="14" fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  LIS
                </motion.text>

                <motion.circle
                  cx="250" cy="420" r="30" fill="white" stroke="#E8505B" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                />
                <motion.text
                  x="250" y="425" textAnchor="middle" fill="#E8505B" fontSize="12" fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  PACS
                </motion.text>

                <motion.circle
                  cx="80" cy="250" r="30" fill="white" stroke="#E8505B" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                />
                <motion.text
                  x="80" y="255" textAnchor="middle" fill="#E8505B" fontSize="12" fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                >
                  Tally
                </motion.text>

                {/* Top-right node */}
                <motion.circle
                  cx="380" cy="120" r="25" fill="white" stroke="#D4A843" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                />
                <motion.text
                  x="380" y="125" textAnchor="middle" fill="#D4A843" fontSize="11" fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                >
                  AI
                </motion.text>

                {/* Top-left node */}
                <motion.circle
                  cx="120" cy="120" r="25" fill="white" stroke="#D4A843" strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                />
                <motion.text
                  x="120" y="125" textAnchor="middle" fill="#D4A843" fontSize="10" fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.7 }}
                >
                  SMS
                </motion.text>
              </svg>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 rounded-xl bg-white px-4 py-2 shadow-lg"
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
                className="absolute -left-4 bottom-1/4 rounded-xl bg-white px-4 py-2 shadow-lg"
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
