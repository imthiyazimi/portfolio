"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { PROCESS_STEPS } from "@/lib/constants";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";

export default function Process() {
  return (
    <section className="section-padding bg-offwhite relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute right-[12%] top-[18%] h-20 w-20 rounded-full border border-coral/10"
        />
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] bottom-[22%] h-3 w-3 rounded-full bg-gold/20"
        />
      </div>

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
                <Parallax speed={0.08 * (index + 1)}>
                  <TiltCard tiltAmount={10} glare={true}>
                    <div className="relative text-center">
                      {/* Step number with 3D effect */}
                      <motion.div
                        className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-deep text-2xl font-bold text-white shadow-lg"
                        whileHover={{ scale: 1.15, rotateY: 360, z: 30 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {step.step}
                      </motion.div>

                      {/* Arrow connector (desktop) */}
                      {index < PROCESS_STEPS.length - 1 && (
                        <motion.div
                          className="absolute left-[calc(50%+32px)] top-8 hidden h-px w-[calc(100%-64px)] bg-gray-300 md:block"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                          style={{ transformOrigin: "left" }}
                        />
                      )}

                      <h3 className="heading-sm mb-1 text-charcoal">{step.title}</h3>
                      <p className="mb-3 text-sm font-medium text-coral">
                        {step.subtitle}
                      </p>
                      <p className="body-sm text-charcoal/60">{step.description}</p>
                    </div>
                  </TiltCard>
                </Parallax>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
