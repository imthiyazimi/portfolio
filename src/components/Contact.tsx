"use client";

import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { CONTACT } from "@/lib/constants";

const EMAILJS_SERVICE_ID = "service_bb3lnfh";
const EMAILJS_TEMPLATE_ID = "template_d1jzc39";
const EMAILJS_PUBLIC_KEY = "JyMjSs_2QGalcH01e";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <AnimatedSection>
          <p className="label mb-4 text-center text-coral">Get in Touch</p>
          <h2 className="heading-md mb-4 text-center text-charcoal">
            Let&apos;s connect
          </h2>
          <p className="body-md mx-auto mb-16 max-w-xl text-center text-slate-600">
            I&apos;m always open to discussing healthcare IT, quality analysis,
            or potential collaborations.
          </p>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="card flex items-center gap-4 transition-all hover:border-coral"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-deep/10">
                    <Mail size={20} className="text-teal-deep" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                      Email
                    </p>
                    <p className="text-sm font-medium text-charcoal">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/[\s-]/g, "")}`}
                  className="card flex items-center gap-4 transition-all hover:border-coral"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral/10">
                    <Phone size={20} className="text-coral" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-charcoal">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>

                <div className="card flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                      Location
                    </p>
                    <p className="text-sm font-medium text-charcoal">
                      {CONTACT.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <form ref={formRef} onSubmit={handleSubmit} className="card">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              {status === "success" && (
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle size={16} /> Message sent! Check your email.
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle size={16} /> Failed to send. Try again later.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
