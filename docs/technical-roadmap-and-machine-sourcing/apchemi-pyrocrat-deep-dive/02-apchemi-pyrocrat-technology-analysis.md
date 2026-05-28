# 02 - Analyse des technologies APChemi / Pyrocrat

Date : 2026-05-28

## Technologies identifiées

| Technologie | Principe | Capacité annoncée | Intrants | Produits sortants | Complexité | Compatibilité DrivEnergy | Risques HSE / opération | Confiance |
|---|---|---:|---|---|---|---|---|---|
| PYROMAX pyrolyse plastique | Pyrolyse thermique avec airlocks, automatisation, anti-coking, récupération chaleur | TRL9 pour 10 TPD, TRL8 pour 50 TPD selon Pyrocrat ; scale-up jusqu'à 100 TPD selon APChemi | plastiques mixtes, MLP, PET/PVC contaminés selon APChemi | pyrolysis oil, gaz, char ; huile purifiable | Élevée | Pertinent techniquement, mais capacité trop haute pour 1 t/j | PVC/PET, gaz, complexité, opérateurs | Moyenne |
| Pyrolyse batch / continue | APChemi mentionne batch/continuous reactor | non détaillé par modèle public | plastique, pneus, biomasse | huile, gaz, char/biochar | Moyenne-élevée | À clarifier : batch robuste 1 t/j possible ? | risque surdimensionnement | Moyenne-faible |
| Anti-coking reactor technology | Réduction dépôts coke dans réacteur | non chiffré | plastiques difficiles | meilleure disponibilité revendiquée | Moyenne | Intéressant pour maintenance | claim à vérifier par référence | Moyenne-faible |
| Récupération chaleur | Utilisation gaz/fumées pour séchage feedstock et préchauffage air | non chiffré | applicable plastiques | efficacité énergétique | Élevée | Utile si simple et maintenable | complexité et contrôle | Moyenne |
| Gaz non condensable / energy self-sufficiency | Gaz de pyrolyse réutilisé | APChemi revendique energy self-sufficiency | gaz produit | chauffage process | HSE élevée | À reformuler DrivEnergy : soutien partiel seulement | incendie, explosion, surpression | Moyenne-faible |
| PUREMAX / PUROIL purification | Purification huile pyrolyse pour retirer chlore, oxygène, métaux, etc. | 1.2 à 6 KTA projet TDB ; 15 000 L/j PUREMAX selon pyrolysisplant.com | huile pyrolyse contaminée | huile purifiée pour pétrochimie/circular plastics | Élevée | Pas phase 1, mais utile si qualité huile devient problème | CAPEX/OPEX, complexité chimique | Moyenne |
| Distillation huile pyrolyse | Vacuum distillation, flashpoint, fractions | non public par taille | huile plastique/pneu/biomasse | fractions distillées | Moyenne-élevée | Option plus tard, pas nécessaire phase 1 | discours diesel/raffinerie | Moyenne |
| R&D / feedstock due diligence | Tests feedstock, rendement, qualité huile en labo | non chiffré | plastiques/biomasse client | rapport tests | Faible-moyenne | Très pertinent avant RFQ | coût, échantillons export | Moyenne-haute |
| PMC / troubleshooting | Audit, ingénierie, redressement d'unités | cas 50 TPD biomass troubleshooting | unités existantes | amélioration opération | Moyenne | utile si DrivEnergy veut owner engineer | dépend contrat | Moyenne |

## Fit technologique pour Kinshasa

APChemi est techniquement plus profond que Beston : il parle de feedstock due diligence, R&D, anti-coking, purification, ISCC, opérations et partenariats pétrochimiques. Pour Kinshasa, cela donne une bonne base RFQ, mais aussi un risque de complexité excessive.

## Recommandation technologie

- À demander : une solution **simple**, batch ou semi-continue, PE/PP, 1-2 t/j, sans obligation PUREMAX/distillation.
- À éviter phase 1 : circular plastics, refinery-grade oil, diesel, naphtha, hydrogen, purification avancée, 10-50 TPD.
- À retenir : feedstock due diligence, anti-coking, condensation, gaz sécurisé, formation, références opérationnelles.

