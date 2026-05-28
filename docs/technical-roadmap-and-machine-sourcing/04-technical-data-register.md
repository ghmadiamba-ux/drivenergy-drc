# 04 - Registre des données techniques

Date : 2026-05-28

| Donnée | Valeur / plage utile | Type source | Confiance | Implication DrivEnergy |
|---|---|---|---|---|
| Température générale pyrolyse plastique | 300-900 °C selon revues ; zone souvent utile autour de 400-550 °C pour polyoléfines | Académique | Haute | Spécifier contrôle température robuste, pas simple chauffage approximatif |
| Dégradation HDPE/PP | principalement autour de 400-500 °C selon revue PMC | Académique | Moyenne-haute | Confirme intérêt PE/PP et nécessité monitoring |
| Rendement huile plastique | jusqu'à 80 wt% dans certaines conditions ; très dépendant polymère/réacteur | Académique | Moyenne | Ne jamais promettre rendement unique ; exiger bilan matière fournisseur |
| PE/PP | bons candidats pour huile/wax hydrocarbures | Académique/industriel | Haute | Priorité feedstock |
| PET | faible rendement huile ou produits acides/corrosifs ; gaz élevé selon revues | Académique | Moyenne-haute | PET limité/conditionnel |
| PVC | génère HCl, risque corrosion/chlore ; peut charger gaz/scrubber | Académique/HSE | Haute | Exclusion stricte non négociable |
| Mixed plastics | rendement plus variable, gaz/char plus élevés possibles | Académique | Moyenne | Ne pas accepter "mixed" sans tri et limites |
| Humidité | consomme énergie, baisse température effective, complique qualité | Industriel/inféré | Moyenne | Mesurer humidité ; séchage si nécessaire |
| Saleté/inertes | augmente char/résidus, usure, nettoyage, coût/kg accepté | Industriel/inféré | Moyenne | Rejeter lots sales ; calculer coût/kg accepté |
| Broyage | requis pour homogénéité et alimentation régulière | Industriel | Haute | Broyeur dans pré-spécification |
| Lavage | utile si saleté forte mais ajoute eau/effluents/séchage | Industriel | Moyenne | À décider après terrain |
| Condensation multi-étage | améliore récupération fractions, réduit pertes vapeurs | Fournisseur/industriel | Moyenne | Exiger schéma et dimensionnement |
| Filtration huile | nécessaire avant stockage/test | Interne/industriel | Haute | Non négociable |
| Pouvoir calorifique huile | plusieurs revues indiquent souvent >40 MJ/kg pour huiles polyoléfines | Académique | Moyenne | À confirmer par labo avant client |
| Soufre/chlore | dépend feedstock ; chlore critique si PVC | Académique/industriel | Haute pour risque | Analyse labo obligatoire |
| Viscosité/stabilité | variable ; waxes possibles si température/condensation non maîtrisées | Académique/industriel | Moyenne | Tester viscosité, point éclair, eau/sédiments |
| Gaz non condensable | peut soutenir chauffage partiel, pas autonomie totale garantie | Interne/fournisseur | Moyenne | Brûleur/torchère/anti-retour obligatoires |
| Stockage huile | combustible/flammable selon analyse ; rétention, ventilation, séparation zones | HSE/NFPA | Haute pour principe | Cuves adaptées, rétention, incendie |
| Pression | plusieurs fournisseurs revendiquent basse pression ; doit être vérifié | Fournisseur | Moyenne-faible | Exiger pression nominale, soupapes, instruments |
| Émissions | HCl, VOC, particules, combustion gaz possibles | HSE/académique | Haute pour existence risque | Scrubber/traitement gaz selon feedstock et réglementation |
| WASTX Plastic | 1 000 kg/j, env. 3 300 kWh/j, 1 000 l/j base oil, 12% gaz, 30 kg coke selon PDF distributeur | Fournisseur/distributeur | Moyenne-faible | Taille intéressante, données à confirmer directement |
| Beston BLJ/BLL | modèles 6-30 t/j ; prix à partir de 49k USD sur site Beston.net | Fournisseur | Faible-moyenne | Trop grand pour phase 1 sauf config spéciale |
| APChemi | 49+ projets et 227M kg traités revendiqués sur site | Fournisseur | Moyenne | Fournisseur sérieux à auditer, pas vérité RFQ |

## Données à obtenir avant RFQ

- composition réelle Kinshasa : PE/PP/PET/PVC/humidité/saleté ;
- cible huile : PCI, viscosité, point éclair, soufre, chlore, eau, sédiments ;
- bilan matière garanti par fournisseur sur PE/PP local ;
- bilan énergie avec et sans gaz non condensable ;
- taux de disponibilité réaliste ;
- consommables, pièces, maintenance ;
- émissions et système de traitement.

