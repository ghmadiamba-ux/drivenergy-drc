# Checklist de readiness lancement public

Date de preparation : 2026-05-24

## Statut local

- Build local : passe le 2026-05-24 avec `npm run build`.
- Dossier `dist/` : present.
- Hero approuve : `src/assets/hero-drc-president-fauna-flora-industrial.png` present.
- Section technique : `hero-industrial.png` conserve comme support process.
- Site : francais.
- Email : placeholder `contact@drivenergy.cd`, non confirme.
- Domaine achete : `driv-energy.com` chez GoDaddy.

## Checklist contenu

- [x] Texte public en francais.
- [x] Positionnement industriel B2B.
- [x] Valorisation energetique des plastiques usages.
- [x] Combustible industriel technique pour usages thermiques industriels stationnaires.
- [x] Feedstock PE/PP, PVC exclu, PET limite/conditionnel.
- [x] Validation progressive visible.
- [x] HSE et qualite combustible visibles.
- [x] Pas de promesse de production commerciale deja active.
- [x] Pas de promesse de fuel deja commercialement valide.

## Checklist risques wording

Les termes sensibles apparaissent uniquement comme exclusions ou prudence, pas comme promesses :

- [x] Pas de claim diesel routier.
- [x] Pas de claim essence/gasoline.
- [x] Pas de claim raffinerie.
- [x] Pas de claim recyclage miracle.
- [x] Pas de claim technologie sans risque.
- [x] Pas de claim autonomie totale.
- [x] Pas d'endorsement officiel formule dans le texte.
- [x] Pas de claim FPI, Etat, President ou autorite publique.

## Checklist visuelle

- [x] Hero fondateur approuve integre.
- [x] Alt text non politique.
- [x] Hierarchie d'images documentee dans `docs/website-image-map.md`.
- [x] Anciennes images conservees en reserve.
- [x] Image technique utilisee dans la section procede.
- [ ] Revue finale mobile/desktop avant domaine public.
- [ ] Verifier que le hero ne cree pas une lecture d'endorsement officiel non documente.

## Checklist technique

- [x] `package.json` present.
- [x] `README.md` avec notes de deploiement.
- [x] `dist/index.html` present.
- [x] Assets locaux presents.
- [x] Build final passe le 2026-05-24.
- [ ] Preview public temporaire valide.
- [x] Domaine choisi et achete : `driv-energy.com`.
- [ ] DNS configure.
- [ ] HTTPS actif.
- [ ] `driv-energy.com` ajoute comme custom domain Cloudflare Pages.
- [ ] `www.driv-energy.com` ajoute comme custom domain Cloudflare Pages.
- [ ] Canonicalisation choisie : apex vers www ou www vers apex.
- [ ] GitHub repository connecte a Cloudflare Pages.
- [ ] URL temporaire `*.pages.dev` obtenue.
- [ ] Email officiel cree et teste.
- [ ] Email du site mis a jour apres confirmation.

## Gate final avant publication

Publier seulement quand le fondateur confirme :

1. domaine final ;
2. plateforme de deploiement ;
3. email officiel ;
4. validation visuelle finale ;
5. autorisation de rendre le site public.
