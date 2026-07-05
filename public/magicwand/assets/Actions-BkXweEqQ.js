const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DbwP4hyU.js","assets/mermaid-Y_9yltak.js","assets/index-v7QTftHa.css"])))=>i.map(i=>d[i]);
import{c as ge,u as pe,f as he,e as fe,r as k,j as i,l as we,n as ne,p as ae,h as se,R as $e,Z as ye,C as xe,g as ve}from"./index-DbwP4hyU.js";import{g as B,a as be,I as Se,O as Ae,J as Ce,A as J}from"./JiraEpicFormModal-D8JiTiOs.js";import{aC as N}from"./mermaid-Y_9yltak.js";import{g as ke,I as Re,E as je}from"./scoringData-CmsYGt-o.js";import{g as Ee}from"./personas-CIkLoSO6.js";import{R as ie,M as Pe}from"./rotate-ccw-DtKaC94D.js";import{W as Ie}from"./wrench-JSU7bsl_.js";import{L as W}from"./loader-circle-BAEBJW-e.js";import{G as Ne}from"./git-branch-RwRP1DJb.js";import{U as Te}from"./users-lZz5Guqs.js";import{R as Me}from"./refresh-cw-BewACOvy.js";import{C as Oe}from"./crosshair-CqySLgRf.js";import{M as De}from"./message-square-Cx4ZDtGz.js";import{D as Fe}from"./download-KL2xnZW1.js";import{M as _e}from"./mail-DAu-O6pA.js";import{F as Le}from"./file-text-BAZxRk0x.js";import{C as Ue}from"./clipboard-list-ChK10vkN.js";import{E as Be}from"./eye-C9pkOrge.js";import"./roadmapData-BD7anLP-.js";import"./target-C2MaSJ39.js";import"./trending-up-CvB-81bN.js";import"./chevron-right-vKDpjwXp.js";import"./fileSaver-Dw4J7DjS.js";import"./external-link-CJLm18MI.js";import"./circle-alert-Bzo8ctCq.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ze=ge("play",Ge);function We(e){return Math.round(e.reach*(Re[e.impact]||2)*(e.confidence/100)/(je[e.effort]||2))}function He(e){try{const n=localStorage.getItem("magicwand-scoring");if(n){const t=JSON.parse(n)[e];return t?Array.isArray(t)?t:t.items||null:null}}catch{}return null}function D(e){const s=(He(e)||ke(e)).map(t=>({...t,score:We(t)}));return s.sort((t,c)=>c.score-t.score),s}function U(e){if(e==null)return"";const n=String(e);return n.includes(",")||n.includes('"')||n.includes(`
`)?'"'+n.replace(/"/g,'""')+'"':n}function g(e){return new Promise(n=>setTimeout(n,e))}function re(e,n){const s=D(e);return n?s.find(c=>c.name===n.name)||{...n,score:0,impact:"Medium",confidence:n.confidence||50,effort:3,reach:n.signals||0,origin:n.origin||"Unknown"}:s.find(t=>t.status==="approved")||s[0]||null}async function T(e){const{checkHealth:n}=await N(async()=>{const{checkHealth:l}=await import("./index-DbwP4hyU.js").then(r=>r.O);return{checkHealth:l}},__vite__mapDeps([0,1,2]));if(!await n())return null;const t=await fetch("/api/synthesize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})});return t.ok&&(await t.json()).content||null}async function Ve(e,n){n(0,"Reading scoring data from pipeline…"),await g(400);const s=D(e);n(1,`Found ${s.length} initiatives`),await g(300),n(2,"Computing RICE scores…"),await g(300),n(3,"Formatting CSV columns…");const t=["Rank","Name","Origin","RICE Score","Reach","Impact","Confidence","Effort","Status","Signals","ARR Risk","Assumptions"],c=s.map((r,a)=>[a+1,U(r.name),U(r.origin),r.score,r.reach,r.impact,r.confidence+"%",r.effort,r.status,r.signals||"",U(r.arrRisk||""),U((r.assumptions||[]).join("; "))]);await g(300),n(4,"Writing file…");const l=[t.join(","),...c.map(r=>r.join(","))].join(`
`);return await g(200),n(5,"Output ready — opening preview…"),await g(300),{message:`CSV exported — ${s.length} initiatives, ${s.filter(r=>r.status==="approved").length} approved`,output:{title:"Scoring Matrix — CSV Export",content:l,filename:`scoring-${e}-RICE-${new Date().toISOString().slice(0,10)}.csv`,mimeType:"text/csv"}}}async function Ke(e,n,s){n(0,"Analyzing scoring pipeline…"),await g(400);const t=re(e,s);if(!t)throw new Error("No scoring items found");n(1,`Selected: ${t.name}`),await g(400),n(2,"Generating user stories & requirements…");let c=null;try{c=await T(qe(t,e))}catch{}n(3,c?"AI content generated ✓":"Using template (AI backend unavailable)…"),await g(300),n(4,"Structuring document…");const l=c||Je(t,e);await g(300),n(5,"Output ready — opening preview…");const r=`PRD-${t.name.replace(/[^a-zA-Z0-9]/g,"-")}-${new Date().toISOString().slice(0,10)}.md`;return await g(200),{message:`PRD generated (${c?"AI-generated":"template-based"}) — ${t.name}`,output:{title:`PRD — ${t.name}`,content:l,filename:r,mimeType:"text/markdown"}}}function qe(e,n){const s=n==="productb"?"Product B":"Product A";return`You are a Senior Product Manager writing a Product Requirements Document (PRD) for ${s}.

Generate a complete PRD in Markdown format for: "${e.name}"
Context:
- Origin: ${e.origin}
- Reach: ${e.reach} (number of affected customers/signals)
- Impact: ${e.impact}
- Confidence: ${e.confidence}%
- Effort: ${e.effort}
- RICE Score: ${e.score}
- ARR at Risk: ${e.arrRisk||"N/A"}
- Assumptions: ${(e.assumptions||[]).join("; ")||"None documented"}

Include these sections:
1. **Executive Summary** — 2-3 sentence overview
2. **Problem Statement** — What pain point this solves, based on the origin cluster
3. **Goals & Success Metrics** — 3-4 measurable KPIs
4. **User Stories** — 5-6 user stories in "As a [role], I want [feature], so that [benefit]" format
5. **Requirements** — Must-have, Should-have, Nice-to-have (3-4 each)
6. **Wireframe Brief** — Text description of key screens/flows
7. **Technical Considerations** — Architecture notes, integrations, risks
8. **Timeline & Milestones** — Phased delivery plan
9. **Open Questions** — 3-4 items needing stakeholder input

Write professionally. Be specific to ${s}'s legal e-billing domain.`}function Je(e,n){const s=n==="productb"?"Product B":"Product A",t=new Date().toISOString().slice(0,10);return`# Product Requirements Document
## ${e.name}

**Product:** ${s}  
**Author:** MagicWand AI (Auto-generated)  
**Date:** ${t}  
**Status:** Draft  
**RICE Score:** ${e.score} | **Origin:** ${e.origin}

---

## 1. Executive Summary

${e.name} addresses the "${e.origin}" pain point cluster identified through ${e.reach} customer signals at ${e.confidence}% confidence. This initiative protects ${e.arrRisk||"significant"} ARR and has been scored as ${e.impact} impact with ${e.effort} effort.

## 2. Problem Statement

Customers are experiencing significant friction related to ${e.origin}. With ${e.reach} signals collected across support tickets, QBR notes, and NPS surveys, this is a validated and growing pain point. Current workarounds are manual and time-intensive.

### Key Assumptions
${(e.assumptions||["No assumptions documented"]).map(c=>`- ${c}`).join(`
`)}

## 3. Goals & Success Metrics

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Signal reduction | ${e.reach} signals/quarter | < ${Math.round(e.reach*.3)} signals | 6 months post-launch |
| Feature adoption | 0% | > 60% of target users | 90 days |
| NPS improvement | Baseline | +5 points | 6 months |
| Support ticket reduction | Baseline | -40% related tickets | 90 days |

## 4. User Stories

1. As a **Legal Ops Leader**, I want to ${e.name.toLowerCase()}, so that I can reduce manual work and improve efficiency.
2. As a **General Counsel**, I want visibility into ${e.origin.toLowerCase()}, so that I can make data-driven decisions.
3. As a **Legal IT Admin**, I want a stable and reliable ${e.name.toLowerCase()} implementation, so that enterprise deployments run smoothly.
4. As a **Product Manager**, I want to track adoption of ${e.name.toLowerCase()}, so that I can measure ROI and iterate.
5. As a **Support Engineer**, I want fewer escalations related to ${e.origin.toLowerCase()}, so that I can focus on higher-priority issues.

## 5. Requirements

### Must Have (P0)
- Core functionality addressing ${e.origin}
- Integration with existing ${s} data model
- Enterprise-grade performance (< 3s load time)

### Should Have (P1)
- Export/reporting capability
- Admin configuration options
- Audit trail for compliance

### Nice to Have (P2)
- AI-powered recommendations
- Self-service customization
- Mobile-responsive design

## 6. Technical Considerations

