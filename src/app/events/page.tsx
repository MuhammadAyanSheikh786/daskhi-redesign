import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import ScrollReveal from "@/components/ScrollReveal";
import CtaSection from "@/components/CtaSection";
import { CalendarDays, Sparkles, Bell, ArrowRight, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & News",
  description:
    "Stay updated with the latest events and news from Dar e Arqam Schools Karachi.",
};

const events = [
  {
    title: "Annual Sports Gala 2025",
    date: "March 15, 2025",
    description:
      "Students from all 50+ branches participated in the annual sports gala, showcasing their athletic talents and team spirit.",
  },
  {
    title: "Quran Competition Results",
    date: "February 28, 2025",
    description:
      "Dar e Arqam Schools held its annual Quran recitation and memorization competition. Over 500 students participated across all branches.",
  },
  {
    title: "Parent-Teacher Conference",
    date: "February 10, 2025",
    description:
      "Our biannual parent-teacher conference saw record attendance as parents engaged with faculty about student progress.",
  },
  {
    title: "Science Exhibition 2025",
    date: "January 25, 2025",
    description:
      "Young scientists from Dar e Arqam Schools presented innovative projects at the inter-branch science exhibition.",
  },
  {
    title: "New Branch Opening — Gulshan Block 7",
    date: "January 5, 2025",
    description:
      "We are excited to announce the opening of our newest campus in Gulshan-e-Iqbal Block 7, expanding our network to 50+ branches.",
  },
  {
    title: "Admissions Open Day 2025-2026",
    date: "December 20, 2024",
    description:
      "Prospective parents visited our campuses for the annual Open Day event, touring facilities and meeting faculty.",
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-accent/[0.02] to-transparent" />
        <div className="absolute top-10 right-10 w-72 h-72 opacity-[0.04] pointer-events-none">
          <IslamicPattern />
        </div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <CalendarDays className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">Stay Connected</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-dark dark:text-cream leading-[1.1] tracking-tight">
                Events &{" "}
                <span className="text-accent">News</span>
              </h1>
              <p className="mt-6 text-lg text-muted dark:text-cream/70 leading-relaxed max-w-2xl mx-auto">
                Stay connected with the latest happenings across all Dar e Arqam campuses.
                From academic achievements to community celebrations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Events"
            subtitle="Catch up on the most recent activities and announcements."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <EventCard key={event.title} {...event} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--section-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Event Gallery"
            subtitle="Moments captured from our vibrant school events."
          />
          <ScrollReveal className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam students at an event"
                aspectRatio="aspect-[4/3]"
              />
              <PhotoDisplay
                src="/images/students-2.jpg"
                alt="Dar e Arqam students"
                aspectRatio="aspect-[4/3]"
              />
              <PhotoDisplay
                src="/images/students-3.jpg"
                alt="Dar e Arqam student portrait"
                aspectRatio="aspect-[4/3]"
              />
              <PhotoDisplay
                src="/images/students-1.jpg"
                alt="Dar e Arqam students group"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 border text-center"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--card-border)",
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none">
                <IslamicPattern />
              </div>
              <div className="relative max-w-xl mx-auto">
                <Bell className="w-10 h-10 text-accent mx-auto mb-4" />
                <h2 className="font-display text-2xl md:text-3xl text-primary-dark dark:text-cream mb-3">
                  Stay Updated
                </h2>
                <p className="text-muted dark:text-cream/60 mb-6">
                  Subscribe to receive the latest news and event announcements directly in your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-all text-sm"
                    style={{ borderColor: "var(--card-border)" }}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-cream font-semibold rounded-xl hover:bg-primary-light transition-all shrink-0"
                  >
                    Subscribe <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection
        title="Be Part of Our Community"
        description="Join Dar e Arqam Schools and give your child access to a world of opportunities, events, and excellence."
        buttonText="Apply Now"
        buttonHref="/admissions"
      />
    </>
  );
}
