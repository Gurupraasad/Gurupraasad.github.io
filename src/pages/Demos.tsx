import { Link } from 'react-router-dom'

const demos = [
  {
    id: 'pm-intelligence-platform',
    title: 'MagicWand AI — Build What Matters',
    audience: 'Product leaders, hiring managers, startup founders',
    businessValue: 'Eliminates signal-to-decision bottleneck in product planning',
    tryFirst: 'Start with Signal Dashboard → score an opportunity → generate a PRD',
    proof:
      'A full product-management workspace: ingests customer signals, clusters pain points, scores opportunities with RICE, and drafts roadmaps, PRDs, and stakeholder comms — with a built-in AI assistant across every screen.',
    note: 'Runs entirely in-browser on synthetic data. Products, clients, and competitors are fictional; no backend or proprietary data.',
    caseSlug: 'pm-intelligence-platform',
    href: '/magicwand/index.html',
    status: 'Live',
    external: true,
    featured: true,
  },
  {
    id: 'pm-workflow-automation',
    title: 'ShipKit — From Idea to Release, One Workbench',
    audience: 'PM teams, engineering leads, process-minded executives',
    businessValue: 'Reduces spec review and release readiness cycle time by 75%',
    tryFirst: 'Click any lifecycle step → try AI Drafts → run a Spec Review',
    proof:
      'Six AI-powered PM tools covering the full lifecycle: AI Drafts, Spec Review, Done Review, Ask Jira, Backlog Health, and Release Dossier — all grounded in live project data.',
    note: 'Public-safe simulation only; no internal Jira, repository, or organization data is used.',
    caseSlug: 'pm-workflow-automation',
    href: '/shipkit/index.html',
    status: 'Live',
    external: true,
    featured: true,
  },
  {
    id: 'secure-ai-prototyping-factory',
    title: 'VisionForge — AI Prototyping Factory',
    audience: 'Innovation leads, governance teams, AI-curious product managers',
    businessValue: 'Ships prototypes in 1 day instead of weeks — with full compliance',
    tryFirst: 'Walk through the gated workflow → check governance status at each stage',
    proof:
      'Shows a gated AI prototyping workflow that balances speed, controls, and publish-safe delivery handoff.',
    note: 'All prompts, assets, and flows are synthetic with governance-first constraints.',
    caseSlug: 'secure-ai-prototyping-factory',
    href: '/visionforge/index.html',
    status: 'Live',
    external: true,
    featured: false,
  },
  {
    id: 'migration-intelligence',
    title: 'Launchpad — Secure Migration Intelligence',
    audience: 'Platform teams, migration leads, enterprise architects',
    businessValue: 'Aligns 15+ stakeholders on migration risk before kickoff',
    tryFirst: 'Enter a migration profile → review the readiness score → check phased plan',
    proof:
      'Converts migration profile signals into readiness scoring, risk visibility, and phased planning output for cross-functional alignment.',
    note: 'Scoring dimensions are adapted for public-safe demonstration while preserving decision logic.',
    caseSlug: 'migration-intelligence',
    href: '/launchpad/index.html',
    status: 'Live',
    external: true,
    featured: false,
  },
]

export function DemosPage() {
  return (
    <section className="section">
      <div className="section-head">
        <h1>Live Demos</h1>
        <p>
          Four product applications I conceived, designed, and built from scratch — each solving
          a real PM workflow gap. All content is synthetic and safe for public sharing.
        </p>
      </div>

      <div className="case-grid">
        {demos.map((demo) => (
          <article key={demo.id} className={`case-card demo-card${demo.featured ? ' demo-card--featured' : ''}`}>
            <h3>{demo.title}</h3>
            <div className="demo-meta">
              <span className="demo-meta-label">Who it's for:</span> {demo.audience}
            </div>
            <div className="demo-meta">
              <span className="demo-meta-label">Business value:</span> {demo.businessValue}
            </div>
            <p className="label">What It Proves</p>
            <p>{demo.proof}</p>
            <p className="demo-try">💡 {demo.tryFirst}</p>
            <div className="demo-actions">
              {demo.external ? (
                <a className="link-button" href={demo.href}>
                  Launch app →
                </a>
              ) : (
                <Link className="link-button" to={demo.href}>
                  Launch demo →
                </Link>
              )}
              {demo.caseSlug ? (
                <Link className="link-button" to={`/cases/${demo.caseSlug}`}>
                  Read case study →
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}