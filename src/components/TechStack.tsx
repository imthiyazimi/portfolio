"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { TECH_STACK } from "@/lib/constants";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";

export default function TechStack() {
  const categories = Object.entries(TECH_STACK);

  return (
    <section className="section-padding bg-offwhite relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute right-[8%] top-[15%] h-28 w-28 rounded-full border border-gold/10"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] bottom-[20%] h-5 w-5 rounded bg-teal-deep/10"
          style={{ transform: "rotate(45deg)" }}
        />
      </div>

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
              <Parallax speed={0.05 * (catIndex + 1)}>
                <TiltCard tiltAmount={8} glare={true}>
                  <div className="card h-full">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-coral">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, i) => (
                        <TiltCard key={tool} tiltAmount={15} glare={true}>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.03 }}
                            whileHover={{ scale: 1.1 }}
                            className="rounded-lg bg-gradient-to-r from-teal-deep/10 to-gold/10 px-3 py-2 text-sm font-medium text-charcoal/80 transition-colors cursor-default block border border-teal-deep/20"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {tool}
                          </motion.span>
                        </TiltCard>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Parallax>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
