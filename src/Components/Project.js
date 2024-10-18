import React from 'react'
import InkCraft from '../Assets/Project/Inkcraft.png'
import SharedParty from '../Assets/Project/SharedParty.png'
import CRM from '../Assets/Project/CRM.png'

const Project = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
    <div className='project-section'>
        <div className='project-container'>
        {/* <h1 className='timeline-title'>PROJECTS</h1> */}
        <div className='project-one'>
            <div className='project-left-img-frame'>
                <img src={InkCraft} alt='inkcraft project'/>
            </div>
            <div className='project-text-container'>
                <div className='project-text-container-inner'>
                    <h1 className='project-name'>inkCraft</h1>
                    <p id='project-description'>Experience seamless t-shirt printing with our mobile app! 
                        Browse the product catalog, preview designs, streamline the printing process, and track deliveries all in one place. 
                        Say goodbye to slow responses, miscommunication, and incomplete product details!
                    </p>
                    <button type='button' className="secondary-button">
                    <a target="_blank" href='https://www.figma.com/design/SgadUzgr3hEN1HUKReYcm3/EC-Printing?node-id=0-1&t=n1YRLETG4aXSfV5O-1'>View Prototype</a>
                    </button>
                </div>
            </div>
        </div>
        </div>

        <div className='project-container'>
        {/* <h1 className='timeline-title'>PROJECTS</h1> */}
        <div className='project-two'>
            <div className='project-text-container'>
                <div className='project-two-text-container-inner'>
                    <h3 className='project-name'>Shared Party</h3>
                    <p id='project-description'>Discover the smarter way to save and connect! Our app helps you split bills, find local sales, and connect with people who share your interests. Save more while building a community, all with a seamless, user-friendly design.
                    </p>
                    <div>
                        <button type='button' className="secondary-button">
                        <a target="_blank" href='https://www.figma.com/proto/5KL0jy1CO26d85pIm2wyjW/SharedParty---Edit?type=design&node-id=31-146&t=OoGPbBk5ugfMss0W-1&scaling=scale-down&page-id=0%3A1&mode=design'>View Prototype</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='project-img-frame'>
            <img src={SharedParty} alt='SharedParty project'/>
            </div>
        </div>
        </div>

        <div className='project-one'>
            <div className='project-left-img-frame'>
            <img src={CRM} alt='CRM project'/>
            </div>
            <div className='project-text-container'>
                <div className='project-text-container-inner'>
                    <h1 className='project-name'>CRM System</h1>
                    <p id='project-description'>Designed and developed a CRM system, handling database management through ER modeling, context diagrams, physical and functional design, UI creation, SQL programming, and database manipulation using the low-code platform Retool.
                    </p>
                    <button type='button' className="secondary-button">
                        <a target="_blank" href='https://www.figma.com/proto/fs1ngJmUwkTKXHcIYMeKK5/Portfolio---CRM-UI?type=design&node-id=1-370&t=9MpGdqRdrGAHAlUu-1&scaling=contain&page-id=0%3A1&mode=design'>View Prototype</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
})

export default Project