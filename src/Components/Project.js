import React from "react";
import InkCraft from "../Assets/Project/Inkcraft.png";
import SharedParty from "../Assets/Project/SharedParty.png";
import CRM from "../Assets/Project/CRM.png";
import ThailandElectionDashboard from "../Assets/Project/ThailandElectionDashboard.png";
import SmurfDetection from "../Assets/Project/SmurfDetection.png";

const Project = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="project-section">
        <div className="project-container">
          {/* <h1 className='timeline-title'>PROJECTS</h1> */}
          <div className="project-two">
            <div className="project-text-container">
              <div className="project-two-text-container-inner">
                <h3 className="project-name">Thailand Election Dashboard</h3>
                <p id="project-description">
                  Developed a website to display Thailand election results,
                  inspired by existing platforms showing the latest Thailand
                  election outcomes. Contributed in designing original logic for
                  a dynamic Thailand map that automatically updates based on
                  changes in the number of provinces and election results across
                  different years.
                </p>
              </div>
            </div>
            <div className="project-img-frame">
              <img
                src={ThailandElectionDashboard}
                alt="Thailand Election Dashboard project"
              />
            </div>
          </div>
        </div>

        <div className="project-one">
          <div className="project-left-img-frame">
            <img src={CRM} alt="CRM project" />
          </div>
          <div className="project-text-container">
            <div className="project-text-container-inner">
              <h1 className="project-name">CRM System</h1>
              <p id="project-description">
                Designed and developed a CRM system, handling database
                management through ER modeling, context diagrams, physical and
                functional design, UI creation, SQL programming, and database
                manipulation using the low-code platform Retool.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button type="button" className="secondary-button">
                  <a
                    target="_blank"
                    href="https://www.canva.com/design/DAF5ZTeitiA/LW-GJZ4UBMDvpqZgaOI-xw/view?utm_content=DAF5ZTeitiA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h023e441f41"
                  >
                    View Designed ER Diagram
                  </a>
                </button>
                <button type="button" className="secondary-button">
                  <a
                    target="_blank"
                    href="https://www.figma.com/proto/fs1ngJmUwkTKXHcIYMeKK5/Portfolio---CRM-UI?type=design&node-id=1-370&t=9MpGdqRdrGAHAlUu-1&scaling=contain&page-id=0%3A1&mode=design"
                  >
                    View Prototype
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          {/* <h1 className='timeline-title'>PROJECTS</h1> */}
          <div className="project-two">
            <div className="project-text-container">
              <div className="project-two-text-container-inner">
                <h3 className="project-name" style={{ fontSize: "2rem" }}>
                  Detecting Anomalies and Identifying Smurf Players in MOBA
                  Games
                </h3>
                <p id="project-description">
                  This project analyzes a dataset of ranked League of Legends
                  matches to detect unusual player behaviors, with a focus on
                  smurfing. Techniques such as Z-score analysis, K-means
                  clustering, and Isolation Forest are used to find patterns
                  that reveal players with outstanding or uncommon performance.
                  The project also provides insights into different playstyles
                  and strategies across various roles.
                </p>
              </div>
            </div>
            <div className="project-img-frame">
              <img src={SmurfDetection} alt="Smurf Detection project" />
            </div>
          </div>
        </div>

        <div className="project-container">
          {/* <h1 className='timeline-title'>PROJECTS</h1> */}
          <div className="project-one">
            <div className="project-left-img-frame">
              <img src={InkCraft} alt="inkcraft project" />
            </div>
            <div className="project-text-container">
              <div className="project-text-container-inner">
                <h1 className="project-name">inkCraft</h1>
                <p id="project-description">
                  Designed a mobile application UXUI to improve the t-shirt
                  printing experience. The app allows users to browse the
                  product catalog, preview designs, streamline the printing
                  process, and track deliveries in real time. Focused on solving
                  user pain points such as slow communication, unclear product
                  details, and inefficient ordering workflows by creating an
                  intuitive and responsive interface.
                  {/* Experience seamless t-shirt printing with our mobile app!
                  Browse the product catalog, preview designs, streamline the
                  printing process, and track deliveries all in one place. Say
                  goodbye to slow responses, miscommunication, and incomplete
                  product details! */}
                </p>
                <button type="button" className="secondary-button">
                  <a
                    target="_blank"
                    href="https://www.figma.com/design/SgadUzgr3hEN1HUKReYcm3/EC-Printing?node-id=0-1&t=n1YRLETG4aXSfV5O-1"
                  >
                    View Prototype
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          {/* <h1 className='timeline-title'>PROJECTS</h1> */}
          <div className="project-two">
            <div className="project-text-container">
              <div className="project-two-text-container-inner">
                <h3 className="project-name">Shared Party</h3>
                <p id="project-description">
                  Designed a mobile application UXUI to help users split bills,
                  discover local sales, and connect with others who share
                  similar interests. Focused on creating a seamless and
                  user-friendly interface that encourages savings and community
                  building through an intuitive user experience.
                  {/* Discover the smarter way to save and connect! Our app helps
                  you split bills, find local sales, and connect with people who
                  share your interests. Save more while building a community,
                  all with a seamless, user-friendly design. */}
                </p>
                <div>
                  <button type="button" className="secondary-button">
                    <a
                      target="_blank"
                      href="https://www.figma.com/proto/5KL0jy1CO26d85pIm2wyjW/SharedParty---Edit?type=design&node-id=31-146&t=OoGPbBk5ugfMss0W-1&scaling=scale-down&page-id=0%3A1&mode=design"
                    >
                      View Prototype
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-img-frame">
              <img src={SharedParty} alt="SharedParty project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Project;
