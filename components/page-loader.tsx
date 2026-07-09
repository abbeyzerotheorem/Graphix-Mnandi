"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Page-level loader — a brief, restrained first-paint animation.
 * Honors prefers-reduced-motion by skipping the bar animation.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(var(--bg))]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "h-px w-44 origin-left bg-gradient-to-r",
                "from-transparent via-[rgb(var(--accent))] to-transparent"
              )}
            />
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-[rgb(var(--fg-mute))]"
            >
              Loading studio
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
