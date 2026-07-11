import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import CtaSection from "@/components/CtaSection";
import TiltCard from "@/components/TiltCard";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { Book, Star, Clock, Users, Heart, Award } from "lucide-react";

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

export default function HifzProgramPage() {
  return (
    <>
      <ParallaxSection speed={0.12}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute top-20 left-0 w-96 h-96 opacity-10">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Hifz Program"
              subtitle="Memorize the Quran while excelling in academics — a balanced path to excellence."
            />
            <ScrollReveal>
              <div className="mt-16 max-w-3xl mx-auto text-center">
                <p className="text-lg text-muted dark:text-cream/70 leading-relaxed">
                  Dar e Arqam Schools offers a comprehensive Hifz program that
                  allows students to memorize the Holy Quran while continuing
                  their formal education. Our program combines authentic Quranic
                  teaching methods with modern educational practices, ensuring
                  students excel both in Hifz and academics.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam students"
                aspectRatio="aspect-[21/9]"
              />
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Program Features"
            subtitle="Everything your child needs for a successful Hifz journey."
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
        title="Enroll in Hifz Program"
        description="Give your child the honor of memorizing the Quran alongside quality academic education."
        buttonText="Enquire Now"
        buttonHref="/contact"
      />
    </>
  );
}
