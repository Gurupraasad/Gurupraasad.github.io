import { Link } from 'react-router-dom'
import { caseStudies } from '../data/cases'

const casePriority: Record<string, number> = {
  'pm-intelligence-platform': 0,
}

const orderedCaseStudies = [...caseStudies].sort(
  (a, b) => (casePriority[a.slug] ?? 99) - (casePriority[b.slug] ?? 99),
)

export function CaseStudiesPage() {
  return (
    <section className="section">
      <div className="section-head">
        <h1>Case Studies</h1>
        <p>
          Each case is structured around business stakes, product decisions, execution flow, and
          public-safe evidence.
        </p>
      </div>

      <div className="case-grid">
        {orderedCaseStudies.map((item) => (
          <article key={item.slug} className="case-card demo-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <p className="label">Challenge</p>
            <p>{item.challenge}</p>
            <p className="label">What Changed</p>
            <p>{item.shift}</p>
            <div className="demo-actions">
              <Link className="link-button" to={`/cases/${item.slug}`}>
                Open Case Study →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}