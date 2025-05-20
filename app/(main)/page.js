'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative min-h-screen bg-black text-white'>
      <BackgroundAnimation />
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}

export default App;
