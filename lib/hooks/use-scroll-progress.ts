"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current scroll progress (0..1) for the whole document.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const value = total > 0 ? h.scrollTop / total : 0;
      setProgress(Math.max(0, Math.min(1, value)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}
