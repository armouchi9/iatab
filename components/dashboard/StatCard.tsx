interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  accent?: "violet" | "cyan" | "green";
}

const accentColors: Record<string, string> = {
  violet: "var(--vl)",
  cyan: "var(--cl)",
  green: "var(--green)",
};

export default function StatCard({ icon, label, value, sub, accent = "violet" }: StatCardProps) {
  return (
    <div className="bn" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: "1.3rem" }}>{icon}</span>
        <span style={{ fontSize: ".72rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gray)" }}>{label}</span>
      </div>
      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.2rem", lineHeight: 1, color: accentColors[accent] }}>
        {value}
      </div>
      {sub && (
        <p style={{ fontSize: ".78rem", color: "var(--gray)" }}>{sub}</p>
      )}
    </div>
  );
}
