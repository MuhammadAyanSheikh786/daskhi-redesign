import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  href?: string;
  index?: number;
}

export default function EventCard({
  title,
  date,
  description,
  href = "#",
  index = 0,
}: EventCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={href}
        className="block group p-6 rounded-2xl border transition-all"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--card-border)",
        }}
      >
        <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
        <h3 className="font-display text-lg text-primary-dark dark:text-cream group-hover:text-primary dark:group-hover:text-accent transition-colors mb-2">
          {title}
        </h3>
        <p className="text-muted dark:text-cream/60 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary dark:text-accent mt-3 group-hover:gap-2 transition-all">
          Read more <ArrowUpRight className="w-3 h-3" />
        </span>
      </Link>
    </ScrollReveal>
  );
}
