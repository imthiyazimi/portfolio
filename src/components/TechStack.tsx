"use client";

import AnimatedSection from "./AnimatedSection";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  const categories = Object.entries(TECH_STACK);

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Tools & Skills</p>
          <h2 className="heading-md mb-16 text-center text-charcoal">
            My toolkit
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(([category, tools], catIndex) => (
            <AnimatedSection key={category} delay={catIndex * 0.1}>
              <div className="card h-full">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg bg-offwhite px-3 py-2 text-sm font-medium text-charcoal/70 transition-all hover:bg-teal-deep hover:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
