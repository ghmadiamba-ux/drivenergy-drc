# 03 - Base fournisseurs et sourcing

Date : 2026-05-28

## Tableau central fournisseurs

| Fournisseur | Pays | Site web | Type machine | Capacité pertinente | Prix indicatif si disponible | Intrants | Gaz/condensation | HSE | Références | Preuves | Risques | Pertinence DrivEnergy | Confiance |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| APChemi / Pyrocrat | Inde | https://www.apchemi.com / https://pyrocratsystems.com | Batch/continu, pyrolyse et purification huile | 5 TPD+ revendiqué ; 1 t/j à demander | non public | plastiques, pneus, biomasse ; revendique tolérance PVC/PET | met en avant condensation, anti-coking, automatisation | revendique basse pression, sécurité, contrôle | revendique 49+ projets, ISCC, vidéos | site officiel, PDF Pyrocrat | claims forts à vérifier ; capacité 1 t/j pas claire | Très pertinent RFQ, surtout Inde/coût | Moyenne-haute pour existence, moyenne pour performances |
| Beston | Chine | https://www.bestongroup.com/fr/plastic-pyrolysis-plant/ | Batch, semi-continu, continu | BLJ-16/BLJ-20/BLL-30 visibles ; capacité publique généralement trop grande pour 1 t/j ; petite configuration à confirmer | non public sur page officielle ; prix génériques à vérifier | PE/PP/PS plus cohérents ; PET/PVC déconseillés ou à exclure | condensation et gaz réutilisé revendiqués ; détails à prouver | HSE/fumées/sécurité revendiqués, preuves techniques nécessaires | cas Afrique/Europe revendiqués par Beston, peu de confirmations tierces | site officiel, PDF, cas fournisseur, deep dive local | surdimensionnement, rendements marketing, discours diesel/distillation, SAV Afrique centrale non prouvé | Fournisseur à auditer / shortlist RFQ conditionnelle ; score 58/100 ; voir `docs/technical-roadmap-and-machine-sourcing/beston-deep-dive/` | Moyenne-faible |
| Henan Doing | Chine | https://www.plastictooilmachine.com / https://englishm.doinggroup.com | Batch/continu, plastique à huile | 15 t/j+ souvent annoncé ; 1 t/j à confirmer | non public | plastiques, pneus, boues, huiles | oil-gas separation/condensation revendiqué | HSE à prouver | références pays revendiquées, dont Afrique | site officiel + pages news | marketing, "diesel" fréquent, preuves faibles | RFQ possible, due diligence lourde | Moyenne-faible |
| Niutech | Chine | https://www.niutechenergy.com | Continu industriel | plutôt 10 000 t/an+ | non public | plastiques, pneus, déchets dangereux selon lignes | continu, anti-polymerization revendiqué | plus industriel, mais complexe | entreprise cotée/industrielle | site officiel | probablement trop grand/coûteux | Benchmark technique, pas phase 1 | Moyenne |
| Biofabrik WASTX Plastic | Allemagne | https://biofabrik.com | Module containerisé automatisé | 1 t/j ou 5 t/j selon sources/distributeurs | non public | polyoléfines, plastiques non recyclables | condensation étagée, gaz utilisé/énergie selon brochure | automatisation forte ; HSE à vérifier | distributeurs QMRE/Protecnia | fiches Environmental Expert/PDF | données variables, disponibilité commerciale à confirmer | Très intéressant par taille, à vérifier | Moyenne |
| Klean Industries | Canada | https://kleanindustries.com | intégrateur/licensor, pyrolyse/gazéification | industriel, non 1 t/j | non public | plastiques, pneus, MSW | technologies intégrées | fort discours HSE/industrial | références historiques revendiquées | site officiel | trop complexe, discours diesel/hydrogen | Benchmark, pas fournisseur phase 1 | Moyenne |
| Kingtiger | Chine | https://kingtigergroup.com | plastique/pneu pyrolyse | capacités publiques peu fiables | non public | plastiques/pneus | non vérifié | non vérifié | peu de preuves officielles solides trouvées | marketplace/Environmental Expert | site officiel difficile à valider, risque élevé | Réserve seulement | Faible |
| Kintek / petites unités labo | Chine/international | https://kindle-tech.com | réacteurs petite échelle | labo/pilote très petit | 30k USD+ selon FAQ générique | échantillons, R&D | non industriel | laboratoire | non industriel | site fournisseur | pas adapté usine | utile test labo, pas usine | Faible-moyenne |

## Questions RFQ spécifiques par fournisseur

### APChemi / Pyrocrat

- Existe-t-il une configuration 1 t/j dédiée plastique PE/PP sans distillation ?
- Fournir liste d'installations actives vérifiables et contactables.
- Clarifier la revendication de traitement PVC/PET : taux maximal, HCl, scrubber, impact huile, corrosion.
- Fournir PFD/P&ID, bilan matière PE/PP, bilan énergie, données huile.

### Beston / Henan Doing / Kingtiger

- Distinguer capacité par batch, capacité par jour, temps chauffage/refroidissement, disponibilité annuelle.
- Exiger vidéo live d'une usine active avec même feedstock.
- Exiger preuves émissions, condensation, gaz, sécurité pression et documentation en anglais/français.
- Refuser tout argument "diesel routier" ou multi-déchets non contrôlé.

### Biofabrik WASTX

- Confirmer modèle commercial disponible, capacité réelle, prix, maintenance, consommables, références actives.
- Confirmer les exigences feedstock polyoléfines, taille particules, humidité et puissance électrique.
- Clarifier usage du gaz, sécurité, refroidissement et qualité du "base oil".
