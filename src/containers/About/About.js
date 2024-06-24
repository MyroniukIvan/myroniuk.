import React from 'react';
import ProfileDescription from '../../components/ProfileDescription/ProfileDescription';
import Timeline from '../../components/Timeline/Timeline';
import './About.scss';

function About() {
  return (
    <div>
      <div className="about">
        <div className="container">
          <span className="background">About Me.</span>
          <div className="wrapper">
            <ProfileDescription />
            <div className="skils">
              <div className="skils-section">
                <h3>Soft skills</h3>
                <h2>
                  Communication<p>&#8725;</p>Attention to detail
                  <p>&#8725;</p>Problem-solving<p>&#8725;</p>Collaboration
                  <p>&#8725;</p>
                  Time management<p>&#8725;</p> Adaptability<p>&#8725;</p>
                  Patience
                </h2>
              </div>
              <div className="skils-section">
                <h3>Technologies</h3>
                <h2>
                  React <p> &#8725; </p> Javascript <p>&#8725;</p>
                  Node.js
                  <p> &#8725; </p> Express
                  <p>&#8725;</p> Sass modules <p>&#8725;</p>
                  Next.js <p> &#8725; </p> HTML <p>&#8725;</p>
                  CSS <p> &#8725; </p> UI frameworks
                </h2>
              </div>
            </div>
            <div className="timeline">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
