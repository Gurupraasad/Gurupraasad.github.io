export type CaseStudy = {
  slug: string
  title: string
  challenge: string
  shift: string
  summary: string
  businessProblem: string
  pmRole: string[]
  constraints: string[]
  strategy: string[]
  execution: string[]
  outcomes: string[]
  hardestCall: string
  customerInsight?: string
  reflection: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pm-workflow-automation',
    title: 'Product Operating System',
    challenge:
      'Specs, Jira decomposition, and release readiness lived in separate workflows — creating rework, latency, and inconsistent quality across every cycle.',
    shift:
      'Standardized review and delivery workflows into repeatable, agent-assisted paths that teams trusted from day one.',
    summary:
      'Built a workflow layer that improved quality and predictability for spec review, ticket design, release readiness, and backlog hygiene across a 20-person product org.',
    businessProblem:
      'Core PM routines were repeatedly rebuilt from scratch every cycle. Review quality varied by person, release readiness artifacts often required late-stage correction, and no two PMs ran the same process for the same deliverable.',
    pmRole: [
      'Mapped recurring PM workflows and identified reliability gaps across 6 PM workstreams',
      'Designed standardized templates and quality gates for spec review, done review, and release readiness',
      'Defined when automation should assist versus when human review is mandatory — preserving PM judgment',
    ],
    constraints: [
      'Multiple tools with differing data shapes and terminology (Jira, Confluence, Bitbucket, Slack)',
      'Need to preserve PM judgment while reducing repetitive effort — automation could not replace decisions',
      'Requirement for outputs that engineering and stakeholders could trust immediately without follow-up',
    ],
    strategy: [
      'Codify review rubrics into reusable workflow steps with explicit pass/fail criteria',
      'Introduce consistency-first artifacts for spec, done review, and release readiness',
      'Use lightweight LLM-assisted automation to improve speed without over-automating decisions',
    ],
    execution: [
      'Implemented agent-assisted routines for spec review, done review, and ticket drafting with structured rubrics',
      'Established checklist-based output validation before every handoff to engineering',
      'Connected workflow outputs to ongoing backlog and release conversations — closing the feedback loop',
    ],
    outcomes: [
      'Spec review turnaround: 4–8 hours per cycle → ~2 hours (75% reduction)',
      'Epic/feature creation: 3–4 days → 1 day (70% faster)',
      'Done review consistency: 50% complete → 90%+ stakeholder alignment',
      'Team adoption: 95% usage within 6 weeks across all PMs',
      'Impact: 20-person product org (6 PMs, 15+ supporting stakeholders)',
    ],
    hardestCall:
      'The team wanted full automation — let AI write the specs and reviews end-to-end. I pushed back hard. We tested both paths: fully automated outputs passed syntax checks but failed stakeholder trust within two weeks. I redesigned the system as human-in-the-loop: AI drafts, PM reviews, then handoff. Adoption jumped from 40% to 95% once teams knew a human had signed off on every artifact.',
    reflection:
      'Automation worked best as a quality multiplier, not a decision replacement. The strongest gains came from consistency and review discipline, not from removing humans from the loop.',
  },
  {
    slug: 'secure-ai-prototyping-factory',
    title: 'AI Prototyping Factory',
    challenge:
      'Prototype velocity needed to increase 10x while governance requirements remained strict — and teams had no safe path to use AI tools.',
    shift:
      'Designed a gated AI prototyping flow that balanced speed, control, and enterprise safety — shipping prototypes in a day instead of weeks.',
    summary:
      'Built a practical system for AI-assisted prototype generation with explicit review gates, security checks, and publish-safe handoff artifacts — all within enterprise compliance boundaries.',
    businessProblem:
      'Teams needed faster prototyping but could not accept uncontrolled AI usage or unclear data boundaries. Without guardrails, speed gains risked compliance issues. Every prototype required weeks of UI/UX team follow-up before stakeholders could see anything.',
    pmRole: [
      'Defined governance gates as first-class product requirements — not afterthoughts',
      'Structured prototype workflow from brief to handoff with safety checks at every stage',
      'Aligned stakeholders on approved provider paths and usage boundaries across PM, UX, engineering, and QA',
    ],
    constraints: [
      'Strict enterprise rules around AI provider choice, data handling, and external exposure',
      'Need for rapid iteration without weakening auditability — every artifact had to be traceable',
      'Cross-functional requirement to support PM, UX, engineering, and QA outputs from the same pipeline',
    ],
    strategy: [
      'Separate creative flow from compliance flow, then stitch with explicit checkpoints',
      'Require publish-safe validation before export or external sharing',
      'Default to safe fallback behavior when AI path is unavailable or unapproved',
    ],
    execution: [
      'Implemented gated progression for dependency, AI, screenshot, and repo access paths',
      'Added structured handoff artifacts for downstream teams — every prototype included a compliance certificate',
      'Codified review policy into a repeatable template for public-safe publishing',
    ],
    outcomes: [
      'Prototype turnaround: from weeks of UI/UX follow-up → 1-day prototype cycle (90%+ reduction)',
      'Compliance issues surfaced on day 1, not at review time — zero surprises',
      'All 3 prototyped capabilities shipped with approved governance',
      'Zero compliance incidents across all parallel AI workstreams',
    ],
    hardestCall:
      'Leadership wanted to skip governance gates for internal-only prototypes to move faster. I argued that internal prototypes inevitably become external demos — and retroactively adding compliance is 5x harder than building it in. We ran a pilot both ways: the ungated prototype hit a data exposure flag in week two. After that, the gated path became the default for all teams.',
    reflection:
      'Governance accelerated adoption because teams trusted the workflow. Clear boundaries made experimentation sustainable instead of risky. The fastest path was the safest one.',
  },
  {
    slug: 'pm-intelligence-platform',
    title: 'PM Intelligence Platform',
    challenge:
      'We were evaluating hundreds of mixed-quality requests per cycle, and planning decisions took weeks because teams lacked a shared evidence model.',
    shift:
      'Built a unified signal-to-decision workflow with evidence-based scoring and clear ownership — cutting decision cycles from months to days.',
    summary:
      'Designed a scalable operating flow that converts raw product inputs into prioritization-ready decisions and leadership-ready narratives at Wolters Kluwer.',
    businessProblem:
      'Planning quality was constrained by fragmented evidence across tickets, research, and stakeholder input. Teams spent significant time synthesizing context before discussing actual product decisions. The same debates recycled every planning increment.',
    pmRole: [
      'Defined product operating model for signal intake, triage, and prioritization across 4 workstreams',
      'Aligned engineering, design, and business stakeholders on one evidence language',
      'Owned sequencing from discovery aggregation to roadmap-facing decision artifacts',
    ],
    constraints: [
      'High volume of noisy inputs with inconsistent quality and structure — 200+ signals per cycle',
      'Need for faster decisions without reducing rigor or stakeholder confidence',
      'Requirement to keep process explainable and reviewable by non-technical stakeholders',
    ],
    strategy: [
      'Standardize incoming signal types and confidence labels across all input channels',
      'Introduce scoring framework that combines evidence strength with strategic fit',
      'Create reusable outputs for roadmap, leadership updates, and execution handoff',
    ],
    execution: [
      'Built phased workflow: intake, normalization, clustering, scoring, decision review',
      'Added guardrails for PM override and final human judgment — AI scores inform but don\'t decide',
      'Established recurring review cadence to keep decisions current and comparable',
    ],
    outcomes: [
      'Prioritization cycles: 2 PIs planning → scoped 15-day decision cycle (85% faster)',
      'Cross-team alignment: 60% → 90%+ consistency in prioritization decisions',
      'Engineering estimates improved by ~40% through clearer, structured PM inputs',
      'Impact: 12-person product team enabling 4 parallel workstreams',
    ],
    hardestCall:
      'We had two viable scoring models — one optimized for speed (simpler weights, faster decisions) and one for accuracy (multi-factor scoring, slower but more defensible). I chose accuracy, knowing it would slow the first two cycles. The bet paid off: after the initial learning curve, teams stopped debating scores and started debating strategy. The slower start bought us permanent decision velocity.',
    customerInsight:
      'We shipped the analytics platform, but adoption lagged behind expectations. Instead of adding more features, I went back to clients. We brought key accounts in as early-access building partners — not just feedback providers, but co-creators who shaped the workflow alongside us. The shift was immediate: clients felt valued and invested, adoption climbed, and the features they helped shape became the most-used capabilities in the product.',
    reflection:
      'The biggest leverage came from standardizing decision inputs, not from adding more analysis. Structure reduced debate overhead and improved decision quality. And the customer co-creation approach taught me that adoption is earned through partnership, not features.',
  },
  {
    slug: 'migration-intelligence',
    title: 'Secure Migration Intelligence',
    challenge:
      'Migration planning was qualitative, hard to compare across clients, and produced contradictory positions across 15+ stakeholders in 3 offices.',
    shift:
      'Created a structured readiness framework that aligned technical reality with product planning — cutting pre-work from 8 weeks to 4.',
    summary:
      'Translated migration complexity into a product-facing model with clear scoring dimensions, risk visibility, and phased execution guidance for cross-functional alignment.',
    businessProblem:
      'Migration discussions were often qualitative and difficult to compare across clients or scopes. This reduced planning precision and made executive alignment harder. Stakeholders arrived at planning sessions with contradictory assessments of the same migration.',
    pmRole: [
      'Defined readiness dimensions and weighting model for migration planning across multiple client profiles',
      'Connected technical complexity indicators to product-facing risk categories that non-technical stakeholders could evaluate',
      'Shaped phased plan format for stakeholder communication and execution sequencing',
    ],
    constraints: [
      'Complex domain dependencies and uneven client customization footprints across 50+ configurations',
      'Need to communicate technical complexity to non-technical stakeholders without oversimplifying risk',
      'Pressure to maintain realism while preserving planning agility — no false optimism',
    ],
    strategy: [
      'Build transparent scoring dimensions tied to concrete migration signals',
      'Highlight high-risk areas early with explicit mitigation prompts',
      'Generate phased plans that support sequencing and ownership clarity',
    ],
    execution: [
      'Implemented profile-to-score flow for consistent readiness assessment across all client types',
      'Created risk and gap outputs mapped directly to planning actions — not just reports',
      'Standardized executive summary format for alignment and decision speed',
    ],
    outcomes: [
      'Stakeholder clarity: from contradictory positions → 80–90% consensus before kickoff',
      'Planning efficiency: 8 weeks of pre-work → 4 weeks with clear framework (50% reduction)',
      'All 15+ stakeholders signed off on phased plan upfront — no mid-execution reversals',
      'Impact: 15+ stakeholders across engineering, product, commercial, ops; 3 offices',
    ],
    hardestCall:
      'The commercial team wanted an optimistic scoring model that would accelerate client timelines and close deals faster. Engineering wanted a conservative model that padded every estimate. I built a transparent model where both teams could see exactly how scores were derived — and let the data settle the argument. Neither side got what they wanted; both sides got what they needed: honest, defensible plans that clients trusted.',
    reflection:
      'A transparent model improved trust faster than a perfect model. Teams aligned once they could see how risk and sequencing decisions were derived — not because they agreed on everything, but because they trusted the process.',
  },
]

export function findCaseBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug)
}