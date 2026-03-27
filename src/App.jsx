import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SEO from './components/UI/SEO'
import './styles/App.css'
import './styles/accessibility.css'
import Layout from './components/Layout/Layout'
import CookieConsentBanner from './components/UI/CookieConsent'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import NewsPage from './pages/NewsPage'
import NewsDetail from './pages/NewsDetail'
import ReportsPage from './pages/ReportsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <SEO 
        title="Kenya Informal Settlements Redevelopment Programme | Official Government Website"
        description="Official government initiative for transforming informal settlements across Kenya through sustainable housing and community development."
        keywords="Kenya, government, housing, informal settlements, redevelopment, Kibera, Mathare, sustainable development"
        author="Ministry of Lands, Housing and Urban Development"
        canonicalUrl="https://www.kenya.go.ke/settlements"
      />
      
      <Router>
        <Layout>
          <main id="main-content" tabIndex="-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </Layout>
        <CookieConsentBanner />
      </Router>
    </>
  )
}

export default App