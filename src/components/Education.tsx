"use client";

import AnimatedSection from "./AnimatedSection";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Education</p>
          <h2 className="heading-md mb-12 text-center text-charcoal">
            Academic foundation
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mx-auto max-w-2xl">
            <div className="card text-center">
              <h3 className="heading-sm mb-2 text-charcoal">
                {EDUCATION.degree}
              </h3>
              <p className="mb-2 text-base font-medium text-coral">
                {EDUCATION.specialization}
              </p>
              <p className="body-sm text-slate-600">
                {EDUCATION.college}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
