export interface Review {
  id: string;
  name: string;
  eventType: string;
  content: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: '陳先生',
    eventType: '公司週年晚宴',
    content: '這次活動租用了三個攤位，同事們玩得非常開心！工作人員準時到達並迅速完成佈置，服務態度一流，明年一定會再找你們！',
    rating: 5
  },
  {
    id: 'r2',
    name: 'Mary Wong',
    eventType: '兒童生日派對',
    content: '釣鴨子遊戲深受小朋友歡迎，設備很新很乾淨。Echo Carnival 的團隊非常有耐心，引導小朋友玩遊戲，讓家長們很放心。',
    rating: 5
  },
  {
    id: 'r3',
    name: '李小姐',
    eventType: '學校開放日',
    content: '多虧了你們的遊戲攤位，我們的開放日氣氛非常熱鬧。特別是投籃機，整天都排長龍。價格公道，性價比很高。',
    rating: 5
  },
  {
    id: 'r4',
    name: 'David Chan',
    eventType: '社區嘉年華',
    content: '合作過程非常順利，從詢價到活動結束，溝通都很有效率。遊戲種類選擇多，能滿足不同年齡層的街坊需求。',
    rating: 5
  },
  {
    id: 'r5',
    name: '劉太太',
    eventType: '百日宴',
    content: '想為寶寶百日宴增添氣氛，選了幾個簡單的攤位。佈置很精美，配合我們的主題顏色，拍照效果很好！',
    rating: 5
  },
  {
    id: 'r6',
    name: 'ABC Corp HR',
    eventType: 'Team Building',
    content: '非常有創意的遊戲設計，讓我們的團隊建設活動不再沉悶。大家在遊戲中互動，增進了感情。推薦！',
    rating: 4
  },
  {
    id: 'r7',
    name: '張校長',
    eventType: '畢業典禮',
    content: '感謝 Echo Carnival 提供的一站式服務，不用我們操心運輸和安裝。遊戲安全性很高，適合學生玩樂。',
    rating: 5
  },
  {
    id: 'r8',
    name: 'Sarah Lee',
    eventType: '婚禮',
    content: '在婚禮 Cocktail 環節加入了拋圈圈遊戲，賓客們都覺得很驚喜很有趣。為我們的婚禮留下了特別的回憶。',
    rating: 5
  },
  {
    id: 'r9',
    name: '王先生',
    eventType: '屋苑中秋晚會',
    content: '夜光模式的攤位太酷了！晚上看起來非常漂亮，吸引了很多住戶參與。很有節日氣氛。',
    rating: 5
  },
  {
    id: 'r10',
    name: 'Jessica Ho',
    eventType: '商場推廣活動',
    content: '攤位質量很好，很堅固。我們連續租用了三天，運作完全沒問題。工作人員也很主動幫忙招攬客人。',
    rating: 5
  },
  {
    id: 'r11',
    name: '陳老師',
    eventType: '校園祭',
    content: '學生們都玩瘋了！特別是射擊遊戲，男孩子們特別喜歡。明年校園祭一定會再預訂。',
    rating: 5
  },
  {
    id: 'r12',
    name: 'Mike Lau',
    eventType: '私人派對',
    content: '臨時決定舉辦派對，幸好你們能配合急單。雖然時間緊迫，但服務一點都不馬虎，非常專業。',
    rating: 5
  },
  {
    id: 'r13',
    name: '林小姐',
    eventType: '慈善義賣',
    content: '感謝你們對慈善活動的支持，提供了優惠價格。遊戲攤位為我們吸引了很多人流，籌款成績理想。',
    rating: 5
  },
  {
    id: 'r14',
    name: 'Kenji',
    eventType: '親子同樂日',
    content: '很多適合親子互動的遊戲，爸爸媽媽和孩子一起玩得很開心。這是一個非常有意義的週末。',
    rating: 5
  },
  {
    id: 'r15',
    name: '黃經理',
    eventType: '產品發佈會',
    content: '用遊戲攤位來吸引客戶停下來了解產品，效果比預期好。能夠客製化一些佈置，配合品牌形象。',
    rating: 4
  }
];
