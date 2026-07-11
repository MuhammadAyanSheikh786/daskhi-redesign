import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import CtaSection from "@/components/CtaSection";
import { MapPin, Users, Building2, Phone, Mail, ChevronRight, School, ArrowRight } from "lucide-react";

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
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "North & Central Karachi",
    branches: 14,
    areas: "North Nazimabad, Nazimabad, Federal B Area, Liaquatabad",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "East & Malir",
    branches: 10,
    areas: "Malir, Shah Faisal Colony, Landhi, Korangi",
    color: "from-amber-500 to-amber-600",
  },
  {
    name: "West & Orangi",
    branches: 8,
    areas: "Orangi Town, Baldia Town, Manghopir",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "South Karachi",
    branches: 6,
    areas: "Clifton, Defence, Saddar, Garden",
    color: "from-rose-500 to-rose-600",
  },
  {
    name: "New Karachi & Surroundings",
    branches: 5,
    areas: "New Karachi, Surjani Town, North Karachi",
    color: "from-cyan-500 to-cyan-600",
  },
];

const campusFeatures = [
  {
    icon: <Building2 className="w-6 h-6" />,
    label: "50+ Branches",
    desc: "Spread across all major zones of Karachi",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "12,000+ Students",
    desc: "Growing community of learners",
  },
  {
    icon: <School className="w-6 h-6" />,
    label: "Quality Education",
    desc: "Consistent standards across all campuses",
  },
];

export default function CampusesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--section-alt)" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <IslamicPattern className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent text-sm font-medium border border-primary/10 dark:border-accent/10 mb-6">
                  <MapPin className="w-4 h-4" />
                  Find a Campus Near You
                </span>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                  Our{" "}
                  <span className="text-accent">Campuses</span>
                </h1>
                <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed max-w-xl">
                  50+ branches across all major zones of Karachi. Quality education
                  rooted in Islamic values, now closer to home.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="tel:021-34811715"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-all"
                  >
                    <Phone className="w-4 h-4" /> Call for Location
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-primary/10 dark:border-cream/10 text-primary-dark dark:text-cream font-semibold rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
                <div className="relative p-4 md:p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {campusFeatures.map((f) => (
                      <div
                        key={f.label}
                        className="p-4 md:p-5 rounded-2xl border backdrop-blur-sm"
                        style={{
                          backgroundColor: "var(--card)",
                          borderColor: "var(--card-border)",
                        }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent mb-3">
                          {f.icon}
                        </div>
                        <div className="font-display text-lg text-primary-dark dark:text-cream">
                          {f.label}
                        </div>
                        <div className="text-xs text-muted dark:text-cream/60">{f.desc}</div>
                      </div>
                    ))}
                    <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-cream flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-display text-2xl md:text-3xl">25+</div>
                        <div className="text-xs text-cream/70">Years of Excellence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Campuses by Zone"
            subtitle="Dar e Arqam Schools are organized across six major zones of Karachi."
          />
          <div className="mt-16 space-y-4">
            {zones.map((zone, i) => (
              <ScrollReveal key={zone.name} delay={i * 0.08}>
                <div
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-lg cursor-default"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${zone.color} flex items-center justify-center text-white shrink-0`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {zone.name}
                    </h3>
                    <p className="text-sm text-muted dark:text-cream/60">{zone.areas}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent/15 text-accent text-sm font-medium border border-accent/10">
                      {zone.branches} branches
                    </span>
                    <ChevronRight className="w-5 h-5 text-muted/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="absolute top-0 left-0 w-80 h-80 opacity-[0.04] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            title="Why Our Campuses Stand Out"
            subtitle="Consistent quality and Islamic values across every branch."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <School className="w-6 h-6" />, title: "Standardized Curriculum", desc: "Same high-quality curriculum across all 50+ branches ensuring consistency." },
              { icon: <Users className="w-6 h-6" />, title: "Qualified Faculty", desc: "Trained and experienced teachers dedicated to student success." },
              { icon: <Building2 className="w-6 h-6" />, title: "Modern Facilities", desc: "Well-equipped classrooms, labs, and activity areas at every campus." },
              { icon: <MapPin className="w-6 h-6" />, title: "Accessible Locations", desc: "Strategically located branches for easy access from any part of Karachi." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary dark:text-accent mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-2">{item.title}</h3>
                  <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <PhotoDisplay
              src="/images/students-1.jpg"
              alt="Dar e Arqam students"
              aspectRatio="aspect-[21/9]"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="p-8 md:p-10 rounded-2xl border text-center"
              style={{
                backgroundColor: "var(--section-alt)",
                borderColor: "var(--card-border)",
              }}
            >
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl text-primary-dark dark:text-cream mb-3">
                Find Your Nearest Campus
              </h3>
              <p className="text-muted dark:text-cream/70 mb-6 max-w-xl mx-auto">
                For the exact location of your nearest branch, please reach out to our
                admissions team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:021-34811715"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-colors"
                >
                  <Phone className="w-4 h-4" /> 021-34811715
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-colors"
                >
                  <Mail className="w-4 h-4" /> Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection
        title="Find a Campus Near You"
        description="Join the Dar e Arqam family at any of our 50+ branches across Karachi."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
