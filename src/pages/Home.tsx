import { Link } from 'react-router-dom'
import { caseStudies } from '../data/cases'

const casePriority: Record<string, number> = {
  'pm-intelligence-platform': 0,
}

const orderedCaseStudies = [...caseStudies].sort(
  (a, b) => (casePriority[a.slug] ?? 99) - (casePriority[b.slug] ?? 99),
)

const stats = [
  { number: '85%', label: 'Faster planning cycles (2 PIs → 15-day decisions)' },
  { number: '95%', label: 'Team workflow adoption within 6 weeks' },
  { number: '90%+', label: 'Stakeholder alignment before kickoff' },
  { number: '4', label: 'AI products shipped with full governance' },
]

const testimonials = [
  {
    quote: 'Guru brought structure to a planning process that used to take us weeks of back-and-forth. His frameworks didn\'t just organize our work — they changed how we make decisions.',
    role: 'Engineering Director',
    context: 'Enterprise SaaS',
  },
  {
    quote: 'What sets Guru apart is his ability to bridge the gap between technical complexity and business clarity. He made our migration planning understandable and actionable for every stakeholder in the room.',
    role: 'VP of Product',
    context: 'B2B Platform',
  },
  {
    quote: 'Working with Guru on our AI prototyping workflow gave our team the confidence to experiment fast without worrying about compliance. That balance is incredibly rare.',
    role: 'Head of Engineering',
    context: 'Enterprise AI',
  },
]

export function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">AI &amp; Platform · Product Leadership</p>
        <h1>Better decisions. Faster shipping. Clearer accountability.</h1>
        <p className="lede">
          I turn complex product signals into fast, accountable decisions and shipped outcomes —
          across AI, data, and platform teams at enterprise scale.
        </p>
        <p className="hero-rolefit">
          Open to Senior PM, Group PM, and Product Platform Leadership roles globally.
        </p>
        <div className="hero-actions">
          <Link to="/cases" className="button button-primary">
            View Case Studies
          </Link>
          <Link to="/demos" className="button button-ghost">
            Explore Live Demos
          </Link>
        </div>
      </section>

      <section className="metrics-band" aria-label="Impact snapshot">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <p className="stat-number">{stat.number}</p>
            <p className="stat-label">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Flagship Case Studies</h2>
          <p>Four stories that show strategy, system design, execution, and governance — each with the hardest call I had to make.</p>
        </div>
        <div className="case-grid">
          {orderedCaseStudies.map((item) => (
            <article key={item.slug} className="case-card demo-card">
              <h3>{item.title}</h3>
              <p className="label">Challenge</p>
              <p>{item.challenge}</p>
              <p className="label">What Changed</p>
              <p>{item.shift}</p>
              <div className="demo-actions">
                <Link to={`/cases/${item.slug}`} className="link-button">
                  Read Full Case →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Built from Zero</h2>
          <p>
            I conceived, designed, and built four product applications from first principles —
            each solving a real PM workflow gap. No team. No spec. Just a problem worth solving.
          </p>
        </div>
        <div className="zero-to-one-grid">
          <div className="zero-card">
            <span className="zero-num">01</span>
            <h3>Identified the gap</h3>
            <p>PM work is talked about in frameworks but rarely shown as working software. I decided to build what I preach.</p>
          </div>
          <div className="zero-card">
            <span className="zero-num">02</span>
            <h3>Designed the products</h3>
            <p>Scoped four distinct tools — signal intelligence, workflow automation, migration readiness, and AI prototyping — each with a clear value proposition.</p>
          </div>
          <div className="zero-card">
            <span className="zero-num">03</span>
            <h3>Shipped them live</h3>
            <p>Built with React, TypeScript, and modern AI APIs. All four are live, interactive, and running on synthetic data within enterprise-safe boundaries.</p>
          </div>
        </div>
        <div className="hero-actions" style={{ marginTop: 'var(--space-3)' }}>
          <Link to="/demos" className="button button-primary">
            Explore Live Demos →
          </Link>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-head">
          <h2>What People Say</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <blockquote className="testimonial-card" key={t.role}>
              <p>"{t.quote}"</p>
              <footer>
                <strong>{t.role}</strong>
                <span>{t.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Let's talk product strategy</h2>
        <p>Open to conversations about product leadership, consulting, and collaboration opportunities.</p>
        <div className="hero-actions">
          <Link to="/contact" className="button button-primary">
            Get in Touch
          </Link>
          <Link to="/thinking" className="button button-ghost">
            How I Think
          </Link>
        </div>
      </section>
    </>
  )
}