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

---

## Verification Pages URL et DNS custom domain - 2026-05-24

### Temporary Pages URL

- URL : `https://drivenergy-drc.pages.dev/`
- Statut visuel : charge correctement dans navigateur headless.
- Page : en francais.
- Hero : image approuvee visible.
- Assets : CSS/JS/images charges dans le rendu navigateur.
- Verification HTTP par PowerShell/curl local : non concluante dans l'environnement Codex local, mais le rendu navigateur public a ete capture et valide.

### Custom domain status

- `driv-energy.com` : non connecte a Cloudflare Pages.
- `www.driv-energy.com` : non connecte a Cloudflare Pages.

### DNS observe

Resolution DNS locale actuelle :

| Host | Type | Valeur observee | Interpretation |
|---|---|---|---|
| `driv-energy.com` | `A` | `13.248.243.5` | IP GoDaddy/parking probable |
| `driv-energy.com` | `A` | `76.223.105.230` | IP GoDaddy/parking probable |
| `www.driv-energy.com` | `CNAME` | `driv-energy.com` | `www` pointe encore vers apex GoDaddy |

Ces DNS ne pointent pas encore vers Cloudflare Pages.

### Action Cloudflare requise

Dans Cloudflare Dashboard :

1. Ouvrir Workers & Pages.
2. Ouvrir le projet `drivenergy-drc`.
3. Aller dans Custom domains.
4. Cliquer Set up a custom domain.
5. Ajouter `driv-energy.com`.
6. Ajouter `www.driv-energy.com`.
7. Si Cloudflare demande d'ajouter `driv-energy.com` comme zone, suivre le wizard.
8. Copier les deux nameservers Cloudflare reels.

### Action GoDaddy requise

Dans GoDaddy :

1. Domain Portfolio.
2. `driv-energy.com`.
3. DNS / Nameservers.
4. Change Nameservers.
5. Custom Nameservers.
6. Coller les deux nameservers Cloudflare reels.
7. Sauvegarder.

### Nameservers Cloudflare

- Non disponibles dans Codex.
- Ne pas inventer.
- A copier depuis le dashboard Cloudflare apres ajout de la zone.

### DNS records attendus apres connexion

- Cloudflare Pages doit fournir ou creer les enregistrements exacts.
- Ne pas remplacer par des valeurs devinees.
- Logique attendue :
  - apex `driv-energy.com` connecte au projet Pages ;
  - `www.driv-energy.com` connecte au projet Pages ;
  - redirection recommandee : `www` vers apex.

### HTTPS / public URLs

- `https://driv-energy.com` : non actif pour DrivEnergy.
- `https://www.driv-energy.com` : non actif pour DrivEnergy.
- `https://drivenergy-drc.pages.dev/` : actif comme URL temporaire.

---

## Verification apres changement nameservers GoDaddy - 2026-05-24

### Action fondateur declaree

Le fondateur indique que les nameservers GoDaddy ont ete changes de :

- `ns53.domaincontrol.com`
- `ns54.domaincontrol.com`

vers :

- `dakota.ns.cloudflare.com`
- `pola.ns.cloudflare.com`

### Nameserver status observe depuis Codex

Resolution locale actuelle :

| Host | Type | Valeur observee |
|---|---|---|
| `driv-energy.com` | `NS` | `ns53.domaincontrol.com` |
| `driv-energy.com` | `NS` | `ns54.domaincontrol.com` |

Interpretation : la propagation nameserver n'est pas encore visible depuis l'environnement Codex local, ou le changement n'est pas encore effectif au niveau registre.

### DNS records observes

| Host | Type | Valeur observee | Interpretation |
|---|---|---|---|
| `driv-energy.com` | `A` | `13.248.243.5` | Ancien target GoDaddy/parking probable |
| `driv-energy.com` | `A` | `76.223.105.230` | Ancien target GoDaddy/parking probable |
| `www.driv-energy.com` | `CNAME` | `driv-energy.com` | `www` pointe encore vers apex GoDaddy |

Les anciens records GoDaddy sont donc encore actifs depuis ce point de verification.

### Verification visuelle domaines publics

