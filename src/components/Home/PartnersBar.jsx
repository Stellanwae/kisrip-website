// import React from 'react'

// const partners = [
//   {
//     name: 'Government of Kenya',
//     subtitle: 'Ministry of Lands, Public Works, Housing & Urban Development',
//     icon: '🇰🇪',
//   },
//   {
//     name: 'Government of Italy',
//     subtitle: 'Development Cooperation Grant — €6 Million',
//     icon: '🇮🇹',
//   },
//   {
//     name: 'AICS',
//     subtitle: 'Italian Agency for Development Cooperation',
//     icon: '🤝',
//   },
//   {
//     name: 'County Government of Siaya',
//     subtitle: 'Awelo Settlement — Siaya County',
//     icon: '🏛️',
//   },
//   {
//     name: 'County Government of Kilifi',
//     subtitle: 'Kibarani Settlement Scheme — Kilifi County',
//     icon: '🏛️',
//   },
//   {
//     name: 'County Government of Kajiado',
//     subtitle: 'Mathare Settlement — Kajiado County',
//     icon: '🏛️',
//   },
// ]

// const PartnersBar = () => {
//   return (
//     <section style={{
//       padding: '4rem 1rem',
//       background: '#f0f4f0',
//     }}>
//       <div className="container">
//         <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
//           <p style={{
//             color: '#1a472a',
//             fontWeight: '600',
//             fontSize: '0.9rem',
//             textTransform: 'uppercase',
//             letterSpacing: '1px',
//             marginBottom: '0.5rem',
//           }}>
//             Collaboration & Partnership
//           </p>
//           <h2 style={{
//             fontSize: '1.8rem',
//             fontWeight: '700',
//             color: '#111',
//             marginBottom: '0.5rem',
//           }}>
//             Our Partners
//           </h2>
//           <p style={{
//             color: '#555',
//             maxWidth: '550px',
//             margin: '0 auto',
//             lineHeight: '1.7',
//             fontSize: '1rem',
//           }}>
//             KISRP is implemented through a collaborative framework involving the national 
//             government, county governments, and international development partners.
//           </p>
//         </div>

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//           gap: '1.25rem',
//         }}>
//           {partners.map((partner, index) => (
//             <div key={index} style={{
//               background: 'white',
//               borderRadius: '8px',
//               padding: '1.5rem 1.25rem',
//               textAlign: 'center',
//               boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               gap: '0.5rem',
//             }}>
//               <span style={{ fontSize: '2rem' }}>{partner.icon}</span>
//               <h4 style={{
//                 margin: 0,
//                 fontSize: '0.95rem',
//                 fontWeight: '700',
//                 color: '#1a472a',
//               }}>
//                 {partner.name}
//               </h4>
//               <p style={{
//                 margin: 0,
//                 fontSize: '0.8rem',
//                 color: '#666',
//                 lineHeight: '1.4',
//               }}>
//                 {partner.subtitle}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PartnersBar


import React, { useState } from 'react'

const partners = [
  {
    name: 'Government of Kenya',
    subtitle: 'Ministry of Lands, Public Works, Housing & Urban Development',
    image: '/images/Govt_of_Kenya.webp', 
  },
  {
    name: 'Government of Italy',
    subtitle: 'Development Cooperation Grant — €6 Million',
    image: '/images/Govt_of_Italy.webp',
  },
  {
    name: 'AICS',
    subtitle: 'Italian Agency for Development Cooperation',
    image: '/images/aics.png',
  },
  {
    name: 'County Government of Siaya',
    subtitle: 'Awelo Settlement — Siaya County',
    image: '/images/County_Govt_Siaya.webp',
  },
  {
    name: 'County Government of Kilifi',
    subtitle: 'Kibarani Settlement Scheme — Kilifi County',
    image: '/images/County_Govt_of_Kilifi.png',
  },
  {
    name: 'County Government of Kajiado',
    subtitle: 'Mathare Settlement — Kajiado County',
    image: '/images/Kajiado-County.png',
  },
]

const PartnerLogo = ({ src, alt }) => {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background: '#e8f0e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: '#1a472a',
        fontWeight: '700',
      }}>
        {alt?.charAt(0) ?? '?'}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      style={{
        width: '72px',
        height: '72px',
        objectFit: 'contain',
        borderRadius: '8px',
      }}
    />
  )
}

const PartnersBar = () => {
  return (
    <section style={{
      padding: '4rem 1rem',
      background: '#f0f4f0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{
            color: '#1a472a',
            fontWeight: '600',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '0.5rem',
          }}>
            Collaboration & Partnership
          </p>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#111',
            marginBottom: '0.5rem',
          }}>
            Our Partners
          </h2>
          <p style={{
            color: '#555',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontSize: '1rem',
          }}>
            KISRP is implemented through a collaborative framework involving the national
            government, county governments, and international development partners.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
        }}>
          {partners.map((partner, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '8px',
              padding: '1.5rem 1.25rem',
              textAlign: 'center',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <PartnerLogo src={partner.image} alt={partner.name} />
              <h4 style={{
                margin: 0,
                fontSize: '0.95rem',
                fontWeight: '700',
                color: '#1a472a',
              }}>
                {partner.name}
              </h4>
              <p style={{
                margin: 0,
                fontSize: '0.8rem',
                color: '#666',
                lineHeight: '1.4',
              }}>
                {partner.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersBar