"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export default function CtaSection({
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
}: CtaSectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-[#0F2850] px-8 py-16 md:py-20 text-center">
            <div className="absolute inset-0 opacity-20 dark:opacity-15">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/50 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream max-w-2xl mx-auto leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-cream/80 max-w-xl mx-auto text-lg leading-relaxed">
                {description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block mt-8"
              >
                <Link
                  href={buttonHref}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
                >
                  {buttonText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
