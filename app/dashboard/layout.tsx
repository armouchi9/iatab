import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{ display: "flex", minHeight: "100svh", background: "var(--bg)" }}>
      <Sidebar />
      <div style={{ flex: 1, overflow: "auto", padding: "32px 24px", paddingBottom: 80 }}>
        {children}
      </div>
    </div>
  );
}
