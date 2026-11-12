import React from 'react'
import oilfieldImage from '../assets/oilfield.png'

function AboutPage() {
  return (
        <div className="page">
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>
            Supply · Oil field &amp; environmental · Industrial cleaning · Grass clearing · Gardens &amp; organic manure
          </span>
          <div>
            <a href="tel:+234000000000">[PHONE]</a> | <a href="mailto:info@bencon.com">[EMAIL]</a>
          </div>
        </div>
      </div>

      <header className="about-navbar">
        <div className="container nav-content">
          <div className="logo">
            <strong>BENCON</strong>
            <small>LOGISTICS</small>
          </div>

          
        </div>
      </header>

      <section className="hero">
        <div className="about-container">
          <p className="gold-tag">ABOUT BENCON LOGISTICS</p>
          <h1>A practical contractor for industry, energy and the environment</h1>
          <p className="hero-subtext">
            We combine procurement, field engineering support and hands-on site services so clients can hand one team the jobs that keep their operations running.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Who we are</h2>
            <p>
              Bencon Logistics was founded in <strong>[YEAR]</strong> and is based in <strong>[CITY, STATE]</strong>. We serve oil and gas operators, manufacturers, estates, public institutions and private clients with a single goal: getting essential work done safely, on time and with care for the environment.
            </p>
            <p>
              Our team brings together procurement specialists, field technicians, cleaning crews and grounds and garden staff, backed by mechanized equipment for large sites. We also produce our own organic manure, closing the loop between the land we maintain and the soil we feed.
            </p>
          </div>

          <div className="about-image-box">
            <img src={oilfieldImage} alt="Oil field pumpjack and environmental greenery" />
          </div>
        </div>
      </section>
    </div>
  )}




export default AboutPage





