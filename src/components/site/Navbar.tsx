import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Navigation links — each id maps to a section on the page.
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "videos", label: "Videos" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

/** Smooth-scrolls to a section by id. */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add a subtle elevation once the user scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_4px_24px_-12px_oklch(0.7_0.19_12/0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <button
          onClick={() => scrollToId("home")}
          className="font-display text-2xl font-bold tracking-tight"
        >
          <span className="text-primary">.</span>Debapriya
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollToId("contact")}
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 md:inline-block"
        >
          Follow Me
        </button>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                scrollToId(l.id);
                setOpen(false);
              }}
              className="block w-full py-3 text-left text-base font-medium text-foreground/80 hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}