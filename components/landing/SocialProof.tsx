"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: "12+", numeric: 12, suffix: "+", label: "Entreprises déployées" },
  { value: "7 jours", numeric: 7, suffix: " jours", label: "Délai de mise en service" },
  { value: "97%", numeric: 97, suffix: "%", label: "Taux de satisfaction clients" },
  { value: "0", numeric: 0, suffix: "", label: "Donnée hébergée dans le cloud" },
];

function CountUp({ numeric, suffix, active }: { numeric: number; suffix: string; active: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    if (numeric === 0) { setDisplayed(0); return; }
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * numeric));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, [active, numeric]);

  return <>{displayed}{suffix}</>;
}

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ background: "#13131F", padding: "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", color: "#9CA3AF", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 48 }}
        >
          En chiffres
        </motion.p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              style={{
                background: "#1A1A2E",
                borderRadius: 16,
                border: "1px solid rgba(124,58,237,0.15)",
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <div style={{
                fontSize: "clamp(2rem, 5vw, 2.75rem)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
                marginBottom: 12,
                fontFamily: "Outfit, sans-serif",
              }}>
                <CountUp numeric={stat.numeric} suffix={stat.suffix} active={inView} />
              </div>
              <p style={{ color: "#9CA3AF", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
