import React from 'react';
import profile from '../assets/IMG_1293.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const AboutCard = () => {
  return (
    <div className='aboutcard'>
      <div className='aboutcard__wrapper'>
        <div className='aboutcard__ticket'>
          <div className='aboutcard__ticket--bg'></div>
          <div className='aboutcard__ticket--info'>
            <div className='ticket--img'>
              <img
                src={profile}
                alt='Jairo Jair Toro Novellis'
                loading='lazy'
              />
            </div>
            <div className='ticket--info'>
              <h3>Jairo Jair Toro Novellis</h3>
              <p>Nickname: @jtnovellis</p>
              <p>Phone: +57 (300) 509-0433</p>
              <p>Email: jtnovellis88@hotmail.com</p>
              <div className='ticket--icons'>
                <a href='https://twitter.com/JairojairtoroN' target='blank'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href='https://www.linkedin.com/in/jairo-jair-toro-novellis-03819421b/'
                  target='blank'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href='https://github.com/jtnovellis' target='blank'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href='https://www.instagram.com/jairojairtoro/'
                  target='blank'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
