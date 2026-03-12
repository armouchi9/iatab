"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="cta"
      style={{
        background: "linear-gradient(135deg, #1a0533 0%, #0d0d1f 50%, #0a1628 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: 16,
            fontFamily: "Outfit, sans-serif",
          }}
        >
          Votre agent IA, opérationnel en 7 jours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          style={{ color: "#A78BFA", fontSize: 16, marginBottom: 40, letterSpacing: "0.02em" }}
        >
          Audit gratuit · Déploiement sur votre infra · Support inclus
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
        >
          <a
            href="mailto:contact@iatab.fr"
            style={{
              display: "inline-block",
              background: "#FFFFFF",
              color: "#0d0d1f",
              fontWeight: 700,
              fontSize: 17,
              padding: "16px 40px",
              borderRadius: 12,
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 32px rgba(124,58,237,0.35)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 40px rgba(124,58,237,0.5)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 32px rgba(124,58,237,0.35)";
            }}
          >
            Réserver mon appel gratuit →
          </a>

          <p style={{ color: "#6B7280", fontSize: 13, marginTop: 20 }}>
            Sans engagement · Réponse sous 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
