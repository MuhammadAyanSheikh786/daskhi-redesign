"use client";

import ScrollReveal from "./ScrollReveal";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className="group p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-accent/5 cursor-default"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--card-border)",
        }}
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent group-hover:bg-accent dark:group-hover:bg-accent group-hover:text-cream transition-all duration-300 mb-4">
          {icon}
        </div>
        <h3 className="font-display text-xl text-primary-dark dark:text-cream mb-2">
          {title}
        </h3>
        <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}
