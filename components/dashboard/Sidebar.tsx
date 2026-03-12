"use client";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const navItems = [
  { href: "/dashboard", icon: "📊", label: "Vue d'ensemble" },
  { href: "/dashboard/agent", icon: "🤖", label: "Mon agent" },
  { href: "/dashboard/rapports", icon: "📄", label: "Rapports" },
  { href: "/dashboard/support", icon: "🎧", label: "Support" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside style={{
        width: 220,
        flexShrink: 0,
        background: "var(--surf)",
        borderRight: "1px solid var(--bdr)",
        display: "flex",
        flexDirection: "column",
        padding: "24px 12px",
        position: "sticky",
        top: 0,
        height: "100svh",
      }} className="db-sidebar">
        <a href="/" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.25rem", background: "linear-gradient(125deg,#9D5FFF,#38D9F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block", marginBottom: 28, paddingLeft: 8 }}>
          IA Tab
        </a>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 10,
                  fontSize: ".88rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "var(--w)" : "var(--gray)",
                  background: active ? "var(--vd)" : "transparent",
                  border: active ? "1px solid rgba(124,58,237,.2)" : "1px solid transparent",
                  textDecoration: "none",
                  transition: "all .2s",
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            );
          })}
        </nav>
        <button
          onClick={handleLogout}
          style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, fontSize: ".88rem", color: "var(--gray)", background: "none", border: "1px solid var(--bdr)", cursor: "pointer", marginTop: 8 }}
        >
          <span>🚪</span>
          Déconnexion
        </button>
      </aside>

      {/* Mobile bottom nav */}
      <nav style={{
        display: "none",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "var(--surf)",
        borderTop: "1px solid var(--bdr)",
        padding: "8px 0",
        zIndex: 100,
      }} className="db-bottom-nav">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: ".6rem", color: active ? "var(--vl)" : "var(--gray)", textDecoration: "none" }}
            >
              <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
              {item.label}
            </a>
          );
        })}
      </nav>
    </>
  );
}
