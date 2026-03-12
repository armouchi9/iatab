"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.23, 1, 0.32, 1] },
});

const tickerItems = [
  { tag: "Restaurant", label: "Agent prise de commande IA", sub: "Réservations auto · WhatsApp", type: "v" },
  { tag: "Immobilier", label: "Qualification prospects", sub: "CRM auto · relances", type: "c" },
  { tag: "Médical", label: "Agenda intelligent", sub: "Rappels patients · suivi", type: "v" },
  { tag: "Compta", label: "Saisie automatique", sub: "Factures · rapprochement", type: "c" },
  { tag: "Commerce", label: "Support client 24/7", sub: "FAQ · tickets · SAV", type: "v" },
  { tag: "Restaurant", label: "Agent prise de commande IA", sub: "Réservations auto · WhatsApp", type: "v" },
  { tag: "Immobilier", label: "Qualification prospects", sub: "CRM auto · relances", type: "c" },
  { tag: "Médical", label: "Agenda intelligent", sub: "Rappels patients · suivi", type: "v" },
  { tag: "Compta", label: "Saisie automatique", sub: "Factures · rapprochement", type: "c" },
  { tag: "Commerce", label: "Support client 24/7", sub: "FAQ · tickets · SAV", type: "v" },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <motion.p className="badge" {...fadeUp(0.1)}>
        <span className="badge-dot" aria-hidden="true" />
        Sans abonnement SaaS · Déploiement en 7 jours
      </motion.p>

      <motion.h1 className="h1" {...fadeUp(0.2)}>
        Automatisez votre<br />
        <span className="rw" aria-label="tables réservées automatiquement avec l'IA">
          <span className="rw-inner" aria-hidden="true">
            <span>tables réservées automatiquement</span>
            <span>prospects qualifiés en temps réel</span>
            <span>patients rappelés sans effort</span>
            <span>factures saisies à votre place</span>
            <span>clients répondus 24h/24</span>
            <span>tables réservées automatiquement</span>
          </span>
        </span>
        <em> avec l&apos;IA</em>
      </motion.h1>

      <motion.p className="sub" {...fadeUp(0.35)}>
        Agents IA sur-mesure pour TPE et PME — installés sur votre infrastructure,
        sans abonnement SaaS, opérationnels en moins de 7 jours.
      </motion.p>

      <motion.div className="ctas" {...fadeUp(0.5)}>
        <a className="btn-p" href="#cta">Réserver un appel gratuit →</a>
        <a className="btn-g" href="#hiw">Voir comment ça marche</a>
      </motion.div>

      <motion.div className="ticker-shell" {...fadeUp(0.65)}>
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <div key={i} className="tc">
              <div className={`tc-tag t${item.type}`}>
                <span className={`tdot ${item.type}`} />
                {item.tag}
              </div>
              <div className="tc-title">{item.label}</div>
              <div className="tc-sub">{item.sub}</div>
              <div className="tc-bar-wrap">
                <div className="tc-bar">
                  <div className="tc-fill" style={{ width: "72%", background: item.type === "v" ? "linear-gradient(90deg,#7C3AED,#9D5FFF)" : "linear-gradient(90deg,#06B6D4,#38D9F5)" }} />
                </div>
                <div className="tc-stat"><span>Efficacité</span><span>72%</span></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
