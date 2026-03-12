"use client";
import { useState, FormEvent } from "react";

interface Ticket {
  id: string;
  subject: string;
  status: "Ouvert" | "En cours" | "Résolu";
  date: string;
  priority: "Haute" | "Normale" | "Basse";
}

const initialTickets: Ticket[] = [
  { id: "TKT-042", subject: "L'agent ne répond plus aux messages WhatsApp", status: "En cours", date: "11/03/2026", priority: "Haute" },
  { id: "TKT-041", subject: "Ajouter une intégration avec Notion", status: "Ouvert", date: "09/03/2026", priority: "Normale" },
  { id: "TKT-038", subject: "Modifier les horaires de disponibilité", status: "Résolu", date: "28/02/2026", priority: "Normale" },
  { id: "TKT-035", subject: "Formation complémentaire équipe", status: "Résolu", date: "15/02/2026", priority: "Basse" },
];

const statusColor: Record<string, { bg: string; color: string; border: string }> = {
  "Ouvert": { bg: "rgba(6,182,212,.1)", color: "var(--cl)", border: "rgba(6,182,212,.25)" },
  "En cours": { bg: "rgba(124,58,237,.1)", color: "var(--vl)", border: "rgba(124,58,237,.25)" },
  "Résolu": { bg: "rgba(34,197,94,.1)", color: "var(--green)", border: "rgba(34,197,94,.25)" },
};

const priorityColor: Record<string, string> = {
  "Haute": "#F87171",
  "Normale": "var(--gray)",
  "Basse": "var(--gray2)",
};

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newTicket: Ticket = {
      id: `TKT-${Math.floor(Math.random() * 900 + 100)}`,
      subject,
      status: "Ouvert",
      date: new Date().toLocaleDateString("fr-FR"),
      priority: "Normale",
    };
    setTickets([newTicket, ...tickets]);
    setSubject("");
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div style={{ maxWidth: 800 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 4 }}>Support</h1>
        <p style={{ color: "var(--gray)", fontSize: ".9rem" }}>Ouvrez un ticket ou suivez vos demandes en cours.</p>
      </div>

      <div className="bn" style={{ marginBottom: 20 }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 16 }}>Nouveau ticket</h3>
        {sent && (
          <p style={{ fontSize: ".82rem", color: "var(--green)", background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.2)", borderRadius: 8, padding: "10px 14px", marginBottom: 14 }}>
            ✓ Ticket créé avec succès. Notre équipe vous répond sous 24h.
          </p>
        )}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            required value={subject} onChange={(e) => setSubject(e.target.value)}
            placeholder="Sujet de votre demande"
            style={{ background: "var(--surf)", border: "1px solid var(--bdr)", borderRadius: 10, padding: "10px 14px", color: "var(--w)", fontSize: ".88rem", fontFamily: "inherit" }}
          />
          <textarea
            required value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Décrivez votre problème ou demande…"
            rows={4}
            style={{ background: "var(--surf)", border: "1px solid var(--bdr)", borderRadius: 10, padding: "10px 14px", color: "var(--w)", fontSize: ".88rem", fontFamily: "inherit", resize: "vertical" }}
          />
          <button type="submit" className="btn-p" style={{ alignSelf: "flex-start" }}>Envoyer →</button>
        </form>
      </div>

      <h3 style={{ fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gray2)", marginBottom: 12 }}>Vos tickets</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tickets.map((t) => {
          const sc = statusColor[t.status];
          return (
            <div key={t.id} className="bn" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: ".7rem", color: "var(--gray2)", fontFamily: "monospace", flexShrink: 0 }}>{t.id}</span>
              <span style={{ flex: 1, fontSize: ".9rem", fontWeight: 500 }}>{t.subject}</span>
              <span style={{ fontSize: ".65rem", color: priorityColor[t.priority], flexShrink: 0 }}>● {t.priority}</span>
              <span style={{ fontSize: ".65rem", fontWeight: 700, textTransform: "uppercase", padding: "3px 10px", borderRadius: 100, background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`, flexShrink: 0 }}>
                {t.status}
              </span>
              <span style={{ fontSize: ".72rem", color: "var(--gray2)", flexShrink: 0 }}>{t.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
