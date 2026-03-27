import React, { useState, useEffect } from 'react'
import HeroCarousel from '../components/Home/HeroCarousel'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import LatestNews from '../components/Home/LatestNews'
import ReportsSection from '../components/Home/ReportsSection'
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
        <div style={{ height: '80vh', background: '#1a472a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'white' }}>Loading...</p>
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
      <FeaturedProjects projects={featuredProjects} />
      <LatestNews news={featuredNews} />
      <ReportsSection reports={featuredReports} />
    </>
  )
}

export default HomePage