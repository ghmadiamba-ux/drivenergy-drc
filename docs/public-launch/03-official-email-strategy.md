# Strategie email officielle

Date de preparation : 2026-05-24

## Statut actuel

Le site utilise encore l'adresse provisoire :

`contact@drivenergy.cd`

Cette adresse est signalee comme placeholder dans le code et le README. Elle ne doit pas etre consideree active avant creation de la boite email officielle.

## Recommandation principale

Pour le domaine achete `driv-energy.com` :

- adresse publique principale : `contact@driv-energy.com`
- adresse partenariats : `partenariats@driv-energy.com`

Important : ne pas modifier le site pour l'instant. L'adresse actuelle `contact@drivenergy.cd` reste placeholder jusqu'a creation et test de la boite officielle.

Si `drivenergy.cd` est achete :

- adresse publique principale : `contact@drivenergy.cd`
- adresse partenariats : `partenariats@drivenergy.cd`

Si le domaine principal retenu est `drivenergydrc.com` :

- adresse publique principale : `contact@drivenergydrc.com`
- adresse partenariats : `partenariats@drivenergydrc.com`

## Strategie simple de boites

Phase 1 lancement :

- creer 1 compte principal payant : `contact@...`
- creer `partenariats@...` comme alias vers `contact@...`
- creer eventuellement `founder@...` ou une adresse nominative interne plus tard

Phase 2 apres traction :

- separer `contact`, `partenariats`, `operations`, `finance` si volume d'echange augmente.

## Fournisseurs email possibles

| Option | Avantages | Limites | Recommandation |
|---|---|---|---|
| Google Workspace | Gmail professionnel, Drive, Docs, Calendar, bonne credibilite B2B, custom domain apres verification | Cout par utilisateur ; configuration DNS MX/SPF/DKIM/DMARC | Recommande si le budget le permet |
| Zoho Mail | Cout plus bas ; options custom domain ; bon pour demarrage | Moins universel que Gmail ; verifier limites du plan gratuit/payant | Alternative budget |
| Email forwarding registrar | Rapide et parfois inclus | Moins robuste pour reception/envoi pro ; delivrabilite variable | Possible temporairement, pas ideal pour lancement institutionnel |

## DNS email minimum

A configurer apres choix fournisseur :

- MX records
- SPF
- DKIM
- DMARC basique

Objectif : eviter que les messages DrivEnergy soient classes en spam et proteger le domaine contre usurpation.

## DNS email avec GoDaddy

Si l'email est configure pendant que les DNS restent chez GoDaddy :

- ajouter les enregistrements MX fournis par Google Workspace ou Zoho ;
- ajouter SPF en TXT ;
- ajouter DKIM en TXT ;
- ajouter DMARC en TXT.

Si les nameservers sont transferes vers Cloudflare, les memes enregistrements devront etre crees dans Cloudflare DNS, pas dans GoDaddy.

## Regle de prudence

Ne pas modifier l'email du site avant que :

1. le domaine soit achete ;
2. la boite existe ;
3. un test d'envoi/reception fonctionne ;
4. SPF/DKIM/DMARC soient configures.

## Sources utiles

- [Google Workspace edition guide](https://support.google.com/a/answer/6043576?hl=en)
- [Google Workspace pricing](https://workspace.google.com/pricing.html)
- [Zoho Mail pricing](https://www.zoho.com/mail/pricing.html)
- [Zoho custom domain email](https://www.zoho.com/mail/custom-domain-email.html)
