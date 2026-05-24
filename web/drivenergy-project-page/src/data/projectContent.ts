export const contactEmail = "contact@drivenergy.cd"; // Adresse provisoire jusqu'a confirmation de l'email officiel DrivEnergy DRC.

export const navItems = [
  { label: "Approche", href: "#approach" },
  { label: "Technologie", href: "#technology" },
  { label: "Validation", href: "#validation" },
  { label: "Feuille de route", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export const challengePoints = [
  "Kinshasa concentre une pression visible des plastiques usagés et un besoin industriel de chaleur plus résiliente.",
  "La cible prioritaire est l'utilisateur thermique privé, en particulier les brasseries de Kinshasa, puis les agro-industries, boulangeries et fours industriels.",
  "Le projet reste en validation progressive : feedstock, site, HSE, qualité combustible et test brûleur/chaudière doivent être documentés avant tout usage commercial.",
];

export const approachPillars = [
  {
    title: "Feedstock contrôlé",
    body: "PE et PP sont prioritaires. Le PET reste limité ou conditionnel. Tout lot suspect PVC doit être isolé et ne doit pas entrer dans le réacteur.",
  },
  {
    title: "Première étape robuste",
    body: "La voie de référence est la pyrolyse thermique contrôlée en batch, autour d'une cible pilote initiale d'une tonne par jour.",
  },
  {
    title: "Discipline combustible industriel",
    body: "L'huile de pyrolyse plastique est traitée comme un combustible industriel technique candidat, filtré, échantillonné et testé par lot.",
  },
  {
    title: "Énergie auxiliaire réaliste",
    body: "Le gaz non condensable peut contribuer à l'auto-alimentation partielle, avec anti-retour et brûleur/torchère ; une énergie externe peut rester nécessaire.",
  },
];

export const processSteps = [
  "Sourcing plastique",
  "Réception et pesée",
  "Tri manuel",
  "Exclusion PVC",
  "Broyage et contrôle propreté",
  "Séchage si nécessaire",
  "Chargement batch",
  "Pyrolyse thermique contrôlée",
  "Condensation et récupération huile",
  "Filtration, stockage et tests qualité",
  "Validation brûleur/chaudière",
];

export const feedstockRules = [
  "Feedstock majoritairement PE et PP sélectionnés",
  "Exclusion stricte du PVC",
  "PET limité ou conditionnel",
  "Lots suspects isolés avant tout chargement",
  "kg reçus, acceptés et rejetés suivis séparément",
  "Coût mesuré par kilogramme accepté",
  "Humidité, saleté et contamination enregistrées",
  "Transport, source et régularité fournisseur documentés",
];

export const applications = [
  "Priorité : brasseries privées à Kinshasa",
  "Agro-industries consommatrices de chaleur",
  "Boulangeries industrielles",
  "Savonneries et usines de biens de consommation",
  "Briqueteries et fours industriels",
  "Usines utilisant vapeur, chaudières, brûleurs ou chaleur stationnaire",
];

export const validationItems = [
  {
    label: "Validation du feedstock",
    detail: "Sources plastiques, part PE/PP, PET, PVC suspect, humidité, saleté, kg reçus, kg acceptés, kg rejetés et coût par kilogramme accepté.",
  },
  {
    label: "SOP critiques",
    detail: "Exclusion PVC, gestion du gaz non condensable, arrêt d'urgence, filtration huile, stockage sécurisé et libération ou quarantaine par lot.",
  },
  {
    label: "Sécurité opérationnelle",
    detail: "Contrôle température/pression, anti-retour gaz, brûleur ou torchère, rétention cuves, ventilation, extincteurs et plan incendie.",
  },
  {
    label: "Validation client",
    detail: "Analyse huile, fiche qualité, petit volume test, essai brûleur ou chaudière et substitution progressive après validation.",
  },
];

export const roadmap = [
  {
    phase: "Phase 1",
    title: "Validation feedstock et site",
    status: "Point actif",
    body: "Mesurer les flux PE/PP, les rejets, le coût par kg accepté, les contraintes site, stockage, ventilation, incendie et accès.",
  },
  {
    phase: "Phase 2",
    title: "RFQ fournisseur contrôlé",
    status: "Bloquée avant preuves terrain",
    body: "Transformer les preuves terrain en RFQ : condensation nettoyable, route gaz sécurisée, FAT/SAT, pièces critiques et formation opérateurs.",
  },
  {
    phase: "Phase 3",
    title: "Pilote 1 t/jour",
    status: "Conditionnelle",
    body: "Démarrer seulement après préparation du site, HSE, machine, SOP critiques testées, stockage huile et équipe formée.",
  },
  {
    phase: "Phase 4",
    title: "Tests client et montée en capacité",
    status: "À venir",
    body: "Tester la qualité huile et les brûleurs/chaudières avant tout usage commercial ; 2 t/jour seulement sous réserve de preuves opérationnelles.",
  },
];

export const benchmarkLessons = [
  {
    label: "Benchmark mondial",
    detail: "Le projet s'appuie sur les leçons d'acteurs de valorisation plastique-vers-combustible et de recyclage chimique : les annonces de capacité ne remplacent pas les preuves terrain.",
  },
  {
    label: "Choix adapté à Kinshasa",
    detail: "Les technologies hydrothermales, catalytiques complexes et continu avancé sont écartées en phase 1 au profit d'un batch robuste et maintenable.",
  },
  {
    label: "Prudence commerciale",
    detail: "DrivEnergy évite les promesses diesel, tout plastique, autonomie totale ou recyclage miracle ; le projet vise des usages thermiques industriels stationnaires.",
  },
];

export const notList = [
  "Pas une raffinerie",
  "Pas un projet de diesel routier ou d'essence",
  "Pas une promesse de recyclage miracle",
  "Pas une technologie sans risque",
  "Pas une promesse d'autonomie énergétique totale",
  "Pas une campagne de recyclage ONG",
];
