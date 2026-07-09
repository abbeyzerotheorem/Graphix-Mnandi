"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/site";
import { SectionHeader } from "@/components/section-header";
import { Check } from "lucide-react";

/**
 * Why choose us — calm icon cards. Two columns, six items.
 */
export function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why teams choose us"
          heading={
            <h2 id="why-heading" className="display-lg text-balance">
              Reasons we hear, after the work is shipped.
            </h2>
          }
        />

        <ul
          role="list"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((w, i) => (
            <motion.li
              key={w.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] p-7 transition-colors duration-300 hover:border-[rgb(var(--accent))]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[rgb(var(--accent-2))] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgb(var(--accent))]/15 text-[rgb(var(--accent))]">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--fg-mute))]">
                  Reason / 0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--fg-dim))]">
                {w.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
