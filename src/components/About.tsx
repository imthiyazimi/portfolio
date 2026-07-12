"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <AnimatedSection>
              <p className="label mb-4 text-coral">Who I Am</p>
              <h2 className="heading-md mb-8 text-charcoal">
                10 years. 150+ hospitals.
                <br />
                <span className="text-coral">Zero critical production defects.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="body-lg mb-6 text-charcoal/70">
                I&apos;m not a developer who writes code. I&apos;m the person who makes
                sure the code that runs in hospitals doesn&apos;t fail.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="body-md mb-6 text-charcoal/70">
                When a doctor pulls up a patient&apos;s records at 3 AM, when a billing
                desk processes an insurance claim, when a radiologist reads an
                AI-generated report — I&apos;ve tested every path those systems take to
                make sure nothing breaks.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="body-md mb-6 text-charcoal/70">
                From IdeaMed serving 150+ hospitals across 20+ countries to WHIS
                running 7 Kamineni Hospital branches with AI-powered radiology —
                I&apos;ve been the last line of defense between software bugs and
                patient safety.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="body-md mb-6 text-charcoal/70">
                I also do business analysis, which means I sit with hospital
                administrators, understand their pain points, and translate
                &ldquo;we need better patient flow&rdquo; into technical requirements
                developers can actually build.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="body-sm text-slate-600">
                Based in Hyderabad. Works with hospitals across India and globally.
                When I&apos;m not testing healthcare systems, I&apos;m learning Python
                (baby steps, but committed).
              </p>
            </AnimatedSection>
          </div>

          {/* Right: Visual */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="relative">
              {/* Profile card */}
              <div className="rounded-2xl bg-offwhite p-8 lg:p-10">
                {/* Abstract illustration: Hospital + Person */}
                <svg
                  viewBox="0 0 400 400"
                  className="mx-auto h-auto w-full max-w-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Hospital building */}
                  <rect x="120" y="120" width="160" height="200" rx="8" fill="#0D7377" opacity="0.1" />
                  <rect x="130" y="130" width="140" height="180" rx="4" fill="white" stroke="#0D7377" strokeWidth="2" />

                  {/* Windows */}
                  <rect x="145" y="150" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="187" y="150" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="230" y="150" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="145" y="185" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="187" y="185" width="25" height="20" rx="2" fill="#E8505B" opacity="0.3" />
                  <rect x="230" y="185" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="145" y="220" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="187" y="220" width="25" height="20" rx="2" fill="#0D7377" opacity="0.3" />
                  <rect x="230" y="220" width="25" height="20" rx="2" fill="#D4A843" opacity="0.3" />

                  {/* Door */}
                  <rect x="180" y="270" width="40" height="40" rx="4" fill="#0D7377" opacity="0.2" />
                  <circle cx="212" cy="290" r="3" fill="#0D7377" />

                  {/* Cross on building */}
                  <rect x="193" y="135" width="14" height="5" rx="1" fill="#E8505B" />
                  <rect x="198" y="130" width="4" height="15" rx="1" fill="#E8505B" />

                  {/* Person (QA) */}
                  <circle cx="80" cy="280" r="18" fill="#E8505B" opacity="0.2" />
                  <circle cx="80" cy="275" r="10" fill="#E8505B" opacity="0.4" />
                  <path d="M65 300 Q80 290 95 300 L95 320 L65 320 Z" fill="#E8505B" opacity="0.3" />

                  {/* Magnifying glass (QA symbol) */}
                  <circle cx="100" cy="265" r="12" stroke="#E8505B" strokeWidth="2" fill="none" />
                  <line x1="108" y1="273" x2="120" y2="285" stroke="#E8505B" strokeWidth="3" strokeLinecap="round" />

                  {/* Checkmark (quality) */}
                  <motion.path
                    d="M320 160 L330 170 L350 150"
                    stroke="#0D7377"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <circle cx="335" cy="160" r="25" stroke="#0D7377" strokeWidth="2" fill="none" opacity="0.3" />

                  {/* Connection lines */}
                  <line x1="95" y1="280" x2="130" y2="220" stroke="#E8505B" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                  <line x1="120" y1="265" x2="180" y2="200" stroke="#0D7377" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
                </svg>

                {/* Key traits */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: "Domain", value: "Healthcare IT" },
                    { label: "Focus", value: "Zero-Defect QA" },
                    { label: "Approach", value: "Bridge Builder" },
                    { label: "Style", value: "Calm & Thorough" },
                  ].map((trait) => (
                    <div key={trait.label} className="rounded-lg bg-white p-3 text-center shadow-sm">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                        {trait.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-teal-deep">
                        {trait.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
