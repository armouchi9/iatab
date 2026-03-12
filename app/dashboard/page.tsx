import StatCard from "@/components/dashboard/StatCard";
import AgentStatus from "@/components/dashboard/AgentStatus";
import ActivityChart from "@/components/dashboard/ActivityChart";

function generateChartData() {
  const data = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    data.push({
      day: `${d.getDate()}/${d.getMonth() + 1}`,
      value: Math.floor(Math.random() * 80 + 20),
    });
  }
  return data;
}

const chartData = generateChartData();

export default function DashboardPage() {
  return (
    <div style={{ maxWidth: 1000 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 4 }}>
          Vue d&apos;ensemble
        </h1>
        <p style={{ color: "var(--gray)", fontSize: ".9rem" }}>Bienvenue sur votre tableau de bord IA Tab.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 20 }}>
        <StatCard icon="⚡" label="Interactions ce mois" value="1 284" sub="+18% vs mois dernier" accent="violet" />
        <StatCard icon="✅" label="Taux de résolution" value="94%" sub="Objectif : 90%" accent="cyan" />
        <StatCard icon="⏱️" label="Temps de réponse moy." value="1.2s" sub="SLA respecté" accent="green" />
        <StatCard icon="😊" label="Satisfaction client" value="4.8/5" sub="Basé sur 312 retours" accent="violet" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
        <ActivityChart data={chartData} title="Interactions 30 jours" />
        <AgentStatus name="Agent Principal" type="Prise de commande & FAQ" lastSeen="Il y a 2 minutes" />
      </div>
    </div>
  );
}
