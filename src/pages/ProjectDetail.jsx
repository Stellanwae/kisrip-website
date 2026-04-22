import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsAPI } from '../services/api'
import { PortableText } from '@portabletext/react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet's default marker icon broken by Webpack
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

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

  const isPortableText = Array.isArray(project.description)
  const hasCoordinates = project.coordinates?.lat && project.coordinates?.lng

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

          {/* Status Badge */}
          <div style={{ marginBottom: '2rem' }}>
            <span
              className={`status-badge ${getStatusClass(project.status)}`}
              style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
            >
              {getStatusText(project.status)}
            </span>
          </div>

          {/* Project Image */}
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'contain',
                borderRadius: '8px',
                marginBottom: '1.5rem'
              }}
            />
          )}

          {/* Project Description */}
          <h2>Project Overview</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            {isPortableText
              ? <PortableText value={project.description} components={portableTextComponents} />
              : <p style={{ lineHeight: '1.8', color: '#444' }}>{project.description}</p>
            }
          </div>

          {/* Key Information */}
          <h2>Key Information</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '1rem',
            marginBottom: '2rem'
          }}>
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

          {/* Project Map */}
          {hasCoordinates && (
            <div style={{ marginBottom: '2rem' }}>
              <h2>Project Location</h2>
              <p style={{ color: '#555', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Use the map below to locate this project on the ground.
              </p>
              <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                <MapContainer
                  center={[project.coordinates.lat, project.coordinates.lng]}
                  zoom={15}
                  style={{ height: '400px', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[project.coordinates.lat, project.coordinates.lng]}>
                    <Popup>
                      <div style={{ minWidth: '160px' }}>
                        <strong style={{ color: '#1E3A5F', fontSize: '0.95rem' }}>
                          {project.name}
                        </strong>
                        <br />
                        <span style={{ fontSize: '0.82rem', color: '#555' }}>
                          {project.location}
                        </span>
                        <br /><br />
                        <span
                          className={`status-badge ${getStatusClass(project.status)}`}
                          style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                        >
                          {getStatusText(project.status)}
                        </span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          )}

          <Link
            to="/projects"
            className="btn btn-primary"
            style={{ marginTop: '1rem', display: 'inline-block' }}
          >
            ← Back to Projects
          </Link>

        </div>
      </div>
    </>
  )
}

export default ProjectDetail