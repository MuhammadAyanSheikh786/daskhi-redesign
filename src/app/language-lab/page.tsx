import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import CtaSection from "@/components/CtaSection";
import TiltCard from "@/components/TiltCard";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { Mic, Headphones, BookOpen, Globe, BarChart3, Users } from "lucide-react";

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

export default function LanguageLabPage() {
  return (
    <>
      <ParallaxSection speed={0.12}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 opacity-10">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Language Lab"
              subtitle="State-of-the-art English language facility for developing global communication skills."
            />
            <ScrollReveal>
              <div className="mt-16 max-w-3xl mx-auto text-center">
                <p className="text-lg text-muted dark:text-cream/70 leading-relaxed">
                  Our Language Lab is a dedicated facility equipped with modern
                  technology to help students master the English language.
                  Through interactive software, guided practice, and immersive
                  learning experiences, students develop the confidence to
                  communicate effectively in academic and professional settings.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <PhotoDisplay
                src="/images/students-3.jpg"
                alt="Dar e Arqam student"
                aspectRatio="aspect-[21/9]"
              />
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Lab Features"
            subtitle="Cutting-edge tools and methods for language mastery."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1} scale>
                <TiltCard tiltDegree={5}>
                  <div
                    className="p-6 rounded-2xl border transition-all group cursor-default"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent group-hover:bg-accent/10 dark:group-hover:bg-accent/20 group-hover:text-accent transition-all mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </TiltCard>
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
