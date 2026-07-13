"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface FloatingTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function FloatingText({ children, className = "", intensity = 1 }: FloatingTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const translateX = useTransform(mouseX, [-0.5, 0.5], [-5 * intensity, 5 * intensity]);
  const translateY = useTransform(mouseY, [-0.5, 0.5], [-5 * intensity, 5 * intensity]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: translateX, y: translateY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
