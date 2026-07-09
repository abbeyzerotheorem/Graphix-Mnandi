"use client";

import { usePointer } from "@/lib/hooks/use-pointer";
import { cn } from "@/lib/utils";

/**
 * A soft, cursor-following violet glow. Hidden on touch devices and when
 * prefers-reduced-motion is set (via usePointer).
 */
export function CursorGlow() {
  const { x, y, enabled } = usePointer();

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[1] hidden md:block",
        "transition-[background] duration-300"
      )}
      style={{
        background: `radial-gradient(520px circle at ${x}px ${y}px,
          rgba(124, 58, 237, 0.10),
          transparent 60%)`,
      }}
    />
  );
}
