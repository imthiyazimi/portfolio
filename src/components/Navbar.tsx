"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Box } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileOpen, handleEscape]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <a href="#" className="font-serif text-xl font-bold text-charcoal">
          Imthiyaz<span className="text-coral">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-deep"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Get in Touch
          </a>
          <Link
            href="/3d-demo"
            className="flex items-center gap-1.5 text-sm font-medium text-coral transition-colors hover:text-teal-deep"
          >
            <Box size={16} />
            3D Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-charcoal md:hidden"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 bg-white md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-deep"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn-primary mt-2 justify-center text-sm"
              >
                Get in Touch
              </a>
              <Link
                href="/3d-demo"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-coral transition-colors hover:text-teal-deep mt-2"
              >
                <Box size={16} />
                3D Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
