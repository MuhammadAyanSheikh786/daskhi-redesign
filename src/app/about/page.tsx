import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import { Target, Eye, BookHeart, Sparkles, HeartHandshake, Lightbulb, Users, ScrollText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dar e Arqam Schools Karachi — our story, mission, vision, values, and leadership.",
};

const values = [
  {
    icon: <BookHeart className="w-6 h-6" />,
    title: "Faith & Integrity",
    description:
      "We uphold Islamic values in every aspect of school life, fostering honest and principled individuals.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Excellence",
    description:
      "We pursue the highest standards in academics, character development, and community service.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Compassion",
    description:
      "We nurture empathy, kindness, and social responsibility in our students.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "We embrace modern teaching methods and technology while staying rooted in tradition.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description:
      "We build strong partnerships between school, family, and the wider community.",
  },
  {
    icon: <ScrollText className="w-6 h-6" />,
    title: "Lifelong Learning",
    description:
      "We inspire curiosity and a love for learning that extends beyond the classroom.",
  },
];

const timeline = [
  {
    year: "2000",
    title: "Foundation",
    description: "Dar e Arqam Schools was founded with a vision to provide quality education rooted in Islamic values.",
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Grew to 15 branches across Karachi, serving over 3,000 students with a growing reputation for excellence.",
  },
  {
    year: "2020",
    title: "50+ Branches",
    description: "Expanded to over 50 branches across all major zones of Karachi, becoming one of the city's most trusted school networks.",
  },
  {
    year: "Today",
    title: "12,000+ Students",
    description: "Continuing to grow with 12,000+ students, offering specialized programs like Hifz and Language Lab across all campuses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--section-alt)" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        <div className="absolute top-20 right-0 w-96 h-96 opacity-[0.06] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
                Our Story
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                About Dar e Arqam{" "}
                <span className="text-accent">Schools Karachi</span>
              </h1>
              <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed max-w-2xl">
                A journey of excellence spanning over two decades, shaping the leaders of tomorrow
                through quality education rooted in Islamic values.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight mb-6">
                  Our Story
                </h2>
                <p className="text-muted dark:text-cream/70 leading-relaxed mb-6">
                  Dar e Arqam Schools Karachi extends its unique learning experience to well over
                  12,000+ students in 50+ branches all across Karachi. Founded with the vision of
                  providing quality education rooted in Islamic values, we have grown into one of
                  Karachi&apos;s most trusted school networks.
                </p>
                <p className="text-muted dark:text-cream/70 leading-relaxed">
                  Our journey began with a simple belief — that every child deserves an education
                  that nurtures both the mind and the soul. Today, that belief continues to guide
                  everything we do.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam students"
                aspectRatio="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.04] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Our Journey"
            subtitle="From a single campus to 50+ branches across Karachi."
          />
          <div className="mt-16 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-accent/30 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="relative pl-0 md:pl-20">
                    <div className="hidden md:flex absolute left-4 top-1 w-9 h-9 rounded-full bg-accent items-center justify-center -translate-x-1/2 z-10 shadow-lg shadow-accent/20">
                      <div className="w-3 h-3 rounded-full bg-primary-dark" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start p-6 rounded-2xl border"
                      style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--card-border)",
                      }}
                    >
                      <span className="font-display text-2xl text-accent shrink-0">{item.year}</span>
                      <div>
                        <h3 className="font-display text-xl text-primary-dark dark:text-cream mb-2">{item.title}</h3>
                        <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="group relative p-8 md:p-10 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-cream h-full">
                <div className="absolute inset-0 opacity-[0.08]">
                  <IslamicPattern className="w-full h-full" />
                </div>
                <div className="relative h-full flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-4">Our Mission</h3>
                  <p className="text-cream/80 leading-relaxed text-lg flex-1">
                    To provide education of the highest quality, groom personality, inculcate
                    responsibility, confidence, commitment, and dedication towards society.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="group relative p-8 md:p-10 rounded-2xl overflow-hidden border border-accent/20 bg-accent/[0.02] h-full">
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative h-full flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-primary-dark dark:text-cream mb-4">
                    Our Vision
                  </h3>
                  <blockquote className="text-muted dark:text-cream/70 leading-relaxed text-lg italic flex-1">
                    &ldquo;Excellence in this world and the hereafter.&rdquo;
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div
                  className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-2 group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Leadership"
            subtitle="Dedicated educators shaping the future of Karachi's youth."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/10 flex items-center justify-center mb-5 ring-2 ring-accent/10">
                    <Users className="w-12 h-12 text-primary dark:text-accent/60" />
                  </div>
                  <h3 className="font-display text-lg text-primary-dark dark:text-cream">Team Member</h3>
                  <p className="text-sm text-muted dark:text-cream/60 mt-1">Leadership Role</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <PhotoDisplay
              src="/images/students-3.jpg"
              alt="Dar e Arqam student"
              aspectRatio="aspect-[21/9]"
            />
          </ScrollReveal>
        </div>
      </section>

      <CtaSection
        title="Join the Dar e Arqam Family"
        description="Give your child the gift of quality education rooted in Islamic values. Admissions open for Session 2025-2026."
        buttonText="Apply Now"
        buttonHref="/admissions"
      />
    </>
  );
}
