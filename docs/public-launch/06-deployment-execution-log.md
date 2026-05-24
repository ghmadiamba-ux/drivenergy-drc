# Journal d'execution deploiement public

Date : 2026-05-24

## Domaine

- Domaine confirme : `driv-energy.com`
- Registrar : GoDaddy
- Domaine primaire vise : `https://driv-energy.com`
- Version www : `https://www.driv-energy.com`
- Strategie DNS choisie : Cloudflare DNS / nameservers Cloudflare recommandes

## Verification locale

- `package.json` : present
- Build command : `npm.cmd run build`
- Build status : reussi
- Output directory : `web/drivenergy-project-page/dist`
- `dist/index.html` : present
- Hero approuve dans build : `hero-drc-president-fauna-flora-industrial-L_-u6pV2.png`
- Image process dans build : `hero-industrial-D_2UCkLi.png`
- Contenu francais detecte dans le bundle
- Aucun chemin local `C:\`, `localhost`, `127.0.0.1` ou `src/assets` detecte comme asset public casse
- Email public actuel : `contact@drivenergy.cd` placeholder conserve

## Git / repository

- Workspace Git local : oui
- Branche locale : `master`
- Remote GitHub detecte : non
- Etat : nombreux fichiers projet non suivis dans le repo local
- Push effectue : non

Action requise :

1. Creer ou choisir un repository GitHub.
2. Ajouter/stager les fichiers du projet.
3. Committer une version de lancement.
4. Pousser vers GitHub.
5. Connecter ce repo a Cloudflare Pages.

## Cloudflare Pages

- Creation projet Pages : non effectuee par Codex
- Raison : pas de login Cloudflare ni `CLOUDFLARE_API_TOKEN` local
- Project name suggere : `drivenergy-drc`
- Framework preset : `Vite`
- Root directory : `web/drivenergy-project-page`
- Build command : `npm run build`
- Output directory : `dist`
- URL temporaire Pages : non disponible

## Cloudflare nameservers

- Nameservers Cloudflare reels : non disponibles
- Raison : Cloudflare doit d'abord ajouter `driv-energy.com` comme zone et fournir les deux nameservers

Ne pas inventer ces nameservers. Les copier depuis le dashboard Cloudflare.

## DNS records attendus

Si Cloudflare gere la zone DNS :

| Host | Type probable | Cible |
|---|---|---|
| `driv-energy.com` | Cloudflare Pages custom domain / CNAME flattening gere par Cloudflare | projet Pages |
| `www` | `CNAME` | `<project>.pages.dev` ou cible fournie par Cloudflare |

Toujours suivre les valeurs exactes donnees par Cloudflare Pages.

## GoDaddy action requise

Chemin :

GoDaddy Domain Portfolio > `driv-energy.com` > DNS / Nameservers > Change Nameservers > Custom Nameservers

Coller les deux nameservers fournis par Cloudflare, puis sauvegarder.

## URLs publiques

- `https://driv-energy.com` : non connecte
- `https://www.driv-energy.com` : non connecte
- URL temporaire Cloudflare Pages : non creee

## Email

Ne pas modifier le site encore.

Futures options :

- `contact@driv-energy.com`
- `partenariats@driv-energy.com`

Condition avant changement du site :

1. boite creee ;
2. envoi/reception testes ;
3. SPF/DKIM/DMARC configures.

## Blocage actuel

Le deploiement public ne peut pas etre termine automatiquement sans :

- login Cloudflare ;
- creation/connexion repository GitHub ;
- action GoDaddy pour nameservers ;
- confirmation fondateur avant publication finale.

---

## Tentative d'execution Cloudflare Pages - 2026-05-24

### Verification locale

- GitHub remote : `https://github.com/ghmadiamba-ux/drivenergy-drc.git`
- Branche : `master`
- Dernier commit local/pousse : `b65af26 Prepare DrivEnergy DRC website for public deployment`
- Build local : reussi avec `npm.cmd run build`
- Output : `web/drivenergy-project-page/dist`
- Hero approuve present dans build : `hero-drc-president-fauna-flora-industrial-L_-u6pV2.png`
- Image process presente dans build : `hero-industrial-D_2UCkLi.png`
- Contenu francais detecte dans le bundle
- Aucun chemin local public critique detecte dans les assets generes

### GitHub

- Repository GitHub confirme : `https://github.com/ghmadiamba-ux/drivenergy-drc.git`
- Remote local : `origin`
- Branche suivie : `origin/master`
- Push site initial : deja effectue

### Cloudflare access

- `wrangler` global : non detecte
- `CLOUDFLARE_API_TOKEN` : non defini
- Tentative `npx.cmd wrangler whoami` : timeout, probablement attente installation/reseau/login
- Projet Cloudflare Pages : non cree depuis Codex
- URL temporaire `*.pages.dev` : non disponible

### Parametres a entrer dans Cloudflare Pages

- Project name : `drivenergy-drc`
- GitHub repo : `ghmadiamba-ux/drivenergy-drc`
- Production branch : `master`
- Framework preset : `Vite`
- Root directory : `web/drivenergy-project-page`
- Build command : `npm run build`
- Build output directory : `dist`

### Custom domain

- `driv-energy.com` : a ajouter apres validation de l'URL temporaire Pages
- `www.driv-energy.com` : a ajouter apres validation de l'URL temporaire Pages
- Domaine primaire recommande : `https://driv-energy.com`
- Redirection recommandee : `www` vers apex

### Nameservers Cloudflare

- Non disponibles.
- Raison : Cloudflare doit d'abord ajouter la zone `driv-energy.com` et fournir les deux nameservers reels.
- Ne pas inventer les nameservers.

### Action fondateur requise

1. Ouvrir Cloudflare Dashboard.
2. Workers & Pages > Pages > Create application.
3. Connect to Git.
4. Autoriser GitHub si demande.
5. Selectionner `ghmadiamba-ux/drivenergy-drc`.
6. Entrer les settings Cloudflare Pages ci-dessus.
7. Lancer le premier deploiement.
8. Copier l'URL temporaire `*.pages.dev`.
9. Apres validation de cette URL, ajouter les custom domains.
10. Ajouter `driv-energy.com` comme zone Cloudflare si demande.
11. Copier les deux nameservers Cloudflare reels.
12. Dans GoDaddy, remplacer les nameservers du domaine par les deux nameservers Cloudflare.

### Public URL status

- `https://driv-energy.com` : non connecte
- `https://www.driv-energy.com` : non connecte
- DNS propagation : non demarree
- HTTPS : en attente de connexion domaine

### Email

- Le site conserve `contact@drivenergy.cd` comme placeholder.
- Ne pas modifier avant creation et test de `contact@driv-energy.com` ou `partenariats@driv-energy.com`.
