import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { newsAPI } from '../services/api'

const NewsDetail = () => {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true)
        const data = await newsAPI.getBySlug(slug)
        // console.log("Item slug:", item.slug) 
        if (!data) {
          setError('Article not found')
        } else {
          setArticle(data)
        }
      } catch (err) {
        console.error('Error fetching article:', err)
        setError('Failed to load article. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchArticle()
  }, [slug])

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        Loading article...
      </div>
    )
  }

  if (error || !article) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Article Not Found</h1>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          <p>The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/news" className="btn btn-primary">Back to News</Link>
        </div>
      </>
    )
  }

  // Format content for display (Sanity returns portable text)
  const renderContent = () => {
  if (!article.content) return null
  
  return article.content.map((block, index) => {
    if (block._type === 'block') {
      const text = block.children?.map(child => child.text).join('')
      return (
        <p key={index} style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          {text}
        </p>
      )
    }
    return null
  })
}

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{article.title}</h1>
          <p>{new Date(article.date).toLocaleDateString('en-KE')}</p>
        </div>
      </div>
      
      <div className="container">
        <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
          {article.image && (
            <img 
              src={article.image}
              alt={article.title}
              style={{ 
                width: '100%', 
                maxHeight: '400px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                marginBottom: '1.5rem' 
              }}
            />
          )}
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#555' }}>
            {article.summary}
          </p>
          
          <div style={{ lineHeight: '1.8' }}>
            {renderContent()}
          </div>
          
          <Link to="/news" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            ← Back to News
          </Link>
        </div>
      </div>
    </>
  )
}

export default NewsDetail