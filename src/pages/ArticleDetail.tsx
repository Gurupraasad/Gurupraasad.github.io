import { Link, useParams } from 'react-router-dom'
import { findArticleBySlug } from '../data/articles'

export function ArticleDetailPage() {
  const { slug = '' } = useParams()
  const article = findArticleBySlug(slug)

  if (!article) {
    return (
      <section className="section">
        <h1>Article Not Found</h1>
        <Link to="/writing" className="button button-primary">
          Back to Writing
        </Link>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section-head">
        <Link to="/writing" className="breadcrumb">← Back to Writing</Link>
        <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
        <div className="article-meta">
          <span className={`article-type ${article.type === 'field-note' ? 'type-field' : 'type-article'}`}>
            {article.type === 'field-note' ? 'Field Note' : 'Article'}
          </span>
          <span>{article.readTime}</span>
        </div>
      </div>

      <article className="detail-card article-body">
        {article.content.map((block, i) => {
          switch (block.kind) {
            case 'heading':
              return <h2 key={i}>{block.text}</h2>
            case 'paragraph':
              return <p key={i}>{block.text}</p>
            case 'list':
              return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )
            case 'quote':
              return (
                <blockquote className="article-quote" key={i}>
                  <p>{block.text}</p>
                </blockquote>
              )
            default:
              return null
          }
        })}
      </article>

      <div className="hero-actions">
        <Link to="/writing" className="button button-ghost">
          ← All Articles
        </Link>
        <Link to="/contact" className="button button-primary">
          Let's Talk
        </Link>
      </div>
    </section>
  )
}
