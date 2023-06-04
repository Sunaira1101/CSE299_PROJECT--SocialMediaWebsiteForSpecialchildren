import "./monesix.css"
import React from 'react'

const Monesix = ({setOpenMoodSix}) => {
  return (
    <div className="mone">
        <div className="monewrapper">
            <img className="moneimg" src="/assets/m8.png" alt="" />
            <h1 className="moneupdate">Your Child Is Excited Today!</h1>
            
            <form className="moneForm">

            <h2 className="monedetailsInput">
                <li className="monepoints">Share in their enthusiasm and celebrate their excitement.</li>
                <li className="monepoints">Provide outlets for their energy through preferred activities.</li>
                <li className="monepoints">Offer opportunities for sensory-rich experiences.</li>
                <li className="monepoints">Establish clear expectations and boundaries.</li>
                <li className="monepoints">Channel their excitement into productive and engaging tasks.</li>
                <li className="monepoints">Allow them to express their excitement creatively.</li>
            </h2>
            
           

        
        
        </form>
        <button className="close" onClick={() => setOpenMoodSix(false)}>
        Close
        </button>
    </div>
      
    </div>
  )
}

export default Monesix
