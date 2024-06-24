import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';
import './Title.scss';

gsap.registerPlugin(ScrollTrigger);

const Title = ({ title, text, paragraph, email }) => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=400',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });
  }, []);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <div className="section-title" ref={addToRefs}>
      <div className="section__title">
        <p>{text}</p>
        <h1>{title}</h1>
        <a href="mailto:vanyamironyuk5@gmail.com">{email}</a>
      </div>
      <div className="section-paragraph">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;
