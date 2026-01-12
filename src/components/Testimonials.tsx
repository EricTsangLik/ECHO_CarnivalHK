import React from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  // Split reviews into two rows for the marquee effect
  const firstRow = reviews.slice(0, 8);
  const secondRow = reviews.slice(8, 15);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">客戶好評</h2>
        <p className="section-subtitle">聽聽我們的客戶怎麼說</p>
      </div>

      <div className="marquee-container">
        {/* First Row - Moving Left */}
        <div className="marquee-track-wrapper">
          <motion.div 
            className="marquee-track"
            animate={{ x: [0, -2000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 40, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {/* Repeat content to ensure seamless loop */}
            {[...firstRow, ...firstRow, ...firstRow].map((review, index) => (
              <div key={`row1-${index}`} className="review-card">
                <div className="review-header">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="review-name">{review.name}</h4>
                    <span className="review-event">{review.eventType}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="review-content">{review.content}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="marquee-track-wrapper">
          <motion.div 
            className="marquee-track"
            animate={{ x: [-2000, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 45, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...secondRow, ...secondRow, ...secondRow].map((review, index) => (
              <div key={`row2-${index}`} className="review-card">
                <div className="review-header">
                  <div className="review-avatar color-2">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="review-name">{review.name}</h4>
                    <span className="review-event">{review.eventType}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="review-content">{review.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
