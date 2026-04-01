import React, { useState, useEffect } from 'react'
import HeroCarousel from '../components/Home/HeroCarousel'
import ProgrammeStats from '../components/Home/ProgrammeStats'
import AboutSnapshot from '../components/Home/AboutSnapshot'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import HowItWorks from '../components/Home/HowItWorks'
import LatestNews from '../components/Home/LatestNews'
import ReportsSection from '../components/Home/ReportsSection'
import PartnersBar from '../components/Home/PartnersBar'
import { homepageAPI } from '../services/api'

const HomePage = () => {
  const [featuredNews, setFeaturedNews] = useState([])
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [featuredReports, setFeaturedReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedContent = async () => {
      try {
        setLoading(true)
        const data = await homepageAPI.getFeaturedContent()
        setFeaturedNews(data.featuredNews)
        setFeaturedProjects(data.featuredProjects)
        console.log('Featured projects:', data.featuredProjects)
        console.log('Raw featured projects:', data.featuredProjects)
        console.log('Is array?', Array.isArray(data.featuredProjects))
        console.log('Count:', data.featuredProjects?.length)
        setFeaturedReports(data.featuredReports)
      } catch (error) {
        console.error('Error fetching featured content:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFeaturedContent()
  }, [])

  if (loading) {
    return (
      <>
        <div style={{ height: '80vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'black' }}>Loading...</p>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          <p>Loading content...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <HeroCarousel />
      <ProgrammeStats />
      <AboutSnapshot />
      <FeaturedProjects projects={featuredProjects} />
      <HowItWorks />
      <LatestNews news={featuredNews} />
      <ReportsSection reports={featuredReports} />
      <PartnersBar />
    </>
  )
}

export default HomePage
