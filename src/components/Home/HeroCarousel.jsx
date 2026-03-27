import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { heroSlidesAPI } from '../../services/api'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const HeroCarousel = () => {
  const [slides, setSlides] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await heroSlidesAPI.getAll()
        console.log('Hero slides loaded:', data)
        setSlides(data)
      } catch (error) {
        console.error('Error fetching hero slides:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSlides()
  }, [])

  if (loading) {
    return (
      <div style={{ height: '80vh', background: '#065AA2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'white' }}>Loading...</p>
      </div>
    )
  }

  // If no slides in Sanity, show default hero section
  if (slides.length === 0) {
    return (
      <div style={{ 
        height: '80vh', 
        background: 'linear-gradient(135deg, #1a472a 0%, #2a6a3a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ padding: '0 20px' }}>
          <h1 className="heroh1" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Transforming Informal Settlements for Sustainable Urban Living
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            A Government of Kenya initiative for inclusive housing and community development.
          </p>
          <div className="hero-btns">
            <a href="/projects" className="btn btn-primary" style={{ marginRight: '1rem' }}>
              Explore Projects
            </a>
            <a href="/news" className="btn btn-secondary" >
              Latest Updates
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh', minHeight: '500px' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Background Image */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              
              {/* Light Overlay for better text readability */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.4)',
                }}
              />
              
              {/* Slide Title and Description - Bottom Left */}
              <div
                style={{
                //   position: 'relative',
                  bottom: '10%',
                  left: '8%',
                  maxWidth: '500px',
                  color: 'white',
                  zIndex: 10,
                }}
              >
                <h2 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600',
                  margin: '0',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '0.5rem'
                }}>
                  {slide.title}
                </h2>
                <p style={{ 
                  fontSize: '0.7rem', 
                  opacity: 0.9,
                  textShadow: '1px 1px 1px rgba(0,0,0,0.3)',
                  lineHeight: '1.5',
                  margin: '0',
                  position: 'absolute',
                  bottom: '0.5rem',
                  left: '0.5rem'
                }}>
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Main Hero Text - Centered */}
      <div className="slide-hero"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 20,
          width: '80%',
          maxWidth: '700px',
          pointerEvents: 'none',
        }}
      >
        <h1 className="heroh1" style={{
          fontSize: '2rem',
          marginBottom: '0.75rem',
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          fontWeight: '600'
        }}>
          Transforming Informal Settlements for Sustainable Urban Living
        </h1>
        <p style={{
          fontSize: '1rem',
          marginBottom: '1.5rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          opacity: 0.9
        }}>
          A Government of Kenya initiative for inclusive housing and community development.
        </p>
        <div className="hero-btns" style={{ pointerEvents: 'auto' }}>
          <a href="/projects" className="btn btn-primary" style={{ marginRight: '0rem' }}>
            Explore Projects
          </a>
          <a href="/news" className="btn btn-secondary">
            Latest Updates
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel