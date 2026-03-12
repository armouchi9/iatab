import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA Tab — Agents IA sur-mesure pour TPE & PME",
  description: "IA Tab — Agents IA sur-mesure pour TPE et PME. Déployés sur votre infrastructure en moins de 7 jours, sans abonnement SaaS.",
  openGraph: {
    title: "IA Tab — Agents IA pour TPE & PME",
    description: "Automatisez vos processus répétitifs. Déployé sur votre infra, opérationnel en 7 jours.",
    type: "website",
    url: "https://iatab.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
