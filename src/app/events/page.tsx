import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import ParallaxSection from "@/components/ParallaxSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";

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
      <ParallaxSection speed={0.12}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute top-10 left-10 w-64 h-64 opacity-20">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Events & News"
              subtitle="Stay connected with the latest happenings across all Dar e Arqam campuses."
            />
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <EventCard key={event.title} {...event} index={i} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
