# Guide d’intégration – With Khalil Agency

## Résumé des changements

### 1. Logo plus grand (Navbar)
- **Fichier** : `src/components/Navbar.tsx`
- Logo : `h-12 sm:h-14 md:h-[68px]` (au lieu de `h-10 md:h-12`), conteneur `h-14 sm:h-16 md:h-[72px]`.
- Responsive conservé (mobile → desktop).

### 2. Mode sombre / clair (Dark mode)
- **CSS** : `src/app/globals.css`  
  Variables `:root` et `[data-theme="light"]` pour couleurs, navbar, transitions.
- **Context** : `src/contexts/ThemeContext.tsx`  
  `ThemeProvider`, `useTheme()`, `toggleTheme()`, localStorage `with-khalil-theme`, détection `prefers-color-scheme`.
- **Composant** : `src/components/ThemeToggle.tsx`  
  Bouton type switch avec icônes Soleil/Lune (lucide-react).
- **Layout** : `src/app/layout.tsx`  
  Script inline pour appliquer le thème avant le premier rendu (évite le flash).

### 3. Design moderne
- **globals.css** : Transitions sur `html`/`body`, couleurs light/dark, variables `--nav-bar`, `--nav-border`, `--muted`.
- **Composants** : Utilisation de `text-foreground`, `text-muted`, `bg-background`, `bg-charcoal` pour s’adapter au thème.
- **Boutons** : Hover (scale, opacity), focus ring, CTA en `bg-foreground text-background`.

### 4. Multilingue (FR / AR / EN) + RTL
- **Traductions** : `src/lib/translations.ts`  
  Objet `translations` avec clés `fr`, `en`, `ar` par section (nav, hero, marquee, clients, sansAvec, methode, photos, portfolio, testimonials, contact).
- **Context** : `src/contexts/LanguageContext.tsx`  
  `LanguageProvider`, `useLanguage()`, `t`, `locale`, `setLocale`, localStorage `with-khalil-locale`.
- **RTL** : Dans `LanguageProvider`, `document.documentElement.setAttribute("dir", locale === "ar" ? "rtl" : "ltr")` et `lang`.
- **Composant** : `src/components/LanguageSelector.tsx`  
  Dropdown avec drapeaux et libellés (FR, EN, AR).

### 5. Où tout est branché
- **Layout** : `src/app/layout.tsx`  
  - Script thème → `<body>`  
  - `<Providers>` (ThemeProvider + LanguageProvider) → Navbar + `{children}`
- **Navbar** : Logo agrandi + liens traduits (`t.nav`) + `ThemeToggle` + `LanguageSelector` + CTA `t.nav.demarrer`.
- **Sections** : Chaque section utilise `useLanguage()` et `t.*` pour les textes (Hero, Marquee, Clients, SansVsAvec, Méthode, Photos, Portfolio, Témoignages, Contact).

### 6. Lancer le projet
```bash
npm run dev
```
Ouvre http://localhost:3000. Le build production peut échoucher en environnement sans accès réseau (polices Google) ; en local `npm run dev` fonctionne normalement.

### 7. Ajouter ou modifier des textes
- Éditer `src/lib/translations.ts` : ajouter une clé dans `fr`, `en` et `ar`.
- Dans le composant : `const { t } = useLanguage();` puis `t.maSection.maCle`.

### 8. RTL (arabe)
- `dir="rtl"` est appliqué automatiquement sur `<html>` quand la langue est l’arabe.
- Pour des marges/paddings qui s’inversent, utiliser les classes logiques Tailwind (`me-4` au lieu de `mr-4`) ou le préfixe `rtl:` (ex. `mr-4 rtl:ml-4 rtl:mr-0`).
