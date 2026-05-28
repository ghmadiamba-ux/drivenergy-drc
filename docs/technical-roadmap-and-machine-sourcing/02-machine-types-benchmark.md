# 02 - Benchmark des types de machines

Date : 2026-05-28

## Typologie utile pour DrivEnergy

| Type machine | Capacité réaliste pour DrivEnergy | Capacité souvent annoncée | Intrants | Complexité | Main-d'oeuvre | Site/énergie/eau | Pièces critiques | Coût indicatif public | Fit DrivEnergy |
|---|---:|---:|---|---|---|---|---|---|---|
| Petite unité batch 500 kg/j | 0,3-0,5 t/j si cycles stables | 0,5-1 t/j | PE/PP triés | Moyenne | 3-5 opérateurs | Petite zone, appoint énergie, eau refroidissement | joints, brûleur, pompes, condenseur, capteurs | rarement publié | Bon outil test, trop petit pour modèle industriel |
| Batch 1 t/j | 0,7-1 t/j selon disponibilité | 1 t/j | PE/PP triés, PET limité | Moyenne | 4-6 opérateurs | Site simple mais HSE sérieux ; refroidissement obligatoire | idem + broyeur/stockage | certaines petites unités affichées 30k-100k USD, non vérifié | **Meilleur point d'entrée** |
| Batch 2 t/j | 1,4-2 t/j selon cycles | 2-6 t/j | PE/PP triés | Moyenne-élevée | 5-8 opérateurs | plus de stockage, sécurité incendie renforcée | pièces doublées, manutention | non fiable publiquement | Phase 2 seulement |
| Batch chinois 6-10 t/j | 4-8 t/j réel à vérifier | BLJ-6/10 ou équivalent | plastiques/pneus/boues selon fournisseur | Moyenne-élevée | 6-10 opérateurs | surface et refroidissement plus lourds | réacteur, joints, convoyeurs, pompe huile | Beston indique des prix à partir d'environ 49k USD sur certains sites ; configuration à confirmer | Trop grand pour validation initiale |
| Semi-continu | 5-20 t/j chez fournisseurs | 8-20 t/j | flux régulier préparé | Élevée | opérateurs + technicien | alimentation/décharge, automatismes, eau/électricité | vis, airlocks, capteurs, PLC | moyen-élevé | Plus tard, après preuves |
| Continu industriel | 20 t/j et plus souvent | 20-100+ t/j | flux homogène et continu | Très élevée | équipe industrielle | site lourd, maintenance spécialisée | alimentation, réacteur, condensation, gaz, contrôle émissions | élevé, souvent non publié | Non phase 1 |
| Containerisée/modulaire | 0,5-5 t/j selon fournisseur | 1-5 t/j | souvent polyoléfines | Moyenne-élevée | faible à moyenne | compacte mais dépendante refroidissement/énergie | modules propriétaires | Biofabrik/WASTX : capacité 1 t/j ou 5 t/j selon source ; prix non public | À investiguer, bonne taille mais dépendance fournisseur |
| Avec distillation intégrée | variable | variable | huile brute ou pyrolyse + distillation | Élevée | technicien process | énergie, sécurité vapeur/fractions légères | colonne, pompes, échangeurs | +20-40% coût selon source APChemi/pyrolysisplant.com | Plus tard, pas obligatoire phase 1 |
| Sans distillation | 0,5-2 t/j phase 1 | variable | PE/PP triés | Moyenne | opérateurs formés | plus simple | condensation/filtration critiques | moins cher | **Préférable phase 1** |
| Plastique uniquement | selon modèle | variable | PE/PP/PS, PET limité, PVC exclu | Moyenne | standard | plus maîtrisable | standard | variable | **Préférable** |
| Plastique + pneus + boues | selon modèle | souvent très large | multi-déchets | Élevée | plus spécialisée | risques HSE/qualité accrus | plus d'usure/contamination | variable | À éviter pour DrivEnergy phase 1 |

## Points de lecture des capacités

- Les capacités fournisseurs sont souvent **nominales** : elles supposent feedstock sec, préparé, machine disponible, opérateurs formés, cycles complets, refroidissement suffisant et maintenance.
- Pour DrivEnergy, la capacité utile doit être exprimée en **kg acceptés/jour**, pas kg reçus/jour.
- Une machine annoncée 6 t/j peut être hors sujet si le projet ne peut garantir que 1 t/j de PE/PP propre.

## Type recommandé

Machine cible RFQ future :

- plastique prioritaire, pas multi-déchets ;
- batch robuste ou semi-continu très simple ;
- capacité contractuelle autour de 1 t/j réel sur PE/PP ;
- pas de distillation intégrée obligatoire ;
- condensation multi-étage et route gaz sécurisée obligatoires ;
- documentation, formation, pièces, FAT/SAT incluses.

