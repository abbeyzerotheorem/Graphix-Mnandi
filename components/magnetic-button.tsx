"use client";

import Link, { type LinkProps } from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost";

export function MagneticButton({
  children,
  variant = "primary",
  className,
  href,
  external,
  type,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
} & Omit<LinkProps, "href">) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useMotionTemplate`${x}px`;
  const ty = useMotionTemplate`${y}px`;

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    x.set((mx - r.width / 2) * 0.15);
    y.set((my - r.height / 2) * 0.2);
    el.style.setProperty("--mx", `${mx}px`);
    el.style.setProperty("--my", `${my}px`);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls = cn(
    "btn btn-cursor group",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className
  );

  if (!href) {
    return (
      <motion.button
        ref={ref as unknown as React.RefObject<HTMLButtonElement>}
        onPointerMove={onMove as unknown as React.PointerEventHandler<HTMLButtonElement>}
        onPointerLeave={onLeave}
        className={cls}
        style={{ x: tx, y: ty }}
        type={type ?? "button"}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.div style={{ x: tx, y: ty }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={cls}
        {...rest}
      >
        {children}
        {variant === "ghost" ? (
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : null}
      </Link>
    </motion.div>
  );
}
