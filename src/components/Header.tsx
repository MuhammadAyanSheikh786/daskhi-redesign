"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const topBarLinks = [
  { icon: Phone, label: "021-34811715", href: "tel:021-34811715" },
  { icon: Mail, label: "info@daskhi.org", href: "mailto:info@daskhi.org" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/campuses", label: "Campuses" },
  { href: "/events", label: "Events" },
  { href: "/language-lab", label: "Language Lab" },
  { href: "/hifz-program", label: "Hifz Program" },
  { href: "/contact", label: "Contact" },
];

const sidebarVariants = {
  open: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  closed: {
    x: "100%",
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-primary/5 dark:shadow-black/20" : ""
      }`}
      style={{ backgroundColor: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
    >
      {!scrolled && (
        <div className="hidden lg:block border-b border-primary/5 dark:border-cream/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end gap-6 py-1.5">
              {topBarLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-muted hover:text-primary dark:hover:text-accent transition-colors"
                >
                  <item.icon className="w-3 h-3" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-3"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-sm shadow-primary/20"
          >
            <BookOpen className="w-4 h-4 text-cream" />
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base text-primary-dark dark:text-cream group-hover:text-primary dark:group-hover:text-accent transition-colors -mb-0.5">
              Dar e Arqam
            </span>
            <span className="text-[10px] font-medium tracking-[0.15em] text-muted uppercase">
              Schools Karachi
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-primary dark:text-accent"
                    : "text-muted hover:text-primary-dark dark:hover:text-cream"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring" as const, stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/admissions"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-cream text-sm font-semibold rounded-xl hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
          >
            Apply Now
            <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center text-primary-dark dark:text-cream hover:bg-primary/5 dark:hover:bg-cream/5 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[57px] lg:hidden bg-ink/50 backdrop-blur-sm z-40"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-72 max-w-[85vw] overflow-y-auto"
              style={{ backgroundColor: "var(--nav-bg)", backdropFilter: "blur(24px)" }}
            >
              <div className="px-4 py-4 space-y-1">
                <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl bg-primary/5 dark:bg-cream/[0.02]">
                  {topBarLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-1.5 text-xs text-muted hover:text-primary dark:hover:text-accent transition-colors"
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.label}
                    </a>
                  ))}
                </div>
                {navLinks.map((link, i) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"
                            : "text-muted hover:bg-primary/5 dark:hover:bg-cream/[0.03] hover:text-primary-dark dark:hover:text-cream"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="pt-2 px-4">
                  <Link
                    href="/admissions"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-cream text-sm font-semibold rounded-xl hover:bg-primary-light transition-all"
                  >
                    Apply Now
                    <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                  </Link>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
