const consulting = [
  {
    title: 'Product Strategy Review',
    detail: 'Evaluate your product operating model, decision flows, and prioritization process — and deliver a concrete improvement plan.',
    outcome: '2-week engagement → actionable strategy document',
  },
  {
    title: 'Decision Framework Workshop',
    detail: 'Design a repeatable decision framework for your team — from signal intake to roadmap-ready decisions.',
    outcome: '1-day workshop → implemented framework + playbook',
  },
  {
    title: 'AI Governance Assessment',
    detail: 'Audit your AI product workflows for governance gaps, compliance readiness, and scalable safety patterns.',
    outcome: '1-week assessment → risk map + remediation plan',
  },
]

export function ContactPage() {
  return (
    <section className="section">
      <div className="section-head">
        <h1>Let's Talk</h1>
        <p>
          I partner with teams that need faster decision quality, stronger execution systems, and
          practical AI adoption without governance risk.
        </p>
      </div>

      <article className="contact-card">
        <h2>Currently Exploring</h2>
        <p>
          Senior PM, Group PM, Product Lead, and advisory roles globally — in B2B SaaS, Enterprise,
          AI/ML, Data, and Platform product organizations.
        </p>

        <h2>Advisory &amp; Consulting</h2>
        <div className="consulting-grid">
          {consulting.map((pkg) => (
            <div className="consulting-card" key={pkg.title}>
              <h3>{pkg.title}</h3>
              <p>{pkg.detail}</p>
              <p className="consulting-outcome">{pkg.outcome}</p>
            </div>
          ))}
        </div>

        <h2>Speaking &amp; Collaboration</h2>
        <p>
          Available for speaking on AI governance, product operating models, and decision frameworks.
          Open to panel discussions, workshops, and podcast conversations.
        </p>

        <div style={{ marginTop: 'var(--space-4)' }}>
          <p><strong>Ready to connect?</strong></p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <a className="button button-primary" href="mailto:guru7789@gmail.com?subject=Product Leadership Conversation">
              Email Me
            </a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/gurupraasad/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="button button-ghost" href="https://github.com/gurupraasad" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}