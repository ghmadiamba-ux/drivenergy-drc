# DrivEnergy DRC - Website Image Map

Document interne pour eviter les conflits visuels, la duplication et les usages ambigus des images du site public.

Chemin du site :

`web/drivenergy-project-page`

## Regles visuelles

- Une seule image hero principale sur la homepage.
- Les images humaines/locales servent l'ancrage congolais et la competence technique ; elles ne doivent pas suggerer un soutien officiel de l'Etat ou d'une autorite publique.
- Les images industrielles/process servent les sections techniques et ne doivent pas concurrencer le hero.
- Les visuels restent sobres, B2B, industriels, non politiques, non ONG et non touristiques.
- Les captions/alt text ne doivent jamais parler d'approbation presidentielle, de projet gouvernemental officiel ou d'endorsement public non documente.

## Inventaire des images

| Fichier | Usage actuel | Usage recommande | Statut | Notes / risque |
|---|---|---|---|---|
| `src/assets/hero-drc-president-fauna-flora-industrial.png` | Hero homepage | Hero principal uniquement | Actif | Visuel approuve par le fondateur. Exprime ambition industrielle congolaise, competence locale, infrastructure energetique, feedstock selectionne et identite naturelle RDC. Alt text non politique. Ne pas presenter comme endorsement officiel, projet d'Etat, validation FPI ou sponsoring presidentiel. |
| `src/assets/hero-industrial.png` | Section `Technologie et procede` | Support technique/process, infrastructure pilote, architecture industrielle | Actif secondaire | Ancien hero reutilise plus bas pour soutenir le message technique. Ne doit plus etre utilise comme image emotionnelle principale. |
| `src/assets/hero-congolese-industrial-team.png` | Reserve/source | Reserve ou remplacement futur si besoin | Reserve | Fichier source conserve. Ne pas supprimer. Visuel humain/industriel simplifie, sans figure nationale ni reference okapi/faune-flore. |
| `src/assets/hero-drc-national-industrial-ambition.png` | Reserve/source | Reserve ou remplacement futur si besoin | Reserve | Copie precedente du visuel humain/industriel simplifie. Ne pas supprimer. Ne doit plus etre utilise comme hero principal. |

## Images non presentes actuellement

| Type | Usage futur possible | Statut |
|---|---|---|
| Machines / equipements detailles | Process flow, pyrolyse, condensation, gestion gaz, validation technique, RFQ fournisseur | Non present |
| Autres images humaines/locales | Formation, tri, discipline feedstock, HSE, execution terrain | Non present |
| Nature / paysage RDC | Identite locale subtile seulement, jamais dominante | Non present hors arriere-plan discret du hero |

## Carte d'usage active

- Homepage hero : `hero-drc-president-fauna-flora-industrial.png`
- Technologie et procede : `hero-industrial.png`
- Images reserve : `hero-congolese-industrial-team.png`, `hero-drc-national-industrial-ambition.png`

## Points de controle avant publication

- Verifier que le hero reste percu comme industriel et B2B.
- Verifier que l'image ne cree pas de lecture politique ou institutionnelle non documentee.
- Verifier que l'ancien hero ne concurrence pas la section principale.
- Verifier que les images restent lisibles en mobile et desktop.
- Verifier que tous les alt text restent professionnels, non politiques et non trompeurs.
