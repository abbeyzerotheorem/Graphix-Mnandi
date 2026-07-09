"use client";

import { motion } from "framer-motion";
import { process } from "@/data/site";
import { SectionHeader } from "@/components/section-header";

/**
 * Process — numbered timeline. Numbers are content-bearing (the order is
 * the point), so we use the 01–04 markers here.
 */
export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-heading">
      <div className="container-wide">
        <SectionHeader
          eyebrow="How we work"
          heading={
            <h2 id="process-heading" className="display-lg text-balance">
              Four steps. No mystery.
            </h2>
          }
          body={
            <p className="lede">
              We have a process because it makes the work better, not because
              agencies are supposed to have one. Every project moves through the
              same four stages, in the open.
            </p>
          }
        />

        <ol
          role="list"
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--line))] lg:grid-cols-4"
        >
          {process.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col gap-4 bg-[rgb(var(--bg-soft))] p-7 transition-colors duration-500 hover:bg-[rgb(var(--bg-elev))] sm:p-9"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--fg-mute))]">
                Stage {step.number}
              </span>
              <span
                aria-hidden
                className="font-display text-7xl leading-none tracking-tight text-[rgb(var(--accent))] transition-transform duration-500 group-hover:-translate-y-1"
              >
                {step.number}
              </span>
              <h3 className="font-display text-2xl tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[rgb(var(--fg-dim))]">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
