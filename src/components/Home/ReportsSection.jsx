import React from 'react'

const ReportsSection = ({ reports = [] }) => {
  if (reports.length === 0) {
    return null
  }

  return (
    <section className="container">
      <div className="reports-section">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Reports & Publications</h2>
        <div className="reports-list">
          {reports.map(report => (
            <div key={report.id} className="report-item">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              {report.pdfUrl ? (
                <a 
                  href={report.pdfUrl} 
                  className="btn btn-primary" 
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              ) : (
                <button 
                  className="btn btn-primary" 
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1rem', opacity: 0.5, cursor: 'not-allowed' }}
                  disabled
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReportsSection