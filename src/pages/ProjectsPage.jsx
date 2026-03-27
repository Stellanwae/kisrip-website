import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projectsAPI } from '../services/api'

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    fetchProjects()
  }, [activeFilter])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      let data
      if (activeFilter === 'all') {
        data = await projectsAPI.getAll()
      } else {
        data = await projectsAPI.getByStatus(activeFilter)
      }
      setProjects(data)
    } catch (err) {
      console.error('Error fetching projects:', err)
    } finally {
      setLoading(false)
    }
  }

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

  if (loading) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Our Projects</h1>
            <p>Transforming informal settlements across Kenya</p>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          Loading projects...
        </div>
      </>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Transforming informal settlements across Kenya</p>
        </div>
      </div>
      
      <div className="container">
        {/* Filter Buttons */}
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveFilter('all')}
            className={`btn ${activeFilter === 'all' ? 'btn-primary' : ''}`}
            style={{ background: activeFilter === 'all' ? '#ff8c42' : '#666' }}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveFilter('ongoing')}
            className={`btn ${activeFilter === 'ongoing' ? 'btn-primary' : ''}`}
            style={{ background: activeFilter === 'ongoing' ? '#ff8c42' : '#666' }}
          >
            Ongoing
          </button>
          <button 
            onClick={() => setActiveFilter('in-progress')}
            className={`btn ${activeFilter === 'in-progress' ? 'btn-primary' : ''}`}
            style={{ background: activeFilter === 'in-progress' ? '#ff8c42' : '#666' }}
          >
            In Progress
          </button>
          <button 
            onClick={() => setActiveFilter('completed')}
            className={`btn ${activeFilter === 'completed' ? 'btn-primary' : ''}`}
            style={{ background: activeFilter === 'completed' ? '#ff8c42' : '#666' }}
          >
            Completed
          </button>
        </div>

        {projects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <p>No projects found for this category.</p>
          </div>
        ) : (
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
                  <p className="card-location">📍 {project.location}</p>
                  <span className={`status-badge ${getStatusClass(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                  <p style={{ marginTop: '1rem', color: '#666' }}>{project.description}</p>
                  {project.startDate && (
                    <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#888' }}>
                      <p>Start: {project.startDate}</p>
                      {project.completionDate && <p>Expected Completion: {project.completionDate}</p>}
                    </div>
                  )}
                  <Link to={`/projects/${project.slug}`} style={{ display: 'inline-block', marginTop: '1rem' }}>
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectsPage