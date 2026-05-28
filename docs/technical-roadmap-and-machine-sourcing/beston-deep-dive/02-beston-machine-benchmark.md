# 02 - Benchmark des machines Beston

Date : 2026-05-28

## Données fournisseur principales

Beston présente des machines de pyrolyse plastique autour des modèles BLJ et BLL. Les modèles récurrents sont :

- `BLJ-16` : batch.
- `BLJ-20` : batch / semi-continu selon pages.
- `BLL-30` : continu.

Beston indique que la pyrolyse plastique peut traiter PP, PE, PS, ABS et certains plastiques multicouches, et précise que PET et PVC sont déconseillés / à faible rendement. Cette position est cohérente avec DrivEnergy pour PE/PP, mais le discours Beston reste parfois orienté “fuel oil / diesel non-standard” ; cela ne doit pas être repris comme positionnement DrivEnergy.

## Tableau comparatif

| Modèle | Type | Capacité nominale fournisseur | Capacité réaliste supposée | Intrants | Rendement huile annoncé | Gaz / condensation | HSE indiqué | Prix indicatif | Fit 1 t/j | Fit 2 t/j | Niveau de confiance |
|---|---|---:|---:|---|---|---|---|---|---|---|---|
| BLJ-16 | Batch | environ 12-16 t/j selon pages Beston | 8-12 t/j utiles si feedstock préparé ; non vérifié | pneus, plastiques, boues selon configuration | 35-45% plastique général, jusqu'à 80% pour PE/PP/PS selon page française | système condensation, gaz recyclable dans four selon Beston | sécurité/traitement fumées revendiqués | non public sur page officielle ; certains sites Beston indiquent pyrolysis plant dès 49k USD | Trop grand | Trop grand pour phase 2 initiale | Moyenne-faible |
| BLJ-20 | Batch / semi-continu selon page | environ 15-20 t/j | 10-16 t/j utiles ; non vérifié | plastiques/pneus/boues | idem, dépend polymère | condensation + gaz combustible revendiqués | contrôle et fumées revendiqués | non public | Incompatible | Surdimensionné | Moyenne-faible |
| BLL-30 | Continu | environ 20-30 t/j | 16-24 t/j utiles ; non vérifié | flux continu préparé | idem | système continu plus complexe | plus exigeant HSE/maintenance | non public | Non | Non phase 1 | Moyenne-faible |
| Petite configuration Beston non identifiée | À demander | non vérifié | 1-2 t/j si existe | PE/PP uniquement | à demander | à exiger | à exiger | à demander | Potentiellement pertinente si existe | Potentiellement | Faible |

## Besoins techniques à clarifier

| Sujet | Donnée Beston trouvée | Risque DrivEnergy |
|---|---|---|
| Broyage | Beston mentionne besoin de prétraitement / taille matière selon cas | Kinshasa devra prévoir broyeur et tri avant pyrolyse |
| Séchage | Non toujours détaillé | Humidité locale peut réduire rendement et augmenter énergie |
| Lavage | Non toujours requis mais dépend saleté | Si plastiques très sales, lavage crée eau usée et séchage |
| Condensation | Système de condensation revendiqué | Dimensionnement et nettoyage doivent être prouvés par PFD/P&ID |
| Gaz non condensable | Beston dit que gaz peut être recyclé pour chauffer le four | Ne pas convertir en promesse d'autonomie ; exiger bilan énergie |
| Traitement fumées | Beston mentionne dépoussiérage, désulfuration ou systèmes de traitement selon pages | Exiger détails et conformité locale |
| Sécurité pression/température | Revendiquée mais peu détaillée publiquement | Exiger liste capteurs, alarmes, soupapes, E-stop |

## Conclusion machine

Les machines Beston visibles publiquement semblent principalement dimensionnées pour des capacités nettement supérieures à la cible DrivEnergy 1 t/j. Beston ne doit entrer en shortlist que si l'entreprise confirme une solution réellement adaptée à 1 t/j ou une configuration modulaire/petite capacité, avec preuves de performance, HSE et références.

