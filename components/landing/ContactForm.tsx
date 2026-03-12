"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

const sectors = [
  "Restaurant / Hôtellerie",
  "Immobilier",
  "Médical / Santé",
  "Comptabilité / Finance",
  "Commerce / E-commerce",
  "Juridique",
  "Autre",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#1A1A2E",
  border: "1px solid rgba(124,58,237,0.2)",
  borderRadius: 10,
  padding: "12px 16px",
  color: "#F9FAFB",
  fontSize: 15,
  fontFamily: "Outfit, sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#9CA3AF",
  fontSize: 13,
  marginBottom: 6,
  fontWeight: 500,
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ prenom: "", email: "", secteur: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("https://formspree.io/f/xpwzkyba", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ prenom: "", email: "", secteur: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" style={{ padding: "80px 24px", background: "#0E0E1A" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <p style={{ textAlign: "center", color: "#9CA3AF", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Contact
          </p>
          <h2 style={{ textAlign: "center", color: "#F9FAFB", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, marginBottom: 40, fontFamily: "Outfit, sans-serif" }}>
            Discutons de votre projet
          </h2>

          {state === "success" ? (
            <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 12, padding: "32px 24px", textAlign: "center", color: "#34D399" }}>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Message envoyé ✓</p>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>Nous vous répondons sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                <div>
                  <label htmlFor="prenom" style={labelStyle}>Prénom</label>
                  <input id="prenom" name="prenom" type="text" required value={form.prenom} onChange={handleChange} style={inputStyle} placeholder="Jean" />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="jean@entreprise.fr" />
                </div>
              </div>

              <div>
                <label htmlFor="secteur" style={labelStyle}>Secteur d&apos;activité</label>
                <select id="secteur" name="secteur" required value={form.secteur} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="" disabled>Choisissez votre secteur</option>
                  {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical", minHeight: 100 }} placeholder="Décrivez votre besoin..." />
              </div>

              {state === "error" && (
                <p style={{ color: "#F87171", fontSize: 13, textAlign: "center" }}>Une erreur est survenue. Veuillez réessayer.</p>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "Outfit, sans-serif",
                  cursor: state === "loading" ? "not-allowed" : "pointer",
                  opacity: state === "loading" ? 0.7 : 1,
                  transition: "opacity 0.2s, transform 0.2s",
                  alignSelf: "center",
                  minWidth: 200,
                }}
              >
                {state === "loading" ? "Envoi en cours…" : "Envoyer le message →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
