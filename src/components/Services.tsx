"use client";

import { motion } from "framer-motion";
import { Shield, Layers, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SERVICES } from "@/lib/constants";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";

const iconMap: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "Quality Analysis": Shield,
  "Business Analysis": Layers,
  "Healthcare Domain": Heart,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-offwhite relative overflow-hidden">
      {/* 3D floating background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[20%] h-20 w-20 rounded-full border border-teal-deep/10"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] bottom-[30%] h-16 w-16 rounded-full border border-coral/10"
        />
      </div>

      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">What I Do</p>
          <h2 className="heading-md mb-4 text-center text-charcoal">
            Three ways I help healthcare systems
          </h2>
          <p className="body-md mx-auto mb-16 max-w-2xl text-center text-slate-600">
            Quality, analysis, and deep domain knowledge — the combination that
            keeps hospital software running without fail.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.title] || Shield;
            return (
              <AnimatedSection key={service.title} delay={index * 0.15}>
                <Parallax speed={0.1 * (index + 1)}>
                  <TiltCard tiltAmount={12} glare={true}>
                    <motion.div
                      whileHover={{ y: -12, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="card group h-full"
                      style={{ perspective: "1000px" }}
                    >
                      {/* Icon with 3D rotation */}
                      <motion.div
                        className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-deep/10 transition-colors group-hover:bg-teal-deep"
                        whileHover={{ rotateY: 180, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Icon
                          size={28}
                          className="text-teal-deep transition-colors group-hover:text-white"
                        />
                      </motion.div>

                      {/* Title & Tagline */}
                      <h3 className="heading-sm mb-2 text-charcoal">{service.title}</h3>
                      <p className="mb-4 text-sm font-medium italic text-coral">
                        {service.tagline}
                      </p>

                      {/* Skills with 3D hover */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {service.skills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            whileHover={{ scale: 1.1, rotateX: 10, z: 10 }}
                            className="rounded-full bg-offwhite px-3 py-1 text-xs font-medium text-slate-600 cursor-default"
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="body-sm text-charcoal/60">{service.description}</p>
                    </motion.div>
                  </TiltCard>
                </Parallax>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
