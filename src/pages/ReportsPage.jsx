import React, { useState, useEffect } from 'react'
import { reportsAPI } from '../services/api'

const ReportsPage = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true)
        const data = await reportsAPI.getAll()
        setReports(data)
      } catch (err) {
        console.error('Error fetching reports:', err)
        setError('Failed to load reports. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [])

  if (loading) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Reports & Publications</h1>
            <p>Access our latest research, reports, and publications</p>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: '4rem' }}>
          Loading reports...
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <h1>Reports & Publications</h1>
            <p>Access our latest research, reports, and publications</p>
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

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Reports & Publications</h1>
          <p>Access our latest research, reports, and publications</p>
        </div>
      </div>
      
      <div className="container">
        {reports.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <p>No reports available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="reports-list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {reports.map(report => (
              <div key={report.id} className="report-item">
                <h3>{report.title}</h3>
                {report.date && (
                  <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    📅 {new Date(report.date).toLocaleDateString('en-KE')}
                  </p>
                )}
                <p>{report.description}</p>
                {report.pages && (
                  <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                    📄 {report.pages} pages
                  </p>
                )}
                {report.pdfUrl ? (
                  <a 
                    href={report.pdfUrl} 
                    className="btn btn-primary" 
                    style={{ marginTop: '1rem', display: 'inline-block' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📥 Download PDF
                  </a>
                ) : (
                  <button 
                    className="btn btn-primary" 
                    style={{ marginTop: '1rem', display: 'inline-block', opacity: 0.5, cursor: 'not-allowed' }}
                    disabled
                  >
                    📥 Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ReportsPage