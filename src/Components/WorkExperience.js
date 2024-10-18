import React from 'react'
import BotnoiLogo from '../Assets/BotnoiLogo.avif'

const WorkExperience = React.forwardRef((props, ref) => {
    const workComponent = [
        {
          companyImg: BotnoiLogo,
          companyName: "Botnoi Co., Ltd.",
          Period: "June - August 2024",
          Description: [
            { title: "FIGMA", text: "Redesign company product pricing page following the requirement, applying the design system." },
            { title: "Collaboration", text: "With UX/UI team members to ensure cohesive design implementation." },
            { title: "Usability Testing", text: "With A/B testing and surveys on 10 participants using Maze, Discord, and Google Forms." },
            { title: "Result", text: "Increased user satisfaction for ease of use by 10.26% and boosted preference for the professional package by 80% with improved design." }
          ]
        }
    ];

    return (
        <section ref={ref}>
        <div className='work-experience-section'>
            <h1 className="secondary-heading">Work Experience</h1>
            {/* <div className="work-experience-conatiner"> */}
                {workComponent.map((item, index) => (
                    <div key={index} className="work-experience-conatiner">
                        {/* Left Section */}
                        <div className="company-card">
                            <img src={item.companyImg} alt={`${item.companyName} logo`} className="company-logo"/>
                            <p className="company-name">{item.companyName}</p>
                            <p className="work-period">{item.Period}</p>
                        </div>
                        
                        {/* Right Section */}
                        <div className="work-card-container">
                            {item.Description.map((desc, i) => (
                                <div key={i} className="work-card">
                                    <h3>{desc.title}</h3>
                                    <p>{desc.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            {/* </div> */}
        </div>
        </section>
    )
})

export default WorkExperience;