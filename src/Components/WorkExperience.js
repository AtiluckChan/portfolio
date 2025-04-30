import React from "react";
import BotnoiLogo from "../Assets/BotnoiLogo.avif";
import UniHR from "../Assets/UniHR.png";

const WorkExperience = React.forwardRef((props, ref) => {
  const workComponent = [
    {
      companyImg: UniHR,
      companyName: "SCG Chemicals AntHR-UniHR",
      position: "Full-stack Web Developer Internship",
      Period: "January - May 2025",
      Description: [
        {
          title: "Sample Shuttle Tracking System",
          text: "Contributed to the development of a website for tracking the delivery status of experiment samples with GPS updates. Implemented features for managing bookings and monitoring package status and location.",
        },
        {
          title: "Location Pickup & Drop-off System",
          text: "Contributed in the creation of a pickup & drop-off system for company employees, including driver location tracking, notifications to nearby driver, and full booking management.",
        },
        {
          title: "Overall Code",
          text: "Identified and resolved bugs, and improved overall code quality for better system performance.",
        },
      ],
    },
    {
      companyImg: BotnoiLogo,
      companyName: "Botnoi Co., Ltd.",
      position: "UXUI Designer Internship",
      Period: "June - August 2024",
      Description: [
        {
          title: "FIGMA",
          text: "Redesign company product pricing page following the requirement, applying the design system.",
        },
        {
          title: "Collaboration",
          text: "With UX/UI team members to ensure cohesive design implementation.",
        },
        {
          title: "Usability Testing",
          text: "With A/B testing and surveys on 10 participants using Maze, Discord, and Google Forms.",
        },
        {
          title: "Result",
          text: "Increased user satisfaction for ease of use by 10.26% and boosted preference for the professional package by 80% with improved design.",
        },
      ],
    },
  ];

  return (
    <section ref={ref}>
      <div className="work-experience-section">
        <h1 className="secondary-heading">Work Experience</h1>
        {/* <div className="work-experience-conatiner"> */}
        {workComponent.map((item, index) => (
          <div key={index} className="work-experience-conatiner">
            {/* Left Section */}
            <div className="company-card">
              <img
                src={item.companyImg}
                alt={`${item.companyName} logo`}
                className="company-logo"
              />
              <div>
                <p className="company-name">{item.companyName}</p>
                <p className="position">{item.position}</p>
              </div>
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
  );
});

export default WorkExperience;
