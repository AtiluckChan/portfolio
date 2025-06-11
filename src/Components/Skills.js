import React from "react";
import Git from "../Assets/SoftwareLogo/git.webp";
import Canva from "../Assets/SoftwareLogo/Canva.jpg";
import Figma from "../Assets/SoftwareLogo/Figma.jpg";
import Framer from "../Assets/SoftwareLogo/Framer.png";
import Maze from "../Assets/SoftwareLogo/Maze.png";
import LineOA from "../Assets/SoftwareLogo/LineOA.jpg";
import LineFlex from "../Assets/SoftwareLogo/Lineflexmessage.png";
import ChatGPT from "../Assets/SoftwareLogo/Chatgpt.jpg";
import Notion from "../Assets/SoftwareLogo/Notion.jpg";
import VSCode from "../Assets/SoftwareLogo/VSCode.jpg";
import HTML from "../Assets/Programming/HTML.png";
import CSS from "../Assets/Programming/CSS.png";
import JS from "../Assets/Programming/JS.png";
import Python from "../Assets/Programming/PYTHON.png";
import SQL from "../Assets/Programming/SQL.png";
import REACT from "../Assets/Programming/REACT.png";
import ExpressJS from "../Assets/Programming/ExpressJS.png";
import MaterialUI from "../Assets/Programming/MaterialUI.jpg";
import Bootstrap from "../Assets/Programming/Bootstrap.png"
import Redux from "../Assets/Programming/Redux.png";
import MySQL from "../Assets/Programming/MySQL.png";
import NodeJS from "../Assets/Programming/NodeJS.png";
import PostgreSQL from "../Assets/Programming/PostgreSQL.png";
import RESTful from "../Assets/Programming/RESTful.webp";
import UXUISkill from "../Assets/UXUISkill.png";

const Skills = React.forwardRef((props, ref) => {
  const softwareSkill = [
    {
      software: "Git",
      image: Git,
    },
    {
      software: "FIGMA",
      image: Figma,
    },
    {
      software: "FRAMER",
      image: Framer,
    },
    {
      software: "CANVA",
      image: Canva,
    },
    {
      software: "MAZE",
      image: Maze,
    },
    {
      software: "LINE OA",
      image: LineOA,
    },
    {
      software: "Line Flex Messages",
      image: LineFlex,
    },
    {
      software: "CHATGPT",
      image: ChatGPT,
    },
    {
      software: "NOTION",
      image: Notion,
    },
    {
      software: "VS Code",
      image: VSCode,
    },
  ];

  const programmingLanguagesSkills = [
    {
      programming: "HTML",
      image: HTML,
    },
    {
      programming: "CSS",
      image: CSS,
    },
    {
      programming: "JAVASCRIPT",
      image: JS,
    },
    {
      programming: "PYTHON",
      image: Python,
    },
    {
      programming: "SQL",
      image: SQL,
    },
  ];

  const frameworkAndLibrary = [
    {
      programming: "Material UI",
      image: MaterialUI,
    },
    {
      programming: "Bootstrap",
      image: Bootstrap,
    },
    {
      programming: "REACT",
      image: REACT,
    },
    {
      programming: "Redux",
      image: Redux,
    },
    {
      programming: "Express.js",
      image: ExpressJS,
    },
  ];

  const apiDbBackend = [
    {
      programming: "RESTful APIs",
      image: RESTful,
    },
    {
      programming: "Node.js",
      image: NodeJS,
    },
    {
      programming: "MySQL",
      image: MySQL,
    },
    {
      programming: "PostgreSQL",
      image: PostgreSQL,
    },
  ];

  const UXUISkills = [
    {
      Skill: "Design Thinking",
    },
    {
      Skill: "User Research",
    },
    {
      Skill: "User Flow",
    },
    {
      Skill: "Usability Testing",
    },
    {
      Skill: "Design Tools",
    },
    {
      Skill: "Design Systems",
    },
    {
      Skill: "Wireframing",
    },
    {
      Skill: "Prototyping",
    },
  ];

  return (
    <section ref={ref}>
      <div className="skill-container">
        <h3>Programming & Markup Languages</h3>
        <div className="programming-section">
          <div className="program-container">
            {programmingLanguagesSkills.map((item, index) => (
              <div key={index} className="one-program-container">
                <img
                  alt={item.programming + " logo"}
                  className="logo-img"
                  src={item.image}
                />
                <p id="p-three-text">{item.programming}</p>
              </div>
            ))}
          </div>
        </div>
        <h3>Frameworks & Libraries</h3>
        <div className="programming-section">
          <div className="program-container">
            {frameworkAndLibrary.map((item, index) => (
              <div key={index} className="one-program-container">
                <img
                  alt={item.programming + " logo"}
                  className="logo-img"
                  src={item.image}
                />
                <p id="p-three-text">{item.programming}</p>
              </div>
            ))}
          </div>
        </div>
        <h3>Database & Backend & APIs</h3>
        <div className="programming-section">
          <div className="program-container">
            {apiDbBackend.map((item, index) => (
              <div key={index} className="one-program-container">
                <img
                  alt={item.programming + " logo"}
                  className="logo-img"
                  src={item.image}
                />
                <p id="p-three-text">{item.programming}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="uxui-skill-section">
          <h1 className="secondary-heading">User Research & Design</h1>
          <div className="uxui-skill-container">
            <div className="all-uxui-skill-container">
              {UXUISkills.map((item, index) => (
                <div key={index}>
                  <li>{item.Skill}</li>
                </div>
              ))}
            </div>
            <img
              alt="UXUI research"
              className="uxui-right-image"
              src={UXUISkill}
            />
          </div>
        </div>
        <div className="software-section">
          <h3>TOOLS</h3>
          <div className="software-container">
            {softwareSkill.map((item, index) => (
              <div key={index} className="one-software-container">
                <img
                  alt={item.software + " logo"}
                  className="logo-img"
                  src={item.image}
                />
                <p id="p-three-text">{item.software}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
