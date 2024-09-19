import React from 'react'
import Canva from '../Assets/SoftwareLogo/Canva.jpg'
import Figma from '../Assets/SoftwareLogo/Figma.jpg'
import Framer from '../Assets/SoftwareLogo/Framer.png'
import Maze from '../Assets/SoftwareLogo/Maze.png'
import LineOA from '../Assets/SoftwareLogo/LineOA.jpg'
import LineFlex from '../Assets/SoftwareLogo/Lineflexmessage.png'
import ChatGPT from '../Assets/SoftwareLogo/Chatgpt.jpg'
import Notion from '../Assets/SoftwareLogo/Notion.jpg'

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
        </div>
  )
}

export default Skills