import React, { useState } from 'react';
import Figma101 from '../Assets/Activity&Certificate/Figma101.png';
import PRSinno from '../Assets/Activity&Certificate/Sinno Club Member Public Relations.png';
import PRLeadership from '../Assets/Activity&Certificate/Leadership.png';
import TUStartup from '../Assets/Activity&Certificate/TUStartup.png';
import KeioUniversity from '../Assets/Activity&Certificate/KeioUniversity.png';

const Activity = React.forwardRef((props, ref) => {
  const [clickedCard, setClickedCard] = useState(null);

  const activities = [
    {
      imgSrc: Figma101,
      altText: 'Google Developer Student Club',
      title: 'FIGMA101 Workshop Speaker',
      description: 'Organized a workshop on design thinking and UX/UI, and led the basic Figma instruction session.',
    },
    {
      imgSrc: PRSinno,
      altText: 'PR SINNO Club',
      title: 'Sinno Club Member Public Relations',
      description: 'Contributed to SINNO club activities and managed public relations on Instagram and Line.',
    },
    {
      imgSrc: PRLeadership,
      altText: 'PR SIIT Leadership Camp',
      title: 'SIIT Leadership Camp 2023 Public Relations',
      description: 'Created public relations media for SIIT Leadership Camp 2023, including Instagram posts, posters, and T-shirts.',
    },
    {
      imgSrc: TUStartup,
      altText: 'TU Start-up',
      title: 'Thammasat Startup Contest',
      description: 'Advanced to the Top 12 Finalist Round in the Thammasat Startup Contest 2024.',
    },
    {
      imgSrc: KeioUniversity,
      altText: 'Google Developer Student Club',
      title: 'International Study Trip at Keio University',
      description: 'Joined a self-driving tech workshop, programmed in C to simulate car paths and obstacle detection.',
    },
  ];

  const handleCardClick = (index) => {
    setClickedCard(index === clickedCard ? null : index); // Toggle card click
  };

  return (
    <section ref={ref}>
      <div className='activity-section'>
        <h1>Activities</h1>
        <div className='horizontal-container'>
          {activities.map((activity, index) => (
            <div 
              className={`card ${clickedCard === index ? 'clicked' : ''}`} 
              key={index} 
              onClick={() => handleCardClick(index)}
            >
              <div className='card-img-frame'>
                <img className='card-img' src={activity.imgSrc} alt={activity.altText} />
                <div className='overlay'>
                  <p className='description'>{activity.description}</p>
                </div>
              </div>
              <div className='card-text'>
                <h4>{activity.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Activity;
