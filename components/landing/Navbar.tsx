"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#gallery", label: "Cas d'usage" },
  { href: "#hiw", label: "Processus" },
  { href: "#pricing", label: "Tarifs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function scrollTo(id: string) {
    const el = document.querySelector(id);
    if (!el) return;
    window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
  }

  function handleNav(href: string) {
    setOpen(false);
    scrollTo(href);
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mob-nav open"
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <button className="mob-close" onClick={() => setOpen(false)} aria-label="Fermer le menu">✕</button>
            {links.map((l) => (
              <a key={l.href} className="mob-nav-link" href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>
                {l.label}
              </a>
            ))}
            <a className="mob-nav-link" href="#cta" onClick={(e) => { e.preventDefault(); handleNav("#cta"); }}>Appel gratuit →</a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="nav-shell">
        <nav id="nav" className={scrolled ? "scrolled" : ""}>
          <div className="nav-links">
            {links.slice(0, 2).map((l) => (
              <a key={l.href} className="nav-a" href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>{l.label}</a>
            ))}
          </div>
          <a className="nav-logo" href="#">IA Tab</a>
          <div className="nav-links r">
            {links.slice(2).map((l) => (
              <a key={l.href} className="nav-a" href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>{l.label}</a>
            ))}
            <a className="nav-cta" href="#cta" onClick={(e) => { e.preventDefault(); handleNav("#cta"); }}>Appel gratuit →</a>
          </div>
          <button
            className={`burger${open ? " open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>
    </>
  );
}
