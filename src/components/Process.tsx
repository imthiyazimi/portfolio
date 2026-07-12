"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">How I Work</p>
          <h2 className="heading-md mb-16 text-center text-charcoal">
            From hospital problem to shipped solution
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gray-200" />

          <div className="grid gap-8 md:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.15}>
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-deep text-2xl font-bold text-white shadow-lg">
                    {step.step}
                  </div>

                  {/* Arrow connector (desktop) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="absolute left-[calc(50%+32px)] top-8 hidden h-px w-[calc(100%-64px)] bg-gray-300 md:block" />
                  )}

                  <h3 className="heading-sm mb-1 text-charcoal">{step.title}</h3>
                  <p className="mb-3 text-sm font-medium text-coral">
                    {step.subtitle}
                  </p>
                  <p className="body-sm text-charcoal/60">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
