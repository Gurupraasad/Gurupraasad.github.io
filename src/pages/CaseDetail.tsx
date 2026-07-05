import { Link, useParams } from 'react-router-dom'
import { findCaseBySlug } from '../data/cases'

export function CaseDetailPage() {
  const { slug = '' } = useParams()
  const caseStudy = findCaseBySlug(slug)

  if (!caseStudy) {
    return (
      <section className="section">
        <h1>Case Not Found</h1>
        <p>The requested case study is not available in this public portfolio.</p>
        <Link to="/cases" className="button button-primary">
          Back to Case Studies
        </Link>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section-head">
        <h1>{caseStudy.title}</h1>
        <p>{caseStudy.summary}</p>
      </div>

      <article className="detail-card">
        <h2>Business Problem</h2>
        <p>{caseStudy.businessProblem}</p>

        <h2>PM Role and Scope</h2>
        <ul>
          {caseStudy.pmRole.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Constraints and Tradeoffs</h2>
        <ul>
          {caseStudy.constraints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Strategy</h2>
        <ul>
          {caseStudy.strategy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Execution Narrative</h2>
        <ul>
          {caseStudy.execution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Outcome Signals</h2>
        <ul>
          {caseStudy.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="callout-block">
          <h2>The Hardest Call</h2>
          <p>{caseStudy.hardestCall}</p>
        </div>

        {caseStudy.customerInsight && (
          <div className="callout-block callout-insight">
            <h2>Customer Insight</h2>
            <p>{caseStudy.customerInsight}</p>
          </div>
        )}

        <h2>Reflection</h2>
        <p>{caseStudy.reflection}</p>
      </article>

      <div className="hero-actions">
        <Link to="/cases" className="button button-ghost">
          Back to Case Studies
        </Link>
        <Link to="/contact" className="button button-primary">
          Discuss This Work
        </Link>
      </div>
    </section>
  )
}