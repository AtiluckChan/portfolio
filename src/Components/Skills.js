import React from 'react'
import Canva from '../Assets/SoftwareLogo/Canva.jpg'
import Figma from '../Assets/SoftwareLogo/Figma.jpg'
import Framer from '../Assets/SoftwareLogo/Framer.png'
import Maze from '../Assets/SoftwareLogo/Maze.png'
import LineOA from '../Assets/SoftwareLogo/LineOA.jpg'
import LineFlex from '../Assets/SoftwareLogo/Lineflexmessage.png'
import ChatGPT from '../Assets/SoftwareLogo/Chatgpt.jpg'
import Notion from '../Assets/SoftwareLogo/Notion.jpg'
import VSCode from '../Assets/SoftwareLogo/VSCode.jpg'
import HTML from '../Assets/Programming/HTML.png'
import CSS from '../Assets/Programming/CSS.png'
import JS from '../Assets/Programming/JS.png'
import Python from '../Assets/Programming/PYTHON.png'
import REACT from '../Assets/Programming/REACT.png'
import SQL from '../Assets/Programming/SQL.png'
import UXUISkill from '../Assets/UXUISkill.png'

const Skills = () => {
    const softwareSkill = [
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
    
        const programmingSkills = [
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
            programming: "REACT",
              image: REACT,
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

          const UXUISkills = [
            {
                Skill: "Design Thinking"
            },
            {
                Skill: "User Research"
            },
            {
                Skill: "User Flow"
            },
            {
                Skill: "Usability Testing"
            },            
            {
                Skill: "Design Tools"
            },            
            {
                Skill: "Design Systems"
            },            
            {
                Skill: "Wireframing"
            },            
            {
                Skill: "Prototyping"
            },
        ];

    return (
        <div className="skill-container">
        <div className='software-container'>
            <h3>TOOLS</h3>
            <div className='software-icon-container'>
            {softwareSkill.map((item, index) => (
                <div className='one-software-container'>
                    <img className='logo-img' src={item.image}/>
                    <p className='software-name'>{item.software}</p>
                </div>
            ))}
            </div>
        </div>
        <div className='UXUIskill-container'>
            <h1 className="timeline-title">USER RESEARCH AND DESIGN</h1>
            <div className='UXUI-skill-container'>
                <div className='all-UXUIskill-container'>
                {UXUISkills.map((item, index) => (
                    <div className='one-UXUIskill-container'>
                        <li>{item.Skill}</li>
                    </div>
                ))}
                </div>
                <img className='UXUI-Image' src={UXUISkill}/>
            </div>
        </div>
        <div className='programming-container'>
            <div className='program-icon-container'>
            {programmingSkills.map((item, index) => (
                <div className='one-program-container'>
                    <img className='logo-img' src={item.image}/>
                    <p className='software-name'>{item.programming}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
  )
}

export default Skills