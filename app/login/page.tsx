"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div style={{ minHeight: "100svh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <a href="/" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.5rem", background: "linear-gradient(125deg,#9D5FFF,#38D9F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "inline-block", marginBottom: 32 }}>
          IA Tab
        </a>
        <div className="bn" style={{ borderRadius: 20 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.8rem", marginBottom: 8 }}>Connexion</h2>
          <p style={{ color: "var(--gray)", fontSize: ".9rem", marginBottom: 28 }}>Accédez à votre tableau de bord.</p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={{ display: "block", fontSize: ".78rem", fontWeight: 600, color: "var(--gray)", marginBottom: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@example.com"
                style={{ width: "100%", background: "var(--surf)", border: "1px solid var(--bdr)", borderRadius: 10, padding: "11px 14px", color: "var(--w)", fontSize: ".9rem", fontFamily: "inherit", outline: "none" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: ".78rem", fontWeight: 600, color: "var(--gray)", marginBottom: 6, letterSpacing: ".05em", textTransform: "uppercase" }}>
                Mot de passe
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{ width: "100%", background: "var(--surf)", border: "1px solid var(--bdr)", borderRadius: 10, padding: "11px 14px", color: "var(--w)", fontSize: ".9rem", fontFamily: "inherit", outline: "none" }}
              />
            </div>
            {error && (
              <p style={{ fontSize: ".82rem", color: "#f87171", background: "rgba(248,113,113,.08)", border: "1px solid rgba(248,113,113,.2)", borderRadius: 8, padding: "10px 14px" }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{ background: "var(--w)", color: "#080810", fontWeight: 600, fontSize: ".95rem", padding: "13px", borderRadius: 100, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: 6 }}
            >
              {loading ? "Connexion…" : "Se connecter →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
