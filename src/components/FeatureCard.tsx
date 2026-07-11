"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

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
    <ScrollReveal delay={index * 0.1} scale>
      <TiltCard tiltDegree={6}>
        <motion.div
          whileHover={{ y: -4 }}
          className="group p-6 sm:p-8 rounded-2xl backdrop-blur-sm transition-all border cursor-default"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent group-hover:bg-accent/10 dark:group-hover:bg-accent/20 group-hover:text-accent transition-all duration-300 mb-4">
            <motion.div
              whileHover={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </div>
          <h3 className="font-display text-xl text-primary-dark dark:text-cream mb-2">
            {title}
          </h3>
          <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">
            {description}
          </p>
        </motion.div>
      </TiltCard>
    </ScrollReveal>
  );
}
