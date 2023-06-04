import "./monefive.css"
import React from 'react'

const Monefive = ({setOpenMoodFive}) => {
  return (
    <div className="mone">
        <div className="monewrapper">
            <img className="moneimg" src="/assets/m5.png" alt="" />
            <h1 className="moneupdate">Your Child Is Skeptical Today!</h1>
            
            <form className="moneForm">

            <h2 className="monedetailsInput">
                <li className="monepoints">Respect their perspective and allow them to express their doubts.</li>
                <li className="monepoints">Provide clear explanations and evidence to address their skepticism.</li>
                <li className="monepoints">Foster open dialogue and encourage their questions.</li>
                <li className="monepoints">Offer choices and involve them in decision-making.</li>
                <li className="monepoints">Validate their concerns and offer reassurance.</li>
                <li className="monepoints">Use visual supports or social stories to enhance understanding.</li>
            </h2>
            
           

        
        
        </form>
        <button className="close" onClick={() => setOpenMoodFive(false)}>
        Close
        </button>
    </div>
      
    </div>
  )
}

export default Monefive
