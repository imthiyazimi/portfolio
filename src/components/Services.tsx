"use client";

import { motion } from "framer-motion";
import { Shield, Layers, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<Record<string, unknown>>> = {
  "Quality Analysis": Shield,
  "Business Analysis": Layers,
  "Healthcare Domain": Heart,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-offwhite">
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
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="card group h-full"
                >
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-deep/10 transition-colors group-hover:bg-teal-deep">
                    <Icon
                      size={28}
                      className="text-teal-deep transition-colors group-hover:text-white"
                    />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="heading-sm mb-2 text-charcoal">{service.title}</h3>
                  <p className="mb-4 text-sm font-medium italic text-coral">
                    {service.tagline}
                  </p>

                  {/* Skills */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-offwhite px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="body-sm text-charcoal/60">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
