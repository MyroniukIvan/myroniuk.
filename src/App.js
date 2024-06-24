import { motion, AnimatePresence } from 'framer-motion';
import { Expo } from 'gsap';
import React, { useEffect, useState } from 'react';

import './App.scss';

import AnimatedCursor from 'react-animated-cursor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../src/containers/About/About';
import Contact from '../src/containers/Contact/Contact';
import Home from '../src/containers/Home/Home';
import Coding from './components/Coding/Coding';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portofolio from './containers/Portofolio/Portofolio';

import ScrollToTop from './hooks/ScrollToTop';

function App() {
  const [isRendered, setIsRendered] = useState(false);
  const toggle = () => {
    if (window.scrollY > 700) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggle);
    return () => {
      window.removeEventListener('scroll', toggle);
    };
  });

  return (
    <Router>
      <ScrollToTop />
      <motion.div className="App">
        <Header />
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portofolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/coding" component={Coding} />
          </Switch>
        </AnimatePresence>
        <Footer />
        <motion.a
          initial={{ opacity: 0 }}
          animate={{
            opacity: isRendered ? 1 : 0,
          }}
          transition={{
            ease: Expo.easeOut,
            duration: 1,
          }}
          href="#top"
          className="back-to-top"
          title="Back to Top"
        >
          <p className="back-to-top__image">↑</p>
        </motion.a>
      </motion.div>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        color="0, 0, 0"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={5}
      />
    </Router>
  );
}

export default App;
