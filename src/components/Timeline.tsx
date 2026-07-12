"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { TIMELINE } from "@/lib/constants";

export default function Timeline() {
  return (
    <section id="experience" className="section-padding bg-white">
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
              <div
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-coral bg-white md:left-1/2" />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  } md:w-1/2`}
                >
                  <div className="card">
                    {/* Period badge */}
                    <span className="mb-4 inline-block rounded-full bg-teal-deep/10 px-4 py-1 text-xs font-semibold text-teal-deep">
                      {item.period}
                    </span>

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
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
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
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md bg-offwhite px-2 py-1 font-mono text-xs text-teal-deep"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
