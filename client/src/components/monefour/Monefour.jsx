import "./monefour.css"
import React from 'react'

const Monefour = ({setOpenMoodFour}) => {
  return (
    <div className="mone">
        <div className="monewrapper">
            <img className="moneimg" src="/assets/m4.png" alt="" />
            <h1 className="moneupdate">Your Child Is Nervous Today!</h1>
            
            <form className="moneForm">

            <h2 className="monedetailsInput">
                <li className="monepoints">Provide a calming and predictable environment.</li>
                <li className="monepoints">Use visual supports to promote understanding.</li>
                <li className="monepoints">Offer deep pressure techniques or sensory tools.</li>
                <li className="monepoints">Encourage relaxation exercises or deep breathing.</li>
                <li className="monepoints">Engage in soothing activities like listening to music or reading.</li>
                <li className="monepoints">Maintain a gentle and patient approach.</li>
            </h2>
            
           

        
        
        </form>
        <button className="close" onClick={() => setOpenMoodFour(false)}>
        Close
        </button>
    </div>
      
    </div>
  )
}

export default Monefour
