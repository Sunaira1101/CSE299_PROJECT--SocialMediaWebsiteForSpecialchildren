import "./job.css"
import React, { useState } from 'react'

const Job = () => {
    const [jobs] = useState([
        {
            title: 'IT Help Desk Agent - REMOTE',
            company: 'Learning Care Group, Inc',
            location: 'Henderson, NV 89014',
            salary: '$25-$30 per hour',
            text: 'Join a strong community where all we do is care-for the children and families we serve every day, as well as for our dedicated team members.',
            details: 'https://www.amazon.com/',
            apply: 'https://www.amazon.com/'
        },
        {
            title: 'Art and Design',
            company: 'Art and Design, Inc',
            location: 'Henderson, NV 89014',
            salary: '$75-$85 per hour',
            text: 'Many people with ASD are very visually oriented and excel at creating 2D or 3D images. These skills can be translated into a variety of creative or industrial careers including animator, CAD designer, photographer, architect, illustrator or artist.',
            details: 'https://www.amazon.com/',
            apply: 'https://www.amazon.com/'
        },
        {
            title: 'Researcher',
            company: 'Researcher, Inc',
            location: 'Henderson, NV 89014',
            salary: '$30-$40 per hour',
            text: 'People with autism can leverage their interest in facts to pursue a career in research. Possible jobs include reference librarian, title abstractor, fact-checker, genealogist or research assistant.',
            details: 'https://www.amazon.com/',
            apply: 'https://www.amazon.com/'
        },
        {
            title: 'Animal Science',
            company: 'Animal Science, Inc',
            location: 'Henderson, NV 89014',
            salary: '$80-$90 per hour',
            text: 'For those who enjoy working with pets, career options include veterinary technician, groomer, obedience trainer, dog walker or pet sitter.',
            details: 'https://www.amazon.com/',
            apply: 'https://www.amazon.com/'
        },
        {
            title: 'IT Help Desk Agent - REMOTE',
            company: 'Learning Care Group, Inc',
            location: 'Henderson, NV 89014',
            salary: '$25-$30 per hour',
            text: 'Join a strong community where all we do is care-for the children and families we serve every day, as well as for our dedicated team members.',
            details: 'https://www.amazon.com/',
            apply: 'https://www.amazon.com/'
        },
        {
            title: 'Art and Design',
            company: 'Art and Design, Inc',
            location: 'Henderson, NV 89014',
            salary: '$75-$85 per hour',
            text: 'Many people with ASD are very visually oriented and excel at creating 2D or 3D images. These skills can be translated into a variety of creative or industrial careers including animator, CAD designer, photographer, architect, illustrator or artist.',
            details: 'https://www.amazon.com/',
            apply: 'https://www.amazon.com/'
        }
    ])



  return (
    <div className="job">
      <section className="jsec">
        <div className="jobcontainer">
            <h1 className="jobname">Job Openings For Your Child</h1>
            <div className="jobs">
                {
                    jobs.map((jobcard, i) => (

                        <div key={i} className="jobcardcard">
                            <h2 className="jobcardname">{jobcard.title}</h2>
                            <h3 className="jobcardcompany">{jobcard.company}</h3>
                            <h4 className="jobcardlocation">{jobcard.location}</h4>
                            <h5 className="jobcardsalary">{jobcard.salary}</h5>
                            <span className="jobptext">{jobcard.text}</span>
                            <a className="hrefdetails" href={jobcard.details}>MORE DETAILS</a>
                            <br />
                            <br />
                            <a className="hrefapply" href={jobcard.apply}>APPLY NOW</a>  
                        </div>

                    ))
                }
                
            </div>

        </div>
      </section>
    </div>
  )
}

export default Job
