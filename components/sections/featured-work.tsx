"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/data/site";
import { SectionHeader } from "@/components/section-header";
import { ArrowUpRight } from "lucide-react";

/**
 * Featured work — masonry grid with category filter. Items animate in
 * with a stagger; clicking a category filters the visible items.
 */
export function FeaturedWork() {
  const [active, setActive] = useState<"All" | PortfolioCategory>("All");

  const items = useMemo(
    () => (active === "All" ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected work"
            heading={
              <h2 id="work-heading" className="display-lg text-balance">
                Recent things, made with care.
              </h2>
            }
          />
        </div>

        {/* Filter pills */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-10 flex flex-wrap gap-2"
        >
          {(["All", ...portfolioCategories] as const).map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat as typeof active)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))] text-white"
                    : "border-[rgb(var(--line))] text-[rgb(var(--fg-dim))] hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--fg))]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry */}
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]"
        >
          {items.map((p, i) => (
            <PortfolioCard key={p.id} item={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof portfolio)[number];
  index: number;
}) {
  // Map span variants to grid classes — non-jumpy, opinionated layout.
  const spanClass =
    item.span === "wide"
      ? "sm:col-span-2 lg:row-span-1"
      : item.span === "tall"
      ? "sm:row-span-2"
      : "";

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] ${spanClass}`}
    >
      <div className="relative h-full min-h-[260px] w-full">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              {item.category} · {item.year}
            </p>
            <h3 className="mt-1 font-display text-xl tracking-tight sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-0.5 text-sm text-white/70">{item.client}</p>
          </div>
          <span
            aria-hidden
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white/20"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.li>
  );
}
