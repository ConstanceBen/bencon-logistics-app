import React from 'react'

function AboutCard({htext, ptext,bg, hcolor, pcolor}) {
  return (
    <div style={{background: bg}} className='about-card'>
        <h4 style={{color: hcolor}}>
            {htext}
        </h4>
        <p style={{color: pcolor}}>
            {ptext}
        </p>
    </div>
  )
}

export default AboutCard