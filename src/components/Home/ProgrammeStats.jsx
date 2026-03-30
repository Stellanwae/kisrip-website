import React from 'react'

const stats = [
  {
    value: '€6M',
    label: 'Italian Government Grant',
    icon: '💶',
  },
  {
    value: '3',
    label: 'Target Counties',
    icon: '🗺️',
  },
  {
    value: '3',
    label: 'Informal Settlements',
    icon: '🏘️',
  },
  {
    value: '15%+',
    label: 'of Kenya\'s Urban Population in Informal Settlements',
    icon: '👥',
  },
]

const ProgrammeStats = () => {
  return (
    <section style={{
      background: '#1a472a',
      padding: '3rem 1rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              color: 'white',
              padding: '1.5rem 1rem',
              borderRight: index < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#f0c84b',
                marginBottom: '0.5rem',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.9rem',
                opacity: 0.85,
                lineHeight: '1.4',
                maxWidth: '160px',
                margin: '0 auto',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgrammeStats
