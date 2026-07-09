"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { hero } from "@/data/site";
import { MagneticButton } from "@/components/magnetic-button";

/**
 * Hero — staggered word-by-word reveal, parallax image, floating gradient.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Each line of the headline is a separate animated span.
  const lines = hero.headline;

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 sm:pt-32 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Floating gradient background. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))] opacity-[0.18] blur-[120px] animate-float-slow" />
        <div className="absolute right-1/4 top-1/2 h-[28rem] w-[28rem] rounded-full bg-[rgb(var(--accent-2))] opacity-[0.12] blur-[120px] animate-drift" />
        <div className="absolute inset-0 grid-pattern mask-radial opacity-30" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>

      <div className="container-wide relative grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:pb-32">
        {/* Copy */}
        <motion.div style={{ y: yHeadline, opacity }} className="flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            {hero.eyebrow}
          </motion.span>

          <h1
            id="hero-heading"
            className="display-xl mt-6 text-balance"
          >
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line.split(" ").map((word, j) => (
                  <motion.span
                    key={`${i}-${j}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1 + i * 0.12 + j * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                    {j < line.split(" ").length - 1 ? " " : ""}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lede mt-8"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[rgb(var(--line))] pt-8"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="font-display text-3xl tracking-tight">{s.value}</dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--fg-mute))]">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Visual */}
        <motion.div
          style={{ y: yImage }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[rgb(var(--line))] sm:aspect-[5/6] lg:aspect-[4/5]"
        >
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-[rgb(var(--bg))] via-transparent to-transparent"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-[rgb(var(--warm))]" />
              <span className="font-mono uppercase tracking-[0.18em]">Featured · 2025</span>
            </div>
            <Link
              href="#work"
              className="text-xs font-medium text-white hover:text-[rgb(var(--warm))]"
            >
              View case →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="container-wide pointer-events-none absolute inset-x-0 bottom-6 hidden items-center justify-between sm:flex">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--fg-mute))]">
          Scroll to explore
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-[rgb(var(--fg-mute))] to-transparent" />
      </div>
    </section>
  );
}
