"use client";

import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import { CONTACT } from "@/lib/constants";
import TiltCard from "./three/TiltCard";
import Parallax from "./three/Parallax";
import FloatingText from "./three/FloatingText";

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
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* 3D floating background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[10%] h-32 w-32 rounded-full border border-teal-deep/10"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] bottom-[20%] h-20 w-20 rounded-full border border-coral/10"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[25%] bottom-[15%] h-6 w-6 rounded bg-gold/20"
        />
      </div>

      <div className="container-max">
        <AnimatedSection>
          <FloatingText intensity={0.4}>
            <p className="label mb-4 text-center text-coral">Get in Touch</p>
          </FloatingText>
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
            <Parallax speed={0.15}>
              <div className="space-y-8">
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, color: "teal-deep" },
                    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[\s-]/g, "")}`, color: "coral" },
                    { icon: MapPin, label: "Location", value: CONTACT.location, href: undefined, color: "gold" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30, rotateY: -20 }}
                      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <TiltCard tiltAmount={6} glare={true}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="card flex items-center gap-4 transition-all hover:border-coral"
                          >
                            <motion.div
                              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${item.color}/10`}
                              whileHover={{ rotateY: 180, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              <item.icon size={20} className={`text-${item.color}`} />
                            </motion.div>
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                                {item.label}
                              </p>
                              <p className="text-sm font-medium text-charcoal">
                                {item.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="card flex items-center gap-4">
                            <motion.div
                              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${item.color}/10`}
                              whileHover={{ rotateY: 180, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              <item.icon size={20} className={`text-${item.color}`} />
                            </motion.div>
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                                {item.label}
                              </p>
                              <p className="text-sm font-medium text-charcoal">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        )}
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
                    { icon: Github, href: CONTACT.github, label: "GitHub" },
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 text-slate-600 transition-all hover:border-teal-deep hover:bg-teal-deep hover:text-white"
                      whileHover={{ scale: 1.2, rotateY: 180, z: 20 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Parallax>
          </AnimatedSection>

          {/* Right: Contact Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <TiltCard tiltAmount={5} glare={true}>
              <form ref={formRef} onSubmit={handleSubmit} className="card">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    name="from_name"
                    id="name"
                    required
                    whileFocus={{ scale: 1.02, rotateX: 2 }}
                    className="w-full rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                    placeholder="Your name"
                    style={{ perspective: "1000px" }}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    name="from_email"
                    id="email"
                    required
                    whileFocus={{ scale: 1.02, rotateX: 2 }}
                    className="w-full rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                    placeholder="your@email.com"
                    style={{ perspective: "1000px" }}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02, rotateX: 2 }}
                    className="w-full resize-none rounded-lg border border-gray-200 bg-offwhite px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-teal-deep focus:ring-2 focus:ring-teal-deep/20"
                    placeholder="Tell me about your project or question..."
                    style={{ perspective: "1000px" }}
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, rotateX: -20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    className="mb-4 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700"
                  >
                    <CheckCircle size={16} /> Message sent! Check your email.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, rotateX: -20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
                  >
                    <AlertCircle size={16} /> Failed to send. Try again later.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02, rotateY: 5, z: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center disabled:opacity-50"
                  style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
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
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
