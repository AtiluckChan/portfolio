import React from "react";
import CircleBackground from "../Assets/CircleBackground.png";
import Sparkle from "../Assets/Sparkle.png";
import Avatar from "../Assets/Avatar.png";
import { FaGithub } from "react-icons/fa";

const Home = React.forwardRef((props, ref) => {
  const handleEmailClick = () => {
    const email = "atiluck.chan@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section ref={ref}>
      <div>
        <div className="home-banner-container">
          <div className="home-left-bg-banner-container">
            <img src={CircleBackground} alt="circle background" />
            {/* <img className="home-left-benner-sparkle1-container" src={Sparkle} alt="" /> */}
            <img
              className="home-left-bg-banner-sparkle-container"
              src={Sparkle}
              alt="sparkle background"
            />
          </div>
          <div className="home-left-banner-image-section">
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="home-text-container">
            <div>
              <h1 className="primary-heading">Atiluck Chanveeratham</h1>
              <p id="p-one-text">
                A senior year Digital Engineering student at Sirindhorn International
                Institute of Technology (SIIT), Thammasat University
                <br />
                Passionate about full-stack web development. Skilled in HTML,
                CSS, JavaScript, and SQL, with experience in frontend and
                backend development, responsive design, and UX/UI principles.
                <br />
                Seeking an opportunity to apply my skills and contribute to
                impactful projects.
              </p>
              <div className="button-container">
                <a
                  className="primary-button"
                  href="https://github.com/AtiluckChan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" size={25} />
                </a>
                <button className="primary-button" onClick={handleEmailClick}>
                  Send Me Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Home;
