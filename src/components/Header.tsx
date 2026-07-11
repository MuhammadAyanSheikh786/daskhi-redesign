"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 shadow-lg shadow-primary/5 dark:shadow-primary/10"
          : "py-5"
      }`}
      style={{ backgroundColor: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0"
          >
            <BookOpen className="w-4 h-4 text-cream" />
          </motion.div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg text-primary-dark dark:text-cream group-hover:text-primary dark:group-hover:text-accent transition-colors">
              Dar e Arqam
            </span>
            <span className="text-[10px] font-medium tracking-widest text-muted uppercase">
              Schools Karachi
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
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
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent dark:bg-accent rounded-full"
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
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-cream text-sm font-semibold rounded-full hover:bg-primary-light dark:hover:bg-primary transition-all hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-dark dark:text-cream hover:bg-primary/5 dark:hover:bg-cream/5 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-primary/5 dark:border-accent/5"
            style={{ backgroundColor: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent"
                        : "text-muted hover:bg-primary/5 dark:hover:bg-cream/5 hover:text-primary-dark dark:hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/admissions"
                className="block px-4 py-3 mt-2 bg-primary text-cream text-sm font-semibold rounded-xl text-center"
              >
                Apply Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
