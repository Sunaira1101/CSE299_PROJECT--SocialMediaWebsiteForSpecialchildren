import Explore from "../../components/explore/Explore";
import "./event.css"
import React, { useState } from 'react'

const Event = () => {
    
    const [OpenExplore, setOpenExplore] = useState(false);
    
    const [cards] = useState([
        {
            title: 'International Autism Day',
            pic: 'https://picsum.photos/200/300',
            text: 'Annual April 2nd observance promoting autism awareness, acceptance, inclusion, support, and understanding worldwide, symbolized by the color blue.'
        },
        {
            title: 'The Autism Show',
            text: 'The Autism Show on April 2nd is an event focused on autism, offering information, resources, and support for individuals, families, and professionals.'
        },
        {
            title: 'Inclusion Symposium',
            text: 'On March 3rd, International School Dhaka (ISD) in Bangladesh will host the inaugural Inclusion Symposium, focusing on diversity and inclusion in child special needs education.'
        },
        {
            title: 'Rise & Shine',
            text: 'Rise & Shine on April 2nd is a special event dedicated to children with autism, providing a platform for them to shine and thrive, and showcase their abilities to the world.'
        },
        {
            title: 'Inclusion Symposium',
            text: 'On March 3rd, International School Dhaka (ISD) in Bangladesh will host the inaugural Inclusion Symposium, focusing on diversity and inclusion in child special needs education.'
        },
        {
            title: 'Rise & Shine',
            text: 'Rise & Shine on April 2nd is a special event dedicated to children with autism, providing a platform for them to shine and thrive, and showcase their abilities to the world.'
        }
    ])



  return (
    <div className="event">
      <section>
        <div className="eventcontainer">
            <h1 className="eventname">Events</h1>
            <div className="cards">
                {
                    cards.map((card, i) => (

                        <div key={i} className="cardcard">
                            <h3 className="cardname">{card.title}</h3>
                            {/* <img className="piccard" src={card.pic} alt="" /> */}
                            <span className="ptext">{card.text}</span>
                            <button onClick={()=>setOpenExplore(true)} className="cardbtn">Explore</button>
                        </div>

                    ))
                }
                
            </div>

        </div>
      </section>
      {OpenExplore && <Explore setOpenExplore={setOpenExplore} opt={cards}/>}
    </div>
  )
}

export default Event
