import React from "react";
import WorkingWomanAdventure from "../Assets/Project/WorkingWomanAdventure.png";
import SharedParty from "../Assets/Project/SharedParty.png";
import CRM from "../Assets/Project/CRM.png";
import SmurfDetection from "../Assets/Project/SmurfDetection.png";

const Project = React.forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="project-section">
        <div className="project-container">
          {/* <h1 className='timeline-title'>PROJECTS</h1> */}
          <div className="project-two">
            <div className="project-text-container">
              <div
                className="project-two-text-container-inner"
                style={{ paddingBlock: "3rem" }}
              >
                <h3 className="project-name" style={{ fontSize: "2rem" }}>
                  Detecting Anomalies and Identifying Smurf Players in MOBA
                  Games
                </h3>
                <p id="project-description">
                  Analyzes a dataset of ranked League of Legends matches to
                  detect unusual player behaviors, with a focus on smurfing.
                  Techniques such as Z-score analysis, K-means clustering, and
                  Isolation Forest are used to find patterns that reveal players
                  with outstanding or uncommon performance. The project also
                  provides insights into different playstyles and strategies
                  across various roles.
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button type="button" className="secondary-button">
                    <a
                      target="_blank"
                      href="https://colab.research.google.com/drive/1V38wDvimgABBSgxKaol0rY_Tinp3_Uoo?usp=sharing"
                    >
                      Google Colab
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-img-frame">
              <img src={SmurfDetection} alt="Smurf Detection project" />
            </div>
          </div>
        </div>

        <div className="project-one">
          <div className="project-left-img-frame">
            <img
              src={WorkingWomanAdventure}
              alt="Working Woman Adventure project"
            />
          </div>
          <div className="project-text-container">
            <div className="project-text-container-inner">
              <h1 className="project-name">Working Woman Adventure Game</h1>
              <p id="project-description">
                A lighthearted, choice-driven simulation game built with Python
                and Pygame, where players step into the daily life of a
                hardworking woman. From morning routines to unexpected events,
                each decision shapes her day, capturing the randomness and charm
                of everyday life.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button type="button" className="secondary-button">
                  <a
                    target="_blank"
                    href="https://www.canva.com/design/DAGqCYkFkxg/QslJa9utRacWN1f7xsdvaA/view?utm_content=DAGqCYkFkxg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0738c71cb2"
                  >
                    Game Design Document
                  </a>
                </button>
                <button type="button" className="secondary-button">
                  <a
                    target="_blank"
                    href="https://www.canva.com/design/DAGWt2StL9o/vljNRYRTMBM9TudH8Yeh4Q/view?utm_content=DAGWt2StL9o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc9817066e"
                  >
                    Presentation
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="project-two">
            <div className="project-text-container">
              <div className="project-two-text-container-inner">
                <h3 className="project-name">CRM System</h3>
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
                      href="https://www.canva.com/design/DAGqCaQvQBg/5KppHaRt7G4Ic1bTuBTQug/view?utm_content=DAGqCaQvQBg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3a9bdfa569"
                    >
                      Presentation
                    </a>
                  </button>
                  <button type="button" className="secondary-button">
                    <a
                      target="_blank"
                      href="https://rng22.retool.com/apps/beae511e-8ad5-11ee-9e6a-47eb3caa3be6/CRM%20Final%20Project/CRM%20CustomerInfo%20-%20with%20Procedure"
                    >
                      System
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project-img-frame">
              <img src={CRM} alt="CRM project" />
            </div>
          </div>
        </div>

        <div className="project-one">
          <div className="project-left-img-frame">
            <img src={SharedParty} alt="SharedParty project" />
          </div>
          <div className="project-text-container">
            <div className="project-text-container-inner">
              <h1 className="project-name">Shared Party</h1>
              <p id="project-description">
                Designed a mobile application UXUI to help users split bills,
                discover local sales, and connect with others who share similar
                interests. Focused on creating a seamless and user-friendly
                interface that encourages savings and community building through
                an intuitive user experience.
              </p>
              <div>
                <button type="button" className="secondary-button">
                  <a
                    target="_blank"
                    href="https://www.figma.com/proto/5KL0jy1CO26d85pIm2wyjW/SharedParty---Edit?type=design&node-id=31-146&t=OoGPbBk5ugfMss0W-1&scaling=scale-down&page-id=0%3A1&mode=design"
                  >
                    Prototype
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Project;
