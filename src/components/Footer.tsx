"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-charcoal py-12">
      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-white">
              Mohammed Imthiyaz A
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Quality Analyst & Healthcare IT Specialist
            </p>
          </div>

          {/* Center */}
          <p className="flex items-center gap-1 text-sm text-gray-400">
            Built with <Heart size={14} className="text-coral" /> in Hyderabad
          </p>

          {/* Right: Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
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
