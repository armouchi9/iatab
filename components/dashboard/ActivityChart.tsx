"use client";

interface DayData {
  day: string;
  value: number;
}

interface ActivityChartProps {
  data: DayData[];
  title?: string;
}

export default function ActivityChart({ data, title = "Activité 30 jours" }: ActivityChartProps) {
  const maxVal = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="bn" style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{ fontSize: ".78rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gray2)" }}>
          {title}
        </span>
        <span style={{ fontSize: ".72rem", color: "var(--vl)", fontWeight: 600 }}>
          {data.reduce((s, d) => s + d.value, 0)} interactions
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
        {data.map((d, i) => {
          const h = Math.max((d.value / maxVal) * 100, 4);
          const isLast7 = i >= data.length - 7;
          return (
            <div
              key={d.day}
              title={`${d.day}: ${d.value}`}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "3px 3px 0 0",
                background: isLast7
                  ? "linear-gradient(to top,var(--v),var(--vl))"
                  : "linear-gradient(to top,rgba(6,182,212,.3),rgba(6,182,212,.55))",
                transition: "height .4s ease",
                cursor: "default",
              }}
            />
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        {[data[0], data[6], data[13], data[20], data[data.length - 1]].filter(Boolean).map((d) => (
          <span key={d.day} style={{ fontSize: ".6rem", color: "var(--gray2)" }}>{d.day}</span>
        ))}
      </div>
    </div>
  );
}
