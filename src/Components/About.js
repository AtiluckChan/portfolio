import React from 'react'
import Skills from './Skills'
import ThaiFlag from '../Assets/Thaiflag.png'
import EnglishFlag from '../Assets/Englishflag.png'

const About = React.forwardRef((props, ref) => {
    const educationTimeline = [
        {
          year: "2021 - Present",
          degree: "Bachelor's in Digital Engineering",
          institution: "Sirindhorn International Institute of Technology (SIIT)",
          gpa: "3.60"
        },
        {
          year: "2018 - 2021",
          degree: "High School",
          institution: "Samsenwittayalai School (English Program)",
          gpa: "3.76"
        },
        {
          year: "2016 - 2018",
          degree: "Middle School",
          institution: "Samsenwittayalai School",
          gpa: "-"
        },
        ];
      const language = [
        {
            image: ThaiFlag,
            language: "Thai",
            proficiency: "Native",
        },
        {
            image: EnglishFlag,
            language: "English",
            proficiency: "EFSET Certificate C1 - Advanced",
        },
        ];
    return (
        <section ref={ref} className="about-section">
        <div className="about-container">
        
        <div className="timeline-container">
          <h1 className="timeline-title">Education</h1>
          <div className="timeline">
            {educationTimeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <p className="timeline-institution">
                    {item.institution}
                    <br/>
                    GPAX: {item.gpa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='all-language-container'>
            <h1 className="timeline-title">Languages</h1>
            {language.map((item, index) => (
                <div className='language-container'>
                    <div className='language-name-container'>
                    <img src={item.image} className='language-flag-image'/>
                    <div className='language-proficiency-container'>
                    <h3 className="language">{item.language}</h3>
                    <p className="language-proficiency">{item.proficiency}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      </section>
  )
}
)

export default About