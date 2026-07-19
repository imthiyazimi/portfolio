"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";
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
          <p className="label mb-4 text-center text-coral">Education & Certifications</p>
          <h2 className="heading-md mb-12 text-center text-charcoal">
            Academic foundation & continuous learning
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <AnimatedSection delay={0.1}>
            <TiltCard tiltAmount={6} glare={true}>
              <motion.div
                className="card text-center h-full"
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
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.2}>
            <TiltCard tiltAmount={6} glare={true}>
              <motion.div
                className="card h-full"
                whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5, z: 20 }}
                transition={{ duration: 0.3 }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-coral/10"
                    whileHover={{ rotateY: 180, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="text-3xl">📜</span>
                  </motion.div>
                  <h3 className="heading-sm text-charcoal">Certifications</h3>
                </div>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, i) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center justify-between rounded-lg bg-offwhite p-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-charcoal">{cert.name}</p>
                        <p className="text-xs text-slate-600">{cert.issuer}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          cert.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
