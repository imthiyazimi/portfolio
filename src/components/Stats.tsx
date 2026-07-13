"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";
import AnimatedSection from "./AnimatedSection";
import { STATS } from "@/lib/constants";
import FloatingText from "./three/FloatingText";

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.08, rotateY: 10, z: 20 }}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      <div className="font-mono text-4xl font-bold text-teal-deep md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[15%] bottom-[25%] h-3 w-3 rounded-full bg-coral/20"
        />
      </div>

      <div className="container-max">
        <AnimatedSection>
          <FloatingText intensity={0.3}>
            <p className="label mb-4 text-center text-coral">By the Numbers</p>
          </FloatingText>
          <h2 className="heading-md mb-16 text-center text-white">
            Impact that matters
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
