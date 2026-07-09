"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, MessageCircle, Check } from "lucide-react";
import { site, socials } from "@/data/site";
import { SectionHeader } from "@/components/section-header";
import { MagneticButton } from "@/components/magnetic-button";
import { whatsappLink } from "@/lib/utils";

/**
 * Contact — details column + simple form. Form is a non-submitting mailto
 * stub (clients can wire to a serverless endpoint or Formspree).
 */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Contact"
              heading={
                <h2 id="contact-heading" className="display-lg text-balance">
                  Tell us about the thing.
                </h2>
              }
              body={
                <p className="lede">
                  We read every brief within 48 hours. The more context you can
                  give us — links, deadlines, references — the better our reply
                  will be.
                </p>
              }
            />

            <ul role="list" className="mt-12 flex flex-col gap-5">
              <ContactRow
                icon={<Mail className="h-4 w-4" aria-hidden />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactRow
                icon={<Phone className="h-4 w-4" aria-hidden />}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              />
              <ContactRow
                icon={<MessageCircle className="h-4 w-4" aria-hidden />}
                label="WhatsApp"
                value="Chat with the studio"
                href={whatsappLink(
                  site.whatsapp,
                  `Hi Graphix Mnandi — I'd like to talk about a project.`
                )}
                external
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" aria-hidden />}
                label="Studio"
                value={`${site.address.line1}, ${site.address.line2}`}
              />
            </ul>

            <div className="mt-10">
              <p className="eyebrow mb-3">Find us</p>
              <ul className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--line))] px-3.5 py-2 text-xs text-[rgb(var(--fg-dim))] transition-colors hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--fg))]"
                    >
                      <span>{s.label}</span>
                      <span className="font-mono text-[10px] text-[rgb(var(--fg-mute))]">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-[rgb(var(--line))] bg-[rgb(var(--bg-soft))] p-6 sm:p-10"
            aria-label="Project enquiry form"
          >
            {submitted ? (
              <div className="flex min-h-[440px] flex-col items-center justify-center gap-4 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[rgb(var(--accent))]/15 text-[rgb(var(--accent))]">
                  <Check className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-2xl tracking-tight">Brief received.</h3>
                <p className="max-w-sm text-sm text-[rgb(var(--fg-dim))]">
                  Thanks {form.name || "there"} — we read every enquiry within 48
                  hours and will reply to <span className="text-[rgb(var(--fg))]">{form.email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", company: "", message: "" });
                  }}
                  className="btn-text mt-2"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your name"
                  id="name"
                  required
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                />
                <Field
                  className="sm:col-span-2"
                  label="Company (optional)"
                  id="company"
                  value={form.company}
                  onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                />
                <Field
                  className="sm:col-span-2"
                  label="Tell us about the project"
                  id="message"
                  required
                  rows={5}
                  multiline
                  value={form.message}
                  onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                />
                <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[rgb(var(--fg-mute))]">
                    We will never share your details. We reply within 48 hours.
                  </p>
                  <MagneticButton type="submit" variant="primary" className="!w-auto">
                    Send brief
                    <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="group flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgb(var(--line))] text-[rgb(var(--fg-dim))] transition-colors group-hover:border-[rgb(var(--accent))] group-hover:text-[rgb(var(--accent))]">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--fg-mute))]">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-[rgb(var(--fg))]">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  rows,
  multiline,
  value,
  onChange,
  className,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  rows?: number;
  multiline?: boolean;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--fg-mute))]"
      >
        {label}
        {required ? <span className="text-[rgb(var(--accent))]"> *</span> : null}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={rows ?? 4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full resize-none rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--bg))] px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none transition-colors focus:border-[rgb(var(--accent))]"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-[rgb(var(--line))] bg-[rgb(var(--bg))] px-4 py-3 text-sm text-[rgb(var(--fg))] outline-none transition-colors focus:border-[rgb(var(--accent))]"
        />
      )}
    </div>
  );
}
