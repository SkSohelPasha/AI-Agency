import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Technology } from './components/Technology';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lightningHue, setLightningHue] = useState(220);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="relative">
        <Navigation scrolled={scrolled} />
        <Hero hue={lightningHue} onHueChange={setLightningHue} />
        <Services />
        <CaseStudies />
        <Technology />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
