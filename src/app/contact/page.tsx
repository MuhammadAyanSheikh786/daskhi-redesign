import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import IslamicPattern from "@/components/IslamicPattern";
import CtaSection from "@/components/CtaSection";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Video, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dar e Arqam Schools Karachi. Visit our central office or call us at 021-34811715.",
};

const contactItems = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    content: "B9 Gulshan e Iqbal Block 4A, Karachi",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    content: "021-34811715",
    href: "tel:021-34811715",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    content: "info@daskhi.org",
    href: "mailto:info@daskhi.org",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Office Hours",
    content: "Mon-Fri: 8:00 AM — 2:00 PM\nSat: 8:00 AM — 12:00 PM",
    color: "from-purple-500 to-purple-600",
  },
];

const socialLinks = [
  { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", href: "#" },
  { icon: <Globe className="w-5 h-5" />, label: "Facebook", href: "#" },
  { icon: <Video className="w-5 h-5" />, label: "YouTube", href: "#" },
  { icon: <Camera className="w-5 h-5" />, label: "Instagram", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--section-alt)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        <div className="absolute -bottom-10 left-0 right-0 h-20 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 1440 80" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.06] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
                <Mail className="w-4 h-4" />
                Get in Touch
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                Contact{" "}
                <span className="text-accent">Us</span>
              </h1>
              <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed max-w-2xl mx-auto">
                We&apos;d love to hear from you. Whether you have a question about admissions,
                programs, or anything else — our team is ready to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
            {contactItems.map((item) => (
              <ScrollReveal key={item.title}>
                <div
                  className="group flex items-start gap-4 p-6 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted dark:text-cream/70 hover:text-primary dark:hover:text-accent transition-colors text-sm"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <div className="text-muted dark:text-cream/70 text-sm whitespace-pre-line">
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div
                className="p-8 rounded-2xl border h-full"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <h3 className="font-display text-2xl text-primary-dark dark:text-cream mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-muted dark:text-cream/60 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-all"
                        style={{ borderColor: "var(--card-border)" }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-muted dark:text-cream/60 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-all"
                        style={{ borderColor: "var(--card-border)" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-muted dark:text-cream/60 mb-1.5"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-all"
                      style={{ borderColor: "var(--card-border)" }}
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-muted dark:text-cream/60 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-all resize-none"
                      style={{ borderColor: "var(--card-border)" }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-cream font-semibold rounded-xl hover:bg-primary-light transition-all"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div
                className="p-8 rounded-2xl border h-full flex flex-col"
                style={{
                  backgroundColor: "var(--card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <h3 className="font-display text-2xl text-primary-dark dark:text-cream mb-6">
                  Our Location
                </h3>
                <div className="flex-1 rounded-xl bg-primary/[0.02] dark:bg-white/[0.02] border border-primary/5 dark:border-cream/5 flex items-center justify-center min-h-[300px]">
                  <div className="text-center p-8">
                    <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
                    <p className="text-muted dark:text-cream/60 text-sm">
                      B9 Gulshan e Iqbal Block 4A, Karachi
                    </p>
                    <Link
                      href="https://maps.google.com"
                      className="inline-flex items-center gap-1 text-primary dark:text-accent text-sm font-medium hover:underline mt-3"
                    >
                      Open in Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Follow Us"
            subtitle="Stay connected with Dar e Arqam Schools on social media."
          />
          <ScrollReveal className="mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <span className="text-primary dark:text-accent group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium text-primary-dark dark:text-cream group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection
        title="Ready to Begin the Journey?"
        description="Give your child the gift of quality education rooted in Islamic values. Admissions open for Session 2025-2026."
        buttonText="Apply Now"
        buttonHref="/admissions"
      />
    </>
  );
}
