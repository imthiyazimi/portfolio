"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-charcoal py-12 relative overflow-hidden">
      {/* 3D floating elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[30%] h-16 w-16 rounded-full border border-white/5"
        />
      </div>

      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <motion.p
              className="font-serif text-lg text-white"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              Mohammed Imthiyaz A
            </motion.p>
            <p className="mt-1 text-sm text-gray-400">
              Quality Analyst & Healthcare IT Specialist
            </p>
          </div>

          {/* Center */}
          <motion.p
            className="flex items-center gap-1 text-sm text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-coral" />
            </motion.span>{" "}
            in Hyderabad
          </motion.p>

          {/* Right: Back to top */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            whileHover={{ scale: 1.05, y: -3, rotateX: -10 }}
            style={{ perspective: "1000px" }}
          >
            Back to top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp size={16} />
            </motion.span>
          </motion.a>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Mohammed Imthiyaz A. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
