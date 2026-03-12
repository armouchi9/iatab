"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Audit de vos besoins",
    body: "Un appel de 30 minutes pour comprendre vos processus, vos douleurs et vos objectifs. On définit ensemble le périmètre de votre agent IA.",
    checks: ["Analyse des flux existants", "Identification des gains rapides", "Définition du ROI attendu"],
    visual: "audit",
  },
  {
    num: "02",
    title: "Déploiement en 3 à 7 jours",
    body: "On installe et configure votre agent directement sur votre infrastructure. Aucune donnée ne transite par nos serveurs.",
    checks: ["Installation sur votre infra", "Intégration à vos outils (CRM, agenda, ERP)", "Tests et validation avec vous"],
    visual: "deploy",
  },
  {
    num: "03",
    title: "Formation & support continu",
    body: "Une formation complète pour votre équipe et un support réactif. Votre agent évolue avec vos besoins.",
    checks: ["Formation de votre équipe (2h)", "Support prioritaire 5j/7", "Évolutions et ajustements inclus"],
    visual: "support",
  },
];

function VisualAudit() {
  return (
    <div className="svis">
      <div className="dash-top">
        <span className="dash-name">Analyse en cours…</span>
        <span className="dash-live">En direct</span>
      </div>
      {["Flux de commandes identifié", "3 processus automatisables", "Gain estimé : 14h/semaine"].map((t, i) => (
        <div key={i} className="chk" style={{ background: "var(--surf)", borderRadius: 10, padding: "10px 14px", border: "1px solid var(--bdr)" }}>
          <span className="chk-i">✓</span>
          <span style={{ fontSize: ".87rem" }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

function VisualDeploy() {
  return (
    <div className="svis">
      <div className="term" style={{ flex: 1 }}>
        <div className="term-bar">
          <div className="term-dots"><div className="tdot2 r" /><div className="tdot2 y" /><div className="tdot2 g" /></div>
          <span className="term-ttl">iatab-deploy</span>
        </div>
        <div className="term-body">
          <div className="tl"><span className="tp">→</span><span className="tcmd">Connexion serveur…</span></div>
          <div className="tl"><span className="tok">✓ Agent déployé avec succès</span></div>
          <div className="tl"><span className="tok">✓ Intégrations configurées</span></div>
          <div className="tl"><span className="tp">$</span><span className="tcmd">status<span className="tcur" /></span></div>
        </div>
      </div>
    </div>
  );
}

function VisualSupport() {
  return (
    <div className="svis">
      {[
        { from: "ai", text: "Votre agent est opérationnel. Vos équipes ont été formées." },
        { from: "user", text: "Peut-on ajouter la gestion des rappels SMS ?" },
        { from: "ai", text: "Bien sûr ! C'est inclus dans votre formule. Déploiement dans 24h." },
      ].map((m, i) => (
        <div key={i} className={`cmsg ${m.from === "user" ? "usr" : ""}`}>
          <div className={`cav ${m.from === "ai" ? "ai" : "u"}`}>{m.from === "ai" ? "IA" : "M"}</div>
          <div className={`cbub ${m.from === "ai" ? "ai" : "u"}`}>{m.text}</div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="hiw" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="hiw-hdr">
        <span className="stag">Processus</span>
        <h2 className="sh2">Opérationnel en <em>7 jours</em></h2>
        <p className="ssub">Une méthode éprouvée, de l&apos;audit au support.</p>
      </div>

      <div ref={ref} className="steps">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className={`step${i % 2 === 1 ? " rev" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="stxt">
              <div className="snum">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="checks">
                {step.checks.map((c) => (
                  <div key={c} className="chk"><span className="chk-i">✓</span>{c}</div>
                ))}
              </div>
            </div>
            {step.visual === "audit" ? <VisualAudit /> : step.visual === "deploy" ? <VisualDeploy /> : <VisualSupport />}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