- **Architecture:** Extends existing ${s} ${n==="productb"?"SaaS/cloud":"on-premise/hosted"} platform
- **Data:** Leverages existing entity framework (P_* tables)
- **Integrations:** ${s} API, Analytics Suite, Jira
- **Risks:** ${(e.assumptions||[]).slice(0,2).join("; ")||"Assumptions need validation"}

## 7. Timeline

| Phase | Milestone | Target |
|-------|-----------|--------|
| Discovery | Requirements finalized, designs approved | +2 weeks |
| Alpha | Core functionality, internal testing | +6 weeks |
| Beta | Selected client pilot (3-5 clients) | +10 weeks |
| GA | General availability launch | +14 weeks |

## 8. Open Questions

1. Which clients should be included in the beta pilot?
2. Are there regulatory/compliance requirements that affect the implementation?
3. What is the acceptable performance threshold for enterprise-scale data?
4. How does this align with the broader ${s} modernization roadmap?

---
*Generated by MagicWand AI — ${t}*
`}async function Qe(e,n,s){n(0,"Analyzing scoring pipeline…"),await g(400);const t=re(e,s);if(!t)throw new Error("No scoring items found");n(1,`Selected: ${t.name}`),await g(400),n(2,"Building epic specification…"),await g(300);const c=e==="productb"?"Product B":"Product A",l=t.score>=2500?"Highest":t.score>=1500?"High":t.score>=800?"Medium":"Low",r=t.score>=1500?"1 — Deliver best-in-class customer & user experiences":"2 — Create systems enabling clients to efficiently manage their legal spend",a=Ee(t.origin),m=`h2. Benefit Hypothesis

*Why are we doing this?*
${t.name} addresses a validated pain point cluster ("${t.origin}") identified through ${t.reach} customer signals at ${t.confidence}% confidence across ${c}.

*Which customer problem are we solving?*
Customers are experiencing friction related to ${t.origin}. This has been validated through support tickets, QBR notes, and NPS surveys.

*Expected measurable impact:*
 * Signal volume for "${t.origin}" reduced by ${t.reach>20?"50%":"30%"} within 2 PIs of launch
 * Customer satisfaction improvement measured via NPS follow-up

*North Star alignment:*
 * ${r}

----
h2. Description

This Epic addresses the "${t.origin}" pain point cluster in ${c}. With ${t.reach} signals collected, this is a validated and growing area of customer friction.

 * *Scope:* ${c} — ${t.origin}
 * *Timeline:* ${t.effort<=3?"Single PI":"Multi-PI"} initiative
 * *Signal source:* Support tickets, QBR notes, NPS surveys

----
h2. Customer Impact

||Metric||Value||
|Reach|${t.reach} signals|
|Confidence|${t.confidence}%|
|ARR at Risk|${t.arrRisk||"TBD"}|

----
h2. RICE Score

||Metric||Value||
|Reach|${t.reach}|
|Impact|${t.impact}|
|Confidence|${t.confidence}%|
|Effort|${t.effort}|
|*Total*|*${t.score}*|

----
h2. Impacted Users & Personas

||Persona||Impact||
${a.map(u=>`|${u}|Directly impacted by ${t.origin} improvements across this Epic|`).join(`
`)}

----
h2. Acceptance Criteria

 * All Features under this Epic are delivered and accepted
 * Benefit Hypothesis metrics show measurable improvement within 2 PIs of launch
 * No P1/P2 defects remain open against Features in this Epic
 * End-to-end user workflow validated across impacted personas

----
h2. Assumptions & Open Questions

*Assumptions:*
 * Signal data accurately represents the breadth of the customer pain point
 * Existing architecture supports the proposed solution without major migration

*Open Questions:*
 * ⚠️ Feature decomposition pending — to be completed during PI Planning
 * Engineering sizing (SWAG) not yet provided

