const year = new Date().getFullYear();

const cols = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Cas d'usage", href: "#gallery" },
      { label: "Processus", href: "#hiw" },
      { label: "Tarifs", href: "#pricing" },
    ],
  },
  {
    title: "Secteurs",
    links: [
      { label: "Restaurant & Pizzeria", href: "#gallery" },
      { label: "Immobilier", href: "#gallery" },
      { label: "Médical", href: "#gallery" },
      { label: "Comptabilité", href: "#gallery" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", href: "#" },
      { label: "Contact", href: "#cta" },
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="fi">
        <div className="ft">
          <div className="fbrand">
            <a className="flogo" href="#">IA Tab</a>
            <p>Agents IA sur-mesure pour TPE &amp; PME. Déployés sur votre infrastructure en moins de 7 jours, sans abonnement SaaS.</p>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="fcol">
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="fb">
          <span>© {year} IA Tab — Tous droits réservés</span>
          <div className="fb-links">
            <a href="#">Mentions légales</a>
            <a href="#">CGU</a>
            <a href="#">RGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
