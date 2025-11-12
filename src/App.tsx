import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Lore from './components/Lore';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <HowItWorks />
        <Lore />
        <Roadmap />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;
