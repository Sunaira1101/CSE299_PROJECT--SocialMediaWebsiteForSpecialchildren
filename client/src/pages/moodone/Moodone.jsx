import Mone from "../../components/mone/Mone";
import Monefive from "../../components/monefive/Monefive";
import Monefour from "../../components/monefour/Monefour";
import Monesix from "../../components/monesix/Monesix";
import Monethree from "../../components/monethree/Monethree";
import Monetwo from "../../components/monetwo/Monetwo";

import "./moodone.css"
import React, { useState } from 'react'

const Moodone = () => {

  const [OpenMood, setOpenMood] = useState(false);
  const [OpenMoodTwo, setOpenMoodTwo] = useState(false);
  const [OpenMoodThree, setOpenMoodThree] = useState(false);
  const [OpenMoodFour, setOpenMoodFour] = useState(false);
  const [OpenMoodFive, setOpenMoodFive] = useState(false);
  const [OpenMoodSix, setOpenMoodSix] = useState(false);



  return (
    <div className="mood">
      <section className="msec">
        <div className="moodcontainer">
            <h1 className="moodname">What is your child's mood today?</h1>
            <div className="moods">
                
                  <div className="moodcardcard">
                    <h3 className="moodcardname">Happy</h3>
                    <img className="mpiccard" src="/assets/m1.png" alt="" />
                    <button onClick={()=>setOpenMood(true)} className="moodcardbtn">Learn More</button>
                  </div>

                  <div className="moodcardcard">
                    <h3 className="moodcardname">Angry</h3>
                    <img className="mpiccard" src="/assets/m3.png" alt="" />
                    <button onClick={()=>setOpenMoodTwo(true)} className="moodcardbtn">Learn More</button>
                  </div>

                  <div className="moodcardcard">
                    <h3 className="moodcardname">Sad</h3>
                    <img className="mpiccard" src="/assets/m2.png" alt="" />
                    <button onClick={()=>setOpenMoodThree(true)} className="moodcardbtn">Learn More</button>
                  </div>

                  <div className="moodcardcard">
                    <h3 className="moodcardname">Nervous</h3>
                    <img className="mpiccard" src="/assets/m4.png" alt="" />
                    <button onClick={()=>setOpenMoodFour(true)} className="moodcardbtn">Learn More</button>
                  </div>
                  <div className="moodcardcard">
                    <h3 className="moodcardname">Skeptical</h3>
                    <img className="mpiccard" src="/assets/m5.png" alt="" />
                    <button onClick={()=>setOpenMoodFive(true)} className="moodcardbtn">Learn More</button>
                  </div>
                  <div className="moodcardcard">
                    <h3 className="moodcardname">Excited</h3>
                    <img className="mpiccard" src="/assets/m8.png" alt="" />
                    <button onClick={()=>setOpenMoodSix(true)} className="moodcardbtn">Learn More</button>
                  </div>
                  
                
                
            </div>

        </div>
      </section>
      {OpenMood && <Mone setOpenMood={setOpenMood}/>}
      {OpenMoodTwo && <Monetwo setOpenMoodTwo={setOpenMoodTwo}/>}
      {OpenMoodThree && <Monethree setOpenMoodThree={setOpenMoodThree}/>}
      {OpenMoodFour && <Monefour setOpenMoodFour={setOpenMoodFour}/>}
      {OpenMoodFive && <Monefive setOpenMoodFive={setOpenMoodFive}/>}
      {OpenMoodSix && <Monesix setOpenMoodSix={setOpenMoodSix}/>}
    </div>
  )
}

export default Moodone
