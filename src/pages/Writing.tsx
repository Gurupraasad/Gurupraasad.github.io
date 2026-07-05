import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

const upcoming = [
  'Why I Treat Governance as a Product Feature',
  'Customer Co-Creation: How We Turned Users into Building Partners',
]

export function WritingPage() {
  const longForm = articles.filter((a) => a.type === 'article')
  const fieldNotes = articles.filter((a) => a.type === 'field-note')

  return (
    <section className="section">
      <div className="section-head">
        <h1>Writing</h1>
        <p>
          Practical frameworks, decision models, and execution playbooks for product teams
          building AI-enabled products at scale.
        </p>
      </div>

      <h2 className="writing-section-label">Articles</h2>
      <div className="case-grid">
        {longForm.map((article) => (
          <article key={article.slug} className="case-card demo-card">
            <h3>{article.title}</h3>
            <p>{article.subtitle}</p>
            <div className="article-card-meta">
              <span>{article.readTime}</span>
            </div>
            <div className="demo-actions">
              <Link className="link-button" to={`/writing/${article.slug}`}>
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <h2 className="writing-section-label">Field Notes</h2>
      <p className="approach-intro">
        Takeaways from conferences, meetups, and product community events.
      </p>
      <div className="case-grid">
        {fieldNotes.map((article) => (
          <article key={article.slug} className="case-card demo-card">
            <h3>{article.title}</h3>
            <p>{article.subtitle}</p>
            <div className="article-card-meta">
              <span>{article.readTime}</span>
            </div>
            <div className="demo-actions">
              <Link className="link-button" to={`/writing/${article.slug}`}>
                Read note →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {upcoming.length > 0 && (
        <div className="upcoming-section">
          <h2>Coming Soon</h2>
          <ul className="upcoming-list">
            {upcoming.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
