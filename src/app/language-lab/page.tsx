import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { Mic, Headphones, BookOpen, Globe, BarChart3, Users, Zap, Target, CheckCircle2, ArrowRight, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Language Lab",
  description:
    "Dar e Arqam Schools Karachi offers a state-of-the-art Language Lab for English proficiency and communication skills development.",
};

const features = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Pronunciation Mastery",
    description:
      "Advanced speech recognition technology helps students perfect their pronunciation and accent.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Listening Comprehension",
    description:
      "Interactive audio exercises build strong listening skills across various contexts and speeds.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Reading & Vocabulary",
    description:
      "Digital libraries with graded readers and vocabulary-building exercises tailored to each level.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Communication",
    description:
      "Curriculum designed to prepare students for international English proficiency exams.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Detailed analytics and progress reports for each student, shared with parents regularly.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Interactive Sessions",
    description:
      "Small group conversation practice with trained facilitators for real-world communication.",
  },
];

const benefits = [
  "Enhanced English speaking confidence",
  "Improved academic performance across subjects",
  "Preparation for international English exams",
  "Better communication skills for future careers",
  "Access to digital learning resources 24/7",
  "Regular progress updates for parents",
];

export default function LanguageLabPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--section-alt)" }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/[0.02] to-transparent" />
        <div className="absolute top-20 left-10 w-64 h-64 opacity-[0.04] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-sm font-medium border border-primary/10 dark:border-accent/10 mb-6">
                  <Zap className="w-4 h-4" />
                  State-of-the-Art Facility
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                  Language{" "}
                  <span className="text-accent">Lab</span>
                </h1>
                <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed">
                  State-of-the-art English language facility for developing global
                  communication skills and fluency in a technology-driven environment.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 backdrop-blur-sm">
                    <Languages className="w-8 h-8 text-primary dark:text-accent mb-3" />
                    <div className="font-display text-lg text-primary-dark dark:text-cream">Digital</div>
                    <div className="text-xs text-muted dark:text-cream/60">Learning Platform</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 backdrop-blur-sm mt-8">
                    <Headphones className="w-8 h-8 text-accent mb-3" />
                    <div className="font-display text-lg text-primary-dark dark:text-cream">Audio Lab</div>
                    <div className="text-xs text-muted dark:text-cream/60">Interactive Sessions</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/10 backdrop-blur-sm -mt-4">
                    <BarChart3 className="w-8 h-8 text-accent mb-3" />
                    <div className="font-display text-lg text-primary-dark dark:text-cream">Analytics</div>
                    <div className="text-xs text-muted dark:text-cream/60">Progress Reports</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 backdrop-blur-sm">
                    <Globe className="w-8 h-8 text-primary dark:text-accent mb-3" />
                    <div className="font-display text-lg text-primary-dark dark:text-cream">Global</div>
                    <div className="text-xs text-muted dark:text-cream/60">Exam Preparation</div>
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
              <div>
                <span className="inline-block w-12 h-0.5 bg-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight mb-6">
                  About the Language Lab
                </h2>
                <p className="text-muted dark:text-cream/70 leading-relaxed mb-4">
                  Our Language Lab is a dedicated facility equipped with modern technology
                  to help students master the English language.
                </p>
                <p className="text-muted dark:text-cream/70 leading-relaxed">
                  Through interactive software, guided practice, and immersive learning
                  experiences, students develop the confidence to communicate effectively
                  in academic and professional settings. Available across all Dar e Arqam
                  campuses.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <PhotoDisplay
                src="/images/students-3.jpg"
                alt="Dar e Arqam student in Language Lab"
                aspectRatio="aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="absolute top-0 left-0 w-96 h-96 opacity-[0.03] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Lab Features"
            subtitle="Cutting-edge tools and methods for language mastery."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div
                  className="group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default border-0"
                  style={{
                    backgroundColor: "var(--card)",
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary dark:text-accent group-hover:from-accent group-hover:to-accent-light group-hover:text-primary-dark transition-all duration-300 mb-5 shadow-lg shadow-primary/5">
                    {feature.icon}
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
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-cream overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.06]">
                  <IslamicPattern className="w-full h-full" />
                </div>
                <div className="relative">
                  <Target className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl mb-4">Benefits</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-cream/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block w-12 h-0.5 bg-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight mb-6">
                  Why Language Lab Matters
                </h2>
                <p className="text-muted dark:text-cream/70 leading-relaxed mb-4">
                  In today&apos;s interconnected world, English proficiency is essential
                  for academic success and future career opportunities.
                </p>
                <p className="text-muted dark:text-cream/70 leading-relaxed">
                  Our Language Lab provides students with the tools and guidance they need
                  to develop strong communication skills, preparing them for higher education
                  and professional environments both locally and internationally.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Language Lab at a Glance"
            subtitle="Key facts about our English language facility."
          />
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Branches with Lab" },
              { number: "10,000+", label: "Students Enrolled" },
              { number: "95%", label: "Improvement Rate" },
              { number: "24/7", label: "Digital Access" },
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
        title="Enroll in Language Lab"
        description="Give your child the advantage of English fluency. Available across all Dar e Arqam campuses."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
