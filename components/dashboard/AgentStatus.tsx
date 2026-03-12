"use client";
import { useState, useEffect } from "react";

interface AgentStatusProps {
  name: string;
  type: string;
  lastSeen?: string;
}

export default function AgentStatus({ name, type, lastSeen }: AgentStatusProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(id);
  }, []);

  const isOnline = tick >= 0; // simulated — always online in demo

  return (
    <div className="bn" style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: "linear-gradient(135deg,var(--v),var(--vl))",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", flexShrink: 0,
      }}>
        🤖
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
          <span style={{ fontWeight: 600, fontSize: ".95rem" }}>{name}</span>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            fontSize: ".65rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
            color: isOnline ? "var(--green)" : "var(--gray)",
            background: isOnline ? "rgba(34,197,94,.1)" : "rgba(255,255,255,.05)",
            border: `1px solid ${isOnline ? "rgba(34,197,94,.25)" : "var(--bdr)"}`,
            padding: "2px 8px", borderRadius: 100,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: isOnline ? "var(--green)" : "var(--gray)", flexShrink: 0 }} />
            {isOnline ? "En ligne" : "Hors ligne"}
          </span>
        </div>
        <p style={{ fontSize: ".8rem", color: "var(--gray)" }}>{type}</p>
        {lastSeen && <p style={{ fontSize: ".72rem", color: "var(--gray2)", marginTop: 2 }}>Dernière activité : {lastSeen}</p>}
      </div>
    </div>
  );
}
