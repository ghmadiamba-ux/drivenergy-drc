# Plan de deploiement public

Date de preparation : 2026-05-24

Site : `web/drivenergy-project-page`

Stack : React + TypeScript + Vite, sortie statique dans `dist/`.

## Domaine de lancement

Domaine achete : `driv-energy.com`

Registrar : GoDaddy.

Statut execution : pret pour connexion Cloudflare Pages. Aucun deploiement public n'a ete effectue depuis Codex, car aucun remote GitHub ni token Cloudflare n'est disponible localement.

## Recommandation

Option recommandee : Cloudflare Pages.

Raison : le site est statique, Vite est supporte nativement, les assets statiques sont servis efficacement, le DNS et les domaines personnalisés peuvent etre geres au meme endroit si le domaine est ajoute a Cloudflare.

Alternative simple : Netlify.

## Parametres de build

- Build command : `npm run build`
- Output directory : `dist`
- Node/dependencies : utiliser `npm install` ou install automatique depuis `package-lock.json`
- Projet local : `web/drivenergy-project-page`

## Comparatif hebergement

| Option | Pertinence Vite statique | Cout indicatif | Domaine custom | Facilité | Action fondateur | Lien |
|---|---|---|---|---|---|---|
| Cloudflare Pages | Tres forte ; guide Vite officiel | Gratuit possible pour statique ; les requetes assets statiques sont indiquees comme gratuites/illimitees par Cloudflare Pages | Oui, via Custom Domains et DNS Cloudflare | Tres bonne si le domaine est aussi dans Cloudflare | Creer compte Cloudflare, connecter repo GitHub, configurer build, ajouter domaine | [Cloudflare Pages Vite](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/), [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) |
| Netlify | Tres forte ; tres simple pour sites statiques | Free disponible ; plans payants selon usage/credits | Oui, custom domains avec SSL | Excellent pour lancement rapide | Creer compte, importer repo, verifier build settings, ajouter domaine | [Netlify deploy from repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/), [Netlify pricing](https://www.netlify.com/pricing/) |
| Vercel | Forte ; tres fluide pour frontends | Hobby gratuit possible ; Pro a partir de 20 USD/mois selon besoin | Oui | Tres facile | Creer compte, importer repo, configurer projet, ajouter domaine | [Vercel pricing](https://vercel.com/pricing), [Vercel domains docs](https://vercel.com/docs/plans) |
| GitHub Pages | Correct mais moins ergonomique pour Vite build automatise sans GitHub Actions | Gratuit pour repo public ; conditions selon type de repo | Oui | Moyen ; necessite souvent workflow Actions pour Vite | Creer repo, configurer GitHub Actions, publier `dist` | [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) |

## Plan recommande Cloudflare Pages

1. Creer ou connecter un compte GitHub.
2. Pousser le dossier projet dans un repository prive ou public selon preference.
3. Dans Cloudflare : Workers & Pages > Create application > Pages > Import from Git.
4. Selectionner le repository.
5. Configurer :
   - Build command : `npm run build`
   - Build output directory : `dist`
   - Root directory si monorepo : `web/drivenergy-project-page`
6. Lancer un premier deploiement de test sur `*.pages.dev`.
7. Verifier le rendu public.
8. Ajouter `driv-energy.com` comme custom domain dans Cloudflare Pages.
9. Ajouter aussi `www.driv-energy.com` comme custom domain.
10. Configurer les DNS chez GoDaddy ou transferer la zone DNS vers Cloudflare.
11. Verifier HTTPS actif sur `https://driv-energy.com`.
12. Choisir la version canonique : `driv-energy.com` ou `www.driv-energy.com`.
13. Remplacer l'email placeholder seulement apres creation de la boite officielle.

## Parametres exacts a entrer dans Cloudflare Pages

- Project name suggere : `drivenergy-drc`
- Production branch : `master` ou la branche GitHub choisie
- Framework preset : `Vite`
- Root directory : `web/drivenergy-project-page`
- Build command : `npm run build`
- Build output directory : `dist`
- Install command : `npm install` ou laisser Cloudflare detecter `package-lock.json`

## Si aucun repo GitHub n'existe encore

1. Creer un repository GitHub nomme par exemple `drivenergy-drc-website`.
2. Pousser le workspace ou, au minimum, le dossier `web/drivenergy-project-page` avec les docs utiles.
3. Connecter ce repository dans Cloudflare Pages.
4. Ne pas rendre le domaine officiel public avant verification de l'URL temporaire `*.pages.dev`.

## DNS GoDaddy vers Cloudflare Pages

### Option recommandee - deleguer le DNS a Cloudflare

Cette option est la plus propre pour Cloudflare Pages, surtout pour le domaine racine `driv-energy.com`.

Dans Cloudflare :

1. Add a site : `driv-energy.com`.
2. Choisir le plan Free si suffisant.
3. Cloudflare fournit deux nameservers.

Dans GoDaddy :

1. Ouvrir `driv-energy.com`.
2. Aller dans Registration Settings / Nameservers.
3. Choisir custom nameservers.
4. Remplacer les nameservers GoDaddy par les deux nameservers Cloudflare.
5. Attendre la propagation DNS.

Dans Cloudflare Pages :

1. Ouvrir le projet Pages.
2. Aller dans Custom domains.
3. Ajouter `driv-energy.com`.
4. Ajouter `www.driv-energy.com`.
5. Verifier que HTTPS devient actif.

Enregistrements DNS attendus dans Cloudflare :

| Nom | Type probable | Cible probable | Proxy |
|---|---|---|---|
| `driv-energy.com` | `CNAME` avec flattening Cloudflare ou record genere par Pages | projet Cloudflare Pages / `<project>.pages.dev` selon instruction Cloudflare | Proxied/auto |
| `www` | `CNAME` | `<project>.pages.dev` | Proxied/auto |

Toujours suivre les valeurs exactes affichees par Cloudflare Pages, car le nom du projet Pages determine la cible.

### Option alternative - garder DNS chez GoDaddy

- Dans Cloudflare Pages, ajouter le custom domain `driv-energy.com`.
- Cloudflare affichera l'enregistrement exact a creer.
- Dans GoDaddy > `driv-energy.com` > DNS > Manage DNS, creer ou modifier les enregistrements demandes.
- Pour `www`, creer generalement :
  - Type : `CNAME`
  - Name/Host : `www`
  - Value/Target : l'URL Cloudflare Pages du projet, de type `<project>.pages.dev`
  - TTL : default/auto
- Pour le domaine racine `driv-energy.com`, suivre exactement la valeur fournie par Cloudflare Pages. Selon configuration, Cloudflare peut demander un `CNAME` flattening, un enregistrement specifique, ou recommander de gerer la zone dans Cloudflare.

Limite : pour un domaine apex, Cloudflare Pages peut exiger que `driv-energy.com` soit une zone Cloudflare. Si GoDaddy ne permet pas la configuration demandee, revenir a l'option recommandee : nameservers Cloudflare.

### Canonicalisation

Choix recommande :

- domaine principal : `https://driv-energy.com`
- `https://www.driv-energy.com` redirige vers `https://driv-energy.com`

Alternative acceptable : utiliser `www.driv-energy.com` comme principal si l'apex pose un probleme DNS. Dans ce cas, rediriger `driv-energy.com` vers `www.driv-energy.com`.

## Regle de lancement

Ne pas publier sur domaine officiel tant que :

- le domaine `driv-energy.com` n'est pas connecte et HTTPS actif ;
- l'email officiel n'est pas cree ou la strategie email est validee ;
- la revue visuelle finale mobile/desktop est faite ;
- le fondateur confirme le lancement public.

## Sources utiles

- [Cloudflare Pages - deploy Vite](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/)
- [Cloudflare Pages - custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Pages pricing notes](https://developers.cloudflare.com/pages/functions/pricing/)
- [Netlify deploy from repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)
- [Netlify pricing](https://www.netlify.com/pricing/)
- [Vercel pricing](https://vercel.com/pricing)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
