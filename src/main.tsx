import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import { RootLayout } from './layout/RootLayout'
import { AboutPage } from './pages/About'
import { CaseDetailPage } from './pages/CaseDetail'
import { CaseStudiesPage } from './pages/CaseStudies'
import { ContactPage } from './pages/Contact'
import { DemosPage } from './pages/Demos'
import { PrioritizationDemo } from './pages/demos/PrioritizationDemo'
import { HomePage } from './pages/Home'
import { ProductThinkingPage } from './pages/ProductThinking'
import { WritingPage } from './pages/Writing'
import { ArticleDetailPage } from './pages/ArticleDetail'
import './styles/site.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<CaseStudiesPage />} />
          <Route path="/cases/:slug" element={<CaseDetailPage />} />
          <Route path="/demos" element={<DemosPage />} />
          <Route path="/demos/prioritization" element={<PrioritizationDemo />} />
          <Route path="/thinking" element={<ProductThinkingPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/writing/:slug" element={<ArticleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
