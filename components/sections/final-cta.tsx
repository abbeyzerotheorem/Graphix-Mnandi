"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { finalCta } from "@/data/site";
import { MagneticButton } from "@/components/magnetic-button";

/**
 * Final CTA — oversized display type, two-button row, ambient glow.
 */
export function FinalCTA() {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--accent))] opacity-30 blur-[100px]" />
            <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-[rgb(var(--accent-2))] opacity-20 blur-[100px]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display-lg relative text-balance"
          >
            {finalCta.heading}{" "}
            <span className="italic text-[rgb(var(--accent))]">{finalCta.highlight}</span>{" "}
            {finalCta.suffix}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lede relative mx-auto mt-6"
          >
            {finalCta.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href={finalCta.primary.href} variant="primary">
              {finalCta.primary.label}
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href={finalCta.secondary.href}
              variant="ghost"
              external
            >
              <MessageCircle className="h-4 w-4" />
              {finalCta.secondary.label}
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
