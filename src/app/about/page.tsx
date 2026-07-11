import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import StatsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dar e Arqam Schools Karachi — our story, mission, vision, values, and leadership.",
};

const values = [
  {
    title: "Faith & Integrity",
    description:
      "We uphold Islamic values in every aspect of school life, fostering honest and principled individuals.",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in academics, character development, and community service.",
  },
  {
    title: "Compassion",
    description:
      "We nurture empathy, kindness, and social responsibility in our students.",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern teaching methods and technology while staying rooted in tradition.",
  },
  {
    title: "Community",
    description:
      "We build strong partnerships between school, family, and the wider community.",
  },
  {
    title: "Lifelong Learning",
    description:
      "We inspire curiosity and a love for learning that extends beyond the classroom.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ParallaxSection speed={0.15}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="About Dar e Arqam Schools"
              subtitle="A journey of excellence spanning over two decades, shaping the leaders of tomorrow."
            />
            <ScrollReveal>
              <div className="mt-16 max-w-3xl mx-auto text-center">
                <p className="text-lg text-muted dark:text-cream/70 leading-relaxed">
                  Dar e Arqam Schools Karachi extends its unique learning
                  experience to well over 12,000+ students in 50+ branches all
                  across Karachi. Founded with the vision of providing quality
                  education rooted in Islamic values, we have grown into one of
                  Karachi&apos;s most trusted school networks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PhotoDisplay
                  src="/images/students-1.jpg"
                  alt="Dar e Arqam students"
                  aspectRatio="aspect-[4/3]"
                />
                <PhotoDisplay
                  src="/images/students-2.jpg"
                  alt="Dar e Arqam students in uniform"
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1} scale>
                <div
                  className="p-6 rounded-2xl border transition-all hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-accent/5 group cursor-default"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <span className="inline-block w-8 h-0.5 bg-accent mb-4 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-display text-xl text-primary-dark dark:text-cream mb-2">
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
    </>
  );
}
