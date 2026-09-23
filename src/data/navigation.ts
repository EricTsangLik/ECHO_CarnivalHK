export type NavChild = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
  cta?: boolean
}

export const carnivalServiceLinks: NavChild[] = [
  { label: '爆谷機／棉花糖機／小食攤位', href: '/services#snacks' },
  { label: '特色氣球佈置', href: '/services#balloons' },
  { label: '充氣彈床及互動設施', href: '/services#inflatables' },
  { label: 'DIY 手作工作坊', href: '/services#workshops' },
  { label: '魔術、小丑、扭氣球及表演', href: '/services#entertainment' },
  { label: '舞台、音響及燈光', href: '/services#stage' },
  { label: '獎品公仔訂購', href: '/services#prizes' },
  { label: '活動牌照及保險', href: '/services#permits' },
  { label: '活動策劃、場地佈置及平面設計', href: '/services#planning' },
]

export const mainNav: NavItem[] = [
  { label: '首頁', href: '/' },
  { label: '攤位遊戲', href: '/booths' },
  { label: 'AI Photo Booth 租用', href: '/photo-booth-rental' },
  { label: '嘉年華服務', href: '/services', children: carnivalServiceLinks },
  { label: '活動攻略', href: '/blog' },
  { label: '合作夥伴', href: '/#clients' },
  { label: '關於我們', href: '/about' },
  { label: '立即報價', href: '/contact', cta: true },
]

export const photoBoothWhatsApp =
  'https://wa.me/85293910332?text=' +
  encodeURIComponent('我想查詢 Photo Booth 租用（韓式人生四格／AI Photo Booth／金幣相）')
