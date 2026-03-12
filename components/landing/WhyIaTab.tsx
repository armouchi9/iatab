"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    icon: "🏠",
    tag: "Souveraineté",
    title: "Déployé localement",
    body: "Votre agent IA tourne sur votre propre infrastructure — serveur, NAS ou VPS. Aucune donnée ne quitte vos murs sans votre accord.",
  },
  {
    icon: "🔒",
    tag: "Confidentialité",
    title: "Vos données restent chez vous",
    body: "Zéro dépendance à un cloud tiers. Conformité RGPD native, pas de partage avec des tiers, contrôle total du cycle de vie des données.",
  },
  {
    icon: "⚙️",
    tag: "Sur-mesure",
    title: "Automatisation sur mesure",
    body: "Chaque agent est conçu pour vos processus métier spécifiques. Pas de solution générique — un outil qui s'adapte à votre façon de travailler.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function WhyIaTab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="features" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="sh">
        <span className="stag">Pourquoi IA Tab</span>
        <h2 className="sh2">L&apos;IA locale, <em>sans compromis</em></h2>
        <p className="ssub">Tout ce que vous avez voulu automatiser — sans sacrifier votre souveraineté numérique.</p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={itemVariants} className="bn">
            <div className="bn-icon">{card.icon}</div>
            <div className="bn-tag">{card.tag}</div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
