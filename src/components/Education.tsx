"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { EDUCATION } from "@/lib/constants";
import TiltCard from "./three/TiltCard";

export default function Education() {
  return (
    <section className="section-padding bg-offwhite relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute right-[15%] top-[25%] h-24 w-24 rounded-full border border-teal-deep/5"
        />
      </div>

      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Education</p>
          <h2 className="heading-md mb-12 text-center text-charcoal">
            Academic foundation
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mx-auto max-w-2xl">
            <TiltCard tiltAmount={6} glare={true}>
              <motion.div
                className="card text-center"
                whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5, z: 20 }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-deep/10"
                  whileHover={{ rotateY: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="text-3xl">🎓</span>
                </motion.div>
                <h3 className="heading-sm mb-2 text-charcoal">
                  {EDUCATION.degree}
                </h3>
                <p className="mb-2 text-base font-medium text-coral">
                  {EDUCATION.specialization}
                </p>
                <p className="body-sm text-slate-600">
                  {EDUCATION.college}
                </p>
              </motion.div>
            </TiltCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
