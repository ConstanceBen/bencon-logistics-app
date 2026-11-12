import React from 'react'
import supply from "../assets/supply.png"
import oilfield from "../assets/oilfield.png"
import cleaning from "../assets/cleaning.png"
import grass from "../assets/grass.png"
import garden from "../assets/garden.png"


function Services() {
    return (
        <main className='page2'>
            <div className='services'>
                <p>WHAT WE DO</p>
                <h2>Five service lines, one <br />
                 dependable team </h2>
            </div>
            <div className='services-row'>
                <div className='image-item'><img src={supply} alt="" />
                    <h3>
                        General Contracting and Supply
                    </h3>
                    <p>
                        Sourcing an delivery of the goods your operation runs on.
                    </p></div>
                <div className='image-item'><img src={oilfield} alt="" />
                    <h3>
                        Environmental & Oil Field Engineering
                    </h3>
                    <p>
                        Compliance, remediaton and field support for operators
                    </p></div>
                <div className='image-item'><img src={cleaning} alt="" />
                    <h3>Industrial cleaning</h3>
                    <p>
                        Tanks, Plants, Warehouses and heavy-duty facilities
                    </p>
                </div>
                <div className='image-item'><img src={grass} alt="" />
                    <h3>Grass Clearing</h3>
                    <p>Mechanized and manual cleaning for sites of any size</p>
                </div>
                <div className='image-item'> <img src={garden} alt="" />
                <h3>Garden& Organic Manure</h3>
                <p>
                    Garden mainenance and manure we produce in-house
                </p>
                </div>
            </div>
        </main>

    )
}

export default Services