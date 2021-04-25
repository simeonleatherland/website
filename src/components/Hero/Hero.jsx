import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { motion, useAnimation } from 'framer-motion';
import Typist from 'react-typist';
import PortfolioContext from '../../context/context';
import HandImg from '../Image/HandImg';

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { name, img, location } = hero;
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const eControls = useAnimation();

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    setIsTypingDone(false);
    eControls.start({
      rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
      transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
    });
  }, [eControls, isTypingDone]);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <div className="greetings">
              Hi
              <motion.div
                animate={eControls}
                style={{ originX: 0.7, originY: 0.7 }}
                className="emoji"
              >
                <HandImg alt="hand wave" filename={img} />
              </motion.div>
            </div>
            {'My name is '} <span className="text-color-main">{name}</span>
            <br />
            <div className="greetings">
              {(!isTypingDone && (
                <Typist
                  avgTypingDelay={100}
                  startDelay={1000}
                  onTypingDone={() => setIsTypingDone(true)}
                >
                  I am a <span className="text-color-secondary">human</span>
                  <Typist.Backspace count={5} delay={500} avgTypingDelay={100} />
                  <span className="text-color-secondary">coder</span>
                  <Typist.Backspace count={10} delay={1000} avgTypingDelay={100} />
                  love <span className="text-color-secondary">making music</span>
                  <Typist.Backspace count={12} delay={1000} avgTypingDelay={100} />
                  <span className="text-color-secondary">running</span>
                  <Typist.Backspace count={7} delay={1000} avgTypingDelay={100} />
                  <span className="text-color-secondary">drinking wine</span>
                  <Typist.Backspace count={4} delay={1000} avgTypingDelay={100} />
                  <span className="text-color-secondary">coffee</span>
                  <Typist.Backspace count={22} delay={1000} avgTypingDelay={100} />
                </Typist>
              )) || <div />}
            </div>
            Based in <span className="text-color-third location-strike">Perth</span>{' '}
            <span className="text-color-third">{location}</span>
          </h1>
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, netname, url } = network;
                return (
                  <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={netname}
                  >
                    <i className={`fa fa-${netname || 'refresh'} fa-inverse`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
