import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a phone number for tel: links.
 */
export function tel(href: string) {
  return href.replace(/[^\d+]/g, "");
}

/**
 * Build a WhatsApp deep link with an optional pre-filled message.
 */
export function whatsappLink(number: string, message?: string) {
  const base = `https://wa.me/${number.replace(/[^\d]/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Format a year range like "2019 — Present" given a founded year.
 */
export function studioAge(founded: number) {
  const years = new Date().getFullYear() - founded;
  return `${founded} — Present · ${years} years`;
}
