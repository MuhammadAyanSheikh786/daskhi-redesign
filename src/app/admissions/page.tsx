import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { CheckCircle, FileText, ClipboardList, Mail, Phone, ChevronDown, GraduationCap, BookOpen, Award } from "lucide-react";

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

const faqs = [
  {
    q: "What is the age requirement for admission?",
    a: "Admission is open for Playgroup to O-Levels. Age requirements vary by grade. Please contact us for specific age criteria for your child's grade level.",
  },
  {
    q: "Is there an entrance test?",
    a: "Yes, all prospective students are required to take an age-appropriate entrance assessment. This helps us place your child in the right class.",
  },
  {
    q: "What documents are needed at the time of application?",
    a: "You'll need the completed application form, child's B-Form, passport-size photographs, previous school report cards, transfer certificate, and parent CNIC copies.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes, Dar e Arqam Schools offers merit-based scholarships and need-based financial assistance. Please inquire at your nearest campus for details.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
                <GraduationCap className="w-4 h-4" />
                Session 2025-2026
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                Admissions{" "}
                <span className="text-accent">Open</span>
              </h1>
              <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed max-w-2xl mx-auto">
                Give your child the gift of quality education rooted in Islamic values.
                Join the Dar e Arqam family today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-cream font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
                >
                  Enquire Now <Mail className="w-4 h-4" />
                </Link>
                <Link
                  href="tel:021-34811715"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-primary/10 dark:border-cream/10 text-primary-dark dark:text-cream font-semibold rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Admission Process"
            subtitle="Three simple steps to join the Dar e Arqam family."
          />
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.15}>
                  <div className="relative text-center">
                    <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-cream shadow-lg shadow-primary/20 mb-6">
                      {step.icon}
                    </div>
                    <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center -mt-10 mb-4 relative z-20 border-4 border-[var(--section-alt)]">
                      <span className="text-primary-dark font-bold text-sm">{i + 1}</span>
                    </div>
                    <h3 className="font-display text-xl text-primary-dark dark:text-cream mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted dark:text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block w-12 h-0.5 bg-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl text-primary-dark dark:text-cream leading-tight mb-8">
                  Requirements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {requirements.map((req) => (
                    <div
                      key={req}
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--card-border)",
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted dark:text-cream/70">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 rounded-2xl border overflow-hidden relative"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <h3 className="font-display text-2xl text-primary-dark dark:text-cream mb-6">
                  Fee Structure
                </h3>
                <p className="text-muted dark:text-cream/60 text-sm mb-6">
                  For detailed fee structure information, please contact your nearest campus or our central admissions office.
                </p>
                <div className="space-y-3">
                  {[
                    { grade: "Playgroup - Nursery", tuition: "Contact for details" },
                    { grade: "KG - Grade 5", tuition: "Contact for details" },
                    { grade: "Grade 6 - O-Levels", tuition: "Contact for details" },
                    { grade: "Hifz Program", tuition: "Contact for details" },
                  ].map((item) => (
                    <div
                      key={item.grade}
                      className="flex items-center justify-between py-3 px-4 rounded-xl bg-primary/[0.02] dark:bg-white/[0.02] border border-primary/5 dark:border-cream/5"
                    >
                      <span className="font-medium text-primary-dark dark:text-cream text-sm">{item.grade}</span>
                      <span className="text-accent text-sm font-medium">{item.tuition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
          />
          <div className="mt-16 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <details className="group rounded-2xl border overflow-hidden transition-all"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                    <span className="font-display text-lg text-primary-dark dark:text-cream pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown className="w-5 h-5 text-accent shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-muted dark:text-cream/60 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PhotoDisplay
                src="/images/students-3.jpg"
                alt="Dar e Arqam student life"
                aspectRatio="aspect-[4/3]"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-cream relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08]">
                  <IslamicPattern className="w-full h-full" />
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-4">Need Help?</h3>
                  <p className="text-cream/80 mb-8 leading-relaxed">
                    Our admissions team is here to assist you with any questions about the
                    application process, fee structure, or campus locations.
                  </p>
                  <div className="space-y-4 mb-8">
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-full hover:bg-accent-light transition-colors"
                  >
                    Visit Our Office
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
