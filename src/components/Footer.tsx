import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Our Campuses", href: "/campuses" },
  { label: "Events", href: "/events" },
];

const programs = [
  { label: "Language Lab", href: "/language-lab" },
  { label: "Hifz Program", href: "/hifz-program" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark dark:bg-[#060606]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-16 pb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-sm shadow-accent/20 group-hover:shadow-accent/40 transition-shadow">
                <BookOpen className="w-5 h-5 text-primary-dark" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg text-cream group-hover:text-accent transition-colors -mb-0.5">
                  Dar e Arqam
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] text-cream/50 uppercase">
                  Schools Karachi
                </span>
              </div>
            </Link>
            <p className="text-cream/55 text-sm leading-relaxed">
              Dar e Arqam Schools Karachi extends its unique learning experience
              to well over 12,000+ students in 50+ branches all across Karachi,
              nurturing academic excellence and Islamic values.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base text-cream mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/55 hover:text-accent text-sm transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base text-cream mb-5">Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/55 hover:text-accent text-sm transition-colors flex items-center gap-1.5 group w-fit"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base text-cream mb-5">Contact</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5 text-cream/55">
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
                  className="flex items-center gap-2.5 text-cream/55 hover:text-accent transition-colors w-fit"
                >
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  021-34811715
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@daskhi.org"
                  className="flex items-center gap-2.5 text-cream/55 hover:text-accent transition-colors w-fit"
                >
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  info@daskhi.org
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-cream/55">
                <span className="w-4 shrink-0" />
                <span>Mon–Fri: 7:30 AM – 1:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/[0.07]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 text-xs text-cream/35">
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
