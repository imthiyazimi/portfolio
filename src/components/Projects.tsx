"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { PROJECTS } from "@/lib/constants";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <AnimatedSection key={project.title} delay={index * 0.2}>
      <Parallax speed={0.1 * (index + 1)}>
        <div
          className="relative h-[500px] cursor-pointer"
          style={{ perspective: "1200px" }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of card */}
            <div
              className="absolute inset-0 rounded-2xl bg-white shadow-xl"
              style={{ backfaceVisibility: "hidden" }}
            >
              <TiltCard tiltAmount={8} glare={true} className="h-full">
                <div className="card group flex h-full flex-col">
                  {/* Header with gradient */}
                  <div className="-mx-8 -mt-8 mb-6 rounded-t-2xl bg-gradient-to-r from-teal-deep to-teal-700 px-8 py-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-2xl text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-teal-200">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-3 font-mono text-xs text-teal-100">
                      {project.stats}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="body-sm mb-6 flex-1 text-charcoal/70">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-charcoal/60"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, rotateX: 10 }}
                        className="rounded-md bg-offwhite px-2 py-1 font-mono text-xs text-teal-deep"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Flip hint */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-slate-400">Click to flip →</span>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Back of card */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-deep to-teal-700 p-8 shadow-xl"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="flex h-full flex-col text-white">
                <h3 className="font-serif text-2xl mb-4">{project.title}</h3>
                <p className="text-teal-100 mb-6">{project.subtitle}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2 text-teal-200">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2 text-teal-200">Impact</p>
                  <p className="font-mono text-sm text-teal-100">{project.stats}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-teal-200">Click to flip back</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Parallax>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-[5%] top-[15%] h-24 w-24 rounded-full border border-gold/10"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] bottom-[25%] h-8 w-8 rounded bg-coral/10"
          style={{ transform: "rotate(45deg)" }}
        />
      </div>

      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Featured Work</p>
          <h2 className="heading-md mb-16 text-center text-charcoal">
            Systems I&apos;ve helped build and ship
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
