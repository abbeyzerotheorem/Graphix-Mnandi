"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/data/site";
import { SectionHeader } from "@/components/section-header";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeader
            eyebrow={about.eyebrow}
            heading={
              <h2 id="about-heading" className="display-lg text-balance">
                {about.heading}
              </h2>
            }
          />

          <div className="mt-10 flex flex-col gap-5">
            {about.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-base leading-relaxed text-[rgb(var(--fg-dim))] sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[rgb(var(--line))] sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="A senior designer reviewing print proofs on a large studio table"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg))] via-transparent to-transparent"
            />
          </motion.div>

          {/* Values */}
          <ul className="grid gap-4">
            {about.values.map((v, i) => (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="group flex items-start gap-5 rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] p-5 transition-colors hover:border-[rgb(var(--accent))]"
              >
                <span className="mt-0.5 font-mono text-xs text-[rgb(var(--accent))]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-tight">{v.title}</h3>
                  <p className="mt-1 text-sm text-[rgb(var(--fg-dim))]">{v.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
