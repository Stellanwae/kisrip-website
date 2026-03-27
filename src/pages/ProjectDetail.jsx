import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsAPI } from '../services/api'

const ProjectDetail = () => {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const data = await projectsAPI.getBySlug(slug)
        if (!data) {
          setError('Project not found')
        } else {
          setProject(data)
        }
      } catch (err) {
        console.error('Error fetching project:', err)
        setError('Failed to load project. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  }, [slug])

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
      <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
        Loading project...
      </div>
    )
  }

  if (error || !project) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Project Not Found</h1>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          <p>The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{project.name}</h1>
          <p>{project.location}</p>
        </div>
      </div>
      
      <div className="container">
        <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className={`status-badge ${getStatusClass(project.status)}`} style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
              {getStatusText(project.status)}
            </span>
          </div>
          
          {project.image && (
            <img 
              src={project.image}
              alt={project.name}
              style={{ 
                width: '100%', 
                maxHeight: '400px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                marginBottom: '1.5rem' 
              }}
            />
          )}
          
          <h2>Project Overview</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>{project.description}</p>
          
          <h2>Key Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            {project.startDate && (
              <div>
                <strong>Start Date:</strong>
                <p>{project.startDate}</p>
              </div>
            )}
            {project.completionDate && (
              <div>
                <strong>Expected Completion:</strong>
                <p>{project.completionDate}</p>
              </div>
            )}
            {project.budget && (
              <div>
                <strong>Budget:</strong>
                <p>{project.budget}</p>
              </div>
            )}
            {project.beneficiaries && (
              <div>
                <strong>Beneficiaries:</strong>
                <p>{project.beneficiaries}</p>
              </div>
            )}
          </div>
          
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            ← Back to Projects
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail