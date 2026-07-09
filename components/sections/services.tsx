"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeader } from "@/components/section-header";

/**
 * Services — bento grid. Cards tilt subtly toward the cursor on hover.
 */
export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What we do"
            heading={
              <h2 id="services-heading" className="display-lg text-balance">
                Eight disciplines, one team.
              </h2>
            }
            body={
              <p className="lede">
                We are deliberately a small studio. Every project is led by a senior
                designer and a creative director — no hand-offs, no juniors
                learning on your account.
              </p>
            }
          />
        </div>

        <ul
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.PointerEvent<HTMLLIElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const Icon = service.icon;

  return (
    <motion.li
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] p-6 transition-colors duration-300 hover:border-[rgb(var(--accent))]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[rgb(var(--accent))] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
      />
      <div className="flex items-start justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--line))] bg-[rgb(var(--bg))] text-[rgb(var(--accent))] transition-colors group-hover:border-[rgb(var(--accent))]">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-[rgb(var(--fg-mute))] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--accent))]"
          aria-hidden
        />
      </div>
      <h3 className="mt-6 font-display text-2xl tracking-tight">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--fg-dim))]">
        {service.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {service.deliverables.map((d) => (
          <li
            key={d}
            className="rounded-full border border-[rgb(var(--line))] bg-[rgb(var(--bg))] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[rgb(var(--fg-mute))]"
          >
            {d}
          </li>
        ))}
      </ul>
    </motion.li>
  );
}
