"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import IslamicPattern from "./IslamicPattern";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const float1Y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const float2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const float1Rotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const float2Rotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] dark:from-primary/[0.05] dark:via-transparent dark:to-accent/[0.05]"
    >
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/images/hero-main.jpg"
            alt="Dar e Arqam students"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--bg)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        </div>
      </motion.div>

      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 15]) }}
        className="absolute top-10 right-0 w-[400px] h-[400px] pointer-events-none"
      >
        <IslamicPattern className="w-full h-full text-primary/[0.06] dark:text-accent/[0.04]" />
      </motion.div>

      <motion.div
        style={{ y: float1Y, rotate: float1Rotate, opacity }}
        className="hidden lg:block absolute top-[15%] right-[5%] w-[280px] h-[200px] pointer-events-none z-10"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 dark:shadow-accent/10 animate-float">
          <Image
            src="/images/hero-float-1.jpg"
            alt="Dar e Arqam students"
            fill
            className="object-cover"
            sizes="280px"
          />
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: float2Y, rotate: float2Rotate, opacity }}
        className="hidden lg:block absolute bottom-[18%] right-[22%] w-[240px] h-[180px] pointer-events-none z-10"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 dark:shadow-accent/10 animate-float" style={{ animationDelay: "2s" }}>
          <Image
            src="/images/hero-float-2.jpg"
            alt="Dar e Arqam students"
            fill
            className="object-cover"
            sizes="240px"
          />
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
        </div>
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="relative w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent/15 text-accent text-sm font-medium mb-6 border border-accent/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Admissions Open — Session 2025-2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight"
            >
              Excellence in{" "}
              <span className="text-accent">This World</span>
              <br />
              and the Hereafter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-6 text-lg md:text-xl text-muted dark:text-cream/70 max-w-xl leading-relaxed"
            >
              Dar e Arqam Schools Karachi extends its unique learning
              experience to well over 12,000+ students in 50+ branches all
              across Karachi — blending quality education with Islamic values.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light dark:hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 dark:shadow-primary/10"
                >
                  Apply for Admission
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-primary-dark dark:text-cream font-semibold rounded-full border border-primary/10 dark:border-cream/10 hover:bg-white/50 dark:hover:bg-white/5 transition-all backdrop-blur-sm"
                >
                  Explore More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-muted/40 dark:text-cream/30">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-muted/20 dark:border-cream/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
