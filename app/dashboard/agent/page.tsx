import AgentStatus from "@/components/dashboard/AgentStatus";

const logs = [
  { time: "14:32:01", level: "info", msg: "Nouvelle commande reçue — Pizza Margherita ×2" },
  { time: "14:31:55", level: "ok", msg: "Réponse FAQ envoyée — Horaires d'ouverture" },
  { time: "14:30:12", level: "info", msg: "Réservation confirmée — 4 couverts vendredi 20h" },
  { time: "14:28:44", level: "warn", msg: "Demande hors périmètre — renvoyée à l'opérateur" },
  { time: "14:25:00", level: "ok", msg: "Intégration WhatsApp — message envoyé avec succès" },
  { time: "14:22:31", level: "info", msg: "Nouveau contact identifié — ajouté au CRM" },
  { time: "14:18:09", level: "ok", msg: "Rapport quotidien généré et envoyé par email" },
  { time: "14:10:55", level: "warn", msg: "Tentative de message hors horaires — réponse auto" },
];

const levelColor: Record<string, string> = {
  info: "var(--vl)",
  ok: "var(--green)",
  warn: "#F59E0B",
};

export default function AgentPage() {
  return (
    <div style={{ maxWidth: 800 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 4 }}>
          Mon agent
        </h1>
        <p style={{ color: "var(--gray)", fontSize: ".9rem" }}>Statut, configuration et logs en temps réel.</p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <AgentStatus name="Agent Principal" type="Prise de commande & FAQ — Restaurant" lastSeen="Il y a 2 minutes" />
      </div>

      <div className="bn" style={{ marginBottom: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
          {[
            { label: "Modèle IA", value: "GPT-4o" },
            { label: "Infrastructure", value: "VPS local" },
            { label: "Intégrations", value: "WhatsApp, Email" },
            { label: "Uptime (30j)", value: "99.8%" },
          ].map((i) => (
            <div key={i.label}>
              <p style={{ fontSize: ".68rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gray2)", marginBottom: 4 }}>{i.label}</p>
              <p style={{ fontSize: ".95rem", fontWeight: 600 }}>{i.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="term" style={{ borderRadius: 16 }}>
        <div className="term-bar">
          <div className="term-dots"><div className="tdot2 r" /><div className="tdot2 y" /><div className="tdot2 g" /></div>
          <span className="term-ttl">agent.log — temps réel</span>
        </div>
        <div className="term-body">
          {logs.map((log, i) => (
            <div key={i} className="tl">
              <span style={{ color: "var(--gray2)", fontSize: ".72rem", flexShrink: 0, width: 72 }}>{log.time}</span>
              <span style={{ color: levelColor[log.level], fontSize: ".72rem", flexShrink: 0, width: 36, textTransform: "uppercase", fontWeight: 700 }}>{log.level}</span>
              <span className="tcmd" style={{ fontSize: ".77rem" }}>{log.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
