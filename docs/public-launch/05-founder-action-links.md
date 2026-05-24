# Liens d'action fondateur

Date de preparation : 2026-05-24

Ces liens sont fournis pour decision et action humaine. Ne pas acheter, payer, transferer ou deployer sans validation explicite.

## Achat / verification domaines

## Domaine achete

- Domaine : `driv-energy.com`
- Registrar : GoDaddy
- [GoDaddy domain portfolio](https://dcc.godaddy.com/domains/)
- [GoDaddy Manage DNS records](https://www.godaddy.com/help/manage-dns-records-680)
- [GoDaddy change nameservers](https://www.godaddy.com/help/change-nameservers-for-my-domains-664)

Priorite 1 :

- [`drivenergy.cd` via Regery .CD](https://regery.com/en/domains/zone/cd)
- [`drivenergy.cd` via 101domain](https://www.101domain.com/)
- [Registre NIC .CD](https://www.nic.cd/nic.cd/)

Fallback .com recommande :

- [`drivenergydrc.com` via Namecheap](https://www.namecheap.com/domains/registration/results/?domain=drivenergydrc.com)
- [`drivenergydrc.com` via Cloudflare Registrar](https://dash.cloudflare.com/?to=/:account/domains/register)

Options secondaires :

- [`drivenergy-drc.com` via Namecheap](https://www.namecheap.com/domains/registration/results/?domain=drivenergy-drc.com)
- [`drivenergyrdc.com` via Namecheap](https://www.namecheap.com/domains/registration/results/?domain=drivenergyrdc.com)
- [`drivenergy-rdc.com` via Namecheap](https://www.namecheap.com/domains/registration/results/?domain=drivenergy-rdc.com)
- [`drivenergykinshasa.com` via Namecheap](https://www.namecheap.com/domains/registration/results/?domain=drivenergykinshasa.com)
- [`drivenergy.africa` via Namecheap search](https://www.namecheap.com/domains/)

## Deploiement / hosting

Recommande :

- [Cloudflare Pages dashboard](https://dash.cloudflare.com/)
- [Cloudflare Pages create project](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/pages)
- [Cloudflare Pages - deploy Vite](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/)
- [Cloudflare Pages - custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

Alternatives :

- [Netlify app](https://app.netlify.com/)
- [Netlify deploy from repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)
- [Vercel new project](https://vercel.com/new)
- [Vercel pricing](https://vercel.com/pricing)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## Email officiel

Option recommandee :

- [Google Workspace pricing](https://workspace.google.com/pricing.html)
- [Google Workspace edition guide](https://support.google.com/a/answer/6043576?hl=en)

Option budget :

- [Zoho Mail pricing](https://www.zoho.com/mail/pricing.html)
- [Zoho custom domain email](https://www.zoho.com/mail/custom-domain-email.html)

## DNS / configuration

- [Cloudflare DNS dashboard](https://dash.cloudflare.com/)
- [Cloudflare Pages custom domains guide](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Pages www redirect guide](https://developers.cloudflare.com/pages/how-to/www-redirect/)
- [GoDaddy Manage DNS records](https://www.godaddy.com/help/manage-dns-records-680)
- [GoDaddy change nameservers](https://www.godaddy.com/help/change-nameservers-for-my-domains-664)
- [Netlify domain documentation](https://docs.netlify.com/manage/domains/domains-fundamentals/understand-domains/)

## Sequence d'action recommandee

1. Creer ou ouvrir le compte Cloudflare.
2. Creer ou connecter le repository GitHub du site.
3. Dans Cloudflare Pages, cliquer Create application > Pages > Connect to Git.
4. Entrer les settings :
   - Framework preset : `Vite`
   - Root directory : `web/drivenergy-project-page`
   - Build command : `npm run build`
   - Output directory : `dist`
5. Deployer une preview Cloudflare Pages et verifier l'URL `*.pages.dev`.
6. Ajouter `driv-energy.com` comme custom domain.
7. Ajouter `www.driv-energy.com` comme custom domain.
8. Recommande : changer les nameservers GoDaddy vers Cloudflare pour simplifier l'apex.
9. Configurer HTTPS.
10. Creer l'email officiel `contact@driv-energy.com` ou `partenariats@driv-energy.com`.
11. Confirmer l'adresse a afficher sur le site.
12. Autoriser la publication publique finale.
