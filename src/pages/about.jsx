import React from 'react'
import oilfieldImage from '../assets/oilfield.png'
import AboutCard from '../components/aboutcard'
import ValueCard from '../components/valuecard'

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
              Bencon Logistics was founded in <strong>[2015]</strong> and is based in <strong>[CITY, STATE]</strong>. We serve oil and gas operators, manufacturers, estates, public institutions and private clients with a single goal: getting essential work done safely, on time and with care for the environment.
            </p>
            <p>
              Our team brings together procurement specialists, field technicians, cleaning crews and grounds and garden staff, backed by mechanized equipment for large sites. We also produce our own organic manure, closing the loop between the land we maintain and the soil we feed.
            </p>
          </div>

          <div className="about-image-box">
            <img src={oilfieldImage} alt="Oil field pumpjack and environmental greenery" className='oilfield-img' />
          </div>
        </div>
      </section>

      <section className='mission-vision'>
        <AboutCard htext={"OUR MISSION"} ptext={"To deliver dependable supply, engineering and site operations, safe, compliant and produjctive"} bg={"rgb(217, 243, 235)"} hcolor={"green"} pcolor={"green"} />

        <AboutCard htext={"OUR vISION"} ptext={"To be the first-choice multi-service for industries and communities, known for reliability and and environmenta responsility. "} bg={"rgb(6, 55, 39)"} hcolor={"yellow"} pcolor={"white"} />
      </section>

      <section className='values'>
        <div>
          <span>OUR VALUES</span>
          <h2>
            What guides every job
          </h2>
        </div>
        <div className='value-box' >
          <ValueCard cardh={"Safety"} cardp={"Every crew member goes home safe. We plan equip and supervise for it."} />
          <ValueCard cardh={"Reliability"} cardp={"We agree a timeline and keep to it, with clear updates along the way."} />
          <ValueCard cardh={"Environmental Care "} cardp={"We protect the land, water and communities around every site we touch."} />
          <ValueCard cardh={"Integrity"} cardp={"Honest quotes,transparent reporting and work we're proud to sign off."} />
        </div>

      </section>
    </div>
  )
}






export default AboutPage





