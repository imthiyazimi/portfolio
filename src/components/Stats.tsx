"use client";

import { useCountUp } from "@/lib/useCountUp";
import AnimatedSection from "./AnimatedSection";
import { STATS } from "@/lib/constants";

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
    <div ref={ref} className="text-center">
      <div className="font-mono text-4xl font-bold text-teal-deep md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">By the Numbers</p>
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
