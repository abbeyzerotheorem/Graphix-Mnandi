import Link from "next/link";
import { site, socials, nav, studioAge } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--line))] bg-[rgb(var(--bg))]">
      <div className="container-wide py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-2xl tracking-tight"
              aria-label={`${site.name} home`}
            >
              {site.name}
            </Link>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-[rgb(var(--fg-dim))]">
              {site.shortDescription}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[rgb(var(--fg-mute))]">
              {studioAge(site.founded)}
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Sitemap</h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[rgb(var(--fg-dim))] transition-colors hover:text-[rgb(var(--fg))]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Studio</h3>
            <ul className="space-y-2.5 text-sm text-[rgb(var(--fg-dim))]">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[rgb(var(--fg))]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-[rgb(var(--fg))]">
                  {site.phone}
                </a>
              </li>
              <li>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Find us</h3>
            <ul className="space-y-2.5 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline gap-2 text-[rgb(var(--fg-dim))] transition-colors hover:text-[rgb(var(--fg))]"
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-xs text-[rgb(var(--fg-mute))] transition-colors group-hover:text-[rgb(var(--accent))]">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[rgb(var(--line))] pt-8 text-xs text-[rgb(var(--fg-mute))] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Designed and built in Johannesburg.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            {site.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
