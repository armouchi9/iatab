"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sectors = [
  {
    icon: "🍕",
    sector: "Restaurant · Pizzeria",
    title: "Prise de commande & réservations automatisées",
    body: "Agent IA sur WhatsApp/SMS — gère les commandes, réservations et FAQ 24h/24. Moins de décroché, plus de couverts.",
    tag: "v",
    tagLabel: "Hospitality",
  },
  {
    icon: "🏡",
    sector: "Immobilier",
    title: "Qualification de prospects en temps réel",
    body: "Capture, qualifie et planifie automatiquement. Vos agents reçoivent uniquement des prospects chauds et prêts à visiter.",
    tag: "c",
    tagLabel: "PropTech",
  },
  {
    icon: "🏥",
    sector: "Médical · Paramédical",
    title: "Agenda intelligent & rappels patients",
    body: "Prise de rendez-vous 24/7, rappels automatiques, gestion des absences. Moins de no-show, plus de temps pour vos patients.",
    tag: "v",
    tagLabel: "HealthTech",
  },
  {
    icon: "📊",
    sector: "Comptabilité",
    title: "Saisie et rapprochement automatiques",
    body: "Extraction de données factures, rapprochement bancaire, alertes anomalies. Votre comptable se concentre sur la valeur ajoutée.",
    tag: "c",
    tagLabel: "FinTech",
  },
  {
    icon: "🛍️",
    sector: "Commerce de proximité",
    title: "Support client & fidélisation automatisés",
    body: "FAQ, suivi commandes, programme de fidélité — géré par IA. Répondez à vos clients à toute heure sans effort.",
    tag: "v",
    tagLabel: "Retail",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="gallery" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="sh">
          <span className="stag">Secteurs d&apos;activité</span>
          <h2 className="sh2">Un agent pour <em>chaque métier</em></h2>
          <p className="ssub">Des solutions précises pour les secteurs qui en ont le plus besoin.</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}
        >
          {sectors.map((s) => (
            <motion.div key={s.sector} variants={itemVariants} className="gc" style={{ width: "auto", height: "auto", padding: 24 }}>
              <div className="gc-sect">{s.sector}</div>
              <div style={{ fontSize: "1.8rem", margin: "8px 0" }}>{s.icon}</div>
              <div className="gc-title">{s.title}</div>
              <p style={{ fontSize: ".82rem", color: "var(--gray)", lineHeight: 1.65, marginTop: 8 }}>{s.body}</p>
              <div className="gc-foot" style={{ marginTop: 16 }}>
                <span className={`gc-tag ${s.tag}`}>{s.tagLabel}</span>
                <span className="gc-arr">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
