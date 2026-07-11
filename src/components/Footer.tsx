import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Admissions", href: "/admissions" },
      { label: "Our Campuses", href: "/campuses" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Language Lab", href: "/language-lab" },
      { label: "Hifz Program", href: "/hifz-program" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark dark:bg-[#060606] text-cream/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-dark" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl text-cream">
                  Dar e Arqam
                </span>
                <span className="text-[11px] font-medium tracking-widest text-cream/60 uppercase">
                  Schools Karachi
                </span>
              </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mt-3">
              Dar e Arqam Schools Karachi extends its unique learning experience
              to well over 12,000+ students in 50+ branches all across Karachi.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg text-cream mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/60 hover:text-accent text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg text-cream mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-cream/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>
                  B9 Gulshan e Iqbal Block 4A,
                  <br />
                  Karachi
                </span>
              </li>
              <li>
                <a
                  href="tel:021-34811715"
                  className="flex items-center gap-2 text-cream/60 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  021-34811715
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@daskhi.org"
                  className="flex items-center gap-2 text-cream/60 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  info@daskhi.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} Dar e Arqam Schools Karachi. All
            rights reserved.
          </p>
          <p>Designed with care for the DAS community.</p>
        </div>
      </div>
    </footer>
  );
}
