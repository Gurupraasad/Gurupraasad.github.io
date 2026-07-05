const certifications = [
  'Certified Scrum Product Owner (CSPO)',
  'Certified ScrumMaster (CSM)',
  'AI Systems Thinking',
  'Technical Product Management',
  'ISTQB Certified Tester',
  'Business Analytics — IMS Proschool',
]

const recognition = [
  'Elite Award for Best Performance',
  'Winner — Toastmasters Humorous Speech Contest',
  'Runner-up — International Speech Contest',
  'Presented product strategy to 50+ stakeholders across engineering, commercial, and leadership',
]

const careerTimeline = [
  { company: 'Wolters Kluwer', role: 'Senior Product Manager', domain: 'AI-powered data intelligence, analytics, and enterprise platform products' },
  { company: 'AMCS', role: 'Product & Engineering', domain: 'Enterprise fleet management and sustainability platform' },
  { company: 'DSRC', role: 'Software Engineering', domain: 'Data analytics, quality engineering, and software development' },
]

const toolkit = [
  'Jira', 'Confluence', 'Azure DevOps', 'Figma', 'Miro',
  'Power BI', 'Tableau',
  'GitHub Copilot', 'OpenAI Codex', 'M365 Copilot', 'LLM/AI APIs',
]

const roleFit = [
  'Senior Product Manager',
  'Group Product Manager',
  'Platform PM',
  'AI/ML Product Manager',
  'Product Lead',
  'Director of Product',
]

export function AboutPage() {
  return (
    <section className="section">
      <div className="section-head">
        <h1>About</h1>
        <p>
          Senior Product Manager with 14+ years building AI-enabled data, analytics, and platform
          products at Wolters Kluwer. My path through engineering, quality, data analytics, and
          software gives me a full-stack lens on how products are actually built, broken, and shipped.
        </p>
      </div>

      <article className="detail-card">
        <h2>Career Arc</h2>
        <div className="career-timeline">
          {careerTimeline.map((stop) => (
            <div className="timeline-stop" key={stop.company}>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3>{stop.company}</h3>
                <p className="timeline-role">{stop.role}</p>
                <p>{stop.domain}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="timeline-linkedin">
          Full career history on{' '}
          <a href="https://www.linkedin.com/in/gurupraasad/" target="_blank" rel="noopener noreferrer">
            LinkedIn →
          </a>
        </p>
        <p>
          Today I lead product strategy for AI-powered data intelligence and analytics — using
          machine learning and predictive analytics to transform decision-making and automate
          complex workflows. That full-stack perspective is why I treat governance, workflows, and
          decision frameworks as products in their own right: built to make the right decision the
          easy one.
        </p>

        <h2>What I'm Known For</h2>
        <ul>
          <li><strong>AI-enabled products</strong> — grounded, governed, human-in-the-loop workflows that teams trust</li>
          <li><strong>Decision frameworks</strong> — turning noisy inputs into prioritized, scoped decisions</li>
          <li><strong>Execution at scale</strong> — workflows that let distributed teams move without sync overhead</li>
          <li><strong>Cross-functional alignment</strong> — translating across strategy, design, engineering, and business</li>
          <li><strong>Customer co-creation</strong> — turning users into building partners, not just feedback providers</li>
        </ul>

        <h2>Role Fit</h2>
        <div className="role-fit-strip">
          {roleFit.map((role) => (
            <span className="role-badge" key={role}>{role}</span>
          ))}
        </div>
        <p style={{ marginTop: '0.5rem', color: 'var(--muted)', fontSize: 'var(--fs-300)' }}>
          Open to global opportunities in B2B SaaS, Enterprise, AI/ML, Data, and Platform product roles.
        </p>

        <h2>Communication &amp; Leadership</h2>
        <ul>
          {recognition.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Product Toolkit</h2>
        <div className="cert-strip">
          {toolkit.map((tool) => (
            <span className="cert-badge" key={tool}>{tool}</span>
          ))}
        </div>

        <h2>Certifications</h2>
        <div className="cert-strip">
          {certifications.map((cert) => (
            <span className="cert-badge" key={cert}>{cert}</span>
          ))}
        </div>

        <h2>Active In</h2>
        <div className="community-strip">
          <div className="community-item">
            <span className="community-dot" />
            <div>
              <strong>Product Leaders Forum 2026</strong>
              <span>Bangalore — AI platforms, decision-making, product strategy</span>
            </div>
          </div>
          <div className="community-item">
            <span className="community-dot" />
            <div>
              <strong>ProductTank Chennai</strong>
              <span>AI product security, legacy modernization, uncertainty navigation</span>
            </div>
          </div>
          <div className="community-item">
            <span className="community-dot" />
            <div>
              <strong>Toastmasters International</strong>
              <span>Public speaking, leadership communication</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}