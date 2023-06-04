import "./mone.css";
import React from 'react'

const Mone = ({setOpenMood}) => {
  return (
    <div className="mone">
        <div className="monewrapper">
            <img className="moneimg" src="/assets/m1.png" alt="" />
            <h1 className="moneupdate">Your Child Is Happy Today!</h1>
            
            <form className="moneForm">

            <h2 className="monedetailsInput">
                <li className="monepoints">Celebrate and enjoy the positive moments.</li>
                <li className="monepoints">Engage in activities your child loves.</li>
                <li className="monepoints">Foster open communication and listen attentively.</li>
                <li className="monepoints">Embrace their unique strengths and interests.</li>
                <li className="monepoints">Create a calm and supportive environment.</li>
                <li className="monepoints">Encourage sensory-friendly experiences.</li>
            </h2>
            
           

        
        
        </form>
        <button className="close" onClick={() => setOpenMood(false)}>
        Close
        </button>
    </div>
      
    </div>
  )
}

export default Mone
