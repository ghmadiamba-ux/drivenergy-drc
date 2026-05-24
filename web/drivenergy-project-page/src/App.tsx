import heroImage from "./assets/hero-drc-president-fauna-flora-industrial.png";
import processImage from "./assets/hero-industrial.png";
import {
  applications,
  approachPillars,
  benchmarkLessons,
  challengePoints,
  contactEmail,
  feedstockRules,
  navItems,
  notList,
  processSteps,
  roadmap,
  validationItems,
} from "./data/projectContent";

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Accueil DrivEnergy DRC">
          <span className="brand-mark">DE</span>
          <span>
            <strong>DrivEnergy</strong>
            <small>DRC</small>
          </span>
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top" aria-label="DrivEnergy DRC">
        <img
          src={heroImage}
          alt="Vision industrielle congolaise pour la valorisation énergétique des plastiques usagés"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Plateforme d'énergie industrielle à Kinshasa</p>
          <h1>Transformer les plastiques usagés en sécurité énergétique industrielle locale.</h1>
          <p className="hero-copy">
            DrivEnergy DRC développe une voie semi-industrielle contrôlée pour
            transformer des plastiques usagés sélectionnés en combustible
            industriel technique candidat, sous validation progressive, pour les
            usages thermiques industriels stationnaires à Kinshasa.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Discuter d'un partenariat
            </a>
            <a className="button secondary" href="#technology">
              Voir le procédé
            </a>
          </div>
          <div className="hero-facts" aria-label="Repères du projet">
            <span>Voie de référence batch</span>
            <span>Cible initiale 1 t/jour</span>
            <span>PE/PP, PVC exclu</span>
          </div>
        </div>
      </section>

      <section className="section split" id="challenge">
        <div>
          <p className="eyebrow">Le défi</p>
          <h2>La pression des plastiques usagés et la vulnérabilité énergétique industrielle se rencontrent à Kinshasa.</h2>
        </div>
        <div className="stacked-list">
          {challengePoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className="section" id="approach">
        <div className="section-heading">
          <p className="eyebrow">Notre approche</p>
          <h2>Un projet local d'énergie industrielle, construit par points de preuve.</h2>
          <p>
            La logique DrivEnergy est simple : terrain avant fournisseur,
            fournisseur avant pilote, pilote avant montée en capacité. Tant que
            le feedstock, le site et la sécurité ne sont pas documentés, le RFQ
            fournisseur et le pilote restent bloqués.
          </p>
        </div>
        <div className="pillar-grid">
          {approachPillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-band" id="technology">
        <div className="section-heading compact">
          <p className="eyebrow">Technologie et procédé</p>
          <h2>Du plastique sélectionné vers une huile de pyrolyse plastique contrôlée.</h2>
          <p>
            Le flux cible va de la collecte et du tri manuel jusqu'à la
            pyrolyse thermique contrôlée, la condensation, la filtration, le
            stockage sécurisé et les tests qualité. Aucun test industriel client
            ne doit avoir lieu sans fiche qualité et volume limité.
          </p>
        </div>
        <figure className="process-visual">
          <img
            src={processImage}
            alt="Infrastructure technique pilote pour un procédé de pyrolyse thermique contrôlée"
          />
        </figure>
        <ol className="process-flow">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="technical-note">
          Le gaz non condensable peut seulement contribuer à une auto-alimentation
          partielle. Un apport énergétique externe peut rester nécessaire.
        </div>
      </section>

      <section className="section two-column" id="feedstock">
        <div>
          <p className="eyebrow">Discipline du feedstock</p>
          <h2>Le feedstock se mesure avant de choisir le réacteur.</h2>
          <p>
            DrivEnergy traite la qualité du feedstock comme un point de passage
            projet, pas comme un simple détail d'achat. L'économie se calcule
            sur le kilogramme accepté, pas sur le kilogramme reçu.
          </p>
        </div>
        <ul className="check-list">
          {feedstockRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      <section className="section applications" id="applications">
        <div className="section-heading compact">
          <p className="eyebrow">Applications industrielles</p>
          <h2>Priorité aux utilisateurs thermiques privés de Kinshasa.</h2>
        </div>
        <div className="application-grid">
          {applications.map((application) => (
            <span key={application}>{application}</span>
          ))}
        </div>
      </section>

      <section className="section validation" id="validation">
        <div className="section-heading">
          <p className="eyebrow">Sécurité et validation</p>
          <h2>SOP, HSE et qualité combustible avant usage commercial.</h2>
          <p>
            La sécurité opérationnelle, la qualité du combustible et la
            compatibilité avec les brûleurs ou chaudières industriels doivent
            être démontrées avant tout passage du concept à l'usage commercial.
          </p>
        </div>
        <div className="validation-grid">
          {validationItems.map((item) => (
            <article className="validation-item" key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section credibility" id="credibility">
        <div className="section-heading">
          <p className="eyebrow">Benchmark et prudence</p>
          <h2>Un modèle inspiré du marché mondial, mais adapté à Kinshasa.</h2>
          <p>
            Le scan global des opérateurs montre que la technologie seule ne
            suffit pas. Les risques récurrents sont le feedstock contaminé, les
            capacités annoncées non atteintes, la condensation, la qualité huile
            et les promesses commerciales excessives.
          </p>
        </div>
        <div className="validation-grid">
          {benchmarkLessons.map((item) => (
            <article className="validation-item" key={item.label}>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="section-heading compact">
          <p className="eyebrow">Feuille de route</p>
          <h2>Les points de preuve rendent le projet investissable.</h2>
        </div>
        <div className="timeline">
          {roadmap.map((item) => (
            <article className="timeline-item" key={item.phase}>
              <span>{item.phase}</span>
              <h3>{item.title}</h3>
              <strong>{item.status}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section not-section" id="not">
        <div>
          <p className="eyebrow">Limites claires</p>
          <h2>Ce que DrivEnergy DRC n'est pas.</h2>
        </div>
        <ul>
          {notList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Partenariats</p>
          <h2>Échanger avec DrivEnergy DRC sur la validation industrielle à Kinshasa.</h2>
          <p>
            Nous sommes ouverts aux échanges avec les utilisateurs thermiques
            industriels, brasseries, agro-industries, agrégateurs de plastiques
            usagés, fournisseurs techniques, institutions, investisseurs et
            acteurs du financement du développement.
          </p>
        </div>
        <a className="button primary" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </section>
    </main>
  );
}

export default App;
