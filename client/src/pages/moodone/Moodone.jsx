import "./moodone.css"
import React from 'react'

const Moodone = () => {
  return (
    <div className="mood">
      <section className="msec">
        <div className="moodcontainer">
            <h1 className="moodname">What is your child's mood today?</h1>
            <div className="moods">
                
                  <div className="moodcardcard">
                    <h3 className="moodcardname">Happy</h3>
                    <img className="mpiccard" src="/assets/m1.png" alt="" />
                    <button  className="moodcardbtn">Learn More</button>
                  </div>

                  <div className="moodcardcard">
                    <h3 className="moodcardname">Sad</h3>
                    <img className="mpiccard" src="/assets/m2.png" alt="" />
                    <button  className="moodcardbtn">Learn More</button>
                  </div>

                  <div className="moodcardcard">
                    <h3 className="moodcardname">Angry</h3>
                    <img className="mpiccard" src="/assets/m3.png" alt="" />
                    <button  className="moodcardbtn">Learn More</button>
                  </div>

                  <div className="moodcardcard">
                    <h3 className="moodcardname">Nervous</h3>
                    <img className="mpiccard" src="/assets/m4.png" alt="" />
                    <button  className="moodcardbtn">Learn More</button>
                  </div>
                  <div className="moodcardcard">
                    <h3 className="moodcardname">Skeptical</h3>
                    <img className="mpiccard" src="/assets/m5.png" alt="" />
                    <button  className="moodcardbtn">Learn More</button>
                  </div>
                  <div className="moodcardcard">
                    <h3 className="moodcardname">Excited</h3>
                    <img className="mpiccard" src="/assets/m7.png" alt="" />
                    <button  className="moodcardbtn">Learn More</button>
                  </div>
                  
                
                
            </div>

        </div>
      </section>
      {/* {OpenExplore && <Explore setOpenExplore={setOpenExplore} opt={cards}/>} */}
    </div>
  )
}

export default Moodone
