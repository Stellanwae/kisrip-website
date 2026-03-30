import React from 'react'

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About KISRP</h1>
          <p>Background, mandate, structure, and approach of the Kenya Informal Settlements Redevelopment Programme</p>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 1rem' }}>

        {/* Section 1 — Opening Statement */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3px 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div>
              <p style={{
                fontSize: '1.4rem',
                fontWeight: '300',
                lineHeight: '1.9',
                color: '#111',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "In Kenya, over 15% of the urban population lives in informal settlements — 
                communities defined not by choice, but by circumstance."
              </p>
              <p style={{ lineHeight: '1.9', color: '#555', fontSize: '0.95rem' }}>
                KISRP was established to change that. Not through displacement or demolition, 
                but through planning, partnership, and the recognition that every resident 
                deserves security of tenure, decent infrastructure, and a say in the future 
                of their community.
              </p>
            </div>

            {/* Vertical divider */}
            <div style={{ background: '#1a472a', width: '3px', minHeight: '200px', margin: '0 auto' }} />

            <div>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#1a472a',
                marginBottom: '1.5rem'
              }}>
                Programme at a Glance
              </p>
              {[
                { label: 'Implementing Agency', value: 'State Department for Housing & Urban Development' },
                { label: 'Funder', value: 'Government of Italy through AICS' },
                { label: 'Grant', value: '€6 Million' },
                { label: 'Duration', value: '2025 – 2028' },
                { label: 'Target Counties', value: 'Siaya · Kilifi · Kajiado' },
                { label: 'Target Settlements', value: 'Awelo · Kibarani · Umoja Estate' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '1rem',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid #e8e8e8',
                }}>
                  <span style={{ fontSize: '0.78rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px', paddingTop: '2px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '600', color: '#111' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Background */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            <div>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#1a472a',
                marginBottom: '1rem'
              }}>
                Background
              </p>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#111',
                lineHeight: '1.3',
                marginBottom: '1.5rem'
              }}>
                Why KISRP was established
              </h2>
              <p style={{ lineHeight: '1.9', color: '#555', marginBottom: '1rem' }}>
                Kenya's rapid urbanisation has created sprawling informal settlements 
                characterised by poor infrastructure, lack of legal land ownership, and 
                inadequate access to basic services. Over 53% of Kenya's population is 
                considered multidimensionally poor — lacking access to clean water, 
                quality housing, healthcare, and education.
              </p>
              <p style={{ lineHeight: '1.9', color: '#555' }}>
                KISRP was established as a direct response — bringing together the Government 
                of Kenya, county governments, communities, and international development 
                partners to create lasting, dignified change in three target settlements.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { figure: '15%+', context: 'of Kenya\'s urban population lives in informal settlements' },
                { figure: '53%', context: 'of Kenya\'s population is multidimensionally poor' },
                { figure: '700+', context: 'structure owners directly engaged in Kajiado County alone' },
                { figure: '3', context: 'counties and settlements being transformed simultaneously' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '1.5rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid #e8e8e8',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: '#1a472a', lineHeight: 1 }}>
                    {item.figure}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
                    {item.context}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Mission and Vision */}
        <section style={{
          marginBottom: '5rem',
          borderTop: '3px solid #1a472a',
          paddingTop: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem'
          }}>
            <div>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#1a472a',
                marginBottom: '1rem'
              }}>
                Mission
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#333' }}>
                To enhance infrastructure provision, improve service delivery, and facilitate 
                land tenure security in informal settlements — transforming unplanned communities 
                into planned, legally recognised, and sustainable urban neighbourhoods through 
                participatory and evidence-based redevelopment.
              </p>
            </div>
            <div>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#1a472a',
                marginBottom: '1rem'
              }}>
                Vision
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#333' }}>
                A Kenya where every urban resident — regardless of socioeconomic status — 
                lives in a planned, secure, and dignified environment with access to adequate 
                infrastructure, basic services, and legally recognised land tenure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Implementation Structure */}
        <section style={{ marginBottom: '5rem' }}>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#1a472a',
            marginBottom: '1rem'
          }}>
            How We Are Organised
          </p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111', marginBottom: '0.75rem' }}>
            Implementation Structure
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '650px' }}>
            KISRP operates through a two-tier structure linking national government with 
            county governments and communities — ensuring technical rigour and local 
            ownership at every level.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                title: 'National Programme Implementation Team (NPIT)',
                role: 'National Coordination',
                desc: 'Led by the State Department for Housing and Urban Development, the NPIT provides overall programme coordination, technical oversight, and ensures alignment with national housing and planning policies.'
              },
              {
                title: 'County Programme Implementation Teams (CPITs)',
                role: 'County Coordination',
                desc: 'Established in Siaya, Kilifi, and Kajiado, CPITs coordinate local implementation, liaise with county governments, and ensure community engagement at the settlement level.'
              },
              {
                title: 'Residents Committees (RCs)',
                role: 'Community Representation',
                desc: 'Elected by community members through open barazas, Residents Committees represent settlement residents and participate actively in planning, validation, and decision-making at every stage.'
              },
              {
                title: 'Italian Agency for Development Cooperation (AICS)',
                role: 'International Partner',
                desc: 'AICS provides financial support and technical oversight on behalf of the Government of Italy, ensuring programme activities align with international development cooperation standards.'
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: '1px solid #e8e8e8',
                alignItems: 'start'
              }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#1a472a',
                  background: '#e8f0e8',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '3px',
                  display: 'inline-block',
                  marginTop: '4px'
                }}>
                  {item.role}
                </span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#111', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.8', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — Our Approach */}
        <section style={{ marginBottom: '5rem' }}>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#1a472a',
            marginBottom: '1rem'
          }}>
            Our Approach
          </p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111', marginBottom: '0.75rem' }}>
            How We Work
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '650px' }}>
            Every intervention follows a structured, community-led process — from initial 
            surveys through to physical upgrading and tenure formalisation.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            border: '1px solid #e8e8e8',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {[
              { step: '01', title: 'Community Mobilisation', desc: 'Community barazas are held and Residents Committees elected to ensure residents shape every decision.' },
              { step: '02', title: 'Socio-Economic Survey', desc: 'A detailed survey captures housing conditions, service access, land ownership, and community priorities.' },
              { step: '03', title: 'Planning & Land Regularisation', desc: 'Redevelopment plans are developed and validated, with cadastral surveys conducted to formalise tenure.' },
              { step: '04', title: 'Infrastructure Upgrading', desc: 'Approved plans are implemented — roads, drainage, street lighting, and social facilities constructed.' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2rem 1.5rem',
                borderRight: i < 3 ? '1px solid #e8e8e8' : 'none',
                background: i % 2 === 0 ? 'white' : '#fafafa',
              }}>
                <p style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#e8f0e8',
                  margin: '0 0 1rem',
                  lineHeight: 1
                }}>
                  {item.step}
                </p>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1a472a', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Core Values */}
        <section style={{ borderTop: '1px solid #e8e8e8', paddingTop: '3rem' }}>
          <p style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#1a472a',
            marginBottom: '2rem'
          }}>
            Core Values
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              'Community Participation',
              'Legal Compliance',
              'Transparency & Accountability',
              'Technical Excellence',
              'Inter-Agency Coordination',
              'Tenure Security',
            ].map((value, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#1a472a',
                  borderRadius: '50%',
                  flexShrink: 0
                }} />
                <span style={{ fontSize: '1rem', color: '#333', fontWeight: '500' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}

export default AboutPage
