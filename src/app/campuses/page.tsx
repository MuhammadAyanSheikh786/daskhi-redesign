import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import TiltCard from "@/components/TiltCard";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Campuses",
  description:
    "Dar e Arqam Schools has 50+ branches across Karachi. Find a campus near you.",
};

const zones = [
  {
    name: "Gulshan & Gulistan-e-Jauhar",
    branches: 12,
    areas: "Gulshan-e-Iqbal, Gulistan-e-Jauhar, PECHS, F.B. Area",
  },
  {
    name: "North & Central Karachi",
    branches: 14,
    areas: "North Nazimabad, Nazimabad, Federal B Area, Liaquatabad",
  },
  {
    name: "East & Malir",
    branches: 10,
    areas: "Malir, Shah Faisal Colony, Landhi, Korangi",
  },
  {
    name: "West & Orangi",
    branches: 8,
    areas: "Orangi Town, Baldia Town, Manghopir",
  },
  {
    name: "South Karachi",
    branches: 6,
    areas: "Clifton, Defence, Saddar, Garden",
  },
  {
    name: "New Karachi & Surroundings",
    branches: 5,
    areas: "New Karachi, Surjani Town, North Karachi",
  },
];

const campusFeatures = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "50+ Branches",
    desc: "Spread across all major zones of Karachi",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "12,000+ Students",
    desc: "Growing community of learners",
  },
];

export default function CampusesPage() {
  return (
    <>
      <ParallaxSection speed={0.12}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute top-20 right-0 w-96 h-96 opacity-20">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Our Campuses"
              subtitle="50+ branches across Karachi — find a Dar e Arqam campus near you."
            />
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {campusFeatures.map((f) => (
              <ScrollReveal key={f.label}>
                <TiltCard tiltDegree={4}>
                  <div
                    className="flex items-center gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-display text-lg text-primary-dark dark:text-cream">
                        {f.label}
                      </div>
                      <div className="text-sm text-muted dark:text-cream/60">{f.desc}</div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <SectionHeading
            title="Campuses by Zone"
            subtitle="Dar e Arqam Schools are organized across six major zones of Karachi."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, i) => (
              <ScrollReveal key={zone.name} delay={i * 0.08} scale>
                <TiltCard tiltDegree={5}>
                  <div
                    className="p-6 rounded-2xl border transition-all group cursor-default"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-lg text-primary-dark dark:text-cream group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {zone.name}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-accent/10 dark:bg-accent/15 text-accent text-sm font-medium">
                        {zone.branches} branches
                      </span>
                    </div>
                    <p className="text-muted dark:text-cream/60 text-sm">{zone.areas}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <PhotoDisplay
              src="/images/students-1.jpg"
              alt="Dar e Arqam students"
              aspectRatio="aspect-[21/9]"
            />
          </ScrollReveal>

          <ScrollReveal>
            <div
              className="mt-12 p-8 rounded-2xl border text-center"
              style={{
                backgroundColor: "var(--section-alt)",
                borderColor: "var(--card-border)",
              }}
            >
              <p className="text-muted dark:text-cream/70">
                For the exact location of your nearest branch, please{" "}
                <a
                  href="tel:021-34811715"
                  className="text-primary dark:text-accent font-medium hover:text-accent dark:hover:text-accent-light transition-colors"
                >
                  call us at 021-34811715
                </a>{" "}
                or{" "}
                <a
                  href="/contact"
                  className="text-primary dark:text-accent font-medium hover:text-accent dark:hover:text-accent-light transition-colors"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
