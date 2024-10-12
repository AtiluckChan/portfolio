import React from "react"
import CircleBackground from "../Assets/CircleBackground.png"
import Sparkle from "../Assets/Sparkle.png"
import Avatar from "../Assets/Avatar.png"

const Home = () => {
  const handleEmailClick = () => {
    const email = 'atiluck.chan@gmail.com';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="home-banner-container">
        <div className="home-left-bg-banner-container">
          <img src={CircleBackground} alt="" />
          {/* <img className="home-left-benner-sparkle1-container" src={Sparkle} alt="" /> */}
          <img className="home-left-bg-banner-sparkle-container" src={Sparkle} alt="" />
        </div>
        <div className="home-left-banner-image-section">
          <img src={Avatar} alt="" />
        </div>
          <div className="home-text-container">
          <div>
            <h1 className="primary-heading">
              Atiluck Chanveeratham
            </h1>
            <p className="primary-text">
              A senior Digital Engineering student at SIIT 
            <br/>
              Passionate about UX/UI design and web development, 
              with skills in HTML, CSS, JavaScript, and React. 
              Focused on creating user-friendly interfaces and interactive web applications,
              always eager to learn and take on new challenges.
            </p>
            <button className="primary-button" onClick={handleEmailClick}>
              Send Me Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home