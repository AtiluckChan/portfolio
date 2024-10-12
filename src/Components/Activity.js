import React from 'react';
import Figma101 from '../Assets/Activity&Certificate/Figma101.png'
import PRSinno from '../Assets/Activity&Certificate/Sinno Club Member Public Relations.png'
import PRLeadership from '../Assets/Activity&Certificate/Leadership.png'
import TUStartup from '../Assets/Activity&Certificate/TUStartup.png'
import KeioUniversity from '../Assets/Activity&Certificate/KeioUniversity.png'

const Activity = () => {
  const activities = [
    {
      imgSrc: Figma101,
      altText: 'Google Developer Student Club',
      title: 'FIGMA101 Workshop Speaker',
    },
    {
      imgSrc: PRSinno,
      altText: 'PR SINNO Club',
      title: 'Sinno Club Member Public Relations',
    },
    {
      imgSrc: PRLeadership,
      altText: 'PR SIIT Leadership Camp',
      title: 'SIIT Leadership Camp 2023 Public Relations',
    },
    {
      imgSrc: TUStartup,
      altText: 'TU Start-up',
      title: 'Thammasat Startup Contest',
    },
    {
      imgSrc: KeioUniversity,
      altText: 'Google Developer Student Club',
      title: 'International Study Trip at Keio University',
    }
  ];

  return (
    <div className='activity-section'>
      <h1>ACTIVITIES</h1>
      <div className='horizontal-container'>
        {activities.map((activity, index) => (
          <div className='card' key={index}>
            <div className='card-img-frame'>
              <img className='card-img' src={activity.imgSrc} alt={activity.altText} />
            </div>
            <div className='card-text'>
              <h4>{activity.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;