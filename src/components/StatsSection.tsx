"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import TiltCard from "./TiltCard";

const stats = [
  { end: 12000, suffix: "+", label: "Students" },
  { end: 50, suffix: "+", label: "Branches in Karachi" },
  { end: 25, suffix: "+", label: "Years of Excellence" },
  { end: 100, suffix: "%", label: "Commitment to Quality" },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--section-alt)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <TiltCard key={stat.label} tiltDegree={5} glare={false}>
                <div
                  className="text-center p-6 md:p-8 rounded-2xl border transition-colors"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="font-display text-4xl md:text-5xl lg:text-6xl text-accent mb-2 leading-none">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium text-muted dark:text-cream/60 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
