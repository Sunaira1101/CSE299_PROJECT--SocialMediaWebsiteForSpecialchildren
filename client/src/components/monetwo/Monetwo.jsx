import "./monetwo.css"
import React from 'react'

const Monetwo = ({setOpenMoodTwo}) => {
  return (
    <div>
       <div className="mone">
        <div className="monewrapper">
            <img className="moneimg" src="/assets/m3.png" alt="" />
            <h1 className="moneupdate">Your Child Is Angry Today!</h1>
            
            <form className="moneForm">

            <h2 className="monedetailsInput">
                <li className="monepoints">Stay calm and composed.</li>
                <li className="monepoints">Provide a safe and quiet space.</li>
                <li className="monepoints">Use visual cues or a calming routine.</li>
                <li className="monepoints">Validate their feelings without judgment.</li>
                <li className="monepoints">Offer sensory tools or techniques.</li>
                <li className="monepoints">Redirect attention to a preferred activity.</li>
            </h2>
            
           

        
        
        </form>
        <button onClick={() => setOpenMoodTwo(false)} className="close" >
        Close
        </button>
    </div>
      
    </div>
    </div>
  )
}

export default Monetwo
