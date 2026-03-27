import React from 'react'
import { Link } from 'react-router-dom'

const LatestNews = ({ news = [] }) => {
  if (news.length === 0) {
    return null
  }

  return (
    <section className="container" style={{ marginBottom: '3rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Latest News & Updates</h2>
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
                {item.date ? new Date(item.date).toLocaleDateString('en-KE') : ''}
              </p>
              <p>{item.summary}</p>
              <Link to={`/news/${item.slug}`} style={{ display: 'inline-block', marginTop: '1rem' }}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestNews