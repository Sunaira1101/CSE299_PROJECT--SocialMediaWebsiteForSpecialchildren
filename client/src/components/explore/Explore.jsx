import { useState } from "react";
import { makeRequest } from "../../axios";
import "./explore.css";

import React from 'react'

const Explore = ({setOpenExplore, opt}) => {
  
    const [more, setMore] = useState({
        title: opt.title,
        text: opt.text,
        location: opt.location,
        date: opt.date,
        
      });
  
  
  
  
  return (
    <div className="explore">
    

        
    <div className="expwrapper">
    <h1 className="profupdate">{more.title}International Autism Day</h1>
    <img className="exploreImg" src="https://www.ideas.org.au/images/djevents/1350-world-autism-awareness-day/b25ly21zojqynmqzztk3ltg3ndatndvjoc04otg2ltu5owe0zwq1ogm0yjpintexythizi02njhkltq1ytqtogrlni00ndvjoddhy2m2mzm.jpg" alt="" />
    <form className="profForm">

        <h2 className="expdetailsInput">{more.text}International Autism Day, observed on April 2nd, raises awareness about autism, promotes acceptance, inclusion, and understanding. It advocates for the rights and well-being of individuals with autism worldwide.</h2>
        <h3 className="locationInput">{more.location}Location: Bashundhara R/A, Dhaka, Bangladesh</h3>
        <h4>{more.date}Date: 2nd April, 2023</h4>

      
      
    </form>
    <button className="close" onClick={() => setOpenExplore(false)}>
      Close
    </button>
  </div>


  

  
</div>
  )
}

export default Explore