Test navigateur headless :

- `https://driv-energy.com` charge encore une page GoDaddy/Airo "DRIVE ENERGY", pas le site DrivEnergy DRC.
- `https://www.driv-energy.com` charge encore la meme page GoDaddy/Airo, pas le site DrivEnergy DRC.

### Temporary URL

- `https://drivenergy-drc.pages.dev/` reste l'URL publique temporaire valide du site DrivEnergy DRC.

### Cloudflare custom domains

Statut depuis Codex : impossible de confirmer l'ajout dans Cloudflare sans dashboard.

Action requise dans Cloudflare :

1. Ouvrir Workers & Pages.
2. Ouvrir Pages project `drivenergy-drc`.
3. Custom domains.
4. Verifier/ajouter `driv-energy.com`.
5. Verifier/ajouter `www.driv-energy.com`.
6. Suivre les instructions exactes Cloudflare pour les records Pages.
7. Verifier que la zone `driv-energy.com` est Active dans Cloudflare.

### GoDaddy / Cloudflare propagation

Action requise :

- Attendre propagation DNS si le changement vient d'etre fait.
- Verifier dans GoDaddy que les custom nameservers sauvegardes sont bien :
  - `dakota.ns.cloudflare.com`
  - `pola.ns.cloudflare.com`
- Verifier dans Cloudflare que la zone `driv-energy.com` n'est plus en "pending nameserver update".

### Public URL status

- `https://driv-energy.com` : pas encore DrivEnergy DRC.
- `https://www.driv-energy.com` : pas encore DrivEnergy DRC.
- HTTPS sur GoDaddy fonctionne vers l'ancien contenu, mais pas vers Cloudflare Pages.

### Prochaine verification

Refaire les checks :

- `Resolve-DnsName -Name driv-energy.com -Type NS`
- `Resolve-DnsName -Name driv-energy.com -Type A`
- `Resolve-DnsName -Name www.driv-energy.com -Type CNAME`
- `https://driv-energy.com`
- `https://www.driv-energy.com`

Quand les NS deviennent `dakota.ns.cloudflare.com` et `pola.ns.cloudflare.com`, continuer la validation Cloudflare Pages/custom domains.

---

## Recheck DNS propagation - 2026-05-24

### Nameserver status

Expected Cloudflare nameservers :

- `dakota.ns.cloudflare.com`
- `pola.ns.cloudflare.com`

Observed from Codex local resolver :

| Host | Type | Valeur observee |
|---|---|---|
| `driv-energy.com` | `NS` | `ns53.domaincontrol.com` |
| `driv-energy.com` | `NS` | `ns54.domaincontrol.com` |

Conclusion : propagation Cloudflare non visible depuis ce point de verification.

### DNS records

| Host | Type | Valeur observee | Statut |
|---|---|---|---|
| `driv-energy.com` | `A` | `13.248.243.5` | Ancien GoDaddy/parking encore actif |
| `driv-energy.com` | `A` | `76.223.105.230` | Ancien GoDaddy/parking encore actif |
| `www.driv-energy.com` | `CNAME` | `driv-energy.com` | Pointe encore vers apex GoDaddy |

### Public URL status

Verification navigateur headless :

- `https://driv-energy.com` : affiche encore GoDaddy/Airo, pas DrivEnergy.
- `https://www.driv-energy.com` : non capturee dans ce cycle, mais DNS pointe encore vers apex GoDaddy.
- `https://drivenergy-drc.pages.dev/` : charge bien DrivEnergy DRC, en francais, avec hero approuve visible.

### Custom domain status

Cloudflare dashboard non accessible depuis Codex. A verifier manuellement :

- `driv-energy.com` ajoute comme custom domain du projet Pages `drivenergy-drc`.
- `www.driv-energy.com` ajoute comme custom domain du projet Pages `drivenergy-drc`.
- Zone `driv-energy.com` active dans Cloudflare, non bloquee en attente nameserver.

### Next check

Refaire les memes checks apres propagation. Tant que les NS observes restent `domaincontrol.com`, le domaine public ne peut pas etre valide comme connecte a Cloudflare Pages.
