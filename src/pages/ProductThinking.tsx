const principles = [
  {
    title: 'Start from operating pain',
    detail: 'Not feature requests. The best products remove friction people actually feel.',
  },
  {
    title: 'Design for repeatability',
    detail: 'Make it work once, then make it work every time — before scaling.',
  },
  {
    title: 'Keep judgment in the loop',
    detail: 'AI assists the decision; it never silently makes it. Human-in-the-loop by design.',
  },
  {
    title: 'Make tradeoffs explicit',
    detail: 'Every choice is visible and reviewable — no hidden logic, no black boxes.',
  },
  {
    title: 'Governance as a requirement',
    detail: 'Compliance and auditability are product features, not afterthoughts.',
  },
]

const framework = [
  { step: '01', cue: 'Input Gate', title: 'Signal quality', detail: 'Is the input trustworthy? Filter noise before it becomes roadmap.' },
  { step: '02', cue: 'Clarity Gate', title: 'Problem framing', detail: 'Name the real problem — not the requested feature.' },
  { step: '03', cue: 'Choice Gate', title: 'Options', detail: 'Generate more than one path. A single option is a decision in disguise.' },
  { step: '04', cue: 'Risk Gate', title: 'Tradeoffs', detail: 'Make cost, risk, and value explicit and comparable.' },
  { step: '05', cue: 'Flow Gate', title: 'Sequence', detail: 'Order the work so each step de-risks the next.' },
  { step: '06', cue: 'Proof Gate', title: 'Validation', detail: 'Define what proof looks like before building anything.' },
]

const howIWork = [
  {
    title: 'Clarity over control',
    detail: 'Surface the "why," and teams make better decisions without me in the room.',
  },
  {
    title: 'Build for delegation',
    detail: 'Systems teams trust and can run independently — I design myself out of the loop.',
  },
  {
    title: 'Transparent by default',
    detail: 'Auditable frameworks over hidden intelligence. Trust scales; heroics don\'t.',
  },
  {
    title: 'Customer as co-creator',
    detail: 'Users are building partners, not just feedback providers. Adoption is earned through partnership.',
  },
]

export function ProductThinkingPage() {
  return (
    <section className="section">
      <div className="section-head">
        <h1>Product Thinking</h1>
        <p>
          The operating system behind my work — how I turn fragmented signals into scoped,
          governed decisions that teams can execute without me in the room.
        </p>
      </div>

      <div className="approach-block">
        <h2 className="approach-heading">Operating Principles</h2>
        <div className="principle-grid">
          {principles.map((item) => (
            <div className="principle-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="approach-block">
        <h2 className="approach-heading">Decision Framework</h2>
        <p className="approach-intro">
          A repeatable progression from raw signal to validated delivery. Every step is a gate —
          if it fails, the work stops here, not in production.
        </p>
        <ol className="framework-pipeline">
          {framework.map((item) => (
            <li className="framework-step" key={item.step}>
              <span className="framework-num">{item.step}</span>
              <div className="framework-body">
                <span className="framework-cue">{item.cue}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="approach-block">
        <h2 className="approach-heading">How I Work</h2>
        <div className="principle-grid principle-grid--four">
          {howIWork.map((item) => (
            <div className="principle-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}