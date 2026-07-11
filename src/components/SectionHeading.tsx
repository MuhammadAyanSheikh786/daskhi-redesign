import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={className}>
      <div className={`${centered ? "text-center" : ""} ${centered ? "mx-auto" : ""}`}>
        <div className={`h-1 w-12 rounded-full bg-accent mb-5 ${centered ? "mx-auto" : ""}`} />
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-cream" : "text-primary-dark dark:text-cream"}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-lg leading-relaxed max-w-2xl ${
              centered ? "mx-auto" : ""
            } ${light ? "text-cream/70" : "text-muted dark:text-cream/60"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
