import { motion } from 'framer-motion';
import { Expo } from 'gsap';
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import './style.scss';

const StrokeAnimationMyroniuk = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/data/animation.json'),
    });
  }, []);

  let list = useRef();

  return (
    <div ref={list} className="StrokeAnimation">
      <motion.div className="container" ref={container}></motion.div>
      <motion.div
        className="floating-image"
        initial={{ opacity: 0 }}
        transition={{
          // ease: Power3.easeOut,
          ease: Expo.easeOut,
          duration: 0.8,
        }}
      ></motion.div>
    </div>
  );
};

export default StrokeAnimationMyroniuk;
