# Options de domaine et recommandation

Date de preparation : 2026-05-24

Objectif : preparer l'achat du domaine public DrivEnergy DRC sans effectuer d'achat ni action irreversible.

## Domaine achete

Le domaine achete par le fondateur est :

`driv-energy.com`

Registrar visible sur capture : GoDaddy.

Statut : domaine confirme comme achete, a connecter au futur deploiement public. Le nom contient un tiret ; il reste utilisable, mais il faudra etre coherent dans toutes les communications publiques pour eviter les erreurs de saisie.

## Synthese

Recommandation mise a jour : utiliser `driv-energy.com` pour le lancement public initial, puis envisager plus tard une protection de marque avec `drivenergy.cd` ou `drivenergydrc.com` si disponible.

Recommandation pratique :

1. Domaine public initial : `driv-energy.com`
2. Protection future recommandee : `drivenergy.cd`
3. Fallback/protection .com future : `drivenergydrc.com`

## Notes de verification

- Une verification DNS locale n'a retourne aucune resolution pour les domaines candidats. Cela ne prouve pas la disponibilite commerciale.
- La disponibilite finale doit etre confirmee dans le panier du registrar avant paiement.
- Pour `.cd`, le registre national indique que la SCPT est l'operateur autorise du registre `.CD`.
- Les prix varient selon registrar, promotion, renouvellement et services inclus.

## Tableau des candidats

| Domaine | Disponibilite | Lien registrar / verification | Prix indicatif | Avantages | Limites | Recommandation |
|---|---|---|---|---|---|---|
| `driv-energy.com` | Achete par le fondateur chez GoDaddy | [GoDaddy domain dashboard](https://dcc.godaddy.com/domains/), [Manage DNS GoDaddy](https://www.godaddy.com/help/manage-dns-records-680) | Capture : renouvellement affiche 21.99 EUR/an | Domaine deja acquis ; court ; compatible communication internationale ; peut etre connecte rapidement | Tiret a expliquer oralement ; moins local que `.cd` ; email avec tiret possible mais moins fluide | Domaine de lancement public |
| `drivenergy.cd` | A verifier chez registrar ; pas de DNS local detecte | [NIC .CD](https://www.nic.cd/nic.cd/), [Regery .CD](https://regery.com/en/domains/zone/cd), [101domain](https://www.101domain.com/) | `.cd` souvent plus cher ; TLDSpy indique une moyenne autour de 69 USD et certains registrars vers 51 USD/an | Plus fort ancrage RDC ; court ; credible localement ; coherent avec `contact@drivenergy.cd` | Peut etre plus cher, moins instantane, DNSSEC pas toujours disponible selon registrar | Priorite 1 si disponible et gerable |
| `drivenergydrc.com` | A verifier au checkout ; pas de DNS local detecte | [Namecheap search](https://www.namecheap.com/domains/registration/results/?domain=drivenergydrc.com), [Cloudflare Registrar](https://dash.cloudflare.com/?to=/:account/domains/register) | `.com` autour de 10-18 USD/an selon registrar et renouvellement | Clair en anglais ; bon pour investisseurs, fournisseurs, partenaires internationaux | Moins local que `.cd` ; "DRC" est anglais | Fallback .com recommande |
| `drivenergy-drc.com` | A verifier au checkout ; pas de DNS local detecte | [Namecheap search](https://www.namecheap.com/domains/registration/results/?domain=drivenergy-drc.com) | `.com` autour de 10-18 USD/an | Lisible avec separateur | Tiret plus fragile a l'oral ; erreurs de saisie possibles | Option secondaire seulement |
| `drivenergyrdc.com` | A verifier au checkout ; pas de DNS local detecte | [Namecheap search](https://www.namecheap.com/domains/registration/results/?domain=drivenergyrdc.com) | `.com` autour de 10-18 USD/an | Francophone ; aligne avec RDC | Moins naturel pour partenaires anglophones ; melange anglais/francais | Bon si cible surtout francophone |
| `drivenergy-rdc.com` | A verifier au checkout ; pas de DNS local detecte | [Namecheap search](https://www.namecheap.com/domains/registration/results/?domain=drivenergy-rdc.com) | `.com` autour de 10-18 USD/an | Francophone et lisible | Tiret ; moins fluide | Protection optionnelle si budget |
| `drivenergy.africa` | A verifier au checkout ; pas de DNS local detecte | [Namecheap domain search](https://www.namecheap.com/domains/), [101domain](https://www.101domain.com/) | Variable selon registrar ; verifier renouvellement | Bon signal panafricain ; utile pour protection de marque | Moins precis RDC/Kinshasa ; peut diluer le message local | Option protection marque, pas domaine principal |
| `drivenergykinshasa.com` | A verifier au checkout ; pas de DNS local detecte | [Namecheap search](https://www.namecheap.com/domains/registration/results/?domain=drivenergykinshasa.com) | `.com` autour de 10-18 USD/an | Tres specifique Kinshasa ; bon SEO local | Long ; moins evolutif si expansion hors Kinshasa | Reserve SEO/local, pas prioritaire |

## Recommandation finale

Pour le lancement :

1. connecter `driv-energy.com` au deploiement Cloudflare Pages ;
2. ajouter aussi `www.driv-energy.com` ;
3. forcer une redirection canonique, idealement de `www` vers `driv-energy.com` ou inversement selon preference Cloudflare.

Protection future si budget disponible :

1. `drivenergy.cd`
2. `drivenergydrc.com`
3. `drivenergy.africa`

Eviter comme domaine principal :

- les versions avec tiret ;
- `drivenergykinshasa.com` sauf besoin SEO local specifique.

## Sources utiles

- [NIC .CD](https://www.nic.cd/nic.cd/)
- [Regery .CD](https://regery.com/en/domains/zone/cd)
- [TLDSpy .CD price comparison](https://tldspy.com/tld/cd)
- [Namecheap domain pricing](https://www.namecheap.com/domains/)
- [Cloudflare Registrar](https://dash.cloudflare.com/?to=/:account/domains/register)
