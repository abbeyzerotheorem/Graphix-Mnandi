"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { useThemeMounted } from "@/components/theme-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme, mounted } = useThemeMounted();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-[rgb(var(--line))] bg-[rgb(var(--bg))]/75 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between lg:h-20">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="group flex items-center gap-2.5"
        >
          <span
            aria-hidden
            className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-[rgb(var(--accent))]"
          >
            <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-white">G</span>
            <span className="absolute inset-y-0 right-0 w-1.5 bg-[rgb(var(--warm))] transition-transform duration-500 group-hover:scale-y-110" />
          </span>
          <span className="font-display text-lg tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-[rgb(var(--fg-dim))] transition-colors hover:text-[rgb(var(--fg))]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--line))] text-[rgb(var(--fg-dim))] transition-colors hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--fg))] sm:inline-flex"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden />
            ) : (
              <Moon className="h-4 w-4" aria-hidden />
            )}
          </button>

          <Link href="#contact" className="btn-primary hidden sm:inline-flex">
            Start a project
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgb(var(--line))] text-[rgb(var(--fg))] md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-[rgb(var(--line))] bg-[rgb(var(--bg))]/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="container-wide flex flex-col py-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[rgb(var(--line))] py-4 font-display text-2xl text-[rgb(var(--fg))]"
                  >
                    {item.label}
                    <span aria-hidden className="text-[rgb(var(--fg-mute))]">→</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="inline-flex items-center gap-2 text-sm text-[rgb(var(--fg-dim))]"
                >
                  {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  {mounted ? `${theme === "dark" ? "Light" : "Dark"} mode` : "Toggle theme"}
                </button>
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary"
                >
                  Start a project
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
