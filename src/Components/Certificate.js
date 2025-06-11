import React from "react";
import FullstackUdemy from "../Assets/Activity&Certificate/UdemyCertificateCompletedFullstackDevelopment.jpg";
import GDSC from "../Assets/Activity&Certificate/GDSC.png";
import BOTNOI from "../Assets/Activity&Certificate/Botnoi.png";
import EFSET from "../Assets/Activity&Certificate/EFSET.png";
import TUSTARTUP from "../Assets/Activity&Certificate/TUStartupCer.png";

const Certificate = React.forwardRef((props, ref) => {
  const certificates = [
    {
      imgSrc: FullstackUdemy,
      altText:  "The Complete Full-Stack Web Development Bootcamp",
      title: "The Complete Full-Stack Web Development Bootcamp",
    },
    {
      imgSrc: GDSC,
      altText: "Google Developer Student Club",
      title: "Google Developer Student Club",
    },
    {
      imgSrc: BOTNOI,
      altText: "BOTNOI Trainee Program with Team UX/UI Designer",
      title: "BOTNOI Trainee Program with Team UX/UI Designer",
    },
    {
      imgSrc: EFSET,
      altText: "EFSET Certificate of English Level: C2 Proficient",
      title: "EFSET Certificate of English Level: C2 Proficient",
    },
    {
      imgSrc: TUSTARTUP,
      altText: "Thammasat Startup Contest 2024 Top 12 Finalists Round",
      title: "Thammasat Startup Contest 2024 Top 12 Finalists Round",
    },
  ];

  return (
    <section ref={ref}>
      <div className="certificate-section">
        <h1>Certificates</h1>
        <div className="horizontal-container">
          {certificates.map((certificates, index) => (
            <div className="card1" key={index}>
              <div className="card-img-frame">
                <img
                  className="card-img"
                  src={certificates.imgSrc}
                  alt={certificates.altText}
                />
              </div>
              <div className="card-text">
                <h4>{certificates.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Certificate;
