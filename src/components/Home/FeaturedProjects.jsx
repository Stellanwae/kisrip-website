import React from 'react'
import { Link } from 'react-router-dom'

const getPlainTextPreview = (description, maxLength = 150) => {
  if (!description) return ''
  if (typeof description === 'string') {
    return description.length <= maxLength ? description : description.slice(0, maxLength).trimEnd() + '...'
  }
  if (Array.isArray(description)) {
    const fullText = description
      .filter(block => block._type === 'block' && block.children)
      .map(block => block.children.map(child => child.text).join(''))
      .join(' ')
    return fullText.length <= maxLength ? fullText : fullText.slice(0, maxLength).trimEnd() + '...'
  }
  return ''
}

const FeaturedProjects = ({ projects = [] }) => {

  const getStatusClass = (status) => {
    switch (status) {
      case 'ongoing': return 'status-ongoing'
      case 'in-progress': return 'status-in-progress'
      case 'completed': return 'status-completed'
      default: return ''
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'ongoing': return 'Ongoing'
      case 'in-progress': return 'In Progress'
      case 'completed': return 'Completed'
      default: return status
    }
  }

  const displayedProjects = projects.slice(0, 2)

  if (displayedProjects.length === 0) {
    return null
  }

  return (
    <section className="container" style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ margin: 0 }}>Featured Projects</h2>
        <Link to="/projects" style={{ fontSize: '0.9rem', color: '#1E3A5F', fontWeight: '600' }}>
          View All Projects →
        </Link>
      </div>

      <div className="projects-grid">
        {displayedProjects.map(project => (
          <div key={project.id} className="card">
            <div className="card-content">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
              )}
              <h3>{project.name}</h3>
              <p className="card-location">🗺️ {project.location}</p>
              <span className={`status-badge ${getStatusClass(project.status)}`}>
                {getStatusText(project.status)}
              </span>
              <p style={{ marginTop: '1rem', color: '#666' }}>
                {getPlainTextPreview(project.description, 150)}
              </p>
              <Link
                to={`/projects/${project.slug}`}
                style={{ display: 'inline-block', marginTop: '1rem' }}
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects