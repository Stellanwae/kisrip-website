import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { newsAPI } from '../services/api'

const NewsPage = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true)
        const data = await newsAPI.getAll()
        setNews(data)
      } catch (err) {
        console.error('Error fetching news:', err)
        setError('Failed to load news. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  if (loading) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>News & Updates</h1>
            <p>Stay informed about our latest developments</p>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          <div>Loading news articles...</div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>News & Updates</h1>
            <p>Stay informed about our latest developments</p>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={() => window.location.reload()} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </>
    )
  }

  if (news.length === 0) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>News & Updates</h1>
            <p>Stay informed about our latest developments</p>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          <p>No news articles yet. Check back soon!</p>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Stay informed about our latest developments</p>
        </div>
      </div>
      
      <div className="container">
        <div className="news-grid">
          {news.map(item => (
            <div key={item.id} className="card">
              <div className="card-content">
                {item.image && (
                  <img 
                    src={item.image}
                    alt={item.title}
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px', 
                      marginBottom: '1rem' 
                    }}
                  />
                )}
                <h3>{item.title}</h3>
                <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  📅 {new Date(item.date).toLocaleDateString('en-KE')}
                </p>
                <p>{item.summary}</p>
                <Link to={`/news/${item.slug}`} style={{ display: 'inline-block', marginTop: '1rem' }}>
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NewsPage