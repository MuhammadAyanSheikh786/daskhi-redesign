import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import ScrollReveal from "@/components/ScrollReveal";
import IslamicPattern from "@/components/IslamicPattern";
import { BookOpen, Users, Globe, Heart, ArrowRight, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Dar e Arqam Schools Karachi — Excellence in This World and the Hereafter",
  description:
    "Dar e Arqam Schools Karachi provides quality education rooted in Islamic values. 12,000+ students across 50+ branches in Karachi.",
};

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Meaningful Learning",
    description:
      "Our curriculum goes beyond textbooks, fostering deep understanding and critical thinking through inquiry-based education rooted in Islamic values.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Building",
    description:
      "We nurture a strong sense of community where students, parents, and educators work together to create a supportive learning environment.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Growing with Confidence",
    description:
      "Students develop self-assurance through public speaking, leadership programs, and extracurricular activities that build character.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Play with Purpose",
    description:
      "Balanced growth in light of Islam — we integrate physical activity, creative arts, and spiritual development into daily school life.",
  },
];

const testimonials = [
  {
    quote: "Dar e Arqam has given my child a strong foundation in both academics and deen. The growth we've seen is remarkable.",
    author: "Parent of a Grade 5 Student",
  },
  {
    quote: "The teachers truly care about each student's progress. The Islamic environment sets it apart from other schools.",
    author: "Parent of a Grade 3 Student",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Building the future of Karachi's youth through excellence in education and Islamic values."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="group relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-cream overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08]">
                  <IslamicPattern className="w-full h-full" />
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-4">Our Mission</h3>
                  <p className="text-cream/80 leading-relaxed text-lg">
                    To provide education of the highest quality, groom personality, inculcate
                    responsibility, confidence, commitment, and dedication towards society.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="group relative p-8 sm:p-10 rounded-2xl border border-accent/20 bg-accent/[0.03] overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-primary-dark dark:text-cream mb-4">
                    Our Vision
                  </h3>
                  <blockquote className="text-muted dark:text-cream/70 leading-relaxed text-lg italic">
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
            title="Our Salient Features"
            subtitle="What makes Dar e Arqam Schools Karachi unique — a holistic approach to education."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 cursor-default"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">
                    {feature.description}
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
            title="Watch Our Story"
            subtitle="See what makes Dar e Arqam Schools Karachi special."
          />
          <ScrollReveal className="mt-12">
            <div className="relative overflow-hidden rounded-2xl aspect-video max-w-4xl mx-auto shadow-2xl ring-1 ring-black/5">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/cfueJieN-JA?si=1qBRY3S_KJQJSI9Q&autoplay=0"
                title="Dar e Arqam Schools Karachi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Campus Life"
            subtitle="A glimpse into the vibrant world of Dar e Arqam Schools."
          />
          <ScrollReveal className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam students"
                aspectRatio="aspect-[4/3]"
              />
              <div className="grid grid-cols-2 gap-6">
                <PhotoDisplay
                  src="/images/students-2.jpg"
                  alt="Dar e Arqam students in school uniform"
                  aspectRatio="aspect-[4/3]"
                />
                <PhotoDisplay
                  src="/images/students-3.jpg"
                  alt="Dar e Arqam student portrait"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Programs"
            subtitle="Specialized programs designed to nurture every aspect of your child's development."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <Link
                href="/hifz-program"
                className="group relative block p-8 md:p-10 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-cream"
              >
                <div className="absolute inset-0 opacity-[0.06]">
                  <IslamicPattern className="w-full h-full" />
                </div>
                <div className="relative">
                  <span className="text-accent font-display text-5xl md:text-6xl leading-none">&#xFD3F;</span>
                  <h3 className="font-display text-2xl md:text-3xl mt-2 mb-3">Hifz Program</h3>
                  <p className="text-cream/70 leading-relaxed mb-6">
                    Memorize the Holy Quran while excelling in academics — a balanced path to spiritual and educational excellence.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Link
                href="/language-lab"
                className="group relative block p-8 md:p-10 rounded-2xl overflow-hidden border border-accent/20 bg-accent/[0.02]"
              >
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative">
                  <span className="text-accent font-display text-5xl md:text-6xl leading-none">AB</span>
                  <h3 className="font-display text-2xl md:text-3xl text-primary-dark dark:text-cream mt-2 mb-3">
                    Language Lab
                  </h3>
                  <p className="text-muted dark:text-cream/70 leading-relaxed mb-6">
                    State-of-the-art English language facility for developing global communication skills and fluency.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary dark:text-accent font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.03] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="What Parents Say"
            subtitle="Hear from the families who trust us with their children's education."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative p-8 md:p-10 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  <p className="text-muted dark:text-cream/80 text-lg leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Star className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-primary-dark dark:text-cream">{t.author}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <CtaSection
        title="Join the Dar e Arqam Family"
        description="Give your child the gift of quality education rooted in Islamic values. Admissions open for Session 2025-2026."
        buttonText="Apply Now"
        buttonHref="/admissions"
      />
    </>
  );
}
