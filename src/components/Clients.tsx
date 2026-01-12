import React from 'react';
import { motion } from 'framer-motion';
import { clientLogos } from '../data/assets';
import './Clients.css';

const Clients: React.FC = () => {
  // Triple the logos to ensure seamless looping on wider screens
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="section clients-section">
      <h2 className="section-title">合作夥伴</h2>
      
      <div className="clients-marquee-container">
        <motion.div 
          className="clients-track"
          animate={{ x: [0, "-33.33%"] }} // Move by one set of logos (1/3 of total)
          transition={{ 
            repeat: Infinity, 
            duration: 20, // Adjust speed for smoother flow
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {marqueeLogos.map((client, index) => (
            <div key={`${client.id}-${index}`} className="client-logo-wrapper">
              <img src={client.image} alt={client.name} title={client.name} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
