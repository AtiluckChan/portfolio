import React from "react"
import CircleBackground from "../Assets/CircleBackground.png"
import Sparkle from "../Assets/Sparkle.png"
import Avatar from "../Assets/Avatar.png"
import { FaGithub } from 'react-icons/fa';

const Home = React.forwardRef((props, ref) => {
  const handleEmailClick = () => {
    const email = 'atiluck.chan@gmail.com';
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
          <img className="home-left-bg-banner-sparkle-container" src={Sparkle} alt="sparkle background" />
        </div>
        <div className="home-left-banner-image-section">
          <img src={Avatar} alt="avatar" />
        </div>
          <div className="home-text-container">
          <div>
            <h1 className="primary-heading">
              Atiluck Chanveeratham
            </h1>
            <p id="p-one-text">
              A senior Digital Engineering student at SIIT 
            <br/>
              Passionate about UX/UI design and web development, 
              with skills in HTML, CSS, JavaScript, and React. 
              Focused on creating user-friendly interfaces and interactive web applications,
              always eager to learn and take on new challenges.
            </p>
            <div className="button-container">
              <button className="primary-button">
                <a href="https://github.com/AtiluckChan" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="github-icon" size={25}/>
                </a>
              </button>
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

export default Home