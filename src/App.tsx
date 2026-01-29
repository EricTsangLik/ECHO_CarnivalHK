import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import BoothGallery from './components/BoothGallery';
import Services from './components/Services';
import Clients from './components/Clients';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SEO from './components/SEO';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <SEO />
        <Navbar />
      <Hero />
      <WhyUs />
      <BoothGallery />
      <Services />
      <Clients />
      <ContactCTA />
      <Footer />
      <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;
