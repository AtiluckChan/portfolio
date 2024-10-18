import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* <div className='footer-section'>
          <h2>Company Name</h2>
          <p>Your tagline or company mission statement here. Delivering quality products since 2021.</p>
        </div>

        <div className='footer-section'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/careers'>Careers</a></li>
          </ul>
        </div> */}

        <div className='footer-section'>
          <h3>Atiluck Chanveeratham</h3>
          <p id='p-two-text'>Email: atiluck.chan@gmail.com</p>
          <p id='p-two-text'>Phone: +66 95 241 4954</p>
          <p id='p-two-text'>Address: Bangkok, Thailand</p>
        </div>

        {/* <div className='footer-section'>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <img src='/path/to/facebook-icon.png' alt='Facebook' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <img src='/path/to/twitter-icon.png' alt='Twitter' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <img src='/path/to/instagram-icon.png' alt='Instagram' />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
              <img src='/path/to/linkedin-icon.png' alt='LinkedIn' />
            </a>
          </div>
        </div> */}
      </div>

      {/* <div className='footer-bottom'>
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
