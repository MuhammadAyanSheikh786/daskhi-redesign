import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CtaSection from "@/components/CtaSection";
import ParallaxSection from "@/components/ParallaxSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import ScrollReveal from "@/components/ScrollReveal";
import { BookOpen, Users, Globe, Heart } from "lucide-react";

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

export default function HomePage() {
  return (
    <>
      <Hero />

      <ParallaxSection speed={0.1}>
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Mission & Vision"
              subtitle="Building the future of Karachi's youth through excellence in education and Islamic values."
            />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <div className="group p-8 sm:p-10 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-[#063F2D] text-cream relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 400 400" className="w-full h-full text-cream" fill="none">
                      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.3" />
                      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.3" />
                      <path d="M200 20 L220 80 L280 70 L250 120 L290 150 L240 160 L240 220 L190 200" stroke="currentColor" strokeWidth="0.3" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-4 relative">
                    Our Mission
                  </h3>
                  <p className="text-cream/80 leading-relaxed text-lg relative">
                    To provide education of the highest quality, groom
                    personality, inculcate responsibility, confidence,
                    commitment, and dedication towards society.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="p-8 sm:p-10 md:p-12 rounded-2xl bg-accent/10 dark:bg-accent/5 border border-accent/20 dark:border-accent/10 relative overflow-hidden">
                  <h3 className="font-display text-2xl md:text-3xl text-primary-dark dark:text-cream mb-4 relative">
                    Our Vision
                  </h3>
                  <p className="text-muted dark:text-cream/70 leading-relaxed text-lg relative">
                    &ldquo;Excellence in this world and the hereafter.&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="mt-12">
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam students"
                aspectRatio="aspect-[21/9]"
                priority
              />
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Watch Our Story"
            subtitle="See what makes Dar e Arqam Schools Karachi special."
          />
          <ScrollReveal className="mt-12">
            <div className="relative overflow-hidden rounded-2xl aspect-video max-w-4xl mx-auto shadow-2xl">
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

      <StatsSection />

      <ParallaxSection speed={-0.05}>
        <section className="py-20 md:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Salient Features"
              subtitle="What makes Dar e Arqam Schools Karachi unique — a holistic approach to education."
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <FeatureCard key={feature.title} {...feature} index={i} />
              ))}
            </div>

            <ScrollReveal className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>

      <CtaSection
        title="Join the Dar e Arqam Family"
        description="Give your child the gift of quality education rooted in Islamic values. Admissions open for Session 2025-2026."
        buttonText="Apply Now"
        buttonHref="/admissions"
      />
    </>
  );
}
