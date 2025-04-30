import React from "react";
import ThaiFlag from "../Assets/Thaiflag.png";
import EnglishFlag from "../Assets/Englishflag.png";

const About = React.forwardRef((props, ref) => {
  const educationTimeline = [
    {
      year: "2021 - Present",
      degree: "Bachelor's in Digital Engineering (Thammasat University)",
      institution: "Sirindhorn International Institute of Technology (SIIT)",
      gpa: "3.60",
      detail: [
        "Application Software Development Track",
        "Digital Engineering Curriculum",
      ],
    },
    {
      year: "2018 - 2021",
      degree: "High School",
      institution: "Samsenwittayalai School (English Program)",
      gpa: "3.76",
    },
    {
      year: "2016 - 2018",
      degree: "Middle School",
      institution: "Samsenwittayalai School",
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
        <div className="education-section">
          <h1 className="secondary-heading">Education</h1>
          <div className="education-timeline">
            {educationTimeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <p className="timeline-institution">
                    {item.institution}
                    <br />
                    {item.gpa && "GPAX: " + item.gpa}
                  </p>
                  {item.detail &&
                    item.detail.map((detail, index) => {
                      return (
                        <p key={index} className="timeline-detail">
                          {detail}
                        </p>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="language-section">
          <h1 className="secondary-heading">Languages</h1>
          {language.map((item, index) => (
            <div key={index} className="language-container">
              <div className="one-language-container">
                <img
                  alt="flag"
                  src={item.image}
                  className="language-flag-image"
                />
                <div className="language-proficiency-container">
                  <h3>{item.language}</h3>
                  <p id="p-two-text">{item.proficiency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;
