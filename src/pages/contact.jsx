import React from 'react'


function ContactPage() {
  return (
  

    <div className="cp-wrapper">
      
      <section className="cp-hero">
        <div className="cp-container">
          <span className="cp-eyebrow">CONTACT &amp; QUOTES</span>
          <h1 className="cp-title">Let’s talk about your site</h1>
          <p className="cp-subtitle">
            Tell us what you need and where. We’ll reply with next steps within
            one working day.
          </p>
        </div>
      </section>

      
      <section className="cp-main">
        <div className="cp-container cp-grid">
          
          {/* Left Side: Simple Form */}
          <div className="cp-form-card">
            <h2 className="cp-card-heading">Request a quote</h2>
            
            <form className="cp-form">
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label>Full name</label>
                  <input type="text" required />
                </div>

                <div className="cp-form-group">
                  <label>Company (optional)</label>
                  <input type="text" />
                </div>
              </div>

              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>

                <div className="cp-form-group">
                  <label>Phone</label>
                  <input type="tel" required />
                </div>
              </div>

              <div className="cp-form-row">
                <div className="cp-form-group">
                  <label>Service needed</label>
                  <select>
                    <option>General contracting &amp; supply</option>
                    <option>Environmental &amp; oil field services</option>
                    <option>Industrial cleaning</option>
                    <option>Grass clearing</option>
                    <option>Gardens &amp; organic manure</option>
                  </select>
                </div>

                <div className="cp-form-group">
                  <label>Site location</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="cp-form-group">
                <label>Tell us about the job</label>
                <textarea
                  rows="5"
                  placeholder="Site size, quantities, timing or anything else we should know..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="cp-btn-green">
                Send request
              </button>
            </form>
          </div>

          
          <div className="cp-sidebar">
            <div className="cp-direct-card">
              <h3>Reach us directly</h3>
              <ul className="cp-contact-list">
                <li>📍 [NO.44 REFINERY ROAD ALESA, ELEME]</li>
                <li>📞 [+234 8039331082]</li>
                <li>✉️ [obelleybeatrice@gmail.com]</li>
                <li>🕒 Mon–Sat, [10-8]</li>
              </ul>

              <a href="08039331082" className="cp-btn-whatsapp">
                Chat on WhatsApp
              </a>
            </div>

            <div className="cp-map-box">
              <span>[MAP OF OFFICE LOCATION]</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  




  )
}

export default ContactPage