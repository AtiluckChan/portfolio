import React from 'react'
import InkCraft from '../Assets/Project/Inkcraft.png'
import SharedParty from '../Assets/Project/SharedParty.png'
import CRM from '../Assets/Project/CRM.png'

const Project = () => {
  return (
    <div className='project-section'>
        <div className='project-container'>
        {/* <h1 className='timeline-title'>PROJECTS</h1> */}
        <div className='one-project'>
            <div className='project-img-frame-left'>
            <img src={InkCraft} alt='inkcraft project'/>
            </div>
            <div className='project-text-container-right'>
                <div className='project-text-container-inner'>
                    <h1 className='project-name'>inkCraft</h1>
                    <p className='project-description'>Experience seamless t-shirt printing with our mobile app! 
                        Browse the product catalog, preview designs, streamline the printing process, and track deliveries all in one place. 
                        Say goodbye to slow responses, miscommunication, and incomplete product details!
                    </p>
                    <button className="secondary-button">
                    View Prototype
                    </button>
                </div>
            </div>
        </div>
        </div>

        <div className='project-container'>
        {/* <h1 className='timeline-title'>PROJECTS</h1> */}
        <div className='two-project'>
            <div className='project-text-container'>
                <div className='project-text-container-inner'>
                    <h3 className='project-name'>Shared Party</h3>
                    <p className='project-description'>Discover the smarter way to save and connect! Our app helps you split bills, find local sales, and connect with people who share your interests. Save more while building a community, all with a seamless, user-friendly design.
                    </p>
                    <button className="secondary-button">
                    View Prototype
                    </button>
                </div>
            </div>
            <div className='project-img-frame'>
            <img src={SharedParty} alt='inkcraft project'/>
            </div>
        </div>
        </div>

        <div className='one-project'>
            <div className='project-img-frame-left'>
            <img src={CRM} alt='inkcraft project'/>
            </div>
            <div className='project-text-container-right'>
                <div className='project-text-container-inner'>
                    <h1 className='project-name'>CRM System</h1>
                    <p className='project-description'>Designed and developed a CRM system, handling database management through ER modeling, context diagrams, physical and functional design, UI creation, SQL programming, and database manipulation using the low-code platform Retool.
                    </p>
                    <button className="secondary-button">
                    View Prototype
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project