# IA Tab — Plan de développement

## Statut global
- [x] Mission 1 — Landing améliorée
- [x] Mission 2 — Dashboard Client

---

## Bloquants
- [ ] GitHub repo créé (en attente user)
- [x] Supabase credentials (configurés dans .env.local)

---

## Mission 1 — Landing

### Hero
- [x] Titre accrocheur + sous-titre clair
- [x] CTA principal visible
- [x] Animations Framer Motion subtiles

### Section "Pourquoi IA Tab"
- [x] 3 arguments forts (local, souveraineté, sur-mesure)

### Section Services (cards par secteur)
- [x] Restaurant / Pizzeria
- [x] Immobilier
- [x] Médical
- [x] Comptabilité
- [x] Commerce de proximité

### Section "Comment ça marche"
- [x] 3 étapes visuelles

### Footer
- [x] Liens + mentions légales

### Qualité
- [x] 100% responsive mobile-first
- [ ] Lighthouse > 90
- [ ] Images optimisées next/image
- [x] SEO : meta, og:image, H1/H2

---

## Mission 2 — Dashboard

### Auth
- [x] /login — form email + password Supabase
- [ ] Middleware protection /dashboard/*
- [x] Session persistante (layout check)

### Pages
- [x] /dashboard — Vue d'ensemble (stats, statut agent, graphique 30j)
- [x] /dashboard/agent — Détail agent + logs
- [x] /dashboard/rapports — PDF téléchargeables
- [x] /dashboard/support — Tickets + formulaire

### Layout
- [x] Sidebar fixe desktop
- [x] Bottom nav mobile
- [x] Bouton déconnexion permanent

### Base de données Supabase
- [ ] Table clients
- [ ] Table agents
- [ ] Table interactions
- [ ] Table rapports
- [ ] Table tickets_support

---

## Livraison (par mission)
1. [x] Résumé des changements → tasks/LIVRAISON_MISSION1.md
2. Instructions test local
3. Points d'attention

---

## Leçons
→ Voir tasks/lessons.md
