import React from 'react'
import { Link } from 'react-router-dom';
import supply from "../assets/supply.png"
import cleaning from '../assets/cleaning.png'; 
import oilfield from "../assets/oilfield.png"
import grass from "../assets/grass.png"
import garden from "../assets/garden.png"



  export function Servicespage() {
  return (
    <main className="services-page">
      
      {/* ==================== HERO BANNER ==================== */}
      <section className="sp-hero">
        <div className="sp-container">
          <span className="sp-eyebrow">OUR SERVICES</span>
          <h1>Everything your site needs, from supply to soil</h1>
          <p>Hire us for a single job or combine services under one maintenance contract.</p>

          <div className="sp-pills">
            <span>Contracting &amp; supply</span>
            <span>Environmental &amp; oil field</span>
            <span>Industrial cleaning</span>
            <span>Grass clearing</span>
            <span>Gardens &amp; organic manure</span>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE 01 ==================== */}
      <section className="sp-row sp-bg-white">
        <div className="sp-container sp-grid sp-flip">
          <div className="sp-content">
            <span className="sp-num">01</span>
            <h2>General contracting &amp; supply of goods</h2>
            <p className="sp-desc">
              We source and deliver the goods your operations run on, from industrial consumables and safety equipment
              to office and site supplies, on schedule and to specification.
            </p>
            <ul className="sp-list">
              <li>Procurement and sourcing to your specification</li>
              <li>Industrial, safety and PPE supplies</li>
              <li>Delivery to office, plant or field location</li>
              <li>Vendor management and documentation</li>
            </ul>
            <Link to="/contact" className="sp-btn-green">
              Request a supply quote
            </Link>
          </div>

          <div className="sp-visual">
            <img src={supply} alt="Genercd al contracting and supply" />
          </div>
        </div>
      </section>

      
      <section className="sp-row sp-bg-white">
        <div className="sp-container sp-grid">
          <div className="sp-content">
            <span className="sp-num">02</span>
            <h2>Environmental management &amp; oil field engineering</h2>
            <p className="sp-desc">
              Field support for oil and gas operators and industrial clients: environmental compliance, site
              remediation and engineering services that keep work moving and sites protected.
            </p>
            <ul className="sp-list">
              <li>Environmental compliance and impact support</li>
              <li>Waste management, spill response and site remediation</li>
              <li>Oil field engineering and maintenance support</li>
              <li>Site monitoring, sampling and reporting</li>
            </ul>
            <Link to="/contact" className="sp-btn-green">
              Discuss a project
            </Link>
          </div>

          <div className="sp-visual">
            <img src={oilfield} alt="Environmental and oil field engineering" />
          </div>
        </div>
      </section>

      {/* ==================== SERVICE 03 ==================== */}
      <section className="sp-row sp-bg-sand">
        <div className="sp-container sp-grid sp-flip">
          <div className="sp-content">
            <span className="sp-num">03</span>
            <h2>Industrial cleaning</h2>
            <p className="sp-desc">
              Deep cleaning for plants, tanks, warehouses and facilities, using equipment and methods suited to
              heavy-duty environments and tight shutdown windows.
            </p>
            <ul className="sp-list">
              <li>Tank and vessel cleaning</li>
              <li>High-pressure washing and degreasing</li>
              <li>Plant, factory and warehouse cleaning</li>
              <li>Post-construction and scheduled facility cleaning</li>
            </ul>
            <Link to="/contact" className="sp-btn-green">
              Book a site visit
            </Link>
          </div>

          <div className="sp-visual">
            <img src={cleaning} alt="Industrial cleaning" />
          </div>
        </div>
      </section>

      {/* ==================== SERVICE 04 ==================== */}
      <section className="sp-row sp-bg-white">
        <div className="sp-container sp-grid">
          <div className="sp-content">
            <span className="sp-num">04</span>
            <h2>Mechanized &amp; manual grass clearing</h2>
            <p className="sp-desc">
              Clearing for estates, industrial sites, pipeline routes, right-of-ways and public land. Machines cover
              large areas fast; manual crews handle slopes, edges and sensitive spots.
            </p>

            <div className="sp-boxes">
              <div className="sp-box">
                <h4>Mechanized</h4>
                <p>Tractor and ride-on mowers, brush cutters for large open land.</p>
              </div>
              <div className="sp-box">
                <h4>Manual</h4>
                <p>Trained crews for edges, slopes, drains and areas machines can't reach.</p>
              </div>
            </div>

            <Link to="/contact" className="sp-btn-green">
              Get a clearing quote
            </Link>
          </div>

          <div className="sp-visual">
            <img src={grass} alt="Grass clearing" />
          </div>
        </div>
      </section>

      {/* ==================== SERVICE 05 ==================== */}
      <section className="sp-row sp-bg-sand">
        <div className="sp-container sp-grid sp-flip">
          <div className="sp-content">
            <span className="sp-num">05</span>
            <h2>Garden maintenance &amp; organic manure</h2>
            <p className="sp-desc">
              Garden care and landscaping for homes, offices and estates, plus organic manure we produce ourselves for
              healthier soil and stronger plants.
            </p>
            <ul className="sp-list">
              <li>Routine garden and lawn maintenance</li>
              <li>Landscaping, planting and flower beds</li>
              <li>Hedge trimming and tree care</li>
              <li>Organic manure in bags or bulk, with delivery</li>
            </ul>

            <div className="sp-actions">
              <Link to="/contact" className="sp-btn-green">
                Book garden care
              </Link>
              <Link to="/contact" className="sp-btn-outline">
                Order manure
              </Link>
            </div>
          </div>

          <div className="sp-visual">
            <img src={garden} alt="Garden maintenance and organic manure" />
          </div>
        </div>
      </section>

      {/* === BOTTOM YELLOW BANNER === */}
      <section className="sp-cta">
        <div className="sp-container sp-cta-inner">
          <div>
            <h3>Need more than one service?</h3>
            <p>Bundle them into one maintenance contract with a single schedule and invoice.</p>
          </div>
          <Link to="/contact" className="sp-btn-dark">
            Talk to our team
          </Link>
        </div>
      </section>

    </main>
  );
}

  


export default Servicespage