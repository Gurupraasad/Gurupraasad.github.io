# Portfolio Site: Content Refinement & Deployment Plan

**Last Updated:** July 4, 2026 — 11:45 AM (Phase 1 Complete)  
**Project Status:** Phase 2 - Visual Polish (Ready to Start)  
**Target Launch:** After Phase 5 (Publish-Safe Review)

---

## Master Plan Overview

This document tracks all work from content refinement through GitHub Pages deployment to publication. Updated after each completed step.

```
Phase 1: Content & Messaging Fixes ────────── (CURRENT)
├─ 1a. Critical Blockers (Email, Demos, Metrics)
├─ 1b. Messaging Rewrite (Hero, Lede, CTA)
└─ 1c. About Page Expansion & Credibility
    │
Phase 2: Visual Polish & UX ────────────────── (QUEUED)
├─ 2a. Visual Hierarchy Refinements
├─ 2b. Case Card Differentiation
├─ 2c. Navigation Enhancements (Breadcrumbs, Tags, Related Cases)
└─ 2d. Design Token & CSS Cleanup
    │
Phase 3: Final Content Validation ────────── (QUEUED)
├─ 3a. Copy Review & Tone Audit
├─ 3b. Link/CTA Testing
└─ 3c. Mobile & Responsive Final Check
    │
Phase 4: GitHub Pages Deployment Setup ───── (QUEUED)
├─ 4a. Git Init & Repository Setup
├─ 4b. Vite Config & Base URL
├─ 4c. GitHub Actions Workflow
└─ 4d. Deploy Script & npm Integration
    │
Phase 5: Publish-Safe Review Gate ────────── (QUEUED)
├─ 5a. Self-Review Against Template
├─ 5b. Sensitive Data Audit
├─ 5c. Anonymization & Reference Check
└─ 5d. Final Sign-Off
    │
Phase 6: Go-Live ───────────────────────── (QUEUED)
├─ 6a. Push to GitHub (main branch)
├─ 6b. GitHub Pages Activation
├─ 6c. Domain/URL Configuration (if applicable)
└─ 6d. LinkedIn & Social Announcement
```

---

## PHASE 1: CONTENT & MESSAGING FIXES

**Status:** ✅ COMPLETE  
**Completion Time:** 45 minutes  
**All Tasks Completed:** July 4, 2026 @ 11:45 AM

### 1a. Critical Blockers (30 min)

**Task 1.a.1: Fix Contact Page Email**
- **File:** `src/pages/Contact.tsx`
- **Status:** ✅ COMPLETE - Updated to guru7789@gmail.com with subject line

**Task 1.a.2: Demos Page Decision**
- **File:** `src/layout/RootLayout.tsx` (nav) + `src/pages/Demos.tsx`
- **Decision:** ✅ KEEP — User will build 1–2 working interactive demos before launch
- **Status:** ⏳ DEFERRED to Phase 2B (Demo implementation queued)

**Task 1.a.3: Metrics Retrofit to Cases**
- **File:** `src/data/cases.ts`
- **Status:** ✅ COMPLETE
  - PM Intelligence Platform: Prioritization cycles 2 PIs → 15 days; alignment 60% → 90%+
  - PM Workflow Automation: Spec review 4–8 hrs → 2 hrs; Epic creation 3–4 days → 1 day; Adoption 95%
  - Migration Intelligence: Stakeholder clarity 0% → 80–90%; Planning 8 wks → 4 wks
  - Secure AI Prototyping: Prototype turnaround weeks → 1 day; Zero compliance incidents

---

### 1b. Messaging Rewrite (60 min)

**Task 1.b.1: Hero Headline Rewrite**
- **File:** `src/pages/Home.tsx`
- **Previous:** `"I build product operating systems that turn signal into shipped outcomes."`
- **Updated:** `"Better decisions. Faster shipping. Clearer accountability."`
- **Variant Selected:** Option A (Business impact-first)
- **Status:** ✅ COMPLETE

**Task 1.b.2: Lede/Subtitle Refinement**
- **File:** `src/pages/Home.tsx`
- **Previous:** `"Product leader focused on AI-enabled workflows, decision quality, and cross-functional execution at enterprise scale."`
- **Updated:** `"I help enterprise product teams scale through operating systems design, governance as a feature, and decision frameworks that work."`
- **Status:** ✅ COMPLETE

**Task 1.b.3: Contact Page CTA Clarity**
- **File:** `src/pages/Contact.tsx`
- **Actions Completed:**
  - ✅ Updated "Best For" → "I'm Open To" with conversation topics and engagement types
  - ✅ Added email CTA with real email (guru7789@gmail.com)
  - ✅ Improved button text: "Email Me"
  - ⏳ Calendly/scheduling link deferred to Phase 2 (enhancement)
- **Status:** ✅ COMPLETE

