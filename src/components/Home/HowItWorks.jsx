import React from 'react'

const steps = [
  {
    number: '01',
    icon: '📋',
    title: 'Community Mobilisation',
    description:
      'Engagement begins with community barazas and the election of Residents Committees to ensure residents have a voice in every stage of the redevelopment process.',
  },
  {
    number: '02',
    icon: '📊',
    title: 'Socio-Economic Survey',
    description:
      'A detailed survey of each settlement captures demographic data, housing conditions, service access levels, land ownership status, and priority community needs.',
  },
  {
    number: '03',
    icon: '🗺️',
    title: 'Planning & Land Regularisation',
    description:
      'Technical teams develop redevelopment plans, conduct cadastral surveys, and work to formalise land tenure — giving residents legally recognised ownership of their land.',
  },
  {
    number: '04',
    icon: '🏗️',
    title: 'Infrastructure Upgrading',
    description:
      'Approved plans are implemented through construction of roads, drainage systems, street lighting, and social facilities such as health centres and schools.',
  },
]

const HowItWorks = () => {
  return (
    <section style={{
      padding: '4rem 1rem',
      background: 'white',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            color: '#1a472a',
            fontWeight: '600',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
          }}>
            Our Approach
          </p>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#111',
            marginBottom: '0.75rem',
          }}>
            How KISRP Works
          </h2>
          <p style={{
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontSize: '1rem',
          }}>
            Our implementation follows a structured, participatory process that places communities 
            at the centre of every decision — from initial surveys through to physical upgrading.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              background: '#f9f9f9',
              borderRadius: '10px',
              padding: '2rem 1.5rem',
              position: 'relative',
              borderTop: '4px solid #1a472a',
              textAlign: 'center',
            }}>
              {/* Step number */}
              <div style={{
                position: 'absolute',
                top: '-1px',
                right: '1.25rem',
                background: '#1a472a',
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: '700',
                padding: '0.2rem 0.5rem',
                borderRadius: '0 0 4px 4px',
                letterSpacing: '1px',
              }}>
                STEP {step.number}
              </div>

              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
              <h3 style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: '#1a472a',
                marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>
              <p style={{
                color: '#555',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
