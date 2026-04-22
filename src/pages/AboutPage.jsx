import React from 'react'

const AboutPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About KISRP</h1>
          <p>Background, mandate, structure, and approach of the Kenya Informal Settlements Redevelopment Programme</p>
        </div>
      </div>

      <style>{`
        .about-overline {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1E3A5F;
          margin-bottom: 0.75rem;
          display: block;
        }

        .about-section {
          padding: 4rem 0;
          border-bottom: 1px solid #e8e8e8;
        }

        .about-section:last-child {
          border-bottom: none;
        }

        .about-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .about-four-col {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid #e8e8e8;
          border-radius: 8px;
          overflow: hidden;
        }

        .stat-card {
          background: #EFF4FA;
          border-radius: 8px;
          padding: 1.5rem;
        }

        .glance-row {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 1rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid #e8e8e8;
          align-items: baseline;
        }

        .glance-row:last-child {
          border-bottom: none;
        }

        .step-cell {
          padding: 2rem 1.5rem;
          border-right: 1px solid #e8e8e8;
          background: white;
        }

        .step-cell:last-child {
          border-right: none;
        }

        .step-cell:nth-child(even) {
          background: #fafafa;
        }

        .structure-row {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 2rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid #e8e8e8;
          align-items: start;
        }

        .structure-row:last-child {
          border-bottom: none;
        }

        .role-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #1E3A5F;
          background: #EFF4FA;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          display: inline-block;
          line-height: 1.4;
        }

        .value-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .value-dot {
          width: 7px;
          height: 7px;
          background: #1E3A5F;
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .about-two-col {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .about-four-col {
            grid-template-columns: 1fr 1fr;
          }
          .step-cell:nth-child(2) {
            border-right: none;
          }
          .step-cell:nth-child(1),
          .step-cell:nth-child(2) {
            border-bottom: 1px solid #e8e8e8;
          }
        }

        @media (max-width: 600px) {
          .about-three-col {
            grid-template-columns: 1fr 1fr;
          }
          .about-four-col {
            grid-template-columns: 1fr;
          }
          .step-cell {
            border-right: none !important;
            border-bottom: 1px solid #e8e8e8;
          }
          .step-cell:last-child {
            border-bottom: none;
          }
          .structure-row {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }
      `}</style>

      <div className="container" style={{ padding: '0 20px' }}>

        {/* Section 1 — Opening */}
        <section className="about-section">
          <div className="about-two-col">

            <div>
              <span className="about-overline">Our Story</span>
              <blockquote style={{
                fontSize: '1.35rem',
                fontWeight: '300',
                lineHeight: '1.85',
                color: '#111',
                borderLeft: '3px solid #1E3A5F',
                paddingLeft: '1.5rem',
                margin: '0 0 1.5rem 0',
                fontStyle: 'italic',
              }}>
                "In Kenya, over 15% of the urban population lives in informal settlements —
                communities defined not by choice, but by circumstance."
              </blockquote>
              <p style={{ lineHeight: '1.9', color: '#555', fontSize: '0.95rem', margin: 0 }}>
                KISRP was established to change that. Not through displacement or demolition,
                but through planning, partnership, and the recognition that every resident
                deserves security of tenure, decent infrastructure, and a say in the future
                of their community.
              </p>
            </div>

            <div>
              <span className="about-overline">Programme at a Glance</span>
              {[
                { label: 'Implementing Agency', value: 'State Dept. for Housing & Urban Development' },
                { label: 'Funder', value: 'Government of Italy through AICS' },
                { label: 'Grant', value: '€6 Million' },
                { label: 'Duration', value: '2025 – 2028' },
                { label: 'Target Counties', value: 'Siaya · Kilifi · Kajiado' },
                { label: 'Target Settlements', value: 'Awelo · Kiwandani · Umoja Estate' },
              ].map((item, i) => (
                <div key={i} className="glance-row">
                  <span style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#111' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 2 — Background + Stats */}
        <section className="about-section">
          <span className="about-overline">Background</span>
          <div className="about-two-col" style={{ marginTop: '1rem' }}>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111', lineHeight: '1.3', marginBottom: '1.25rem', marginTop: 0 }}>
                Why KISRP was established
              </h2>
              <p style={{ lineHeight: '1.9', color: '#555', marginBottom: '1rem', marginTop: 0 }}>
                Kenya's rapid urbanisation has created sprawling informal settlements
                characterised by poor infrastructure, lack of legal land ownership, and
                inadequate access to basic services. Over 53% of Kenya's population is
                considered multidimensionally poor.
              </p>
              <p style={{ lineHeight: '1.9', color: '#555', margin: 0 }}>
                KISRP was established as a direct response — bringing together the Government
                of Kenya, county governments, communities, and international development
                partners to create lasting, dignified change in three target settlements.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { figure: '15%+', context: 'of Kenya\'s urban population lives in informal settlements' },
                { figure: '53%', context: 'of Kenya\'s population is multidimensionally poor' },
                { figure: '700+', context: 'structure owners directly engaged in Kajiado County alone' },
                { figure: '3', context: 'counties and settlements being transformed simultaneously' },
              ].map((item, i) => (
                <div key={i} className="stat-card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: '#1E3A5F', lineHeight: 1, minWidth: '80px' }}>
                    {item.figure}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: '#444', lineHeight: '1.5' }}>
                    {item.context}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3 — Mission & Vision */}
        <section className="about-section">
          <span className="about-overline">Purpose</span>
          <div className="about-two-col" style={{ marginTop: '1.5rem' }}>
            <div style={{ paddingRight: '2rem', borderRight: '1px solid #e8e8e8' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1E3A5F', marginTop: 0, marginBottom: '1rem' }}>
                Mission
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#444', margin: 0 }}>
                To enhance infrastructure provision, improve service delivery, and facilitate
                land tenure security in informal settlements — transforming unplanned communities
                into planned, legally recognised, and sustainable urban neighbourhoods through
                participatory and evidence-based redevelopment.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1E3A5F', marginTop: 0, marginBottom: '1rem' }}>
                Vision
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#444', margin: 0 }}>
                A Kenya where every urban resident — regardless of socioeconomic status —
                lives in a planned, secure, and dignified environment with access to adequate
                infrastructure, basic services, and legally recognised land tenure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Implementation Structure */}
        <section className="about-section">
          <span className="about-overline">How We Are Organised</span>
          <div className="about-two-col" style={{ marginTop: '1rem', marginBottom: '2.5rem', alignItems: 'end' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111', margin: 0 }}>
              Implementation Structure
            </h2>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0 }}>
              A two-tier structure linking national government with county governments and
              communities — ensuring technical rigour and local ownership at every level.
            </p>
          </div>

          <div>
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
              <div key={i} className="structure-row">
                <span className="role-badge">{item.role}</span>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#111', marginBottom: '0.5rem', marginTop: 0 }}>
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
        <section className="about-section">
          <span className="about-overline">Our Objectives</span>
          <div className="about-two-col" style={{ marginTop: '1rem', marginBottom: '2.5rem', alignItems: 'end' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111', margin: 0 }}>
              How We Work
            </h2>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0 }}>
              Every intervention follows a structured, community-led process — from initial
              surveys through to physical upgrading and tenure formalisation.
            </p>
          </div>

          <div className="about-four-col">
            {[
              { step: '01', title: 'Community Organisation', desc: 'Community barazas are held and Residents Committees elected to ensure residents shape every decision.' },
              // { step: '02', title: 'Socio-Economic Survey', desc: 'A detailed survey captures housing conditions, service access, land ownership, and community priorities.' },
              { step: '02', title: 'Land Tenure Security', desc: 'Redevelopment plans are developed and validated, with cadastral surveys conducted to formalise tenure.' },
              { step: '03', title: 'Infrastructure Development', desc: 'Approved plans are implemented — roads, drainage, street lighting, and social facilities constructed.' },
            ].map((item, i) => (
              <div key={i} className="step-cell">
                <p style={{ fontSize: '2.25rem', fontWeight: '800', color: '#D6E4F3', margin: '0 0 1rem', lineHeight: 1 }}>
                  {item.step}
                </p>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#1E3A5F', marginBottom: '0.6rem', marginTop: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.87rem', color: '#555', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Core Values */}
        <section className="about-section">
          <span className="about-overline">Core Values</span>
          <div className="about-three-col" style={{ marginTop: '1.5rem' }}>
            {[
              'Community Participation',
              'Legal Compliance',
              'Transparency & Accountability',
              'Technical Excellence',
              'Inter-Agency Coordination',
              'Tenure Security',
            ].map((value, i) => (
              <div key={i} style={{
                background: '#EFF4FA',
                borderRadius: '6px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div className="value-dot" />
                <span style={{ fontSize: '0.92rem', color: '#1E3A5F', fontWeight: '600' }}>
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