----
{color:#999999}Generated via MagicWand AI · signal-sourced{color}`,d=[e,t.origin.toLowerCase().replace(/[^a-z0-9]+/g,"-")].join(", ");return n(3,"Preparing JIRA form…"),await g(300),n(4,"Pre-filling fields from scoring data…"),await g(200),n(5,"Ready — opening form…"),await g(200),{type:"jira-form",message:`Epic form ready — ${t.name}`,epicData:{summary:t.name,epicName:t.name,priority:l,labels:d,description:m}}}async function Ye(e,n){var h,p,w;n(0,"Loading scoring data…"),await g(400);const s=D(e),t=s.slice(0,5),c=s.filter(f=>f.status==="approved"),l=s.reduce((f,o)=>f+(o.reach||0),0);n(1,`Analyzing ${s.length} initiatives…`),await g(300),n(2,"Composing email content…");const r=e==="productb"?"Product B":"Product A",a=new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});let m="",d=!1;try{const f=await T(`You are a Senior Product Manager. Write a concise stakeholder email update about ${r} product priorities.

Context:
- ${s.length} initiatives scored using RICE framework
- ${c.length} approved for roadmap
- ${l} total customer signals analyzed
- Top 5 priorities: ${t.map((o,x)=>`${x+1}. ${o.name} (RICE: ${o.score})`).join(", ")}

Write a professional email in markdown format with:
1. Subject line (as # heading)
2. Greeting
3. Key findings (top 5 items as bullet points with RICE scores)
4. Signal summary (total signals, trends)
5. Recommended next steps (3-4 bullets)
6. Professional sign-off

Keep it concise — 300 words max. Use markdown formatting.`);f&&(m=f,d=!0)}catch{}return m||(m=`# ${r} Product Priorities Update — ${a}

Hi Team,

Here's the latest product priorities update based on our signal analysis and RICE scoring.

## Key Findings

We've analyzed **${l} customer signals** across ${s.length} initiatives:

| # | Initiative | RICE Score | Status |
|---|-----------|-----------|--------|
${t.map((f,o)=>`| ${o+1} | ${f.name} | ${f.score} | ${f.status} |`).join(`
`)}

## Signal Summary

- **${l}** total customer signals analyzed (support tickets, QBR notes, NPS surveys)
- **${c.length}** initiatives approved for roadmap
- **${s.filter(f=>f.status==="deferred").length||0}** items deferred to next quarter
- Top pain point cluster: **${((h=t[0])==null?void 0:h.origin)||"N/A"}** (${((p=t[0])==null?void 0:p.reach)||0} signals)

## Recommended Next Steps

- Finalize sprint planning for Q3 with approved items
- Schedule deep-dive with engineering on "${((w=t[0])==null?void 0:w.name)||"top priority"}" implementation
- Set up pilot customer cohort for validation testing
- Review deferred items in next monthly prioritization

## Action Required

Please review the approved roadmap items and flag any concerns by end of week. Product sync scheduled for Friday.

Best regards,
${r} Product Team

---
*Generated by MagicWand AI — ${a}*`),n(3,d?"AI content generated ✓":"Using template (AI unavailable)…"),await g(300),n(4,"Formatting email…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Email digest generated (${d?"AI-generated":"template-based"}) — ${t.length} key findings`,output:{title:`Stakeholder Email — ${r} Priorities`,content:m,filename:`stakeholder-email-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"email",emailSubject:`${r} Product Priorities Update — ${a}`}}}async function Xe(e,n){var h,p;n(0,"Loading roadmap data…"),await g(400);const s=D(e),t=s.slice(0,3),c=s.filter(w=>w.status==="approved"),l=s.reduce((w,f)=>w+(f.reach||0),0);n(1,`Processing ${s.length} initiatives…`),await g(300),n(2,"Formatting Slack message…");const r=e==="productb"?"Product B":"Product A",a=e==="productb"?"#productb-product":"#producta-product";let m="",d=!1;try{const w=await T(`Write a Slack channel update for ${a} about ${r} product priorities. Be concise and use Slack formatting (bold with *, bullets with •, emojis).

Context:
- ${s.length} initiatives scored, ${c.length} approved
- ${l} customer signals analyzed
- Top 3: ${t.map((f,o)=>`${o+1}. ${f.name} (RICE: ${f.score})`).join(", ")}

Format: Short Slack post (150 words max). Include a header with emoji, top 3 items as bullets with scores, a "signals" summary line, and a call to action. No markdown headings — use Slack style.`);w&&(m=w,d=!0)}catch{}return m||(m=`🚀 *${r} Product Priorities Update*

Hey team! Here's the latest from our signal analysis:

*Top Priorities (RICE-scored):*
${t.map((w,f)=>`${["🥇","🥈","🥉"][f]} *${w.name}* — Score: ${w.score} | ${w.reach} signals | ${w.status}`).join(`
`)}

📊 *By the numbers:*
• ${l} customer signals analyzed
• ${s.length} initiatives scored
• ${c.length} approved for roadmap
• Top cluster: ${((h=t[0])==null?void 0:h.origin)||"N/A"}

✅ *Next steps:*
• Sprint planning session this Friday
• Engineering deep-dive on "${((p=t[0])==null?void 0:p.name)||"top item"}" next week
• Pilot customer selection in progress

💬 Questions or concerns? Drop them in the thread ⬇️

_Posted via MagicWand AI_`),n(3,d?"AI content generated ✓":"Using template…"),await g(300),n(4,`Targeting channel: ${a}`),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Slack update generated (${d?"AI-generated":"template-based"}) — ${a}`,output:{title:`Slack Update — ${a}`,content:m,filename:`slack-update-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown"}}}async function Ze(e,n){var w,f;n(0,"Collecting all pipeline data…"),await g(400);const s=D(e),t=s.slice(0,10),c=s.filter(o=>o.status==="approved"),l=s.filter(o=>o.status==="deferred"),r=s.reduce((o,x)=>o+(x.reach||0),0),a=s.reduce((o,x)=>{const $=(x.arrRisk||"").match(/\$([\d,.]+)\s*(M|K)?/i);if(!$)return o;const b=parseFloat($[1].replace(/,/g,"")),v=($[2]||"").toUpperCase();return o+b*(v==="M"?1e6:v==="K"?1e3:1)},0);n(1,`Analyzing ${s.length} initiatives, ${r} signals…`),await g(400),n(2,"Building executive summary…");const m=e==="productb"?"Product B":"Product A",d=new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"});let u="",h=!1;try{const o=await T(`You are a Senior Product Manager presenting a Quarterly Business Review for ${m} (legal e-billing platform).

Write an executive summary report in markdown with these sections:
1. Executive Summary (3-4 sentences)
2. Product Health Metrics (table with key metrics)
3. Top Themes (top 5 signal clusters)
4. Risk Areas (ARR at risk, top pain points)
5. Recommended Roadmap (top 5 priorities with RICE scores)
6. Evidence Strength assessment

Data:
- ${s.length} initiatives scored via RICE
- ${c.length} approved, ${l.length} deferred
- ${r} customer signals
- Top items: ${t.slice(0,5).map(x=>`${x.name} (RICE:${x.score}, ${x.reach} signals)`).join("; ")}
- ARR at risk: ~${a>=1e6?"$"+(a/1e6).toFixed(1)+"M":"$"+Math.round(a/1e3)+"K"}

Be specific to ${m}'s legal e-billing domain. 500 words max.`);o&&(u=o,h=!0)}catch{}return u||(u=`# ${m} — Executive Summary Report
## ${d}

---

## 1. Executive Summary

${m} has analyzed **${r} customer signals** across ${s.length} initiatives using the RICE scoring framework. **${c.length} items** have been approved for the roadmap, **${l.length}** deferred to next quarter. Total ARR at risk across identified pain points: **${a>=1e6?"$"+(a/1e6).toFixed(1)+"M":a>0?"$"+Math.round(a/1e3)+"K":"TBD"}**.

---

## 2. Product Health Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Total Signals | ${r} | — |
| Initiatives Scored | ${s.length} | — |
| Approved for Roadmap | ${c.length} | — |
| Deferred | ${l.length} | — |
| Avg RICE Score | ${Math.round(s.reduce((o,x)=>o+x.score,0)/s.length)} | — |
| ARR at Risk | ${a>=1e6?"$"+(a/1e6).toFixed(1)+"M":a>0?"$"+Math.round(a/1e3)+"K":"TBD"} | — |

---

## 3. Top Themes (by signal volume)

${t.slice(0,5).map((o,x)=>`${x+1}. **${o.name}** — ${o.reach} signals, origin: ${o.origin}, confidence: ${o.confidence}%`).join(`
`)}

---

## 4. Risk Areas

${s.filter(o=>o.arrRisk).slice(0,3).map(o=>`- **${o.name}** — ${o.arrRisk} ARR at risk, ${o.reach} signals`).join(`
`)||"- No critical ARR risk identified in current scoring cycle"}

### Key Concerns
- ${((w=t[0])==null?void 0:w.name)||"Top priority"} represents the largest signal cluster and should be prioritized
- ${l.length} deferred items may escalate if not addressed within 2 quarters
- Customer escalation risk on items with > 50 signals

---

## 5. Recommended Roadmap

| Priority | Initiative | RICE | Signals | Status |
|----------|-----------|------|---------|--------|
${t.slice(0,7).map((o,x)=>`| ${x+1} | ${o.name} | ${o.score} | ${o.reach} | ${o.status} |`).join(`
`)}

---

## 6. Evidence Strength

- **High confidence** (≥80%): ${s.filter(o=>o.confidence>=80).length} initiatives
- **Medium confidence** (60-79%): ${s.filter(o=>o.confidence>=60&&o.confidence<80).length} initiatives  
- **Low confidence** (<60%): ${s.filter(o=>o.confidence<60).length} initiatives

All scoring is evidence-based, derived from:
- JIRA support tickets (primary signal source)
- Customer QBR notes and NPS feedback
- Client Insights API (usage/health data)

---

## Next Steps

1. Finalize Q3 sprint allocation for approved items
2. Schedule engineering capacity review for top 3 priorities
3. Set up pilot customer cohort for "${((f=t[0])==null?void 0:f.name)||"top priority"}"
4. Review deferred items at next monthly prioritization session
5. Present this report at executive sync (recommended: this week)

---
*Generated by MagicWand AI — ${new Date().toISOString().slice(0,10)}*`),n(3,h?"AI report generated ✓":"Using template (AI unavailable)…"),await g(400),n(4,"Structuring sections…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Executive report generated (${h?"AI-generated":"template-based"}) — ${s.length} initiatives analyzed`,output:{title:`Executive Report — ${m} ${d}`,content:u,filename:`executive-report-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"report"}}}async function et(e,n,s,t){const c=(t==null?void 0:t.signals)||(await N(async()=>{const{getSignals:p}=await import("./signalData-DEeZIxLf.js");return{getSignals:p}},[])).getSignals(e),l=(t==null?void 0:t.clusters)||(await N(async()=>{const{getClusters:p}=await import("./insightData-CZI7SIkn.js");return{getClusters:p}},[])).getClusters(e);n(0,"Loading signal data…"),await g(400);const r=c.length,a=l[0],m=e==="productb"?"Product B":"Product A";n(1,`Analyzing ${l.length} clusters, ${r} signals…`),await g(400),n(2,"Identifying key themes…");let d="",u=!1;try{const p=await T(`You are a Senior Product Manager analyzing customer signals for ${m} (legal e-billing platform).

Generate a concise signal landscape summary in markdown with:
1. **Executive Overview** — 2-3 sentences
2. **Top Signal Clusters** — table with: Cluster, Signals, Trend, Confidence, Revenue at Risk
3. **Key Themes** — 3-4 bullet points on what customers are telling us
4. **Growing Trends** — which clusters are accelerating
5. **Outliers & Watchlist** — anything unusual or newly emerging
6. **Recommended Actions** — 3-4 next steps

Data:
- ${r} total signals from ${m}
- ${l.length} clusters identified
- Top clusters: ${l.slice(0,5).map(w=>`${w.name} (${w.signals} signals, ${w.trend} trend, $${w.revenueAtRisk} at risk)`).join("; ")}
- Segments: ${[...new Set(l.flatMap(w=>w.segments||[]))].join(", ")}

Be specific to the legal e-billing domain. 400 words max.`);p&&(d=p,u=!0)}catch{}return d||(d=`# ${m} — Signal Landscape Summary
## ${new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}

---

## Executive Overview

${m} has **${r} customer signals** across **${l.length} validated clusters**. The dominant theme is "${a==null?void 0:a.name}" with ${a==null?void 0:a.signals} signals and ${a==null?void 0:a.revenueAtRisk} ARR at risk. Signal volume is trending upward across ${l.filter(p=>parseInt(p.trend)>0).length} of ${l.length} clusters.

## Top Signal Clusters

| Cluster | Signals | Trend | Confidence | Revenue at Risk |
|---------|---------|-------|------------|-----------------|
${l.slice(0,5).map(p=>`| ${p.name} | ${p.signals} | ${p.trend} | ${p.confidence}% | ${p.revenueAtRisk} |`).join(`
`)}

## Key Themes

${l.slice(0,4).map(p=>`- **${p.name}:** ${p.summary.split(".")[0]}.`).join(`
`)}

## Growing Trends

${l.filter(p=>parseInt(p.trend)>=5).map(p=>`- 📈 **${p.name}** — ${p.trend} new signals, ${p.confidence}% confidence`).join(`
`)||"- No clusters showing significant acceleration"}

## Outliers & Watchlist

${l.filter(p=>p.confidence<60).map(p=>`- ⚠️ **${p.name}** — Low confidence (${p.confidence}%), needs more signal validation`).join(`
`)||"- No notable outliers"}

## Recommended Actions

1. **Prioritize "${a==null?void 0:a.name}"** — highest signal volume and revenue impact
2. **Validate low-confidence clusters** — conduct targeted customer interviews
3. **Monitor acceleration** — ${l.filter(p=>parseInt(p.trend)>=10).length} clusters growing at 10+ signals
4. **Cross-reference with roadmap** — ensure top clusters are mapped to initiatives

---
*Generated by MagicWand AI — ${new Date().toISOString().slice(0,10)}*
`),n(3,u?"AI summary generated ✓":"Using template…"),await g(300),n(4,"Building recommendations…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Signal summary generated (${u?"AI-generated":"template-based"}) — ${l.length} clusters, ${r} signals`,output:{title:`Signal Summary — ${m}`,content:d,filename:`signal-summary-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown"}}}async function tt(e,n,s,t){var f,o,x,$,b,v,R,M;const c=(t==null?void 0:t.clusters)||(await N(async()=>{const{getClusters:j}=await import("./insightData-CZI7SIkn.js");return{getClusters:j}},[])).getClusters(e),{getProduct:l}=await N(async()=>{const{getProduct:j}=await import("./index-DbwP4hyU.js").then(C=>C.K);return{getProduct:j}},__vite__mapDeps([0,1,2]));n(0,"Loading signal clusters…"),await g(400);const r=D(e),a=l(e),m=a.name,d=a.competitors||[],u=a.marketMoves||[];n(1,`Mapping ${c.length} clusters against ${d.length} competitors…`),await g(400),n(2,"Identifying capability gaps…");let h="",p=!1;try{const j=await T(`You are a Senior Product Strategist analyzing competitive positioning for ${m} (legal e-billing platform, ${a.clients} enterprise clients).

Generate a comprehensive competitive analysis in markdown:

1. **Executive Summary** — 3-4 sentences on competitive position and key gaps
2. **Capability Gap Matrix** — table: Capability Area, ${m} Status, Competitor Advantage, Gap Severity, Signals
3. **SWOT Analysis** — 2x2 table with Strengths, Weaknesses, Opportunities, Threats
4. **Competitor Profiles** — for each: positioning, threat level, key moves, win/loss
5. **Key Gaps** — top 3-4 gaps with signal evidence
6. **Strategic Opportunities** — where ${m} can differentiate
7. **Counter-Strategy Recommendations** — prioritized action table

Signal clusters: ${c.slice(0,5).map(C=>`${C.name} (${C.signals} signals, $${C.revenueAtRisk} at risk)`).join(", ")}
Top scored items: ${r.slice(0,5).map(C=>`${C.name} (RICE: ${C.score})`).join(", ")}
Competitors: ${d.map(C=>`${C.name} (${C.threat} threat): ${C.positioning}`).join("; ")}
Market moves: ${u.slice(0,3).map(C=>`${C.competitor}: ${C.headline}`).join("; ")}

Be realistic, data-driven. 700 words max.`);j&&(h=j,p=!0)}catch{}if(!h){const j=d.filter(S=>S.threat==="High"),C=u.slice(0,4);h=`# ${m} — Competitive Analysis
## ${new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}

---

## Executive Summary

${m} maintains market leadership in enterprise legal e-billing with ${a.clients} clients. However, signal data reveals **${c.length} capability gap areas** where competitors are advancing. **${j.length} high-threat competitors** are actively challenging positioning. The largest gaps center around "${(f=c[0])==null?void 0:f.name}" (${(o=c[0])==null?void 0:o.signals} signals) and "${(x=c[1])==null?void 0:x.name}" (${($=c[1])==null?void 0:$.signals} signals).

## Capability Gap Matrix

| Capability Area | ${m} | Competitor Advantage | Gap | Signals |
|----------------|-----------|---------------------|-----|---------|
${c.slice(0,5).map(S=>{var E;return`| ${S.name} | In Progress | ${((E=d[0])==null?void 0:E.name)||"Competitors"} | ${parseInt(S.trend)>=10?"Critical":parseInt(S.trend)>=5?"High":"Medium"} | ${S.signals} |`}).join(`
`)}

## SWOT Analysis

| | Favorable | Unfavorable |
|---|---|---|
| **Internal** | **Strengths:** ${a.clients} enterprise clients, deep domain expertise, data ecosystem, AI/analytics roadmap | **Weaknesses:** Platform modernization pace, implementation timelines, feature gaps in emerging areas |
| **External** | **Opportunities:** AI-native differentiation, self-service analytics demand, consolidation trend favors full-suite vendors | **Threats:** ${j.map(S=>S.name).join(", ")} advancing rapidly, mid-market pricing pressure, client migration risk |

## Competitor Profiles

${d.map(S=>{var E,O;return`### ${S.name} — ${S.threat} Threat
- **Position:** ${S.positioning}
- **Key strengths:** ${((E=S.strengths)==null?void 0:E.slice(0,2).join("; "))||"N/A"}
- **Key weaknesses:** ${((O=S.weaknesses)==null?void 0:O.slice(0,2).join("; "))||"N/A"}
- **Win/Loss:** ${S.winLoss||"N/A"}
`}).join(`
`)}

## Recent Market Moves

${C.length>0?`| Date | Competitor | Move | Impact |
|------|-----------|------|--------|
`+C.map(S=>`| ${S.date} | ${S.competitor} | ${S.headline} | ${S.impact} |`).join(`
`):"No recent market moves tracked."}

## Key Gaps

${c.slice(0,3).map((S,E)=>{var O,L;return`### ${E+1}. ${S.name}
- **Signal evidence:** ${S.signals} signals, ${S.trend} trend
- **Revenue at risk:** ${S.revenueAtRisk}
- **Customer voice:** ${((O=S.verbatims)==null?void 0:O[0])||"Multiple escalations"}
- **Competitor stance:** ${((L=d[E%d.length])==null?void 0:L.name)||"Competitors"} actively investing
`}).join(`
`)}

## Strategic Opportunities

1. **AI differentiation** — Leverage the AI gateway for AI-powered workflows competitors can't match
2. **Data advantage** — ${m}'s dataset depth across ${a.clients} clients is a moat
3. **Platform integration** — End-to-end legal ops workflow that point solutions can't replicate

## Counter-Strategy Recommendations

| Priority | Action | Rationale |
|----------|--------|-----------|
| 🔴 P0 | Address "${(b=c[0])==null?void 0:b.name}" | ${(v=c[0])==null?void 0:v.revenueAtRisk} ARR protection |
| 🔴 P0 | Accelerate AI feature GA | Neutralize ${((R=j[0])==null?void 0:R.name)||"competitor"} AI claims |
| 🟡 P1 | Publish competitive battle cards | Arm sales with counter-positioning |
| 🟡 P1 | Launch customer advisory board | Deepen executive relationships |
| 🟢 P2 | Win-back program for lost deals | Re-engage with new capabilities |

---

## Win/Loss Trends

- **We win** when: Enterprise complexity, analytics depth, and multi-entity support are decisive
- **We lose** when: Price sensitivity, rapid deployment needs, or niche capabilities drive decisions
- **Watch:** ${((M=j[0])==null?void 0:M.name)||"Top competitor"} acquiring capabilities to close feature gaps

---
*Generated by MagicWand AI — ${new Date().toISOString().slice(0,10)}*
`}return n(3,p?"AI analysis generated ✓":"Using template…"),await g(300),n(4,"Generating counter-strategies…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Competitive analysis generated (${p?"AI-generated":"template-based"}) — ${c.length} gaps, ${d.length} competitors`,output:{title:`Competitive Analysis — ${m}`,content:h,filename:`competitive-analysis-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"email",emailSubject:`${m} Competitive Analysis — ${new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}`}}}async function nt(e,n){const{getRoadmap:s}=await N(async()=>{const{getRoadmap:d}=await import("./roadmapData-BD7anLP-.js");return{getRoadmap:d}},[]);n(0,"Loading shipped items…"),await g(400);const t=s(e),c=t.filter(d=>d.lane==="shipped"),l=e==="productb"?"Product B":"Product A";n(1,`Found ${c.length} shipped items…`),await g(400),n(2,"Drafting customer language…");let r="",a=!1;try{const d=await T(`You are a Senior Product Manager writing customer-facing release notes for ${l} (legal e-billing platform).

Write release notes in markdown for these recently shipped features:
${c.map(u=>`- ${u.name}: Origin "${u.origin}", ${u.signals} signals drove this, ${u.arrImpact} ARR impact`).join(`
`)}

Format for each feature:
1. Feature name as heading
2. **What changed** — 2-3 sentences on what was built
3. **Why it matters** — customer benefit, mapped to the signal origin
4. **Who benefits** — personas: ${c.flatMap(u=>u.personas||[]).filter((u,h,p)=>p.indexOf(u)===h).join(", ")}
5. **Getting started** — 1-2 sentences on how to access/enable

Professional, customer-facing tone. 400 words max.`);d&&(r=d,a=!0)}catch{}if(!r){const d=`Q${Math.ceil((new Date().getMonth()+1)/3)} ${new Date().getFullYear()}`;r=`# ${l} Release Notes
## ${d}

We're excited to share the latest updates to ${l}. These enhancements are driven directly by your feedback — **${c.reduce((u,h)=>u+h.signals,0)} customer signals** informed what we built.

---

${c.map(u=>`## ${u.name}

**What changed:** ${u.name} delivers new capabilities in the "${u.origin}" area, addressing feedback from ${u.signals} customer signals. This feature was validated at ${u.confidence}% confidence before development.

**Why it matters:** ${u.origin} was a top pain point identified through support tickets, QBR notes, and NPS surveys. This update ${u.arrImpact?`protects ${u.arrImpact} in ARR and`:""} reduces the friction customers experienced.

**Who benefits:** ${(u.personas||["Legal Operations teams"]).join(", ")}

**Getting started:** This feature is available now${e==="productb"?" in your Product B environment":" in your Product A instance"}. Contact your account team for enablement details.
`).join(`
---

`)}

---

## What's Next

We're continuing to invest in the areas you've told us matter most. Upcoming priorities include:
${t.filter(u=>u.lane==="now").slice(0,3).map(u=>`- **${u.name}** — targeting ${u.target}`).join(`
`)}

Questions or feedback? Reach out to your the company account team.

---
*Generated by MagicWand AI — ${new Date().toISOString().slice(0,10)}*
`}return n(3,a?"AI notes generated ✓":"Using template…"),await g(300),n(4,"Adding impact context…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Release notes drafted (${a?"AI-generated":"template-based"}) — ${c.length} features documented`,output:{title:`Release Notes — ${l}`,content:r,filename:`release-notes-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"email",emailSubject:`${l} Release Notes — ${new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}`}}}async function at(e,n,s){const{getCacheStatus:t,syncSignals:c}=await N(async()=>{const{getCacheStatus:h,syncSignals:p}=await import("./index-DbwP4hyU.js").then(w=>w.N);return{getCacheStatus:h,syncSignals:p}},__vite__mapDeps([0,1,2])),l=(s==null?void 0:s.since)||0;n(0,"Connecting to backend…"),await g(300);let r;try{r=await t(e)}catch{throw new Error("Backend unavailable — cannot reach signal sync service")}const a=r.totalIssues||0,m=l>0?`last ${l} months`:"all time";n(1,a>0?`Cache has ${a.toLocaleString()} signals (last sync: ${r.lastSyncAt?new Date(r.lastSyncAt).toLocaleDateString():"unknown"})`:"No existing cache — will do full sync"),await g(400),n(2,`Querying JIRA projects (${m})…`);let d;try{d=await c(e,h=>{if(h.type==="progress"){const p=h.percent||0;n(3,`Streaming signals… ${p}% (${(h.fetched||0).toLocaleString()} issues)`)}},{since:l||void 0})}catch(h){throw new Error(`Sync failed: ${h.message}`)}const u=(d==null?void 0:d.totalSynced)||(d==null?void 0:d.totalIssues)||0;return n(4,`${u.toLocaleString()} signals synced to local cache`),await g(300),n(5,"Sync complete — pipeline data updated"),await g(200),{message:`${u.toLocaleString()} signals synced from JIRA`}}async function st(e,n,s,t){var p,w;const c=(t==null?void 0:t.signals)||(await N(async()=>{const{getSignals:f}=await import("./signalData-DEeZIxLf.js");return{getSignals:f}},[])).getSignals(e),l=(t==null?void 0:t.clusters)||(await N(async()=>{const{getClusters:f}=await import("./insightData-CZI7SIkn.js");return{getClusters:f}},[])).getClusters(e);n(0,"Loading signal data…"),await g(400);const r=e==="productb"?"Product B":"Product A";n(1,`Grouping ${c.length} signals by customer…`),await g(400);const a={};c.forEach(f=>{const o=f.customer||f.source||"Unknown";a[o]||(a[o]={signals:[],severities:{},sources:new Set}),a[o].signals.push(f);const x=f.severity||f.sentiment||"Medium";a[o].severities[x]=(a[o].severities[x]||0)+1,f.source&&a[o].sources.add(f.source)});const m=Object.entries(a).map(([f,o])=>({name:f,signalCount:o.signals.length,severities:o.severities,sources:[...o.sources],highSeverity:(o.severities.critical||0)+(o.severities.high||0)+(o.severities.Negative||0),signals:o.signals})).sort((f,o)=>o.signalCount-f.signalCount);n(2,"Calculating ARR exposure…");let d="",u=!1;try{const f=await T(`You are a Senior Product Manager creating a Customer Impact Report for ${r} (legal e-billing platform).

Generate a customer impact report in markdown:
1. **Executive Summary** — 2-3 sentences on customer health landscape
2. **At-Risk Accounts** — table: Customer, Signals, High Severity, Sources, Risk Level
3. **Signal Severity Distribution** — breakdown of critical/high/medium/low across customers
4. **Top Pain Points by Customer** — what each top customer is most concerned about
5. **Cluster-Customer Matrix** — which clusters affect which customers
6. **Recommended Actions** — prioritized customer-specific interventions

Data:
- ${c.length} total signals from ${Object.keys(a).length} customers
- Top customers: ${m.slice(0,5).map(o=>`${o.name} (${o.signalCount} signals, ${o.highSeverity} high-sev)`).join(", ")}
- Clusters: ${l.slice(0,5).map(o=>`${o.name} ($${o.revenueAtRisk} at risk)`).join(", ")}

Be specific to the legal e-billing domain. 500 words max.`);f&&(d=f,u=!0)}catch{}if(!d){const f=m.length,o=m.filter($=>$.highSeverity>=2),x=new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"});d=`# ${r} — Customer Impact Report
## ${x}

---

## Executive Summary

Analysis of **${c.length} customer signals** across **${f} customers** reveals **${o.length} at-risk accounts** with elevated severity patterns. The highest signal concentration comes from ${((p=m[0])==null?void 0:p.name)||"top accounts"} (${((w=m[0])==null?void 0:w.signalCount)||0} signals). Proactive intervention is recommended for accounts with 2+ high-severity signals.

## At-Risk Accounts

| Customer | Signals | High Severity | Sources | Risk Level |
|----------|---------|---------------|---------|------------|
${m.slice(0,10).map($=>`| ${$.name} | ${$.signalCount} | ${$.highSeverity} | ${$.sources.join(", ")} | ${$.highSeverity>=3?"🔴 Critical":$.highSeverity>=2?"🟡 High":$.signalCount>=5?"🟡 Medium":"🟢 Low"} |`).join(`
`)}

## Signal Severity Distribution

| Severity | Count | % of Total |
|----------|-------|-----------|
${Object.entries(c.reduce(($,b)=>{const v=b.severity||b.sentiment||"Medium";return $[v]=($[v]||0)+1,$},{})).sort(($,b)=>b[1]-$[1]).map(([$,b])=>`| ${$} | ${b} | ${Math.round(b/c.length*100)}% |`).join(`
`)}

## Top Pain Points by Customer

${m.slice(0,5).map($=>{const b=$.signals||[],v=[...new Set(b.map(R=>R.classification||R.theme||"General"))].slice(0,3);return`### ${$.name} (${$.signalCount} signals)
- **Key themes:** ${v.join(", ")}
- **Severity breakdown:** ${Object.entries($.severities).map(([R,M])=>`${R}: ${M}`).join(", ")}
- **Sources:** ${$.sources.join(", ")}`}).join(`

`)}

## Cluster Impact on Customers

| Cluster | Affected Customers | Revenue at Risk |
|---------|-------------------|-----------------|
${l.slice(0,5).map($=>{var b;return`| ${$.name} | ${((b=$.segments)==null?void 0:b.length)||"—"} | ${$.revenueAtRisk} |`}).join(`
`)}

## Recommended Actions

| Priority | Customer/Segment | Action |
|----------|-----------------|--------|
${o.slice(0,3).map(($,b)=>`| 🔴 P${b} | ${$.name} | Schedule executive review — ${$.highSeverity} high-severity signals require immediate attention |`).join(`
`)}
| 🟡 P1 | All at-risk accounts | Create dedicated signal review cadence (bi-weekly) |
| 🟡 P1 | Top 5 by volume | Proactive outreach with product roadmap update |
| 🟢 P2 | Monitoring group | Add to quarterly QBR signal dashboard |

---
*Generated by MagicWand AI — ${new Date().toISOString().slice(0,10)}*
`}return n(3,u?"AI report generated ✓":"Using template…"),await g(300),n(4,"Identifying at-risk accounts…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`Customer impact report generated (${u?"AI-generated":"template-based"}) — ${Object.keys(a).length} customers analyzed`,output:{title:`Customer Impact Report — ${r}`,content:d,filename:`customer-impact-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"email",emailSubject:`${r} Customer Impact Report — ${new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}`}}}async function it(e,n,s){n(0,"Loading initiative data…"),await g(400);let t;if(s)t=D(e).find(u=>u.name===s.name)||{...s,score:0,origin:s.origin||"Unknown",reach:s.signals||0};else{const m=D(e);t=m.find(d=>d.status==="approved")||m[0]}if(!t)throw new Error("No scoring items found");n(1,`Selected: ${t.name}`),await g(400),n(2,"Analyzing signal pain points…");const c=e==="productb"?"Product B":"Product A";let l="",r=!1;try{const m=await T(`You are a Senior UX Designer designing a user flow for ${c} (legal e-billing platform).

Generate a user flow document in markdown for: "${t.name}"
Context: Origin cluster "${t.origin}", ${t.reach} signals, ${t.confidence||50}% confidence.

Include:
1. **Overview** — 2-3 sentences describing the flow
2. **User Flow Diagram** — Mermaid flowchart showing the complete user journey:
   - Use \`\`\`mermaid code block
   - Use flowchart TD (top-down)
   - Include: entry point, 3-5 main steps, 1-2 decision points (yes/no branches), error/edge cases, success endpoint
   - Mark pain points with 🔴 emoji in node text
   - Use subgraphs to group related steps
3. **Pain Points** — 3-4 identified from signals with severity
4. **UX Recommendations** — 3-4 improvements mapped to pain points
5. **Success Metrics** — 3 measurable UX goals

IMPORTANT: The mermaid diagram must be valid, with proper node IDs (A, B, C...) and arrow syntax (-->).
Be specific to ${c}'s legal e-billing domain. 400 words max.`);m&&(l=m,r=!0)}catch{}if(!l){const m=t.name.replace(/"/g,"'"),d=(t.origin||"Unknown").replace(/"/g,"'");l=`# User Flow — ${t.name}
## ${c}

---

## Overview

This user flow maps the end-to-end journey for "${t.name}" in ${c}. It addresses the "${t.origin}" pain point cluster identified through ${t.reach} customer signals. The flow highlights current friction points and recommended improvements.

## User Flow Diagram

\`\`\`mermaid
flowchart TD
    A["User enters ${c}"] --> B["Navigate to ${d}"]
    B --> C{"Has existing data?"}
    C -->|Yes| D["Load existing records"]
    C -->|No| E["🔴 Manual data entry required"]
    E --> F["Enter required fields"]
    D --> G["Review & filter results"]
    F --> G
    G --> H{"Data looks correct?"}
    H -->|No| I["🔴 Edit/correct data"]
    I --> G
    H -->|Yes| J["Apply ${m}"]
    J --> K{"Processing successful?"}
    K -->|No| L["🔴 Error handling"]
    L --> J
    K -->|Yes| M["View results & confirmation"]
    M --> N["Export or share"]
    N --> O["✅ Flow complete"]

    subgraph "Pain Points"
        E
        I
        L
    end
\`\`\`

## Identified Pain Points

| # | Pain Point | Severity | Signal Evidence |
|---|-----------|----------|-----------------|
| 1 | Manual data entry is time-consuming | 🔴 High | ${Math.round(t.reach*.4)} signals reference manual work |
| 2 | Error correction loop is frustrating | 🟡 Medium | ${Math.round(t.reach*.25)} signals mention data quality |
| 3 | Processing failures lack clear guidance | 🟡 Medium | ${Math.round(t.reach*.2)} signals about error handling |
| 4 | Navigation to feature is not intuitive | 🟢 Low | ${Math.round(t.reach*.15)} signals about discoverability |

## UX Recommendations

1. **Auto-populate from existing data** — Reduce manual entry by pre-filling fields from known records, addressing ${Math.round(t.reach*.4)} signals
2. **Inline validation** — Prevent errors before submission with real-time field validation
3. **Progressive disclosure** — Show advanced options only when needed to reduce cognitive load
4. **Contextual help** — Add tooltips and guided flows for first-time users

## Success Metrics

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Task completion rate | ~70% | > 90% | 90 days |
| Time to complete | ~8 min | < 3 min | 90 days |
| Error rate | ~15% | < 5% | 6 months |

---
*Generated by MagicWand AI — ${new Date().toISOString().slice(0,10)}*
`}return n(3,r?"AI flow generated ✓":"Using template…"),await g(300),n(4,"Adding decision points…"),await g(200),n(5,"Output ready — opening preview…"),await g(200),{message:`User flow generated (${r?"AI-generated":"template-based"}) — ${t.name}`,output:{title:`User Flow — ${t.name}`,content:l,filename:`user-flow-${t.name.replace(/[^a-zA-Z0-9]/g,"-")}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown"}}}const Q={producta:[{id:1,name:"Lexlio",website:"https://www.lexlio.example.com",blogUrl:"https://www.lexlio.example.com/blog",pressUrl:"https://www.lexlio.example.com/press",newsUrl:"https://www.lexlio.example.com/news",keywords:["invoice review","AI","automation","legal spend","deployment"],scrapingStrategy:"blog"},{id:2,name:"Coredge",website:"https://www.Coredge.com",blogUrl:"https://www.Coredge.com/insights",newsUrl:"https://www.Coredge.com/news",pressUrl:"https://www.Coredge.com/press",keywords:["matter management","clm platform","acquisition","legal ops"],scrapingStrategy:"blog"},{id:3,name:"Counselix",website:"https://www.Counselix.com",blogUrl:"https://www.Counselix.com/blog",newsUrl:"https://www.Counselix.com/news",pressUrl:"https://www.Counselix.com/press",keywords:["benchmarking","legal analytics","rate analysis","counsel"],scrapingStrategy:"blog"},{id:4,name:"Vantix",website:"https://www.Vantix.com",blogUrl:"https://www.Vantix.com/blog",newsUrl:"https://www.Vantix.com/news",pressUrl:"https://www.Vantix.com/press",keywords:["e-discovery","legal hold","legal ops","data privacy"],scrapingStrategy:"blog"},{id:5,name:"MatterTrack",website:"https://www.MatterTrack.com",blogUrl:"https://www.MatterTrack.com/blog",newsUrl:"https://www.MatterTrack.com/news",keywords:["legal tracking","spend management","legacy vendor"],scrapingStrategy:"blog"}],productb:[{id:1,name:"Lexlio",website:"https://www.lexlio.example.com",blogUrl:"https://www.lexlio.example.com/blog",pressUrl:"https://www.lexlio.example.com/press",keywords:["invoice review","AI","automation","legal spend"],scrapingStrategy:"blog"},{id:2,name:"Coredge",website:"https://www.Coredge.com",blogUrl:"https://www.Coredge.com/insights",newsUrl:"https://www.Coredge.com/news",keywords:["matter management","acquisition","CLM"],scrapingStrategy:"blog"},{id:3,name:"Vantix",website:"https://www.Vantix.com",blogUrl:"https://www.Vantix.com/blog",newsUrl:"https://www.Vantix.com/news",keywords:["legal hold","legal ops","e-discovery"],scrapingStrategy:"blog"},{id:4,name:"MatterTrack",website:"https://www.MatterTrack.com",blogUrl:"https://www.MatterTrack.com/blog",keywords:["legal tracking","spend","legacy vendor"],scrapingStrategy:"blog"}]};async function rt(){return console.warn("NewsAPI is currently disabled. Uncomment in competitorRegistry.js to enable."),[]}const H="magicwand-market-research-metadata";function q(e){try{const n=localStorage.getItem(H);return n?JSON.parse(n)[e]||{}:{}}catch{return{}}}function oe(e,n){try{const s=localStorage.getItem(H),t=s?JSON.parse(s):{};t[e]=n,localStorage.setItem(H,JSON.stringify(t))}catch{}}function Y(e,n){const s=q(e);s[n]||(s[n]={}),s[n].lastScannedAt=new Date().toISOString(),oe(e,s)}function ot(e,n){const t=q(e)._seenHeadlines||{},c=ce(n);return t[c]!==void 0}function ct(e,n){const s=q(e);s._seenHeadlines||(s._seenHeadlines={});const t=ce(n);s._seenHeadlines[t]=new Date().toISOString(),oe(e,s)}function ce(e){return e.toLowerCase().trim().replace(/[^\w\s]/g,"").replace(/\s+/g,"-")}function lt(e){return Q[e]||Q.producta}async function dt(e,n){const s=lt(e),{getProduct:t}=await N(async()=>{const{getProduct:u}=await import("./index-DbwP4hyU.js").then(h=>h.K);return{getProduct:u}},__vite__mapDeps([0,1,2])),c=t(e);n(0,`Starting market research for ${s.length} competitors…`),await g(300);let l=0;const r=[],a=[];for(let u=0;u<s.length;u++){const h=s[u],p=Math.round(u/s.length*80)+10;n(p,`Researching ${h.name}…`),await g(200);try{const w=await mt(h);if(w.length===0){a.push({competitor:h.name,status:"no-content",message:"No articles found"});continue}const f=w.filter(x=>!ot(e,x.headline));if(f.length===0){a.push({competitor:h.name,status:"no-new",articlesScanned:w.length,message:"All articles already known"}),Y(e,h.id);continue}const o=f.map((x,$)=>({id:200+l+$,date:x.date||new Date().toISOString().split("T")[0],competitor:h.name,headline:x.headline,impact:x.relevance==="high"?"High":"Medium",category:"Market",source:"Auto-Research",url:x.url||null,isAutoResearched:!0,scannedAt:new Date().toISOString()}));f.forEach(x=>{ct(e,x.headline)}),Y(e,h.id),r.push(...o),l+=o.length,a.push({competitor:h.name,status:"found-new",newArticles:f.length,articlesScanned:w.length,message:`Found ${f.length} new article(s)`})}catch(w){a.push({competitor:h.name,status:"error",error:w.message,message:`Failed to fetch: ${w.message}`})}await g(100)}n(95,`Processing ${l} new market moves…`),await g(300);let m=ut(e,c,a,r);n(98,"Generating AI summary…"),await g(200);let d="";try{r.length>0&&(d=await T(`Summarize these recent competitor market moves for the legal tech product "${c.name}". Highlight strategic implications:

${r.map(u=>`- [${u.date}] ${u.competitor}: ${u.headline}`).join(`
`)}

Keep to 3-4 sentences focusing on competitive threats and opportunities. Be concise.`))}catch{}return n(100,"Market research complete"),{message:`Market research complete — ${l} new moves found across ${s.length} competitors`,output:{title:`Market Research Report — ${c.name}`,content:m+(d?`

## AI Strategic Summary

${d}`:""),filename:`market-research-${e}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"preview",newMoves:r,researchResults:a,shouldUpdateSetupData:l>0}}}async function mt(e){try{return await rt(e.name,e.keywords)}catch(n){return console.error(`Failed to fetch ${e.name}:`,n),[]}}function ut(e,n,s,t){const c=s.filter(a=>a.status==="found-new").length,l=s.filter(a=>a.status==="error").length;let r=`# Market Research Report
## ${n.name} — ${new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}

---

## Research Summary

- **Competitors Scanned:** ${s.length}
- **New Market Moves Found:** ${t.length}
- **Successful Scans:** ${c}
- **Errors:** ${l}
- **Scan Timestamp:** ${new Date().toISOString()}

---

## Scan Results

| Competitor | Status | Finding |
|---|---|---|
${s.map(a=>`| ${a.competitor} | ${a.status} | ${a.message} |`).join(`
`)}

`;return t.length>0?r+=`
---

## New Market Moves (${t.length})

${t.map(a=>`### ${a.competitor} — ${a.date}

**${a.headline}**

- **Impact:** ${a.impact}
- **Source:** [${a.url?"View":"Internal"}](${a.url||"#"})
- **Type:** ${a.category}
- **Auto-Detected:** Yes

`).join("")}

---

## Recommendation

Review these ${t.length} new market move(s) and integrate into competitive intelligence. Click "Update Setup Data" to add these moves to your market intelligence dashboard.
`:r+=`
---

## Status

No new market moves discovered. All competitor content reviewed has been previously captured.

---

## Next Run

Run market research again when you want to check for updates. The system tracks seen headlines to prevent duplicates.
`,r}const X={export:Ve,prd:Ke,jira:Qe,email:Ye,slack:Xe,report:Ze,signals:et,gap:tt,release:nt,sync:at,impact:st,flow:it,research:dt},gt={jira:Ue,prd:Le,email:_e,export:Fe,slack:De,report:ae,signals:$e,gap:Oe,release:Pe,sync:Me,impact:Te,flow:Ne},Z={jira:"bg-[#E6F2F9] text-[#007AC3]",prd:"bg-[#F3E5F5] text-[#7B1FA2]",email:"bg-[#FFF3E0] text-[#E65100]",export:"bg-[#F3F8E9] text-[#71A01B]",slack:"bg-[#FCE4EC] text-[#E5202E]",report:"bg-[#E6F2F9] text-[#007AC3]",signals:"bg-[#EDE7F6] text-[#5E35B1]",gap:"bg-[#FFF8E1] text-[#F9A825]",release:"bg-[#E8F5E9] text-[#2E7D32]",sync:"bg-[#E0F7FA] text-[#00838F]",impact:"bg-[#FEF3C7] text-[#D97706]",flow:"bg-[#E0F2FE] text-[#0284C7]"},ee={ready:"bg-[#F3F8E9] text-[#71A01B]",running:"bg-[#FFF3E0] text-[#E65100]",done:"bg-[#E6F2F9] text-[#007AC3]",fail:"bg-[#FEF4F5] text-[#E5202E]"},pt={ready:"Ready",running:"Running…",done:"Completed",fail:"Failed"},V="magicwand-actions",K="magicwand-action-outputs";function te(e){try{const n=localStorage.getItem(V);if(n){const t=JSON.parse(n)[e];if(!t||!t.actions)return null;const c=B(e);let l={};try{const r=sessionStorage.getItem(K);l=r?JSON.parse(r):{}}catch{}return{actions:c.map(r=>{const a=t.actions.find(m=>m.id===r.id);if(a){const m=l[`${e}-${r.id}`]||null;return{...r,status:a.status,result:a.result,completedAt:a.completedAt,lastOutput:m}}return r})}}}catch{}return null}function ht(e,n){try{const s=localStorage.getItem(V),t=s?JSON.parse(s):{},c=n.map(({lastOutput:r,...a})=>a);t[e]={actions:c},localStorage.setItem(V,JSON.stringify(t));const l=n.filter(r=>r.lastOutput);if(l.length>0){let r={};try{const a=sessionStorage.getItem(K);r=a?JSON.parse(a):{}}catch{}l.forEach(a=>{r[`${e}-${a.id}`]=a.lastOutput});try{sessionStorage.setItem(K,JSON.stringify(r))}catch{}}}catch{}}function ft({action:e,onClose:n,executor:s,productId:t,selectedItem:c,liveData:l}){const r=J[e.icon]||J.jira,[a,m]=k.useState(0),[d,u]=k.useState(r),[h,p]=k.useState(!1),[w,f]=k.useState(null),o=k.useRef(null),x=k.useRef(!1);k.useEffect(()=>{if(!x.current){if(x.current=!0,s)s(t,(v,R)=>{m(v+1),R&&u(M=>{const j=[...M];return j[v]=R,j})},c,l).then(v=>{m(r.length),setTimeout(()=>n(!0,v),600)}).catch(v=>{f(v.message||"Agent failed"),setTimeout(()=>n(!1,v.message),1500)});else{let b=function(v){v<r.length?o.current=setTimeout(()=>{m(v+1),b(v+1)},600+Math.random()*500):o.current=setTimeout(()=>{p(!0)},500)};b(0)}return()=>{o.current&&clearTimeout(o.current)}}},[]),k.useEffect(()=>{if(h){const b=setTimeout(()=>n(!0,null),600);return()=>clearTimeout(b)}},[h,n]);const $=Math.round(a/r.length*100);return i.jsx("div",{className:"fixed inset-0 bg-black/50 z-[9000] flex items-center justify-center",children:i.jsxs("div",{className:"bg-white rounded-2xl p-7 w-[480px] max-w-[90vw] shadow-2xl border-2 border-[#007AC3] animate-pulse-border",children:[i.jsx("div",{className:"text-base font-bold text-gray-900 mb-1",children:e.name}),i.jsxs("div",{className:"text-xs text-gray-500 mb-5",children:["Running agent for ",e.targets.join(", ")]}),i.jsxs("div",{className:"text-right text-xs text-gray-400 mb-2",children:[$,"%"]}),i.jsx("div",{className:"h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4",children:i.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#007AC3] to-[#85BC20] transition-all duration-400",style:{width:`${$}%`}})}),i.jsx("ul",{className:"space-y-1 mb-4",children:d.map((b,v)=>{const R=v<a?"done":v===a?"active":"pending";return i.jsxs("li",{className:`flex items-center gap-2.5 py-1 text-[13px] transition-colors ${R==="done"?"text-[#85BC20]":R==="active"?"text-gray-900 font-semibold":"text-gray-400"}`,children:[i.jsx("span",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] shrink-0 transition-all ${R==="done"?"border-[#85BC20] bg-[#85BC20] text-white":R==="active"?"border-[#007AC3] bg-[#007AC3]/10 text-[#007AC3]":"border-gray-300"}`,children:R==="done"?"✓":R==="active"?i.jsx(W,{size:10,className:"animate-spin"}):""}),b]},v)})}),w&&i.jsxs("div",{className:"text-xs text-[#E5202E] mt-2 flex items-center gap-1",children:[i.jsx(se,{size:12})," ",w]})]})})}function z({action:e,onRun:n,onViewOutput:s,syncTimeline:t,onSyncTimelineChange:c}){const l=gt[e.icon]||ye,r=Z[e.icon]||Z.jira,a=ee[e.status]||ee.ready,m=pt[e.status]||"Ready",d=e.kind==="agent",u=e.icon==="sync",h=e.status==="done",p=e.status==="fail";return i.jsxs("div",{className:`bg-white border border-gray-200 rounded-xl p-5 flex flex-col transition-all hover:shadow-[0_4px_12px_rgba(0,122,195,0.08)] ${d?"hover:border-[#007AC3]":"hover:border-[#7B1FA2]/40"} ${h?"opacity-80 hover:opacity-100":""}`,children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${r}`,children:i.jsx(l,{size:18})}),i.jsxs("div",{className:"flex-1 min-w-0",children:[i.jsxs("div",{className:"text-[13px] font-bold text-gray-900 flex items-center gap-1.5",children:[e.name,e.badge==="preview"&&i.jsx("span",{className:"text-[7px] font-bold px-1.5 py-0.5 rounded bg-[#FFF3E0] text-[#E65100] border border-[#E65100]/20 uppercase tracking-wider",children:"Preview"}),d&&!e.badge&&i.jsx("span",{className:"text-[7px] font-bold px-1.5 py-0.5 rounded bg-[#E8F5E9] text-[#2E7D32] border border-[#2E7D32]/20 uppercase tracking-wider",children:"Live"})]}),i.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wide mt-0.5",children:e.cat})]})]}),i.jsx("div",{className:"text-[11px] text-gray-500 leading-[1.6] mb-4",children:e.desc}),i.jsx("div",{className:"flex-1",children:e.status!=="ready"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsxs("span",{className:`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md ${a}`,children:[e.status==="running"&&i.jsx(W,{size:9,className:"animate-spin"}),h&&i.jsx(xe,{size:9}),p&&i.jsx(se,{size:9}),m]}),h&&e.completedAt&&i.jsx("span",{className:"text-[9px] text-gray-300",children:new Date(e.completedAt).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),e.result&&i.jsx("div",{className:"text-[10px] text-gray-400 mt-1",children:e.result})]})}),i.jsxs("div",{className:"mt-4 flex items-center justify-between gap-2",children:[i.jsxs("div",{className:"flex items-center gap-2",children:[u&&e.status==="ready"&&i.jsxs("div",{className:"relative",children:[i.jsxs("select",{value:t,onChange:w=>c==null?void 0:c(Number(w.target.value)),className:"appearance-none bg-gray-50 border border-gray-200 rounded-md px-2 py-1 pr-5 text-[10px] text-gray-600 font-medium cursor-pointer hover:border-[#007AC3] transition-colors focus:outline-none focus:border-[#007AC3]",children:[i.jsx("option",{value:6,children:"6 months"}),i.jsx("option",{value:12,children:"12 months"}),i.jsx("option",{value:18,children:"18 months"}),i.jsx("option",{value:24,children:"24 months"}),i.jsx("option",{value:0,children:"All time"})]}),i.jsx(ve,{size:9,className:"absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"})]}),h&&e.lastOutput&&i.jsxs("button",{onClick:()=>s(e.lastOutput),className:"py-1 px-2.5 rounded-md text-[10px] font-medium text-[#007AC3] hover:bg-[#E6F2F9] transition-colors flex items-center gap-1",children:[i.jsx(Be,{size:10})," View Output"]})]}),i.jsx("div",{children:e.status==="ready"?i.jsx("button",{onClick:()=>n(e.id),className:`px-5 py-2 rounded-lg border font-semibold text-xs transition-all ${d?"border-[#007AC3] bg-[#007AC3] text-white hover:bg-[#005F8C]":"border-[#7B1FA2]/30 bg-white text-[#7B1FA2] hover:bg-[#7B1FA2] hover:text-white"}`,children:d?i.jsxs(i.Fragment,{children:[i.jsx(ne,{size:12,className:"inline mr-1"}),"Run Agent"]}):i.jsxs(i.Fragment,{children:[i.jsx(ze,{size:12,className:"inline mr-1"}),"Generate"]})}):h||p?i.jsxs("button",{onClick:()=>n(e.id),className:"px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-500 font-semibold text-[11px] hover:border-[#007AC3] hover:text-[#007AC3] transition-all",children:[i.jsx(ie,{size:11,className:"inline mr-1"}),"Run Again"]}):i.jsxs("button",{disabled:!0,className:"px-5 py-2 rounded-lg border border-[#E65100] bg-white text-[#E65100] font-semibold text-[11px] opacity-60 cursor-default",children:[i.jsx(W,{size:11,className:"inline mr-1 animate-spin"}),"Running…"]})})]})]})}function Gt(){const{selectedProduct:e}=pe(),{cachedSignals:n,isLiveData:s,clusterResult:t}=he(),[c,l]=fe(),r=s&&n.length>0?{signals:n,clusters:(t==null?void 0:t.clusters)||[]}:null,[a,m]=k.useState(()=>{const y=te(e);return y?y.actions:B(e)}),[d,u]=k.useState(null),[h,p]=k.useState(null),[w,f]=k.useState(null),[o,x]=k.useState(null),[$,b]=k.useState(18);k.useEffect(()=>{const y=te(e);m(y?y.actions:B(e))},[e]),k.useEffect(()=>{ht(e,a)},[e,a]);const v=k.useCallback(y=>{const A=a.find(I=>I.id===y);if(!(!A||A.status==="running"))if(A.needsPicker)x(A);else{const I=A.icon==="sync"?{since:$}:null;m(P=>P.map(F=>F.id===y?{...F,status:"running"}:F)),u({...A,executor:X[A.icon]||null,selectedItem:I})}},[a]),R=k.useRef(!1);k.useEffect(()=>{if(R.current)return;const y=c.get("action");y&&(R.current=!0,l({},{replace:!0}),setTimeout(()=>v(parseInt(y,10)),100))},[c,l,v]);const M=k.useCallback(y=>{if(!o)return;const A=o;x(null),m(I=>I.map(P=>P.id===A.id?{...P,status:"running"}:P)),u({...A,executor:X[A.icon]||null,selectedItem:y})},[o]),j=k.useCallback((y,A)=>{if(!d)return;let I,P=null,F=null;A&&typeof A=="object"&&A.type==="jira-form"?(I=A.message,F=A.epicData):A&&typeof A=="object"&&A.message?(I=A.message,P=A.output||null):I=A||be[d.icon]||"Completed successfully";const ue=y?"done":"fail";m(G=>G.map(_=>_.id===d.id?{..._,status:ue,result:I,completedAt:new Date().toISOString()}:_)),y&&P&&m(G=>G.map(_=>_.id===d.id?{..._,lastOutput:P}:_)),u(null),y&&F?f(F):y&&P&&p(P)},[d]),C=k.useCallback(y=>{p(y)},[]),S=a.filter(y=>y.section==="action"),E=a.filter(y=>y.section==="builder"),O=a.filter(y=>y.section==="portfolio"),L=a.length,le=a.filter(y=>y.status==="ready").length,de=a.filter(y=>y.status==="done").length,me=a.filter(y=>y.status==="running").length;return i.jsxs("div",{className:"animate-page",children:[o&&i.jsx(Se,{productId:e,actionName:o.name,onSelect:M,onClose:()=>x(null)}),d&&i.jsx(ft,{action:d,onClose:j,executor:d.executor,productId:e,selectedItem:d.selectedItem,liveData:r}),h&&i.jsx(Ae,{title:h.title,content:h.content,filename:h.filename,mimeType:h.mimeType,outputType:h.outputType,emailSubject:h.emailSubject,onClose:()=>p(null)}),w&&i.jsx(Ce,{epicData:w,onClose:()=>f(null)}),i.jsxs("div",{className:"flex items-start justify-between mb-5 flex-wrap gap-4",children:[i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"AI Actions"}),i.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-medium rounded-full border border-purple-100",children:[i.jsx(we,{size:10})," AI-powered · Advisory only"]})]}),i.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Agents that take action and generators that create content — powered by your signal pipeline"})]}),i.jsxs("button",{onClick:()=>m(B(e)),className:"flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#007AC3] transition-colors mt-1",children:[i.jsx(ie,{size:11})," Reset all"]})]}),i.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 text-[11px] text-gray-500",children:[i.jsxs("span",{className:"font-medium text-gray-700",children:[L," actions"]}),i.jsx("span",{className:"w-px h-3.5 bg-gray-200"}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#71A01B]"}),le," ready"]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#007AC3]"}),de," completed"]}),i.jsxs("span",{className:"flex items-center gap-1",children:[i.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#E87722]"}),me," running"]})]}),i.jsxs("div",{className:"mb-6 bg-[#EDF5FA] border border-[#007AC3]/15 rounded-xl p-5",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#007AC3] flex items-center justify-center",children:i.jsx(ne,{size:14,className:"text-white"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"text-sm font-bold text-gray-900",children:["Agents ",i.jsxs("span",{className:"text-gray-400 font-normal",children:["(",S.length,")"]})]}),i.jsx("p",{className:"text-[10px] text-gray-400",children:"Take action in external systems — create, notify, sync"})]})]}),i.jsx("div",{className:"grid grid-cols-4 gap-3",children:S.map(y=>i.jsx(z,{action:y,onRun:v,onViewOutput:C,syncTimeline:$,onSyncTimelineChange:b},y.id))})]}),i.jsxs("div",{className:"mb-6 bg-[#F3ECF8] border border-[#7B1FA2]/15 rounded-xl p-5",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#7B1FA2] flex items-center justify-center",children:i.jsx(Ie,{size:14,className:"text-white"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"text-sm font-bold text-gray-900",children:["Builders ",i.jsxs("span",{className:"text-gray-400 font-normal",children:["(",E.length,")"]})]}),i.jsx("p",{className:"text-[10px] text-gray-400",children:"Generate documents, decks, and visuals from your pipeline"})]})]}),i.jsx("div",{className:"grid grid-cols-4 gap-3",children:E.map(y=>i.jsx(z,{action:y,onRun:v,onViewOutput:C},y.id))})]}),i.jsxs("div",{className:"bg-[#FEF5E7] border border-[#D97706]/15 rounded-xl p-5",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[i.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#D97706] flex items-center justify-center",children:i.jsx(ae,{size:14,className:"text-white"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"text-sm font-bold text-gray-900",children:["Portfolio Intelligence ",i.jsxs("span",{className:"text-gray-400 font-normal",children:["(",O.length,")"]})]}),i.jsx("p",{className:"text-[10px] text-gray-400",children:"Cross-initiative analysis — competitive, customer, and signal insights"})]})]}),i.jsx("div",{className:"grid grid-cols-4 gap-3",children:O.map(y=>i.jsx(z,{action:y,onRun:v,onViewOutput:C},y.id))})]})]})}export{Gt as default};
