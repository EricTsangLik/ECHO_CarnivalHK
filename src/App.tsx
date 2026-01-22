import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import BoothGallery from './components/BoothGallery';
import Services from './components/Services';
import Clients from './components/Clients';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">
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
  );
}

export default App;
