import React from 'react'
import heroImage from "../assets/hero.png"


function Hero() {
  return (
   <section className='container'>
                
                <div>

                    <h1 className='heading'>
                        One contractor for Supply, Oil Field Engineering and Site Care.
                    </h1>
                    <p className='text'>
                        Bencon Logistics supplies goods, 
                        provides oil field and environmental operations, 
                        cleans Industrial facilities, clears land and keeps garden healthy with orgnic produced ourselves.
                    </p>
                    <div className='buttons'>
                        <button className='btn-1'>
                        Request a quote
                    </button>
                    <button className='btn-2'>
                        Explore our Services
                    </button>
                    </div>
                    
                </div>
                <div>
                    <img src={heroImage} alt="" className='hero-image' />
                </div>

            </section>
  )
}

export default Hero