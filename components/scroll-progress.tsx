"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A vertical rail on the left edge of the viewport that fills as you scroll.
 * Doubles as a quiet indicator that the page is interactive.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-screen w-[2px] origin-top bg-[rgb(var(--line)/0.4)] lg:block"
    >
      <motion.div
        style={{ scaleY }}
        className="h-full w-full origin-top bg-gradient-to-b from-[rgb(var(--accent))] via-[rgb(var(--accent-glow))] to-[rgb(var(--accent-2))]"
      />
    </motion.div>
  );
}
