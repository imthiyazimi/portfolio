"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";
import FloatingText from "./three/FloatingText";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* 3D floating background elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 top-20 h-40 w-40 rounded-full border border-teal-deep/10"
        />
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -left-10 bottom-20 h-32 w-32 rounded-full border border-coral/10"
        />
      </div>

      <div className="container-max">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <AnimatedSection>
              <FloatingText intensity={0.3}>
                <p className="label mb-4 text-coral">Who I Am</p>
              </FloatingText>
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

          {/* Right: Visual with 3D effects */}
          <AnimatedSection direction="right" delay={0.3}>
            <Parallax speed={0.2}>
              <TiltCard tiltAmount={8} className="relative">
                <div className="rounded-2xl bg-offwhite p-8 lg:p-10">
                  {/* Profile photo with 3D depth */}
                  <motion.div
                    className="overflow-hidden rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02, rotateY: 3 }}
                    style={{ perspective: "1000px" }}
                  >
                    <img
                      src="/images/profile.png"
                      alt="Mohammed Imthiyaz A"
                      className="aspect-[3/4] w-full object-cover object-center"
                    />
                  </motion.div>

                  {/* Key traits with 3D cards */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { label: "Domain", value: "Healthcare IT" },
                      { label: "Focus", value: "Zero-Defect QA" },
                      { label: "Approach", value: "Bridge Builder" },
                      { label: "Style", value: "Calm & Thorough" },
                    ].map((trait, i) => (
                      <motion.div
                        key={trait.label}
                        initial={{ opacity: 0, y: 20, rotateX: -20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05, rotateY: 5, z: 20 }}
                        className="rounded-lg bg-white p-3 text-center shadow-sm"
                        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                      >
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                          {trait.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-teal-deep">
                          {trait.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Parallax>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
