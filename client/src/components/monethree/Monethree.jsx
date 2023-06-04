import "./monethree.css"
import React from 'react'

const Monethree = ({setOpenMoodThree}) => {
  return (
    <div className="mone">
      <div className="monewrapper">
            <img className="moneimg" src="/assets/m2.png" alt="" />
            <h1 className="moneupdate">Your Child Is Sad Today!</h1>
            
            <form className="moneForm">

            <h2 className="monedetailsInput">
                <li className="monepoints">Provide comfort and reassurance.</li>
                <li className="monepoints">Create a nurturing and secure environment.</li>
                <li className="monepoints">Engage in calming activities or hobbies</li>
                <li className="monepoints">Offer sensory comforts like weighted blankets.</li>
                <li className="monepoints">Encourage verbal or non-verbal expression of emotions.</li>
                <li className="monepoints">Validate their feelings and empathize.</li>
            </h2>
            
           

        
        
        </form>
        <button className="close" onClick={() => setOpenMoodThree(false)}>
        Close
        </button>
    </div>
    </div>
  )
}

export default Monethree
