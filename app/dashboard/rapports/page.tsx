const reports = [
  { name: "Rapport mensuel — Février 2026", date: "01/03/2026", size: "1.2 MB", status: "Disponible" },
  { name: "Rapport mensuel — Janvier 2026", date: "01/02/2026", size: "980 KB", status: "Disponible" },
  { name: "Rapport mensuel — Décembre 2025", date: "01/01/2026", size: "1.1 MB", status: "Disponible" },
  { name: "Analyse performance — T4 2025", date: "15/01/2026", size: "2.4 MB", status: "Disponible" },
  { name: "Rapport mensuel — Novembre 2025", date: "01/12/2025", size: "890 KB", status: "Disponible" },
  { name: "Rapport d'installation", date: "14/10/2025", size: "540 KB", status: "Archivé" },
];

export default function RapportsPage() {
  return (
    <div style={{ maxWidth: 800 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 4 }}>
          Rapports
        </h1>
        <p style={{ color: "var(--gray)", fontSize: ".9rem" }}>Téléchargez vos rapports mensuels et analyses de performance.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {reports.map((r) => (
          <div key={r.name} className="bn" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>📄</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600, fontSize: ".92rem", marginBottom: 3 }}>{r.name}</p>
              <p style={{ fontSize: ".75rem", color: "var(--gray)" }}>{r.date} · {r.size}</p>
            </div>
            <span style={{
              fontSize: ".65rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase",
              padding: "3px 10px", borderRadius: 100,
              background: r.status === "Disponible" ? "rgba(34,197,94,.1)" : "rgba(255,255,255,.06)",
              color: r.status === "Disponible" ? "var(--green)" : "var(--gray)",
              border: `1px solid ${r.status === "Disponible" ? "rgba(34,197,94,.25)" : "var(--bdr)"}`,
            }}>
              {r.status}
            </span>
            <a
              href="#"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: ".82rem", fontWeight: 600, color: "var(--vl)",
                background: "var(--vd)", border: "1px solid rgba(124,58,237,.2)",
                padding: "7px 16px", borderRadius: 100, textDecoration: "none",
                transition: "background .2s",
              }}
            >
              ↓ Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
