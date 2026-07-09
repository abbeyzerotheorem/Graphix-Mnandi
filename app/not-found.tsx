import Link from "next/link";
import { MagneticButton } from "@/components/magnetic-button";

export const metadata = {
  title: "Page not found",
  description: "We couldn't find the page you were looking for.",
};

export default function NotFound() {
  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))] opacity-20 blur-[120px] animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[24rem] w-[24rem] rounded-full bg-[rgb(var(--accent-2))] opacity-15 blur-[100px] animate-drift"
      />

      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <span className="eyebrow">404 · Not found</span>
        <h1 className="display-xl mt-5 text-balance">
          Off the map,{" "}
          <span className="italic text-[rgb(var(--accent))]">for now.</span>
        </h1>
        <p className="lede mx-auto mt-6">
          The page you were looking for has been moved, retired, or never
          existed. Head back to the studio and we will find you something good
          to look at.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/" variant="primary">
            Back to studio
          </MagneticButton>
          <Link href="#contact" className="btn-ghost">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
