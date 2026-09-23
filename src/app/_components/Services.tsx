'use client'

import Link from 'next/link'
import { motion } from 'framer-motion';

const servicesList = [
  {
    id: 5,
    title: '爆谷機／棉花糖機／小食攤位',
    desc: <>爆谷站、棉花糖機及各式小食攤位，<br/>為活動增加即場美食體驗。</>,
    icon: '🍿'
  },
  {
    id: 2,
    title: '特色氣球佈置',
    desc: <>特色氣球佈置，為活動增添<br/>歡樂氣氛。</>,
    icon: '🎈'
  },
  {
    id: 1,
    title: '充氣彈床及互動設施',
    desc: <>大型充氣彈床、滑梯及互動競技設施，<br/>為活動增添動感與歡笑。</>,
    icon: '🏰'
  },
  {
    id: 4,
    title: 'DIY 手作工作坊',
    desc: <>各類創意DIY工作坊，適合親子同樂，<br/>製作獨一無二的紀念品。</>,
    icon: '🎨'
  },
  {
    id: 3,
    title: '魔術、小丑、扭氣球及表演',
    desc: <>專業小丑表演、近景魔術互動及<br/>現場扭氣球，帶動全場氣氛。</>,
    icon: '🤹'
  },
  {
    id: 6,
    title: '舞台、音響及燈光',
    desc: <>現場樂隊唱歌、舞蹈表演及<br/>專業音響燈光，打造視聽盛宴。</>,
    icon: '🎤'
  },
  {
    id: 7,
    title: '獎品公仔訂購',
    desc: <>提供各類嘉年華獎品公仔批發及<br/>訂購服務。</>,
    icon: '🧸'
  },
  {
    id: 8,
    title: '活動牌照及保險',
    desc: <>代辦各類臨時娛樂牌照及<br/>活動第三者責任保險申請。</>,
    icon: '📝'
  },
  {
    id: 9,
    title: '活動策劃、場地佈置及平面設計',
    desc: <>一站式活動策劃、場地佈置及<br/>平面設計服務。</>,
    icon: '✨'
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">嘉年華服務</h2>
        <p className="section-subtitle">除了遊戲攤位，我們還提供一站式活動配套服務</p>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
