import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { Book, Star, Clock, Users, Heart, Award, Quote, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hifz Program",
  description:
    "Dar e Arqam Schools Karachi offers a dedicated Hifz program combining Quran memorization with formal education.",
};

const features = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Structured Hifz Curriculum",
    description:
      "A carefully designed syllabus that balances Quran memorization with academic studies for holistic development.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Qualified Huffaz Instructors",
    description:
      "Our Hifz teachers are certified Huffaz with Ijazah, providing authentic Quranic education.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Flexible Schedule",
    description:
      "Dedicated Hifz hours within the school day, with options for accelerated or standard-track memorization.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Small Groups",
    description:
      "Limited class sizes ensure each student receives individual attention from the Hifz instructor.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Spiritual Nurturing",
    description:
      "Beyond memorization, students learn Tajweed, Tafseer, and develop a deep connection with the Quran.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certification",
    description:
      "Upon completion, students receive a recognized Hifz certificate and are honored in a graduation ceremony.",
  },
];

const reasons = [
  "Integrated approach — Hifz alongside formal academics",
  "Qualified Huffaz with Ijazah certification",
  "Individual attention through small group sizes",
  "Focus on Tajweed, Tafseer, and spiritual connection",
  "Recognized certification upon completion",
  "Supportive Islamic environment across all campuses",
];

export default function HifzProgramPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-accent/[0.02] to-transparent" />
        <div className="absolute top-10 left-10 w-80 h-80 opacity-[0.04] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="absolute top-20 right-20 text-[200px] md:text-[300px] font-display text-primary/[0.02] dark:text-accent/[0.02] leading-none select-none pointer-events-none">
          &#xFD3F;
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
                  <BookOpen className="w-4 h-4" />
                  Quran Memorization Program
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                  Hifz{" "}
                  <span className="text-accent">Program</span>
                </h1>
                <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed">
                  Memorize the Holy Quran while excelling in academics — a balanced path
                  to spiritual and educational excellence.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl" />
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-cream overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06]">
                    <IslamicPattern className="w-full h-full" />
                  </div>
                  <div className="relative text-center">
                    <span className="font-display text-6xl md:text-7xl text-accent/80 inline-block mb-2">&#xFD3F;</span>
                    <p className="font-display text-lg md:text-xl leading-relaxed italic max-w-md mx-auto">
                      &ldquo;The best among you are those who learn the Quran and teach it.&rdquo;
                    </p>
                    <p className="mt-4 text-cream/60 text-sm">— Prophet Muhammad &#xFDFA;</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam Hifz students"
                aspectRatio="aspect-[4/3]"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block w-12 h-0.5 bg-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight mb-6">
                  About the Program
                </h2>
                <p className="text-muted dark:text-cream/70 leading-relaxed mb-4">
                  Dar e Arqam Schools offers a comprehensive Hifz program that allows students
                  to memorize the Holy Quran while continuing their formal education.
                </p>
                <p className="text-muted dark:text-cream/70 leading-relaxed">
                  Our program combines authentic Quranic teaching methods with modern educational
                  practices, ensuring students excel both in Hifz and academics. With qualified
                  Huffaz instructors and a supportive learning environment, we make the journey
                  of Quran memorization accessible and rewarding.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.04] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Program Features"
            subtitle="Everything your child needs for a successful Hifz journey."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div
                  className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary dark:text-accent group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <span className="w-8 h-0.5 bg-accent/30 group-hover:w-12 transition-all" />
                  </div>
                  <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-2 group-hover:text-accent transition-colors">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block w-12 h-0.5 bg-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight mb-6">
                  Why Choose Our Hifz Program?
                </h2>
                <div className="space-y-4">
                  {reasons.map((reason) => (
                    <div key={reason} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted dark:text-cream/70">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative p-8 md:p-10 rounded-2xl border"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <blockquote className="text-lg text-muted dark:text-cream/80 leading-relaxed italic mb-6">
                  &ldquo;The Hifz program at Dar e Arqam has been a blessing for our child.
                  The balance between Quran memorization and academics is perfectly maintained.
                  We&apos;ve seen remarkable growth in both his character and knowledge.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/5 dark:border-cream/5">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-dark dark:text-cream text-sm">Parent of a Hifz Student</div>
                    <div className="text-xs text-muted dark:text-cream/60">Grade 7 — Gulshan Campus</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hifz Program at a Glance"
            subtitle="Key facts about our Quran memorization program."
          />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Hifz Students" },
              { number: "50+", label: "Branches Offering Hifz" },
              { number: "100%", label: "Qualified Huffaz" },
              { number: "15+", label: "Years of Hifz Program" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="font-display text-3xl md:text-4xl text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-muted dark:text-cream/60">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Enroll in Hifz Program"
        description="Give your child the honor of memorizing the Quran alongside quality academic education."
        buttonText="Enquire Now"
        buttonHref="/contact"
      />
    </>
  );
}
