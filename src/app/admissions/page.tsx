import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import CtaSection from "@/components/CtaSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { CheckCircle, FileText, ClipboardList, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions open for Session 2025-2026 at Dar e Arqam Schools Karachi. Learn about the admission process, test information, and requirements.",
};

const steps = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Submit Application",
    description:
      "Fill out the online application form or visit your nearest campus to collect a form.",
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Entrance Test & Interview",
    description:
      "Prospective students take an age-appropriate entrance assessment followed by a parent interview.",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Confirmation & Enrollment",
    description:
      "Successful candidates receive an offer letter. Complete the fee submission to secure your seat.",
  },
];

const requirements = [
  "Completed application form",
  "Copy of Child's B-Form (CNIC for O-Levels)",
  "2 passport-size photographs",
  "Previous school report card (last 2 years)",
  "Transfer certificate from previous school",
  "Parent/guardian CNIC copies",
];

export default function AdmissionsPage() {
  return (
    <>
      <ParallaxSection speed={0.12}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute top-0 left-0 w-80 h-80 opacity-10">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Admissions Open"
              subtitle="Session 2025-2026 — Give your child the gift of quality education rooted in Islamic values."
            />
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Admission Process"
            subtitle="Three simple steps to join the Dar e Arqam family."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.15} scale>
                <div
                  className="relative p-8 rounded-2xl border text-center group cursor-default"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
                    style={{ backgroundColor: "var(--section-alt)" }}
                  >
                    <span className="text-primary dark:text-accent">{step.icon}</span>
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-primary-dark text-sm font-bold mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl text-primary-dark dark:text-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted dark:text-cream/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <PhotoDisplay
              src="/images/students-3.jpg"
              alt="Dar e Arqam student life"
              aspectRatio="aspect-[21/9]"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block w-12 h-0.5 bg-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight">
                  Requirements
                </h2>
                <ul className="mt-8 space-y-4">
                  {requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-3 text-muted dark:text-cream/70"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-[#063F2D] text-cream relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent rounded-full blur-3xl" />
                </div>
                <div className="relative">
                  <h3 className="font-display text-2xl mb-4">Need Help?</h3>
                  <p className="text-cream/80 mb-6">
                    Our admissions team is here to assist you with any
                    questions.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:021-34811715"
                      className="flex items-center gap-3 text-cream/80 hover:text-accent transition-colors"
                    >
                      <Phone className="w-5 h-5 text-accent" />
                      021-34811715
                    </a>
                    <a
                      href="mailto:admissions@daskhi.org"
                      className="flex items-center gap-3 text-cream/80 hover:text-accent transition-colors"
                    >
                      <Mail className="w-5 h-5 text-accent" />
                      admissions@daskhi.org
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-colors"
                  >
                    Visit Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Apply?"
        description="Begin your child's journey with Dar e Arqam Schools Karachi. Admissions open for Session 2025-2026."
        buttonText="Apply Now"
        buttonHref="/admissions"
      />
    </>
  );
}
