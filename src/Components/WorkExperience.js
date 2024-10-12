import React from 'react'
import BotnoiLogo from '../Assets/BotnoiLogo.avif'

const WorkExperience = () => {
    const workComponent = [
        {
          companyImg: BotnoiLogo,
          companyName: "Botnoi Co., Ltd.",
          Period: "July 2024 - Present",
          Description: [
            { title: "FIGMA", text: "Redesign company product pricing page following the requirement, applying the design system." },
            { title: "Collaboration", text: "With UX/UI team members to ensure cohesive design implementation." },
            { title: "Usability Testing", text: "With A/B testing and surveys on 10 participants using Maze, Discord, and Google Forms." },
            { title: "Presented Insights", text: "From usability testing to the team, and presented team progress and achievements." }
          ]
        }
    ];

    return (
        <div className='workExperience-container'>
            <h1 className="timeline-title">WORK EXPERIENCE</h1>
            <div className="workExperience-content">
                {workComponent.map((item, index) => (
                    <div key={index} className="workExperience-wrapper">
                        {/* Left Section */}
                        <div className="company-details">
                            <img src={item.companyImg} alt={`${item.companyName} logo`} className="company-logo"/>
                            <p className="company-name">{item.companyName}</p>
                            <p className="work-period">{item.Period}</p>
                        </div>
                        
                        {/* Right Section */}
                        <div className="work-cards">
                            {item.Description.map((desc, i) => (
                                <div key={i} className="work-card">
                                    <h3>{desc.title}</h3>
                                    <p>{desc.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience;