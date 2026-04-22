import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { newsAPI } from '../services/api'
import { PortableText } from '@portabletext/react'

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{ marginBottom: '1rem', lineHeight: '1.8', color: '#444' }}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1E3A5F', margin: '2rem 0 0.75rem' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1E3A5F', margin: '1.5rem 0 0.5rem' }}>{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8', color: '#444' }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8', color: '#444' }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: '0.4rem' }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: '0.4rem' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: '700', color: '#111' }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
  },
}

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

  const isPortableText = Array.isArray(article.content)

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

          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#555', fontStyle: 'italic', borderLeft: '3px solid #1E3A5F', paddingLeft: '1rem' }}>
            {article.summary}
          </p>

          <div style={{ lineHeight: '1.8' }}>
            {isPortableText
              ? <PortableText value={article.content} components={portableTextComponents} />
              : <p style={{ lineHeight: '1.8', color: '#444' }}>{article.content}</p>
            }
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