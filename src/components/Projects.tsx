"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Featured Work</p>
          <h2 className="heading-md mb-16 text-center text-charcoal">
            Systems I&apos;ve helped build and ship
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="card group flex h-full flex-col"
              >
                {/* Header with gradient */}
                <div className="-mx-8 -mt-8 mb-6 rounded-t-2xl bg-gradient-to-r from-teal-deep to-teal-700 px-8 py-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-teal-200">{project.subtitle}</p>
                    </div>
                    <ExternalLink
                      size={20}
                      className="mt-1 text-teal-200 transition-colors group-hover:text-white"
                    />
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
                    <span
                      key={tech}
                      className="rounded-md bg-offwhite px-2 py-1 font-mono text-xs text-teal-deep"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
