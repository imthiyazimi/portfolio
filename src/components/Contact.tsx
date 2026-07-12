"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { CONTACT } from "@/lib/constants";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
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
              {/* Contact cards */}
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
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
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

              {/* Social links */}
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
            <form onSubmit={handleSubmit} className="card">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
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
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
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
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center"
              >
                {submitted ? (
                  "Message Sent!"
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
