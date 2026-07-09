"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Reusable section header — eyebrow + (optional) heading + body.
 * Animates into view once.
 */
export function SectionHeader({
  eyebrow,
  heading,
  body,
  align = "left",
}: {
  eyebrow: string;
  heading?: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${
        align === "center" ? "items-center text-center mx-auto" : "items-start"
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>
      {heading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          {heading}
        </motion.div>
      )}
      {body && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          {body}
        </motion.div>
      )}
    </div>
  );
}
