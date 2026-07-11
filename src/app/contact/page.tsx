import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import PhotoDisplay from "@/components/PhotoDisplay";
import IslamicPattern from "@/components/IslamicPattern";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dar e Arqam Schools Karachi. Visit our central office or call us at 021-34811715.",
};

export default function ContactPage() {
  return (
    <>
      <ParallaxSection speed={0.12}>
        <section className="pt-36 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--section-alt)" }}
          />
          <div className="absolute bottom-0 right-0 w-80 h-80 opacity-20">
            <IslamicPattern />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <SectionHeading
              title="Contact Us"
              subtitle="We'd love to hear from you. Reach out to us anytime."
            />
          </div>
        </section>
      </ParallaxSection>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Address",
                    content: "B9 Gulshan e Iqbal Block 4A, Karachi",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Phone",
                    content: (
                      <a
                        href="tel:021-34811715"
                        className="text-muted dark:text-cream/70 hover:text-primary dark:hover:text-accent transition-colors"
                      >
                        021-34811715
                      </a>
                    ),
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "Email",
                    content: (
                      <a
                        href="mailto:info@daskhi.org"
                        className="text-muted dark:text-cream/70 hover:text-primary dark:hover:text-accent transition-colors"
                      >
                        info@daskhi.org
                      </a>
                    ),
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    title: "Office Hours",
                    content: (
                      <>
                        Monday — Friday: 8:00 AM — 2:00 PM
                        <br />
                        Saturday: 8:00 AM — 12:00 PM
                      </>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: "var(--card)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary-dark dark:text-cream mb-1">
                        {item.title}
                      </h3>
                      <div className="text-muted dark:text-cream/70">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div
                className="p-8 rounded-2xl border"
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
                        className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 transition-colors resize-none"
                      style={{ borderColor: "var(--card-border)" }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-cream font-semibold rounded-xl hover:bg-primary-light dark:hover:bg-primary transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-12">
            <PhotoDisplay
              src="/images/students-2.jpg"
              alt="Dar e Arqam students"
              aspectRatio="aspect-[21/9]"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
