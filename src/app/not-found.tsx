import Link from "next/link";
import IslamicPattern from "@/components/IslamicPattern";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "var(--section-alt)" }} />
      <div className="absolute top-0 left-0 w-96 h-96 opacity-[0.04] pointer-events-none">
        <IslamicPattern />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none rotate-180">
        <IslamicPattern />
      </div>
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="relative text-center px-4 max-w-lg">
        <div className="font-display text-[12rem] sm:text-[16rem] leading-none text-accent/15 select-none pointer-events-none leading-[0.8]">
          404
        </div>

        <div className="relative -mt-16 sm:-mt-24">
          <span className="font-display text-8xl sm:text-9xl text-accent block leading-none">
            404
          </span>

          <div className="mt-2 w-20 h-1 bg-accent/30 mx-auto rounded-full" />

          <h1 className="font-display text-3xl sm:text-4xl text-primary-dark dark:text-cream mt-6 leading-tight">
            Page Not Found
          </h1>

          <p className="text-muted dark:text-cream/60 mt-3 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-muted dark:text-cream/50">
            <span>Try visiting:</span>
            <Link href="/" className="text-primary dark:text-accent hover:underline">Home</Link>
            <span className="text-muted/40">·</span>
            <Link href="/about" className="text-primary dark:text-accent hover:underline">About</Link>
            <span className="text-muted/40">·</span>
            <Link href="/admissions" className="text-primary dark:text-accent hover:underline">Admissions</Link>
            <span className="text-muted/40">·</span>
            <Link href="/contact" className="text-primary dark:text-accent hover:underline">Contact</Link>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/10 dark:border-cream/10 text-primary-dark dark:text-cream font-semibold rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Report an Issue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
