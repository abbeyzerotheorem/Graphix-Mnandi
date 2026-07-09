"use client";

import { motion } from "framer-motion";
import { trustedBy } from "@/data/site";

/**
 * Trusted-by logo strip. Wordmarks are plain text — no third-party logos.
 */
export function TrustedBy() {
  // Duplicate for a seamless marquee loop.
  const items = [...trustedBy.companies, ...trustedBy.companies];

  return (
    <section
      aria-label="Trusted by"
      className="border-y border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))]/40 py-10"
    >
      <div className="container-wide flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--fg-mute))]"
        >
          {trustedBy.eyebrow}
        </motion.span>

        <div
          className="relative flex-1 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap py-2">
            {items.map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="font-display text-lg tracking-[0.18em] text-[rgb(var(--fg-dim))] hover:text-[rgb(var(--fg))] transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
