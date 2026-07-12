"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView || end === 0) {
      if (end === 0) setCount(0);
      return;
    }

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [inView, end, duration]);

  return { count, ref };
}
