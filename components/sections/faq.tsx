"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faq } from "@/data/site";
import { SectionHeader } from "@/components/section-header";

/**
 * FAQ — accessible accordion. Single-open behavior; arrow rotates.
 */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeader
          eyebrow="FAQ"
          heading={
            <h2 id="faq-heading" className="display-md text-balance">
              Questions we get, in plain English.
            </h2>
          }
        />

        <div>
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className="border-b border-[rgb(var(--line))]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg tracking-tight sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[rgb(var(--line))] transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[rgb(var(--accent))] text-[rgb(var(--accent))]"
                        : "text-[rgb(var(--fg-dim))]"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-base leading-relaxed text-[rgb(var(--fg-dim))]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
