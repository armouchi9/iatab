# Leçons apprises — IA Tab

## 2026-03-12
- Template literals volumineux (>30KB) font crasher turbopack/V8 → toujours lire depuis fs.readFileSync à build time ou découper en modules
- Fine-grained GitHub tokens nécessitent permission "Administration" pour créer des repos → préférer token classique avec scope `repo`
- Stocker les tokens dans `.env.secrets` (gitignored), jamais en clair dans le code
