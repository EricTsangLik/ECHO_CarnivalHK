export interface BoothItem {
  id: string;
  name: string;
  category: 'indoor' | 'outdoor';
  image: string;
  description?: string;
  dimensions?: string;
}

export interface ClientLogo {
  id: string;
  image: string;
  name: string;
}

export const indoorBooths: BoothItem[] = [
  { 
    id: 'in1', 
    name: '保齡狂潮', 
    category: 'indoor', 
    image: '/images/Booth/室內/保齡.png',
    description: '經典保齡球遊戲，考驗您的眼界與手感。適合各年齡層參與，是嘉年華必備的人氣攤位。',
    dimensions: '1.5m (W) x 3m (D) x 2m (H)'
  },
  { 
    id: 'in2', 
    name: '瘋狂射擊', 
    category: 'indoor', 
    image: '/images/Booth/室內/射擊.jpg',
    description: '刺激有趣的射擊遊戲，使用安全軟彈槍，擊倒目標即可獲獎。深受小朋友與年輕人喜愛。',
    dimensions: '2m (W) x 2.5m (D) x 2m (H)'
  },
  { 
    id: 'in3', 
    name: '擊倒牙牙', 
    category: 'indoor', 
    image: '/images/Booth/室內/牙牙.jpg',
    description: '趣味十足的擊倒牙齒遊戲，瞄準目標投擲，將所有牙齒擊倒。考驗準度的同時充滿歡樂。',
    dimensions: '1.5m (W) x 1.5m (D) x 2m (H)'
  },
  { 
    id: 'in4', 
    name: '沙壺競技', 
    category: 'indoor', 
    image: '/images/Booth/室內/砂壺.jpg',
    description: '類似冰壺的桌上競技遊戲，控制力度將砂壺推入得分區。老少咸宜，適合親子同樂。',
    dimensions: '1.2m (W) x 4m (D) x 1m (H)'
  },
  { 
    id: 'in5', 
    name: '籃球狂熱', 
    category: 'indoor', 
    image: '/images/Booth/室內/籃球.jpg',
    description: '迷你籃球投籃機，在限時內投入越多球分數越高。激發運動細胞，氣氛熱烈。',
    dimensions: '1.2m (W) x 2.5m (D) x 2.2m (H)'
  },
  { 
    id: 'in6', 
    name: '狂擲罐子', 
    category: 'indoor', 
    image: '/images/Booth/室內/罐子.jpg',
    description: '傳統嘉年華遊戲，用豆袋擊倒疊起的罐子。簡單直觀，充滿挑戰性。',
    dimensions: '1.5m (W) x 2m (D) x 2m (H)'
  },
  { 
    id: 'in7', 
    name: '酒樽', 
    category: 'indoor', 
    image: '/images/Booth/室內/酒樽.jpg',
    description: '將膠圈拋出並套中酒樽頸部。需要極高的專注力與技巧，成功感滿分。',
    dimensions: '1.5m (W) x 2m (D) x 2m (H)'
  },
  { 
    id: 'in8', 
    name: '飛鏢高手', 
    category: 'indoor', 
    image: '/images/Booth/室內/飛鏢.jpg',
    description: '安全磁力或軟頭飛鏢，瞄準靶心投擲。訓練眼手協調，是派對中的經典項目。',
    dimensions: '1.5m (W) x 1m (D) x 2m (H)'
  },
];

export const outdoorBooths: BoothItem[] = [
  { 
    id: 'out1', 
    name: '投球入樽', 
    category: 'outdoor', 
    image: '/images/Booth/室外/入桶.JPG',
    description: '將球投入指定的桶內，看似簡單但極具挑戰性。適合戶外活動，增加互動氣氛。',
    dimensions: '1.5m (W) x 2m (D) x 1m (H)'
  },
  { 
    id: 'out2', 
    name: '趣味投壺', 
    category: 'outdoor', 
    image: '/images/Booth/室外/投壺.JPG',
    description: '源自古代的傳統遊戲，將箭投入壺中。充滿文化氣息，適合各類慶典活動。',
    dimensions: '1.5m (W) x 2m (D) x 1.5m (H)'
  },
  { 
    id: 'out3', 
    name: '幸運拋球', 
    category: 'outdoor', 
    image: '/images/Booth/室外/投球.JPG',
    description: '色彩繽紛的投球攤位，將球投入對應顏色的洞口。視覺效果豐富，吸引眼球。',
    dimensions: '1.5m (W) x 2m (D) x 2m (H)'
  },
  { 
    id: 'out4', 
    name: '幸運拋幣', 
    category: 'outdoor', 
    image: '/images/Booth/室外/拋幣.JPG',
    description: '將代幣拋出並停留在指定區域內。考驗運氣與技巧，容易讓人一試再試。',
    dimensions: '1.5m (W) x 1.5m (D) x 1m (H)'
  },
  { 
    id: 'out5', 
    name: '狂掃罐子', 
    category: 'outdoor', 
    image: '/images/Booth/室外/罐子.JPG',
    description: '戶外版擊倒罐子遊戲，規模更大，樂趣更多。適合大型嘉年華活動。',
    dimensions: '2m (W) x 2m (D) x 2m (H)'
  },
  { 
    id: 'out6', 
    name: '瘋狂酒樽', 
    category: 'outdoor', 
    image: '/images/Booth/室外/酒瓶.JPG',
    description: '經典套圈圈遊戲，挑戰將環套入直立的酒瓶上。難度適中，樂趣無窮。',
    dimensions: '2m (W) x 2m (D) x 1.5m (H)'
  },
  { 
    id: 'out7', 
    name: '釣鴨樂園', 
    category: 'outdoor', 
    image: '/images/Booth/室外/釣鴨.JPG',
    description: '深受小朋友喜愛的釣鴨子遊戲，在流動的水池中釣起鴨子。安全有趣，親子首選。',
    dimensions: '2m (W) x 1m (D) x 0.8m (H)'
  },

];

export const clientLogos: ClientLogo[] = [
  { id: 'c1', name: 'Client 1', image: '/images/client-logo/a77d46c2070edb3514dba2035e2167db.png' },
  { id: 'c2', name: 'CBF', image: '/images/client-logo/CBFlogo.png' },
  { id: 'c3', name: 'Choice', image: '/images/client-logo/choice-logo-1-1980x903.png' },
  { id: 'c4', name: 'Images 2', image: '/images/client-logo/images-2.png' },
  { id: 'c5', name: 'V Walk', image: '/images/client-logo/logo-vwalk.svg' },
];

export const mainLogo = '/images/echo-carnival-logo.png';
