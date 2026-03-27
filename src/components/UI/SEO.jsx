import { useEffect } from 'react'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  author,
  ogImage,
  ogType = 'website',
  canonicalUrl 
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Official government initiative for transforming informal settlements across Kenya through sustainable housing and community development.')
    } else if (description) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = description
      document.head.appendChild(metaDescription)
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'Kenya, government, housing, informal settlements, redevelopment, Kibera, Mathare, sustainable development')
    } else if (keywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      metaKeywords.content = keywords
      document.head.appendChild(metaKeywords)
    }
    
    // Update meta author
    let metaAuthor = document.querySelector('meta[name="author"]')
    if (metaAuthor) {
      metaAuthor.setAttribute('content', author || 'Ministry of Lands, Housing and Urban Development')
    } else if (author) {
      metaAuthor = document.createElement('meta')
      metaAuthor.name = 'author'
      metaAuthor.content = author
      document.head.appendChild(metaAuthor)
    }
    
    // Update Open Graph meta tags
    const updateOrCreateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else if (content) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.content = content
        document.head.appendChild(meta)
      }
    }
    
    updateOrCreateMeta('og:title', title || 'Kenya Informal Settlements Redevelopment Programme')
    updateOrCreateMeta('og:description', description || 'Official government initiative for sustainable urban development in Kenya.')
    updateOrCreateMeta('og:type', ogType)
    updateOrCreateMeta('og:image', ogImage || 'https://www.kenya.go.ke/images/og-image.jpg')
    updateOrCreateMeta('og:locale', 'en_KE')
    
    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl)
      } else {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        canonical.href = canonicalUrl
        document.head.appendChild(canonical)
      }
    }
    
    // Add government verification meta tag
    let govMeta = document.querySelector('meta[name="government-website"]')
    if (!govMeta) {
      govMeta = document.createElement('meta')
      govMeta.name = 'government-website'
      govMeta.content = 'true'
      document.head.appendChild(govMeta)
    }
    
    // Add security headers meta tags
    const addSecurityMeta = (httpEquiv, content) => {
      let meta = document.querySelector(`meta[http-equiv="${httpEquiv}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('http-equiv', httpEquiv)
        meta.content = content
        document.head.appendChild(meta)
      }
    }
    
    addSecurityMeta('X-Content-Type-Options', 'nosniff')
    addSecurityMeta('X-Frame-Options', 'DENY')
    addSecurityMeta('X-XSS-Protection', '1; mode=block')
    
  }, [title, description, keywords, author, ogImage, ogType, canonicalUrl])
  
  return null
}

export default SEO
