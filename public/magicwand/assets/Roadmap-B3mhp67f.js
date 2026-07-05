import{c as we,a as je,u as Le,b as ze,d as Fe,e as Be,f as Ke,r as d,j as e,C as We,S as Ge,g as Je,Z as xe,X as qe,h as Ue}from"./index-DbwP4hyU.js";import{getRoadmap as _e}from"./roadmapData-BD7anLP-.js";import{g as Ne}from"./personas-CIkLoSO6.js";import{saveWithPicker as He}from"./fileSaver-Dw4J7DjS.js";import{g as F,I as Qe,E as Ve}from"./scoringData-CmsYGt-o.js";import{I as Ye,O as Xe,J as Ze,A as he}from"./JiraEpicFormModal-D8JiTiOs.js";import{N as et}from"./NorthStarBar-DMvFDHTy.js";import{S as U}from"./StatCard-C9q0Icos.js";import{F as tt}from"./file-text-BAZxRk0x.js";import{T as re}from"./target-C2MaSJ39.js";import{P as st}from"./plus-Bb-IJoZ5.js";import{D as at}from"./download-KL2xnZW1.js";import{C as fe}from"./clock-2sxKa_8y.js";import{C as ee}from"./calendar-days-y3nZ7-ZI.js";import{P as be,S as rt}from"./save-CAUax5om.js";import{T as nt}from"./trending-up-CvB-81bN.js";import{U as ot}from"./users-lZz5Guqs.js";import{E as it}from"./external-link-CJLm18MI.js";import{L as lt}from"./loader-circle-BAEBJW-e.js";import{C as ct}from"./chevron-right-vKDpjwXp.js";import{M as dt}from"./message-square-Cx4ZDtGz.js";import"./mermaid-Y_9yltak.js";import"./mail-DAu-O6pA.js";import"./circle-alert-Bzo8ctCq.js";import"./crosshair-CqySLgRf.js";import"./circle-question-mark-BLnPhAXW.js";/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],pt=we("grip-vertical",mt);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],ut=we("share-2",gt);function B(t){return Math.round(t.reach*(Qe[t.impact]||2)*(t.confidence/100)/(Ve[t.effort]||2))}function A(t){return new Promise(n=>setTimeout(n,t))}function K(t){try{const n=localStorage.getItem("magicwand-scoring");if(n){const r=JSON.parse(n)[t];return r?Array.isArray(r)?r:r.items||null:null}}catch{}return null}async function xt(t,n,i){n(0,"Analyzing scoring pipeline…"),await A(400);let r;if(i)r=(K(t)||F(t)).map(l=>({...l,score:B(l)})).find(l=>l.name===i.name)||{...i,score:0,impact:"Medium",confidence:i.confidence||50,effort:3,reach:i.signals||0,origin:i.origin||"Unknown"};else{const p=(K(t)||F(t)).map(x=>({...x,score:B(x)}));p.sort((x,l)=>l.score-x.score),r=p.find(x=>x.status==="approved")||p[0]}if(!r)throw new Error("No scoring items found");n(1,`Selected: ${r.name}`),await A(400),n(2,"Generating user stories & requirements…");let o=null;try{if(await je()){const p=ht(r,t),x=await fetch("/api/synthesize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p})});x.ok&&(o=(await x.json()).content||null)}}catch{}n(3,o?"AI content generated ✓":"Using template (AI backend unavailable)…"),await A(300),n(4,"Structuring document…");const u=o||ft(r,t);await A(300),n(5,"Output ready — opening preview…");const c=`PRD-${r.name.replace(/[^a-zA-Z0-9]/g,"-")}-${new Date().toISOString().slice(0,10)}.md`;return await A(200),{message:`PRD generated (${o?"AI-generated":"template-based"}) — ${r.name}`,output:{title:`PRD — ${r.name}`,content:u,filename:c,mimeType:"text/markdown"}}}function ht(t,n){const i=n==="productb"?"Product B":"Product A";return`You are a Senior Product Manager writing a Product Requirements Document (PRD) for ${i}.

Generate a complete PRD in Markdown format for: "${t.name}"
Context:
- Origin: ${t.origin}
- Reach: ${t.reach} (number of affected customers/signals)
- Impact: ${t.impact}
- Confidence: ${t.confidence}%
- Effort: ${t.effort}
- RICE Score: ${t.score}
- ARR at Risk: ${t.arrRisk||"N/A"}
- Assumptions: ${(t.assumptions||[]).join("; ")||"None documented"}

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

Write professionally. Be specific to ${i}'s legal e-billing domain.`}function ft(t,n){const i=n==="productb"?"Product B":"Product A",r=new Date().toISOString().slice(0,10);return`# Product Requirements Document
## ${t.name}

**Product:** ${i}  
**Author:** MagicWand AI (Auto-generated)  
**Date:** ${r}  
**Status:** Draft  
**RICE Score:** ${t.score} | **Origin:** ${t.origin}

---

## 1. Executive Summary

${t.name} addresses the "${t.origin}" pain point cluster identified through ${t.reach} customer signals at ${t.confidence}% confidence. This initiative protects ${t.arrRisk||"significant"} ARR and has been scored as ${t.impact} impact with ${t.effort} effort.

## 2. Problem Statement

Customers are experiencing significant friction related to ${t.origin}. With ${t.reach} signals collected across support tickets, QBR notes, and NPS surveys, this is a validated and growing pain point. Current workarounds are manual and time-intensive.

### Key Assumptions
${(t.assumptions||["No assumptions documented"]).map(o=>`- ${o}`).join(`
`)}

## 3. Goals & Success Metrics

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Signal reduction | ${t.reach} signals/quarter | < ${Math.round(t.reach*.3)} signals | 6 months post-launch |
| Feature adoption | 0% | > 60% of target users | 90 days |
| NPS improvement | Baseline | +5 points | 6 months |
| Support ticket reduction | Baseline | -40% related tickets | 90 days |

## 4. User Stories

1. As a **Legal Ops Leader**, I want to ${t.name.toLowerCase()}, so that I can reduce manual work and improve efficiency.
2. As a **General Counsel**, I want visibility into ${t.origin.toLowerCase()}, so that I can make data-driven decisions.
3. As a **Legal IT Admin**, I want a stable and reliable ${t.name.toLowerCase()} implementation, so that enterprise deployments run smoothly.
4. As a **Product Manager**, I want to track adoption of ${t.name.toLowerCase()}, so that I can measure ROI and iterate.
5. As a **Support Engineer**, I want fewer escalations related to ${t.origin.toLowerCase()}, so that I can focus on higher-priority issues.

## 5. Requirements

### Must Have (P0)
- Core functionality addressing ${t.origin}
- Integration with existing ${i} data model
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

- **Architecture:** Extends existing ${i} ${n==="productb"?"SaaS/cloud":"on-premise/hosted"} platform
- **Data:** Leverages existing entity framework (P_* tables)
- **Integrations:** ${i} API, Analytics Suite, Jira
- **Risks:** ${(t.assumptions||[]).slice(0,2).join("; ")||"Assumptions need validation"}

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
4. How does this align with the broader ${i} modernization roadmap?

---
*Generated by MagicWand AI — ${r}*
`}async function bt(t,n,i){n(0,"Analyzing scoring pipeline…"),await A(400);let r;if(i)r=(K(t)||F(t)).map(h=>({...h,score:B(h)})).find(h=>h.name===i.name)||{...i,score:0,impact:"Medium",confidence:i.confidence||50,effort:3,reach:i.signals||0,origin:i.origin||"Unknown"};else{const l=(K(t)||F(t)).map(b=>({...b,score:B(b)}));l.sort((b,h)=>h.score-b.score),r=l.find(b=>b.status==="approved")||l[0]}if(!r)throw new Error("No scoring items found");n(1,`Selected: ${r.name}`),await A(400),n(2,"Building epic specification…"),await A(300);const o=t==="productb"?"Product B":"Product A",u=r.score>=2500?"Highest":r.score>=1500?"High":r.score>=800?"Medium":"Low",c=r.score>=1500?"1 — Deliver best-in-class customer & user experiences":"2 — Create systems enabling clients to efficiently manage their legal spend",m=Ne(r.origin),v=`h2. Benefit Hypothesis

*Why are we doing this?*
${r.name} addresses a validated pain point cluster ("${r.origin}") identified through ${r.reach} customer signals at ${r.confidence}% confidence across ${o}.

*Which customer problem are we solving?*
Customers are experiencing friction related to ${r.origin}. This has been validated through support tickets, QBR notes, and NPS surveys.

*Expected measurable impact:*
 * Signal volume for "${r.origin}" reduced by ${r.reach>20?"50%":"30%"} within 2 PIs of launch
 * Customer satisfaction improvement measured via NPS follow-up

*North Star alignment:*
 * ${c}

----
h2. Description

This Epic addresses the "${r.origin}" pain point cluster in ${o}. With ${r.reach} signals collected, this is a validated and growing area of customer friction.

 * *Scope:* ${o} — ${r.origin}
 * *Timeline:* ${r.effort<=3?"Single PI":"Multi-PI"} initiative
 * *Signal source:* Support tickets, QBR notes, NPS surveys

----
h2. Customer Impact

||Metric||Value||
|Reach|${r.reach} signals|
|Confidence|${r.confidence}%|
|ARR at Risk|${r.arrRisk||"TBD"}|

----
h2. RICE Score

||Metric||Value||
|Reach|${r.reach}|
|Impact|${r.impact}|
|Confidence|${r.confidence}%|
|Effort|${r.effort}|
|*Total*|*${r.score}*|

----
h2. Impacted Users & Personas

||Persona||Impact||
${m.map(x=>`|${x}|Directly impacted by ${r.origin} improvements across this Epic|`).join(`
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
{color:#999999}Generated via MagicWand AI · signal-sourced{color}`,p=[t,r.origin.toLowerCase().replace(/[^a-z0-9]+/g,"-")].join(", ");return n(3,"Preparing JIRA form…"),await A(300),n(4,"Pre-filling fields from scoring data…"),await A(200),n(5,"Ready — opening form…"),await A(200),{type:"jira-form",message:`Epic form ready — ${r.name}`,epicData:{summary:r.name,epicName:r.name,priority:u,labels:p,description:v}}}async function yt(t,n){var b,h,S;n(0,"Loading scoring data…"),await A(400);const r=(K(t)||F(t)).map(w=>({...w,score:B(w)}));r.sort((w,j)=>j.score-w.score);const o=r.slice(0,5),u=r.filter(w=>w.status==="approved"),c=r.reduce((w,j)=>w+(j.reach||0),0);n(1,`Analyzing ${r.length} initiatives…`),await A(300),n(2,"Composing email content…");const m=t==="productb"?"Product B":"Product A",v=new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});let p="",x=!1;try{if(await je()){const j=`You are a Senior Product Manager. Write a concise stakeholder email update about ${m} product priorities.

Context:
- ${r.length} initiatives scored using RICE framework
- ${u.length} approved for roadmap
- ${c} total customer signals analyzed
- Top 5 priorities: ${o.map(($,k)=>`${k+1}. ${$.name} (RICE: ${$.score})`).join(", ")}

Write a professional email in markdown format with:
1. Subject line (as # heading)
2. Greeting
3. Key findings (top 5 items as bullet points with RICE scores)
4. Signal summary (total signals, trends)
5. Recommended next steps (3-4 bullets)
6. Professional sign-off

Keep it concise — 300 words max. Use markdown formatting.`,f=await fetch("/api/synthesize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:j})});if(f.ok){const $=await f.json();$.content&&(p=$.content,x=!0)}}}catch{}return p||(p=`# ${m} Product Priorities Update — ${v}

Hi Team,

Here's the latest product priorities update based on our signal analysis and RICE scoring.

## Key Findings

We've analyzed **${c} customer signals** across ${r.length} initiatives:

| # | Initiative | RICE Score | Status |
|---|-----------|-----------|--------|
${o.map((w,j)=>`| ${j+1} | ${w.name} | ${w.score} | ${w.status} |`).join(`
`)}

## Signal Summary

- **${c}** total customer signals analyzed (support tickets, QBR notes, NPS surveys)
- **${u.length}** initiatives approved for roadmap
- **${r.filter(w=>w.status==="deferred").length||0}** items deferred to next quarter
- Top pain point cluster: **${((b=o[0])==null?void 0:b.origin)||"N/A"}** (${((h=o[0])==null?void 0:h.reach)||0} signals)

## Recommended Next Steps

- Finalize sprint planning for Q3 with approved items
- Schedule deep-dive with engineering on "${((S=o[0])==null?void 0:S.name)||"top priority"}" implementation
- Set up pilot customer cohort for validation testing
- Review deferred items in next monthly prioritization

## Action Required

Please review the approved roadmap items and flag any concerns by end of week. Product sync scheduled for Friday.

Best regards,
${m} Product Team

---
*Generated by MagicWand AI — ${v}*`),n(3,x?"AI content generated ✓":"Using template (AI unavailable)…"),await A(300),n(4,"Formatting email…"),await A(200),n(5,"Output ready — opening preview…"),await A(200),{message:`Email digest generated (${x?"AI-generated":"template-based"}) — ${o.length} key findings`,output:{title:`Stakeholder Email — ${m} Priorities`,content:p,filename:`stakeholder-email-${t}-${new Date().toISOString().slice(0,10)}.md`,mimeType:"text/markdown",outputType:"email",emailSubject:`${m} Product Priorities Update — ${v}`}}}const se="magicwand-roadmap-lanes";function vt(t){try{const n=localStorage.getItem(se);if(n)return JSON.parse(n)[t]||{}}catch{}return{}}function ye(t,n){try{const i=localStorage.getItem(se),r=i?JSON.parse(i):{};r[t]=n,localStorage.setItem(se,JSON.stringify(r))}catch{}}const ae="magicwand-roadmap-custom";function wt(t){try{const n=localStorage.getItem(ae);if(n)return JSON.parse(n)[t]||[]}catch{}return[]}function ve(t,n){try{const i=localStorage.getItem(ae),r=i?JSON.parse(i):{};r[t]=n,localStorage.setItem(ae,JSON.stringify(r))}catch{}}function L(t){return t>=75?"#007AC3":t>=50?"#E87722":"#E5202E"}function jt({status:t}){const n={"in-progress":"bg-[#007AC3]/10 text-[#007AC3] border-[#007AC3]/15",planned:"bg-[#E87722]/10 text-[#E87722] border-[#E87722]/15",shipped:"bg-emerald-50 text-emerald-700 border-emerald-200"},i={"in-progress":"In Progress",planned:"Planned",shipped:"Shipped"};return e.jsx("span",{className:`inline-flex px-2 py-0.5 text-[9px] font-bold uppercase rounded border ${n[t]||n.planned}`,children:i[t]||t})}function Nt({item:t,onEdit:n,onDragStart:i,onDragEnd:r,highlighted:o}){return e.jsxs("div",{draggable:!0,onDragStart:u=>{u.dataTransfer.setData("text/plain",String(t.id)),i==null||i(t.id)},onDragEnd:r,className:`bg-white border rounded-lg p-3.5 mb-2.5 hover:shadow-md hover:border-gray-300 transition-all cursor-grab active:cursor-grabbing group ${o?"border-[#007AC3] ring-2 ring-[#007AC3]/30 shadow-md":"border-gray-200"}`,children:[e.jsxs("div",{className:"flex items-start gap-1.5 mb-1.5",children:[e.jsx(pt,{size:12,className:"text-gray-300 mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"}),e.jsx("button",{onClick:()=>n==null?void 0:n(t),className:"text-xs font-semibold text-gray-900 leading-snug text-left hover:text-[#007AC3] transition-colors",children:t.name})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 mb-2",children:[e.jsx(jt,{status:t.status}),e.jsx("span",{className:"text-[9px] text-gray-400 truncate",children:t.origin})]}),t.progress>0&&t.progress<100&&e.jsxs("div",{className:"mb-2",children:[e.jsx("div",{className:"h-1.5 bg-gray-100 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${t.progress}%`,background:"#007AC3"}})}),e.jsxs("span",{className:"text-[9px] text-gray-400 mt-0.5 inline-block",children:[t.progress,"% complete"]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-[10px] mb-2",children:[e.jsxs("span",{className:"text-gray-500",children:[e.jsx(re,{size:9,className:"inline mr-0.5 -mt-px"}),t.signals," signals"]}),e.jsx("span",{className:"text-gray-300",children:"•"}),e.jsxs("span",{style:{color:L(t.confidence)},className:"font-semibold",children:[t.confidence,"%"]}),e.jsx("span",{className:"text-gray-300",children:"•"}),e.jsxs("span",{className:"text-gray-500",children:[t.arrImpact," ARR"]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-gray-100",children:[e.jsx("span",{className:"text-[10px] text-gray-400",children:t.owner}),e.jsx("span",{className:"text-[10px] text-gray-400",children:t.target})]})]})}function Ct({item:t}){return e.jsxs("div",{className:"bg-white/70 border border-gray-100 rounded-lg p-2.5 opacity-70",children:[e.jsx("div",{className:"text-[11px] font-semibold text-gray-700",children:t.name}),e.jsxs("div",{className:"flex items-center gap-2 text-[9px] text-gray-400 mt-1",children:[e.jsxs("span",{children:["✓ ",t.target]}),e.jsx("span",{children:"•"}),e.jsx("span",{children:t.arrImpact})]})]})}function te({title:t,lane:n,items:i,color:r,icon:o,onEdit:u,onDrop:c,draggingId:m,onDragStart:v,onDragEnd:p,highlightedOrigin:x}){const[l,b]=d.useState(!1);return e.jsxs("div",{className:`flex flex-col transition-all ${l&&m?"ring-2 ring-[#007AC3]/40 rounded-lg":""}`,onDragOver:h=>{h.preventDefault(),b(!0)},onDragLeave:()=>b(!1),onDrop:h=>{h.preventDefault(),b(!1);const S=parseInt(h.dataTransfer.getData("text/plain"),10);isNaN(S)||c==null||c(S,n)},children:[e.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-t-lg mb-2 ${r}`,children:[e.jsx(o,{size:14}),e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:t}),e.jsx("span",{className:"ml-auto inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold bg-white/30 rounded-full",children:i.length})]}),e.jsx("div",{className:`flex-1 space-y-0 max-h-[520px] overflow-y-auto min-h-[80px] rounded-b-lg transition-colors ${l&&m?"bg-[#007AC3]/5":""}`,children:i.length===0?e.jsx("div",{className:"text-[11px] text-gray-400 text-center py-6",children:l&&m?"Drop here":"No items"}):i.map(h=>e.jsx(Nt,{item:h,onEdit:u,onDragStart:v,onDragEnd:p,highlighted:x&&h.origin===x},h.id))})]})}const At=[{value:"now",label:"Now"},{value:"next",label:"Next"},{value:"later",label:"Later"}];function St({item:t,matchingSignals:n,onNavigateSignals:i}){const[r,o]=d.useState(!1),u=n.slice(0,3);return e.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[e.jsxs("button",{onClick:()=>o(!r),className:"w-full flex items-center gap-1.5 text-left",children:[e.jsx(ct,{size:12,className:`text-gray-400 transition-transform ${r?"rotate-90":""}`}),e.jsx("span",{className:"text-[10px] font-semibold text-gray-500 uppercase tracking-wider",children:"Evidence"}),e.jsxs("span",{className:"ml-auto text-[10px] text-gray-400",children:[t.signals," signals"]})]}),e.jsxs("div",{className:"flex items-center gap-3 mt-2 text-[11px]",children:[e.jsx("span",{className:"text-gray-500",children:"Confidence"}),e.jsx("div",{className:"flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full",style:{width:`${t.confidence}%`,background:L(t.confidence)}})}),e.jsxs("span",{className:"font-semibold",style:{color:L(t.confidence)},children:[t.confidence,"%"]})]}),e.jsxs("div",{className:"flex items-center justify-between text-[11px] mt-1.5",children:[e.jsx("span",{className:"text-gray-500",children:"Origin"}),e.jsx("span",{className:"font-semibold text-gray-700 truncate ml-2",children:t.origin})]}),r&&e.jsxs("div",{className:"mt-3 pt-2.5 border-t border-gray-200 space-y-1.5",children:[u.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-[9px] font-semibold text-gray-400 uppercase",children:"Top matching signals"}),u.map(c=>e.jsxs("div",{className:"flex items-start gap-1.5 text-[10px]",children:[e.jsx(dt,{size:10,className:"text-gray-400 mt-0.5 flex-shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-gray-700 truncate",children:c.title}),e.jsxs("div",{className:"text-gray-400 truncate",children:[c.customer||c.source," · ",c.date]})]})]},c.id)),n.length>3&&e.jsxs("div",{className:"text-[9px] text-gray-400",children:["+",n.length-3," more"]})]}):e.jsx("div",{className:"text-[10px] text-gray-400 italic",children:"No synced signals match this item yet"}),e.jsxs("button",{onClick:i,className:"w-full flex items-center justify-center gap-1 mt-1 px-2 py-1.5 text-[10px] font-medium text-[#007AC3] bg-[#007AC3]/5 rounded-lg hover:bg-[#007AC3]/10 transition-colors",children:[e.jsx(re,{size:10})," View all signals"]})]})]})}function kt({item:t,isNew:n,onClose:i,onSave:r,onNavigateScoring:o,matchingSignals:u,onNavigateSignals:c}){const[m,v]=d.useState({name:t.name,owner:t.owner,target:t.target,lane:t.lane,arrImpact:t.arrImpact,progress:t.progress}),p=(l,b)=>v(h=>({...h,[l]:b})),x=t.id>=1e3;return e.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",onClick:i,children:[e.jsx("div",{className:"absolute inset-0 bg-black/20"}),e.jsxs("div",{className:"relative w-[400px] h-full bg-white shadow-2xl border-l border-gray-200 overflow-y-auto animate-slideIn",onClick:l=>l.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-4 border-b border-gray-100",children:[e.jsx("span",{className:"text-sm font-bold text-gray-900",children:n?"Add Roadmap Item":"Edit Roadmap Item"}),e.jsx("button",{onClick:i,className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100",children:e.jsx(qe,{size:16})})]}),e.jsxs("div",{className:"px-5 py-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",children:"Name"}),e.jsx("input",{value:m.name,onChange:l=>p("name",l.target.value),className:"w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-[#007AC3]"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",children:"Lane"}),e.jsx("div",{className:"flex gap-2",children:At.map(l=>e.jsx("button",{onClick:()=>p("lane",l.value),className:`flex-1 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${m.lane===l.value?"bg-[#007AC3] text-white border-[#007AC3]":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`,children:l.label},l.value))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",children:"Owner"}),e.jsx("input",{value:m.owner,onChange:l=>p("owner",l.target.value),className:"w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-[#007AC3]"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",children:"Target"}),e.jsx("input",{value:m.target,onChange:l=>p("target",l.target.value),className:"w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-[#007AC3]"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",children:"ARR Impact"}),e.jsx("input",{value:m.arrImpact,onChange:l=>p("arrImpact",l.target.value),className:"w-full px-3 py-2 text-xs border border-gray-200 rounded-lg outline-none focus:border-[#007AC3]"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1",children:["Progress — ",m.progress,"%"]}),e.jsx("input",{type:"range",min:"0",max:"100",value:m.progress,onChange:l=>p("progress",parseInt(l.target.value,10)),className:"w-full accent-[#007AC3]"})]}),!n&&e.jsx(St,{item:t,matchingSignals:u||[],onNavigateSignals:c}),x&&e.jsxs("button",{onClick:o,className:"w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#007AC3] bg-[#007AC3]/5 border border-[#007AC3]/20 rounded-lg hover:bg-[#007AC3]/10 transition-colors",children:[e.jsx(it,{size:12})," View in Scoring"]})]}),e.jsx("div",{className:"sticky bottom-0 px-5 py-4 bg-white border-t border-gray-100",children:e.jsxs("button",{onClick:()=>{m.name.trim()&&(r(t.id,m,n),i())},className:"w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#007AC3] rounded-lg hover:bg-[#005F99] transition-colors",children:[e.jsx(rt,{size:13})," ",n?"Add Item":"Save Changes"]})})]})]})}function $t({items:t}){const n={};t.forEach(o=>{n[o.target]||(n[o.target]=[]),n[o.target].push(o.name)});const i=Object.keys(n).sort(),r=3;return e.jsx("div",{className:"space-y-0",children:i.map((o,u)=>{const c=n[o],m=c.slice(0,r),v=c.length-r;return e.jsxs("div",{className:"flex gap-3 pb-3",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${u===0?"bg-[#007AC3]":"bg-gray-300"}`}),u<i.length-1&&e.jsx("div",{className:"w-px flex-1 bg-gray-200 mt-1"})]}),e.jsxs("div",{className:"flex-1 pb-1",children:[e.jsx("div",{className:"text-[11px] font-bold text-gray-900",children:o}),m.map(p=>e.jsx("div",{className:"text-[10px] text-gray-500 mt-0.5 truncate",children:p},p)),v>0&&e.jsxs("div",{className:"text-[9px] text-gray-400 mt-0.5",children:["+",v," more"]})]})]},o)})})}const Pt="magicwand-scoring";function It(t){try{const n=localStorage.getItem(Pt);if(n){const r=JSON.parse(n)[t],o=Array.isArray(r)?r:r==null?void 0:r.items;if(Array.isArray(o)&&o.length>0)return o}}catch{}return null}function Rt(t){const n=[{kw:["Report","legacy BI","Analytics","Analytics Migration","Dashboard","History"],owner:"Analytics Team"},{kw:["Auth","Workflow","Stability","Desktop Companion","Tech Debt","Platform"],owner:"Platform Team"},{kw:["Invoice","Managed Invoice Service","Billing","Tax"],owner:"Managed Invoice Service Team"},{kw:["AI","Predictive","Matter AI","Agentic"],owner:"AI Team"},{kw:["Collaborat","LC","Portal","CP "],owner:"LC Team"},{kw:["Rate","Smart Select","Vendor"],owner:"Product Team"},{kw:["Accrual","Budget","Alloc"],owner:"Finance Module Team"},{kw:["Integration","API","Connector","iManage"],owner:"Integrations Team"}];return[...t.filter(o=>o.status!=="rejected")].sort((o,u)=>{const c=(o.reach||0)*(o.confidence||0);return(u.reach||0)*(u.confidence||0)-c}).map((o,u)=>{let c;o.status==="approved"?c="now":o.status==="scoring"?c="next":c="later";const m=c==="now"?10+(o.id||u)*7%35:0,v=c==="now"?"Q3 2026":c==="next"?"Q4 2026":"H1 2027",p=Ne(o.origin);let x="Product Team";const l=`${o.name||""} ${o.origin||""}`;for(const{kw:b,owner:h}of n)if(b.some(S=>l.includes(S))){x=h;break}return{id:1e3+u,name:o.name,status:c==="now"?"in-progress":"planned",progress:m,lane:c,origin:o.origin||o.name,signals:o.reach||o.signals||0,confidence:o.confidence||50,arrImpact:o.arrRisk||"$0",owner:x,target:v,personas:p}})}function Tt({label:t,stepsKey:n,executor:i,productId:r,selectedItem:o,onDone:u}){const c=he[n]||he.prd,[m,v]=d.useState(0),[p,x]=d.useState(c),[l,b]=d.useState(null),h=d.useRef(!1);d.useEffect(()=>{if(h.current)return;h.current=!0,i(r,(j,f)=>{v(j+1),f&&x($=>{const k=[...$];return k[j]=f,k})},o).then(j=>{v(c.length),setTimeout(()=>u(!0,j),600)}).catch(j=>{b(j.message||"Agent failed"),setTimeout(()=>u(!1,j.message),1500)})},[]);const S=Math.round(m/c.length*100);return e.jsx("div",{className:"fixed inset-0 bg-black/50 z-[9000] flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-2xl p-7 w-[480px] max-w-[90vw] shadow-2xl border-2 border-[#007AC3] animate-pulse-border",children:[e.jsx("div",{className:"text-base font-bold text-gray-900 mb-1",children:t}),e.jsx("div",{className:"text-xs text-gray-500 mb-5",children:"Running agent…"}),e.jsxs("div",{className:"text-right text-xs text-gray-400 mb-2",children:[S,"%"]}),e.jsx("div",{className:"h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4",children:e.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#007AC3] to-[#85BC20] transition-all duration-400",style:{width:`${S}%`}})}),e.jsx("ul",{className:"space-y-1 mb-4",children:p.map((w,j)=>{const f=j<m?"done":j===m?"active":"pending";return e.jsxs("li",{className:`flex items-center gap-2.5 py-1 text-[13px] transition-colors ${f==="done"?"text-[#85BC20]":f==="active"?"text-gray-900 font-semibold":"text-gray-400"}`,children:[e.jsx("span",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] shrink-0 transition-all ${f==="done"?"border-[#85BC20] bg-[#85BC20] text-white":f==="active"?"border-[#007AC3] bg-[#007AC3]/10 text-[#007AC3]":"border-gray-300"}`,children:f==="done"?"✓":f==="active"?e.jsx(lt,{size:10,className:"animate-spin"}):""}),w]},j)})}),l&&e.jsxs("div",{className:"text-xs text-[#E5202E] mt-2 flex items-center gap-1",children:[e.jsx(Ue,{size:12})," ",l]})]})})}function ns(){const{selectedProduct:t}=Le(),{addToast:n}=ze(),i=Fe(),[r]=Be(),{classifiedSignals:o}=Ke(),u=_e(t),c=It(t),[m,v]=d.useState(()=>r.get("origin")||"");d.useEffect(()=>{if(!m)return;const s=setTimeout(()=>v(""),4e3);return()=>clearTimeout(s)},[m]);const{baseItems:p,dataSource:x}=d.useMemo(()=>{if(c){const s=Rt(c);if(s.length>0){const a=u.filter(g=>g.lane==="shipped");return{baseItems:[...s,...a],dataSource:"scoring"}}}return{baseItems:u,dataSource:"mock"}},[u,c]),[l,b]=d.useState(()=>wt(t)),[h,S]=d.useState(()=>vt(t)),[w,j]=d.useState({}),f=d.useMemo(()=>[...p.map(a=>{const g=h[a.id],y=w[a.id];if(!g&&!y)return a;const N={...a};return g&&(N.lane=g,N.status=g==="now"?"in-progress":g==="shipped"?"shipped":"planned"),y&&Object.assign(N,y),N}),...l],[p,h,w,l]),[$,k]=d.useState(null),_=d.useCallback((s,a)=>{k(null);const g=f.find(y=>y.id===s);!g||g.lane===a||(S(y=>{const N={...y,[s]:a};return ye(t,N),N}),n(`Moved "${g.name}" to ${a.charAt(0).toUpperCase()+a.slice(1)}`,"success"))},[f,t,n]),[W,T]=d.useState(null),[Ce,G]=d.useState(!1),Ae=d.useCallback(s=>{if(!(o!=null&&o.length)||!s)return[];const a=`${s.name} ${s.origin}`.toLowerCase().split(/\s+/).filter(g=>g.length>3);return o.filter(g=>{if(g.signalType==="noise"||g.signalType==="internal")return!1;const y=`${g.title||""} ${g.feature||""} ${g.painPoint||""}`.toLowerCase();return a.some(N=>y.includes(N))}).slice(0,20)},[o]),Se=d.useCallback((s,a,g)=>{if(g){const y={id:9e3+Date.now()%1e5,name:a.name,status:a.lane==="now"?"in-progress":"planned",progress:a.progress,lane:a.lane,origin:"Manual",signals:0,confidence:0,arrImpact:a.arrImpact||"$0",owner:a.owner||"Product Team",target:a.target||"TBD",personas:[]};b(N=>{const C=[...N,y];return ve(t,C),C}),n(`Added "${a.name}" to ${a.lane}`,"success");return}a.lane&&S(y=>{const N={...y,[s]:a.lane};return ye(t,N),N}),s>=9e3?b(y=>{const N=y.map(C=>C.id===s?{...C,name:a.name,owner:a.owner,target:a.target,arrImpact:a.arrImpact,progress:a.progress,lane:a.lane,status:a.lane==="now"?"in-progress":"planned"}:C);return ve(t,N),N}):j(y=>({...y,[s]:{name:a.name,owner:a.owner,target:a.target,arrImpact:a.arrImpact,progress:a.progress}})),n("Item updated","success")},[t,n]),ke=d.useCallback(()=>{T({id:0,name:"",owner:"",target:"",lane:"next",arrImpact:"",progress:0,signals:0,confidence:0,origin:"Manual",personas:[]}),G(!0)},[]),[J,ne]=d.useState(""),[I,H]=d.useState("All"),[z,oe]=d.useState("All Teams"),ie=d.useMemo(()=>{const s=new Set;return f.forEach(a=>a.personas.forEach(g=>s.add(g))),["All",...Array.from(s).sort()]},[f]),$e=d.useMemo(()=>{const s=new Set(f.map(a=>a.owner));return["All Teams",...Array.from(s).sort()]},[f]),R=d.useMemo(()=>f.filter(s=>{const a=J.toLowerCase();return!(a&&!s.name.toLowerCase().includes(a)&&!s.origin.toLowerCase().includes(a)&&!s.owner.toLowerCase().includes(a)||I!=="All"&&!s.personas.includes(I)||z!=="All Teams"&&s.owner!==z)}),[f,J,I,z]),P=d.useMemo(()=>({now:R.filter(s=>s.lane==="now"),next:R.filter(s=>s.lane==="next"),later:R.filter(s=>s.lane==="later"),shipped:R.filter(s=>s.lane==="shipped")}),[R]),E=R.filter(s=>s.lane!=="shipped"),Pe=E.reduce((s,a)=>s+a.signals,0),M=E.length?Math.round(E.reduce((s,a)=>s+a.confidence,0)/E.length):0;function Ie(s){const a=(s||"").match(/([\d.]+)/);return a?(s||"").includes("M")?parseFloat(a[1])*1e3:parseFloat(a[1]):0}function le(s){return s>=1e3?`$${(s/1e3).toFixed(1)}M`:`$${Math.round(s)}K`}const{totalARR:Re,laneARR:ce,maxLaneARR:de}=d.useMemo(()=>{let s=0;const a={now:0,next:0,later:0};E.forEach(y=>{const N=Ie(y.arrImpact);s+=N,a[y.lane]!==void 0&&(a[y.lane]+=N)});const g=Math.max(a.now,a.next,a.later,1);return{totalARR:le(s),laneARR:a,maxLaneARR:g}},[E]),Te=d.useCallback(()=>{ne(""),H("All"),oe("All Teams")},[]),me=J||I!=="All"||z!=="All Teams",[q,Q]=d.useState(null),[O,V]=d.useState(null),[D,pe]=d.useState(null),[ge,ue]=d.useState(null),Y={prd:{label:"Generate PRD",stepsKey:"prd",executor:xt,needsPicker:!0},jira:{label:"Create Jira Epics",stepsKey:"jira",executor:bt,needsPicker:!0},email:{label:"Share with Stakeholders",stepsKey:"email",executor:yt,needsPicker:!1}},X=d.useCallback(s=>{const a=Y[s];a.needsPicker?Q(s):V({label:a.label,stepsKey:a.stepsKey,executor:a.executor,selectedItem:null})},[]),Ee=d.useCallback(s=>{const a=Y[q];Q(null),V({label:a.label,stepsKey:a.stepsKey,executor:a.executor,selectedItem:s})},[q]),Me=d.useCallback((s,a)=>{if(V(null),!s){n(typeof a=="string"?a:"Action failed","error");return}(a==null?void 0:a.type)==="jira-form"?ue(a.epicData):a!=null&&a.output?pe(a.output):n((a==null?void 0:a.message)||"Done","success")},[n]),Z=d.useMemo(()=>{const s={};return f.forEach(a=>{a.lane!=="shipped"&&a.personas.forEach(g=>{s[g]=(s[g]||0)+1})}),s.All=f.filter(a=>a.lane!=="shipped").length,s},[f]),De=d.useCallback(async()=>{const s=["Name","Lane","Status","Progress","Origin","Signals","Confidence","ARR Impact","Owner","Target","Personas"],a=R.map(C=>[C.name,C.lane,C.status,C.progress+"%",C.origin,C.signals,C.confidence+"%",C.arrImpact,C.owner,C.target,(C.personas||[]).join("; ")]),g=[s,...a].map(C=>C.map(Oe=>`"${Oe}"`).join(",")).join(`
`),y=new Blob([g],{type:"text/csv"});await He(y,`roadmap-${t}.csv`,"CSV spreadsheet",{"text/csv":[".csv"]})&&n("Roadmap exported","success")},[R,t,n]);return e.jsxs("div",{className:"animate-page",children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"Roadmap View"}),e.jsx("p",{className:"text-sm text-gray-500 mt-0.5",children:"Now / Next / Later roadmap with evidence scoring"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>X("prd"),title:"Generate PRD",className:"flex items-center justify-center w-9 h-9 text-[#007AC3] bg-[#007AC3]/10 border border-[#007AC3]/20 rounded-lg hover:bg-[#007AC3]/20 transition-colors",children:e.jsx(tt,{size:15})}),e.jsx("button",{onClick:()=>X("jira"),title:"Create Jira Epics",className:"flex items-center justify-center w-9 h-9 text-[#007AC3] bg-[#007AC3]/10 border border-[#007AC3]/20 rounded-lg hover:bg-[#007AC3]/20 transition-colors",children:e.jsx(re,{size:15})}),e.jsx("button",{onClick:()=>X("email"),title:"Share with Stakeholders",className:"flex items-center justify-center w-9 h-9 text-[#007AC3] bg-[#007AC3]/10 border border-[#007AC3]/20 rounded-lg hover:bg-[#007AC3]/20 transition-colors",children:e.jsx(ut,{size:15})}),e.jsx("div",{className:"w-px bg-gray-200"}),e.jsxs("button",{onClick:ke,className:"flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#007AC3] rounded-lg hover:bg-[#005F99] transition-colors",children:[e.jsx(st,{size:14})," Add Item"]}),e.jsxs("button",{onClick:De,className:"flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",children:[e.jsx(at,{size:14})," Export Roadmap"]})]})]}),x==="scoring"&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 mb-3 text-[11px] bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700",children:[e.jsx(We,{size:12})," Roadmap populated from approved Scoring items. Shipped items shown from baseline."]}),e.jsxs("div",{className:"relative mb-3",children:[e.jsx(Ge,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"}),e.jsx("input",{type:"text",value:J,onChange:s=>ne(s.target.value),placeholder:"Search by name, origin, or owner...",className:"w-full pl-9 pr-4 py-2 text-xs bg-white border border-gray-200 rounded-lg outline-none focus:border-[#007AC3] transition-colors"})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[ie.map(s=>e.jsxs("button",{onClick:()=>H(s),className:`flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-semibold rounded-lg border transition-colors ${I===s?"bg-[#007AC3] text-white border-[#007AC3]":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`,children:[s,Z[s]!=null&&e.jsx("span",{className:`ml-0.5 text-[9px] ${I===s?"text-white/70":"text-gray-400"}`,children:Z[s]})]},s)),e.jsxs("div",{className:"relative ml-auto",children:[e.jsx("select",{value:z,onChange:s=>oe(s.target.value),className:"pl-3 pr-7 py-1.5 text-[10px] font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg outline-none appearance-none cursor-pointer",children:$e.map(s=>e.jsx("option",{value:s,children:s},s))}),e.jsx(Je,{size:10,className:"absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"})]}),me&&e.jsx("button",{onClick:Te,className:"text-[10px] text-[#007AC3] hover:underline",children:"Clear filters"})]}),me&&e.jsxs("div",{className:"text-[11px] text-gray-400 mb-3",children:["Showing ",R.length," of ",f.length," items"]}),e.jsxs("div",{className:"grid grid-cols-4 gap-3 mb-4",children:[e.jsx(U,{label:"Now",value:P.now.length,icon:xe,color:"bg-[#007AC3]",tooltip:"Items actively being built this quarter. Highest priority."}),e.jsx(U,{label:"Next",value:P.next.length,icon:fe,color:"bg-[#007AC3]",tooltip:"Items planned for the next quarter, pending capacity."}),e.jsx(U,{label:"Later",value:P.later.length,icon:ee,color:"bg-gray-500",tooltip:"Items on the backlog — validated but not yet scheduled."}),e.jsx(U,{label:"Shipped",value:P.shipped.length,icon:be,color:"bg-emerald-600",tooltip:"Items released to production. Tracked for outcome measurement."})]}),e.jsxs("div",{className:"grid grid-cols-[1fr_300px] gap-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-4",children:[e.jsx(te,{title:"Now",lane:"now",items:P.now,color:"bg-[#007AC3] text-white",icon:xe,onEdit:T,onDrop:_,draggingId:$,onDragStart:k,onDragEnd:()=>k(null),highlightedOrigin:m}),e.jsx(te,{title:"Next",lane:"next",items:P.next,color:"bg-[#007AC3]/80 text-white",icon:fe,onEdit:T,onDrop:_,draggingId:$,onDragStart:k,onDragEnd:()=>k(null),highlightedOrigin:m}),e.jsx(te,{title:"Later",lane:"later",items:P.later,color:"bg-gray-400 text-white",icon:ee,onEdit:T,onDrop:_,draggingId:$,onDragStart:k,onDragEnd:()=>k(null),highlightedOrigin:m})]}),P.shipped.length>0&&e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(be,{size:12,className:"text-emerald-600"}),e.jsx("span",{className:"text-[11px] font-bold text-gray-500 uppercase tracking-wider",children:"Shipped"}),e.jsxs("span",{className:"text-[10px] text-gray-400",children:[P.shipped.length," items"]})]}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:P.shipped.map(s=>e.jsx(Ct,{item:s},s.id))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-900 mb-3",children:[e.jsx(nt,{size:14})," Evidence Summary"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-3",children:[e.jsxs("button",{onClick:()=>i("/signals"),className:"text-left group/sig",children:[e.jsx("div",{className:"text-2xl font-bold text-gray-900 group-hover/sig:text-[#007AC3] transition-colors",children:Pe}),e.jsx("div",{className:"text-[10px] text-gray-400 group-hover/sig:text-[#007AC3] transition-colors",children:"Total Signals →"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-baseline gap-1.5",children:[e.jsxs("span",{className:"text-2xl font-bold",style:{color:L(M)},children:[M,"%"]}),e.jsx("span",{className:"text-[9px] font-semibold",style:{color:L(M)},children:M>=75?"High":M>=50?"Moderate":"Low"})]}),e.jsx("div",{className:"text-[10px] text-gray-400 mb-1",children:"Avg Confidence"}),e.jsx("div",{className:"h-1.5 bg-gray-100 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${M}%`,background:L(M)}})})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-2.5 space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between text-[10px]",children:[e.jsx("span",{className:"text-gray-500",children:"Active items protect"}),e.jsxs("span",{className:"font-bold text-gray-900",children:[Re," ARR"]})]}),[{key:"now",label:"Now",color:"#007AC3"},{key:"next",label:"Next",color:"#007AC3CC"},{key:"later",label:"Later",color:"#9CA3AF"}].map(({key:s,label:a,color:g})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[9px] font-semibold text-gray-500 w-8",children:a}),e.jsx("div",{className:"flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all",style:{width:`${de?ce[s]/de*100:0}%`,background:g}})}),e.jsx("span",{className:"text-[9px] font-semibold text-gray-600 w-12 text-right",children:le(ce[s])})]},s))]})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-900 mb-3",children:[e.jsx(ot,{size:14})," Stakeholder View"]}),e.jsx("div",{className:"space-y-1.5",children:ie.filter(s=>s!=="All").map(s=>e.jsxs("button",{onClick:()=>H(I===s?"All":s),className:`w-full flex items-center justify-between px-2.5 py-2 text-[11px] rounded-lg transition-colors ${I===s?"bg-[#007AC3]/10 text-[#007AC3] font-semibold":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,children:[e.jsx("span",{className:"truncate",children:s}),e.jsx("span",{className:`text-[10px] font-bold ${I===s?"text-[#007AC3]":"text-gray-400"}`,children:Z[s]||0})]},s))})]}),e.jsxs("div",{className:"bg-white border border-gray-200 rounded-xl p-4",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-900 mb-3",children:[e.jsx(ee,{size:14})," Release Timeline"]}),e.jsx($t,{items:E})]})]})]}),W&&e.jsx(kt,{item:W,isNew:Ce,onClose:()=>{T(null),G(!1)},onSave:Se,onNavigateScoring:()=>{T(null),G(!1),i("/scoring")},matchingSignals:Ae(W),onNavigateSignals:()=>{T(null),G(!1),i("/signals")}},W.id),q&&e.jsx(Ye,{productId:t,actionName:Y[q].label,onSelect:Ee,onClose:()=>Q(null)}),O&&e.jsx(Tt,{label:O.label,stepsKey:O.stepsKey,executor:O.executor,productId:t,selectedItem:O.selectedItem,onDone:Me},O.stepsKey+Date.now()),D&&e.jsx(Xe,{title:D.title,content:D.content,filename:D.filename,mimeType:D.mimeType,outputType:D.outputType,emailSubject:D.emailSubject,onClose:()=>pe(null)}),ge&&e.jsx(Ze,{epicData:ge,onClose:()=>ue(null)}),e.jsx(et,{})]})}export{ns as default};
