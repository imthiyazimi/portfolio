"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import FloatingText from "./three/FloatingText";
import TiltCard from "./three/TiltCard";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-offwhite">
      {/* 3D Floating background elements */}
      <motion.div style={{ y: backgroundY }} className="pointer-events-none absolute inset-0">
        {/* Floating 3D geometric shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 360],
            rotateY: [0, 180],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[20%]"
          style={{ perspective: "1000px" }}
        >
          <div className="h-16 w-16 border-2 border-teal-deep/20 bg-teal-deep/5" 
               style={{ transform: "rotateX(45deg) rotateZ(45deg)" }} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotateY: [0, -360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[10%] top-[35%]"
        >
          <div className="h-12 w-12 rounded-full border-2 border-coral/20 bg-coral/5" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotateX: [0, -180],
            rotateZ: [0, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] right-[25%]"
        >
          <div className="h-14 w-14 border-2 border-gold/20 bg-gold/5"
               style={{ transform: "rotateX(30deg) rotateY(60deg)" }} />
        </motion.div>

        {/* Floating rings */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-[20%] top-[15%]"
        >
          <div className="h-24 w-24 rounded-full border border-teal-deep/10" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] bottom-[30%]"
        >
          <div className="h-16 w-16 rounded-full border border-coral/10" />
        </motion.div>

        {/* Gradient orbs */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-teal-deep/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-coral/10 to-transparent blur-3xl" />
        <div className="absolute right-[30%] bottom-[20%] h-48 w-48 rounded-full bg-gradient-to-tl from-gold/10 to-transparent blur-2xl" />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="container-max relative z-10 px-6 pt-24 pb-20 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="label mb-4 text-coral"
              style={{ perspective: "1000px" }}
            >
              Healthcare IT Specialist
            </motion.p>

            <FloatingText intensity={0.5}>
              <motion.h1
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="heading-lg mb-6 text-charcoal"
                style={{ perspective: "1000px" }}
              >
                Mohammed
                <br />
                <span className="bg-gradient-to-r from-teal-deep to-coral bg-clip-text text-transparent">
                  Imthiyaz A
                </span>
              </motion.h1>
            </FloatingText>

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
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: "1000px" }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline"
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: "1000px" }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex gap-4"
            >
              {[
                { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
                { icon: Github, href: CONTACT.github, label: "GitHub" },
                { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                  whileHover={{ scale: 1.2, rotateY: 180 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo with 3D effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center"
            style={{ perspective: "1200px" }}
          >
            <TiltCard tiltAmount={10} className="relative">
              <div className="relative">
                {/* Profile photo with 3D depth */}
                <motion.div
                  className="relative z-10 overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src="/images/profile.png"
                    alt="Mohammed Imthiyaz A"
                    className="h-[300px] w-auto object-cover sm:h-[380px] lg:h-[480px]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-teal-deep/20 to-transparent" />
                </motion.div>

                {/* 3D decorative border */}
                <motion.div
                  className="absolute -inset-3 rounded-2xl border-2 border-teal-deep/20"
                  animate={{ rotateX: [0, 5, 0], rotateY: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                />

                {/* Floating 3D badges */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateX: [0, 10, 0],
                    rotateY: [0, 10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 top-8 z-20 rounded-xl bg-white px-4 py-2 shadow-lg"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="font-mono text-sm font-semibold text-teal-deep">
                    0 Defects
                  </span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotateX: [0, -10, 0],
                    rotateY: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-6 bottom-12 z-20 rounded-xl bg-white px-4 py-2 shadow-lg"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="font-mono text-sm font-semibold text-coral">
                    150+ Hospitals
                  </span>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </motion.div>

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
          <motion.div
            animate={{ rotateX: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
