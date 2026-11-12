import React from 'react'

function ValueCard({cardh, cardp}) {
  return (
    <div  className='value-card'>
            <h4> {cardh}</h4>
            <p className='value-text'>
                {cardp}
            </p>
    </div>
  )
}

export default ValueCard