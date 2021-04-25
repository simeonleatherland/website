import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';

import { PortfolioProvider } from '../context/context';

import { footerData, heroData } from '../data/data';

function App() {
  const [hero, setHero] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, footer }}>
      <Hero />
    </PortfolioProvider>
  );
}

export default App;
