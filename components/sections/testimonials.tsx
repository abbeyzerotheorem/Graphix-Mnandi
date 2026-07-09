"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeader } from "@/components/section-header";

/**
 * Testimonials — large display quote + clean attribution.
 */
export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What clients say"
          heading={
            <h2 id="testimonials-heading" className="display-lg text-balance">
              The work is the introduction.
            </h2>
          }
        />

        <ul
          role="list"
          className="mt-14 grid gap-4 lg:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <motion.li
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-6 rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] p-7 sm:p-10"
            >
              <Quote
                aria-hidden
                className="h-7 w-7 text-[rgb(var(--accent))] transition-transform duration-500 group-hover:-rotate-12"
              />
              <p className="text-balance font-display text-2xl leading-snug tracking-tight text-[rgb(var(--fg))] sm:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-4 border-t border-[rgb(var(--line))] pt-5">
                <span
                  aria-hidden
                  className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[rgb(var(--accent))] to-[rgb(var(--accent-2))] font-display text-sm text-white"
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-[rgb(var(--fg-mute))]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
