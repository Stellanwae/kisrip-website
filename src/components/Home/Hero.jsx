import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Transforming Informal Settlements for Sustainable Urban Living</h1>
        <p>A Government of Kenya initiative for inclusive housing and community development.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
          <Link to="/news" className="btn btn-secondary">Latest Updates</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;