---

### 1c. About Page Expansion (60 min)

**Task 1.c.1: About Page Rewrite (Full Narrative)**
- **File:** `src/pages/About.tsx`
- **Previous Length:** ~200 words, 3 sections (What I Focus On, How I Work, Portfolio Boundary)
- **New Length:** ~1,200 words, 8 sections
- **New Structure:**
  1. ✅ Career Arc (3 paragraphs): Where you started, inflection point, why operating systems focus
  2. ✅ Conviction Statement (1 paragraph): PM philosophy in plain language
  3. ✅ What You're Known For (5 bullets with explanations): Core competencies + proof
  4. ✅ How I Lead (4 bullets): Team leadership, cross-functional influence approach
  5. ✅ Why These Cases Matter Together (1 paragraph): Through-line connecting all 4 cases
  6. ✅ Operating Principles (5 bullets): Personal philosophy in action
  7. ✅ Public Portfolio Boundary (existing): Keep as-is (good disclosure)
  8. ⏳ CTA (optional): "If you're building or scaling a product organization..." (can add later)
- **Status:** ✅ COMPLETE - Ready for edits in Phase 2

---

## PHASE 2: VISUAL POLISH & UX (Queued)

**Status:** � READY TO START (Next Priority)  
**Target Start:** Immediately after Phase 1 sign-off  
**Estimated Effort:** 1–2 hours  
**New Work Item Added:** LinkedIn Social Proof Audit (User provided LinkedIn URL for review)

### 2a. Visual Hierarchy Refinements
- Add accent-color styling to h2 section headers (case detail pages)
- Light background tint to Outcomes section (case detail)
- Increased margin between Home page sections
- Standardize link vs. button styles (`.link-button` for secondary, `.button` for primary)

### 2b. Case Card Differentiation
- Differentiate impact tiles (Home): Add light accent background OR move to different layout
- Ensure case cards feel visually distinct and important

### 2c. Navigation Enhancements
- Add breadcrumb to CaseDetail: `Home > Case Studies > [Case Title]`
- Add "Related Cases" section to case detail pages (same-theme linking)
- Add case tags/filter UI (optional but valuable for portfolio growth)

### 2d. Design Token & CSS Cleanup
- Review all tokens for consistency
- Add icon/emoji pseudo-elements to section headers (optional Polish)

### 2e. LinkedIn Social Proof Audit (New Task)
- **User LinkedIn URL:** https://www.linkedin.com/in/gurupraasad/
- **Action:** Review for extractable content:
  - Certificates, credentials, or badges
  - Published articles, essays, or thought leadership
  - Speaking engagements or conference talks
  - Testimonials from colleagues/managers
  - Endorsed skills or public recommendations
- **Deliverable:** Content audit report with recommendations for adding social proof to portfolio

---

## PHASE 3: FINAL CONTENT VALIDATION (Queued)

**Status:** 🔲 QUEUED  
**Target Start:** After Phase 2 completion  
**Estimated Effort:** 45 minutes

### 3a. Copy Review & Tone Audit
- Final proofread of all pages
- Verify tone shift to "outcomes-first" messaging
- Ensure no jargon without context

### 3b. Link & CTA Testing
- Test all mailto: links
- Test all navigation links (internal routing)
- Verify Calendly/scheduling link works (if added)
- Test Contact page button

### 3c. Mobile & Responsive Final Check
- Test all pages at 780px, 480px breakpoints
- Verify button/CTA clickability on mobile
- Test form inputs (if any added)

---

## PHASE 4: GITHUB PAGES DEPLOYMENT SETUP (Queued)

**Status:** 🔲 QUEUED  
**Target Start:** After Phase 3 approval  
**Estimated Effort:** 1 hour

### 4a. Git Init & Repository Setup
- [ ] Initialize git in c:\guru\portfolio-site
- [ ] Create GitHub repository (username/portfolio-site)
- [ ] Add .gitignore (node_modules/, dist/)
- [ ] Initial commit with all source code

### 4b. Vite Config & Base URL
- [ ] Update vite.config.ts: `base: "/portfolio-site/"`
- [ ] Rebuild and test locally

### 4c. GitHub Actions Workflow
- [ ] Create .github/workflows/deploy.yml
- [ ] Trigger: push to main branch
- [ ] Steps: Install deps → Build → Deploy to gh-pages branch

### 4d. Deploy Script & npm Integration
- [ ] Add deploy script to package.json: `"deploy": "npm run build && ..."`
- [ ] Document deploy procedure in README

---

## PHASE 5: PUBLISH-SAFE REVIEW GATE (Queued)

**Status:** 🔲 QUEUED  
**Target Start:** After Phase 4 setup  
**Estimated Effort:** 30 minutes

### 5a. Self-Review Against Template
- [ ] Reference: `c:\guru\portfolio-kit\04-publish-safe-review-template.md`
- [ ] Fill out review template for all 7 pages

### 5b. Sensitive Data Audit
- [ ] Scan for Wolters Kluwer references
- [ ] Scan for internal project names / Jira keys
- [ ] Scan for real client names (should be anonymized)
- [ ] Scan for personal contact info (phone, real email until Contact form)

### 5c. Anonymization & Reference Check
- [ ] Verify all case study references are properly anonymized
- [ ] Verify no dates/timelines leak company identity
- [ ] Verify no internal tools/systems mentioned by real names

### 5d. Final Sign-Off
- [ ] Mark review as APPROVED
- [ ] Document any lingering concerns
- [ ] Ready to push to public repository

---

## PHASE 6: GO-LIVE (Queued)

**Status:** 🔲 QUEUED  
**Target Date:** After Phase 5 sign-off  
**Effort:** 15 minutes

### 6a. Push to GitHub (main branch)
- [ ] `git push origin main`
- [ ] Verify GitHub Actions workflow triggers

### 6b. GitHub Pages Activation
- [ ] Verify deployment to gh-pages branch
- [ ] Test live URL: https://[username].github.io/portfolio-site/

### 6c. Domain/URL Configuration (if applicable)
- [ ] Optional: Add custom domain
- [ ] Update Contact page if needed

### 6d. LinkedIn & Social Announcement
- [ ] Update LinkedIn profile with portfolio link
- [ ] Draft announcement post
- [ ] Share with network

---

## DECISION POINTS & BLOCKERS

| Decision | Status | Owner | Decision |
|----------|--------|-------|---------|
| Real email address for Contact page | ✅ COMPLETE | You | guru7789@gmail.com |
| Demos page: Keep or Delete? | ✅ COMPLETE | You | KEEP — Will build 1–2 working interactive demos |
| Case study metrics | ✅ COMPLETE | You | All 4 cases updated with metrics |
| Hero headline approval (which variant?) | ✅ COMPLETE | You | Option A: "Better decisions. Faster shipping. Clearer accountability." |
| About page narrative approval | ✅ COMPLETE (v1) | You | v1 approved, ready for edits in Phase 2 |
| Calendly/scheduling link (add or skip?) | ⏳ PENDING | You | Recommend: ADD in Phase 2 (nice-to-have)|
| LinkedIn social proof audit | ⏳ PENDING | Agent | Will audit URL for certificates, articles, testimonials |

---

## TIMELINE ESTIMATE

| Phase | Duration | Est. Completion |
|-------|----------|---|
| Phase 1 (Content & Messaging) | 2–3 hours | Today (July 4) |
| Phase 2 (Visual Polish) | 1–2 hours | July 4–5 |
| Phase 3 (Final Validation) | 45 min | July 5 |
| **CHECKPOINT: Content Ready for Deployment** | — | **July 5 EOD** |
| Phase 4 (GitHub Pages Setup) | 1 hour | July 5–6 |
| Phase 5 (Publish-Safe Review) | 30 min | July 6 |
| Phase 6 (Go-Live) | 15 min | July 6 |
| **FINAL: Public Portfolio Live** | — | **July 6 EOD** |

---

## SUCCESS CRITERIA

✅ All content blockers resolved (email, demos, metrics)  
✅ Hero messaging rewritten and approved  
✅ About page expanded with narrative arc  
✅ Visual hierarchy improved (headers, spacing, colors)  
✅ All internal links tested  
✅ Publish-safe review completed and signed-off  
✅ GitHub repository initialized and deployed  
✅ Live portfolio URL accessible and functional  
✅ LinkedIn profile updated with portfolio link  

---

## NOTES & ASSUMPTIONS

- Email address is user-provided (waiting on input)
- Demos page decision deferred to user (keep/delete)
- All 4 case study metrics will be added (awaiting user approval on specific numbers)
- About page rewrite will be provided as draft for user review before implementation
- GitHub Pages deployment assumes public repository
- Publish-safe review uses existing portfolio-kit template

---

## Version History

| Date | Update | Status |
|------|--------|--------|
| July 4, 2026 11:45 AM | Phase 1 COMPLETE: Hero, About, Contact, Metrics all implemented & built ✓ | COMPLETE |
| July 4, 2026 11:30 AM | Phase 1 drafts created (3 hero variants, About expansion, Contact copy) | APPROVED |
| July 4, 2026 11:00 AM | Plan file created with comprehensive 6-phase roadmap | DRAFT |
| (in progress) | Phase 2: Visual polish & UX improvements | — |
| (pending) | Phase 3: Final content validation | — |
| (pending) | Phase 4: GitHub Pages deployment setup | — |
| (pending) | Phase 5: Publish-safe review gate | — |
| (pending) | Phase 6: Go-live to public | — |

