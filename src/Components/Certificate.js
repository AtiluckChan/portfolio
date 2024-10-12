import React from 'react'
import GDSC from '../Assets/Activity&Certificate/GDSC.png'
import BOTNOI from '../Assets/Activity&Certificate/Botnoi.png'
import EFSET from '../Assets/Activity&Certificate/EFSET.png'
import TUSTARTUP from '../Assets/Activity&Certificate/TUStartupCer.png'

const Certificate = () => {
    const certificates = [
        {
            imgSrc: GDSC,
            altText: 'Google Developer Student Club',
            title: 'Google Developer Student Club',
          },
          {
            imgSrc: BOTNOI,
            altText: 'Google Developer Student Club',
            title: 'BOTNOI Trainee Program with Team UX/UI Designer',
          },
          {
            imgSrc: EFSET,
            altText: 'Google Developer Student Club',
            title: 'EFSET Certificate of English Level: C1 Advanced',
          },
          {
            imgSrc: TUSTARTUP,
            altText: 'Google Developer Student Club',
            title: 'Thammasat Startup Contest 2024 Top 12 Finalists Round',
          },
      ];
    
      return (
        <div className='certificate-section'>
          <h1>Certificates</h1>
          <div className='horizontal-container'>
            {certificates.map((certificates, index) => (
              <div className='card' key={index}>
                <div className='card-img-frame'>
                  <img className='card-img' src={certificates.imgSrc} alt={certificates.altText} />
                </div>
                <div className='card-text'>
                  <h4>{certificates.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Certificate