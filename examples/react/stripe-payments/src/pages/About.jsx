import React from 'react';
import AboutCard from '../components/AboutCard';

const About = () => {
  return (
    <div className='about'>
      <AboutCard />
      <div className='about__info'>
        <p>
          I am a FullStack JavaScript Developer in progress with a degree in
          Master in Music with emphasis in Jazz and Popular Music. Since my last
          5 years, I was working on music prouction with a closed relationship
          with the tech world, which goes me to enrrolled to the Bootcamp
          programing from Make It Real. Actually, I belong to the TOP program
          v24 and I have worked with agile methodologies like SCRUM on Jira
          during the journey and other soft/hard skills, that allows me to
          develop software applications based on MVC architectures that defintly
          are necesarily to keep a good performance and improve our workflow.
          Last but not least, all there tools drives me to the right way to
          become in a great developer.
        </p>
        <h4>Some technologies I have learned in Make It Real:</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaSript</li>
          <li>Git - GitHub</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>SASS</li>
        </ul>
        <a
          href='https://github.com/jtnovellis/assesment-frontend-sprint-4'
          target='blank'>
          Link to GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default About;
