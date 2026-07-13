"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { TIMELINE } from "@/lib/constants";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";

export default function Timeline() {
  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute right-[5%] top-[20%] h-40 w-40 rounded-full border border-teal-deep/5"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] bottom-[30%] h-4 w-4 rounded-full bg-coral/20"
        />
      </div>

      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Career Journey</p>
          <h2 className="heading-md mb-16 text-center text-charcoal">
            Where I&apos;ve been
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gray-200 md:block" />
          <div className="absolute left-8 top-0 h-full w-px bg-gray-200 md:hidden" />

          {TIMELINE.map((item, index) => (
            <AnimatedSection
              key={item.company}
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Parallax speed={0.05 * (index % 2 === 0 ? 1 : -1)}>
                <div
                  className={`relative mb-16 md:mb-24 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex flex-col md:flex`}
                >
                  {/* Timeline dot with 3D effect */}
                  <motion.div
                    className="absolute left-8 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-coral bg-white md:left-1/2"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotateX: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  />

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    } md:w-1/2`}
                  >
                    <TiltCard tiltAmount={6} glare={true}>
                      <div className="card">
                        {/* Period badge */}
                        <motion.span
                          className="mb-4 inline-block rounded-full bg-teal-deep/10 px-4 py-1 text-xs font-semibold text-teal-deep"
                          whileHover={{ scale: 1.05, rotateX: 10 }}
                        >
                          {item.period}
                        </motion.span>

                        <h3 className="heading-sm mb-1 text-charcoal">{item.role}</h3>
                        <p className="mb-1 text-sm font-medium text-coral">
                          {item.company}
                        </p>
                        <p className="mb-4 text-xs text-slate-600">
                          {item.location} &middot; {item.duration}
                        </p>

                        {/* Highlights */}
                        <ul
                          className={`mb-6 space-y-2 ${
                            index % 2 === 0 ? "md:text-right" : ""
                          }`}
                        >
                          {item.highlights.map((highlight, i) => (
                            <motion.li
                              key={highlight}
                              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                              className="body-sm flex items-start gap-2 text-charcoal/60"
                            >
                              {index % 2 === 0 ? (
                                <>
                                  <span className="mt-1.5 hidden h-1.5 w-1.5 shrink-0 rounded-full bg-coral md:block" />
                                  <span>{highlight}</span>
                                </>
                              ) : (
                                <>
                                  <span>{highlight}</span>
                                  <span className="mt-1.5 hidden h-1.5 w-1.5 shrink-0 rounded-full bg-coral md:block" />
                                </>
                              )}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tools with 3D hover */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          {item.tools.map((tool, i) => (
                            <motion.span
                              key={tool}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.05 }}
                              whileHover={{ scale: 1.1, rotateX: 10, z: 10 }}
                              className="rounded-md bg-offwhite px-2 py-1 font-mono text-xs text-teal-deep cursor-default"
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Parallax>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
