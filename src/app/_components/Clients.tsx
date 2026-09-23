'use client'

import Image from 'next/image';
import { clientLogos } from '@/data/assets';

const Clients = () => {
  return (
    <section id="clients" className="section clients-section">
      <h2 className="section-title">過往合作夥伴</h2>

      <div className="clients-grid">
        {clientLogos.map((client) => (
          <div key={client.id} className="client-logo-wrapper" title={client.name}>
            <Image
              src={client.image}
              alt={`${client.name} - Echo Carnival HK 合作夥伴`}
              fill
              sizes="220px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
