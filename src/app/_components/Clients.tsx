'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { clientLogos } from '@/data/assets';

const Clients = () => {
  // Triple the logos to ensure seamless looping on wider screens
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="section clients-section">
      <h2 className="section-title">過往合作夥伴</h2>
      
      <div className="clients-marquee-container">
        <motion.div 
          className="clients-track"
          animate={{ x: [0, "-33.33%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 60,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {marqueeLogos.map((client, index) => (
            <div key={`${client.id}-${index}`} className="client-logo-wrapper" title={client.name}>
              <Image
                src={client.image}
                alt={`${client.name} - Echo Carnival HK 合作夥伴`}
                fill
                sizes="220px"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
