import React from 'react'
import { Link } from 'react-router-dom'

const AboutSnapshot = () => {
  return (
    <section style={{
      padding: '4rem 1rem',
      background: '#f9f9f9',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
      }}>
        {/* Text Side */}
        <div>
          <p style={{
            color: '#1E3A5F',
            fontWeight: '600',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.75rem',
          }}>
            About the Programme
          </p>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#111',
            marginBottom: '1.25rem',
            lineHeight: '1.3',
          }}>
            What is KISRP?
          </h2>
          <p style={{
            color: '#444',
            lineHeight: '1.8',
            marginBottom: '1rem',
            fontSize: '1rem',
          }}>
            The Kenya Informal Settlements Redevelopment Programme (KISRP) is a Government of Kenya 
            initiative implemented by the State Department for Housing and Urban Development (SDHUD), 
            with financial support of €6 million from the Government of Italy through the Italian 
            Agency for Development Cooperation (AICS).
          </p>
          <p style={{
            color: '#444',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
            fontSize: '1rem',
          }}>
            KISRP seeks to enhance infrastructure provision, improve service delivery, and facilitate 
            land tenure security in informal settlements — transforming unplanned communities into 
            planned, secure, and sustainable urban neighbourhoods.
          </p>
          <Link
            to="/about"
            className="btn btn-primary"
          >
            Learn More About KISRP
          </Link>
        </div>

        {/* Stats/Highlights Side */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {[
            {
              icon: '🏛️',
              title: 'Government-Led',
              desc: 'Implemented by the State Department for Housing and Urban Development in collaboration with County Governments.',
            },
            {
              icon: '🤝',
              title: 'Internationally Supported',
              desc: 'Funded by the Government of Italy through the Italian Agency for Development Cooperation (AICS).',
            },
            {
              icon: '👩‍👩‍👧‍👦',
              title: 'Community-Centred',
              desc: 'Every intervention is guided by socio-economic surveys, community participation, and Residents Committee engagement.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              background: 'white',
              padding: '1.25rem',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <h4 style={{ margin: '0 0 0.25rem', color: '#1E3A5F', fontSize: '1rem' }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSnapshot
