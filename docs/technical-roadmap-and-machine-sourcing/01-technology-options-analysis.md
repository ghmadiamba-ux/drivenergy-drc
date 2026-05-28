# 01 - Analyse des technologies accessibles

Date : 2026-05-28

## Base de décision DrivEnergy

Sources internes : `.project-system/DECISION_LOG.md`, `.project-system/VALIDATION_BACKLOG.md`, `docs/complete-project-architecture/19-master-architecture-decision-report.md`, `docs/pre-supplier-technical-specification-lock/22-final-technical-lock-decision-report.md`.

Décision active : **pyrolyse thermique batch robuste, 1 t/jour initial, PE/PP majoritaires, PVC exclu, PET limité/conditionnel, gaz non condensable pour soutien partiel seulement**.

## Tableau comparatif

| Technologie | Principe | Maturité | Coût relatif | Complexité | Compatibilité Kinshasa | Pertinence 1 t/j | Pertinence 2 t/j | Recommandation |
|---|---|---:|---:|---:|---|---|---|---|
| Pyrolyse batch thermique | Chauffage sans oxygène par cycles chargement/réaction/refroidissement | Élevée chez fournisseurs, variable en exploitation réelle | Bas à moyen | Moyenne | Bonne si HSE, tri et maintenance sont stricts | Bonne | Possible avec 2 lignes ou cycles stables | **Oui phase 1** |
| Pyrolyse semi-continue | Alimentation/décharge partiellement automatisées, moins d'arrêts | Moyenne à élevée selon fournisseur | Moyen | Moyenne-élevée | Possible après preuve batch ou fournisseur très solide | Prudence | Bonne si feedstock régulier | **Plus tard** |
| Pyrolyse continue | Alimentation et décharge continues, automation forte | Élevée chez leaders, mais ramp-up difficile | Élevé | Élevée | Risquée pour première unité locale | Non prioritaire | Possible uniquement après preuves | **Non phase 1** |
| Pyrolyse catalytique | Catalyseurs pour orienter la coupe hydrocarbure / améliorer qualité | Maturité industrielle variable | Élevé | Élevée | Fragile : catalyseur, poisons, régénération, qualité feedstock | Non | Non sauf partenaire confirmé | **Non phase 1** |
| Distillation/upgrading post-pyrolyse | Séparation ou amélioration de l'huile brute | Mature mais ajoute CAPEX/OPEX | Moyen à élevé | Élevée | Utile après preuve qualité et client | Non obligatoire | Possible si marché l'exige | **Plus tard** |
| Condensation multi-étage | Condense fractions lourdes/légères à plusieurs températures | Nécessaire sur unités sérieuses | Moyen | Moyenne | Très pertinente pour qualité et pertes vapeur | Oui | Oui | **Oui, exigence RFQ** |
| Filtration huile | Retrait solides/impuretés avant stockage/test | Mature | Bas à moyen | Faible-moyenne | Très pertinente | Oui | Oui | **Oui** |
| Traitement gaz non condensable | Brûleur, torchère, anti-retour, contrôle combustion | Mature mais critique HSE | Moyen | Élevée HSE | Indispensable | Oui | Oui | **Non négociable** |
| Prétraitement broyage | Réduction taille et homogénéisation | Mature | Moyen | Faible-moyenne | Indispensable si feedstock volumineux | Oui | Oui | **Oui** |
| Lavage/séchage | Réduit saleté/humidité mais consomme eau/énergie | Mature | Moyen-élevé | Moyenne | À décider après terrain ; eau/logistique critiques | Conditionnel | Conditionnel | **À valider** |
| Densification/agglomération | Augmente densité d'alimentation | Mature mais ajoute machine | Moyen | Moyenne | Utile si films légers dominants | Conditionnel | Conditionnel | **Plus tard / option** |

## Données techniques externes utiles

- Les revues techniques situent la pyrolyse plastique généralement entre **300 et 900 °C**, avec production huile/gaz/char ; plusieurs revues indiquent des rendements huile élevés autour de **500 °C** pour certains plastiques, mais très dépendants du polymère et du réacteur. Source : ScienceDirect, *Catalytic pyrolysis of plastic waste: A review* ; ScienceDirect, *A review on pyrolysis of plastic wastes*.
- Une revue ouverte indique que la dégradation HDPE/PP commence surtout vers **400-500 °C** et que PVC/PET donnent souvent de faibles rendements liquides. Source : PMC, *A review on gasification and pyrolysis of waste plastics*.
- Des données de revue indiquent que PET et PVC peuvent produire beaucoup plus de gaz que d'huile à 500 °C. Source : PMC, *Recent Trends in the Pyrolysis of Non-Degradable Waste Plastics*.
- Les sources fournisseurs qui promettent le traitement de PVC/PET doivent être traitées comme **revendications fournisseur**, non comme base de design DrivEnergy.

## Décision technique provisoire

Pour Kinshasa, la voie la plus défendable reste :

1. tri PE/PP strict ;
2. batch thermique robuste ;
3. condensation dimensionnée et nettoyable ;
4. gaz non condensable sécurisé ;
5. filtration et stockage contrôlé ;
6. analyse huile avant tout usage industriel ;
7. semi-continu seulement après preuve de feedstock, maintenance et opérateurs.

