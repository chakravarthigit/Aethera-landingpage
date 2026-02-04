import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Aurora from './components/Aurora';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import WhyAethera from './components/sections/WhyAethera';
import FinalCTA from './components/sections/FinalCTA';
import './App.css';

function App() {
  return (
    <SplashCursor>
      <div className="app">
        {/* Global Aurora Background */}
        <div className="global-aurora">
          <Aurora
            colorStops={["#0d7261", "#6366f1", "#8b5cf6"]}
            blend={0.3}
            amplitude={0.6}
            speed={0.4}
          />
        </div>

        <Navbar />

        <main>
          <Hero />
          <Services />
          <Process />
          <Projects />
          <WhyAethera />
          <FinalCTA />
        </main>

        <WhatsAppButton />
      </div>
    </SplashCursor>
  );
}

export default App;
