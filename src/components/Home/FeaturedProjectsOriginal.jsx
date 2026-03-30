import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProjects = ({ projects = [] }) => {
  const getStatusClass = (status) => {
    switch(status) {
      case 'ongoing': return 'status-ongoing'
      case 'in-progress': return 'status-in-progress'
      case 'completed': return 'status-completed'
      default: return ''
    }
  }

  const getStatusText = (status) => {
    switch(status) {
      case 'ongoing': return 'Ongoing'
      case 'in-progress': return 'In Progress'
      case 'completed': return 'Completed'
      default: return status
    }
  }

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="container" style={{ marginBottom: '3rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
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
              <p style={{ marginTop: '1rem', color: '#666' }}>{project.description}</p>
              <Link to={`/projects/${project.slug}`} style={{ display: 'inline-block', marginTop: '1rem' }}>
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects