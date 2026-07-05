import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type Signal = {
  id: string
  name: string
  source: string
  reach: number
  impact: number
  confidence: number
  effort: number
}

const impactLabels: Record<number, string> = {
  0.5: 'Low',
  1: 'Medium',
  2: 'High',
  3: 'Massive',
}

const confidenceLabels: Record<number, string> = {
  0.5: '50% — hunch',
  0.8: '80% — some data',
  1: '100% — strong evidence',
}

const initialSignals: Signal[] = [
  {
    id: 's1',
    name: 'Automate manual status roll-ups',
    source: '12 support tickets · 3 QBRs',
    reach: 8,
    impact: 2,
    confidence: 1,
    effort: 3,
  },
  {
    id: 's2',
    name: 'Self-serve onboarding flow',
    source: 'Sales-assisted churn signal',
    reach: 6,
    impact: 3,
    confidence: 0.8,
    effort: 6,
  },
  {
    id: 's3',
    name: 'AI-assisted anomaly alerts',
    source: 'Strategic bet · 2 design partners',
    reach: 5,
    impact: 3,
    confidence: 0.5,
    effort: 8,
  },
  {
    id: 's4',
    name: 'Bulk export to BI tools',
    source: '4 enterprise requests',
    reach: 4,
    impact: 1,
    confidence: 1,
    effort: 2,
  },
]

function scoreOf(s: Signal) {
  return (s.reach * s.impact * s.confidence) / s.effort
}

export function PrioritizationDemo() {
  const [signals, setSignals] = useState<Signal[]>(initialSignals)

  const ranked = useMemo(() => {
    return [...signals]
      .map((s) => ({ ...s, score: scoreOf(s) }))
      .sort((a, b) => b.score - a.score)
  }, [signals])

  const maxScore = ranked.length ? ranked[0].score : 1

  function update(id: string, field: keyof Signal, value: number) {
    setSignals((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    )
  }

  return (
    <section className="section">
      <div className="section-head">
        <Link className="breadcrumb" to="/demos">
          ← Demos
        </Link>
        <h1>Prioritization Engine</h1>
        <p>
          A live RICE model turning raw signals into a ranked roadmap. Adjust the inputs and watch
          the order recompute — this is the "options → tradeoffs → sequence" step of my decision
          framework, made tangible. All data is synthetic.
        </p>
      </div>

      <div className="demo-layout">
        <div className="demo-controls">
          <h2 className="approach-heading">Signals &amp; inputs</h2>
          {signals.map((s) => (
            <div className="signal-card" key={s.id}>
              <div className="signal-head">
                <h3>{s.name}</h3>
                <span className="signal-source">{s.source}</span>
              </div>

              <div className="signal-controls">
                <label>
                  <span>
                    Reach <strong>{s.reach}</strong>
                  </span>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={s.reach}
                    onChange={(e) => update(s.id, 'reach', Number(e.target.value))}
                  />
                </label>

                <label>
                  <span>
                    Impact <strong>{impactLabels[s.impact]}</strong>
                  </span>
                  <select
                    value={s.impact}
                    onChange={(e) => update(s.id, 'impact', Number(e.target.value))}
                  >
                    <option value={0.5}>Low</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                    <option value={3}>Massive</option>
                  </select>
                </label>

                <label>
                  <span>
                    Confidence <strong>{Math.round(s.confidence * 100)}%</strong>
                  </span>
                  <select
                    value={s.confidence}
                    onChange={(e) => update(s.id, 'confidence', Number(e.target.value))}
                  >
                    <option value={0.5}>{confidenceLabels[0.5]}</option>
                    <option value={0.8}>{confidenceLabels[0.8]}</option>
                    <option value={1}>{confidenceLabels[1]}</option>
                  </select>
                </label>

                <label>
                  <span>
                    Effort <strong>{s.effort} wks</strong>
                  </span>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={s.effort}
                    onChange={(e) => update(s.id, 'effort', Number(e.target.value))}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="demo-output">
          <h2 className="approach-heading">Ranked roadmap</h2>
          <p className="approach-intro">
            Score = (Reach × Impact × Confidence) ÷ Effort. Higher effort pushes items down —
            exactly the tradeoff conversation a roadmap review should force.
          </p>
          <ol className="rank-list">
            {ranked.map((s, i) => (
              <li className="rank-row" key={s.id}>
                <span className="rank-pos">{i + 1}</span>
                <div className="rank-body">
                  <div className="rank-top">
                    <h3>{s.name}</h3>
                    <span className="rank-score">{s.score.toFixed(1)}</span>
                  </div>
                  <div className="rank-bar">
                    <span style={{ width: `${(s.score / maxScore) * 100}%` }} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
