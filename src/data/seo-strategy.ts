/**
 * SEO Strategy Data — Echo Carnival HK (2026)
 * ============================================
 * Task E: Semantic LSI Keywords + Internal Linking Map
 *
 * This file provides:
 *  1. 15 Cantonese-specific LSI keywords for hidden optimization
 *  2. Hub-and-Spoke internal linking model
 *  3. Topical Authority Map
 */

/* ─────────────────────────────────────────────
   1. LSI KEYWORDS (Cantonese-specific terms)
   ─────────────────────────────────────────────
   These terms should be naturally woven into page
   content, alt text, and meta descriptions to capture
   long-tail Cantonese search intent.
   ───────────────────────────────────────────── */
export const lsiKeywords = [
  {
    term: '屋苑會所',
    usage: '活動場地描述 — 屋苑會所嘉年華',
    searchIntent: '住宅會所活動策劃需求',
  },
  {
    term: '打卡位',
    usage: '遊戲賣點描述 — Instagram 打卡位設計',
    searchIntent: '社交媒體友善活動元素',
  },
  {
    term: '活動物資',
    usage: '套餐/服務描述 — 活動物資一站式供應',
    searchIntent: '活動籌備物料採購',
  },
  {
    term: '開幕典禮',
    usage: '服務場景 — 開幕典禮嘉年華',
    searchIntent: '商場/品牌開幕活動策劃',
  },
  {
    term: '親子活動',
    usage: '目標受眾 — 親子活動遊戲推介',
    searchIntent: '家庭向活動搜尋',
  },
  {
    term: '攤位佈置',
    usage: '服務描述 — 主題攤位佈置設計',
    searchIntent: '攤位裝飾及設計服務',
  },
  {
    term: '公司活動',
    usage: '企業頁面 — 公司活動遊戲方案',
    searchIntent: '企業活動策劃需求',
  },
  {
    term: '嘉年華會',
    usage: '同義詞變體 — 嘉年華會攤位遊戲',
    searchIntent: '嘉年華的港式說法變體',
  },
  {
    term: '慶典活動',
    usage: '活動類型 — 慶典活動策劃',
    searchIntent: '各類慶祝活動搜尋',
  },
  {
    term: '充氣彈床',
    usage: '產品描述 — 充氣彈床/彈跳城堡',
    searchIntent: '充氣遊樂設施港式叫法',
  },
  {
    term: '遊戲攤檔',
    usage: '同義詞變體 — 遊戲攤檔租借',
    searchIntent: '攤位遊戲的口語化搜尋',
  },
  {
    term: '非物質文化遺產',
    usage: '學校文化週 — 非物質文化遺產體驗活動',
    searchIntent: '教育界文化傳承活動',
  },
  {
    term: '機電工程署',
    usage: '安全認證 — 機電工程署認可充氣設施',
    searchIntent: '安全合規相關搜尋（EMSD）',
  },
  {
    term: '商場推廣',
    usage: '服務場景 — 商場推廣活動嘉年華',
    searchIntent: '商場促銷活動策劃',
  },
  {
    term: '團體遊戲',
    usage: '活動類型 — 團體遊戲大合集',
    searchIntent: '多人活動遊戲搜尋',
  },
] as const

/* ─────────────────────────────────────────────
   2. HUB-AND-SPOKE INTERNAL LINKING MODEL
   ─────────────────────────────────────────────
   Hub Page (Pillar): /booths — 攤位遊戲租借
   All content pages link back to this hub to
   maximise Link Juice and Topical Authority.
   ───────────────────────────────────────────── */
export interface InternalLink {
  from: string
  fromLabel: string
  to: string
  toLabel: string
  anchorText: string
  linkType: 'hub-to-spoke' | 'spoke-to-hub' | 'spoke-to-spoke' | 'contextual'
}

export const internalLinkingMap: InternalLink[] = [
  /* ── Hub → Spoke (from Pillar page to supporting content) ── */
  {
    from: '/booths',
    fromLabel: '攤位遊戲租借（Hub/Pillar Page）',
    to: '/blog/2026-carnival-planning-guide',
    toLabel: '2026 策劃全攻略',
    anchorText: '2026 嘉年華策劃完整指南',
    linkType: 'hub-to-spoke',
  },
  {
    from: '/booths',
    fromLabel: '攤位遊戲租借（Hub/Pillar Page）',
    to: '/blog/sports-fan-zones',
    toLabel: '欖球 Fan Zone',
    anchorText: '欖球主題遊戲及大型戶外器材',
    linkType: 'hub-to-spoke',
  },
  {
    from: '/booths',
    fromLabel: '攤位遊戲租借（Hub/Pillar Page）',
    to: '/blog/green-carnival',
    toLabel: '環保嘉年華',
    anchorText: '環保攤位及 ESG 活動方案',
    linkType: 'hub-to-spoke',
  },
  {
    from: '/booths',
    fromLabel: '攤位遊戲租借（Hub/Pillar Page）',
    to: '/services',
    toLabel: '嘉年華服務',
    anchorText: '嘉年華配套服務一覽',
    linkType: 'hub-to-spoke',
  },

  /* ── Spoke → Hub (all content links back to Pillar) ── */
  {
    from: '/blog/2026-carnival-planning-guide',
    fromLabel: '2026 策劃全攻略',
    to: '/booths',
    toLabel: '攤位遊戲租借（Hub/Pillar Page）',
    anchorText: '瀏覽所有攤位遊戲租借選擇',
    linkType: 'spoke-to-hub',
  },
  {
    from: '/blog/sports-fan-zones',
    fromLabel: '欖球 Fan Zone',
    to: '/booths',
    toLabel: '攤位遊戲租借（Hub/Pillar Page）',
    anchorText: '所有攤位遊戲租借',
    linkType: 'spoke-to-hub',
  },
  {
    from: '/blog/green-carnival',
    fromLabel: '環保嘉年華',
    to: '/booths',
    toLabel: '攤位遊戲租借（Hub/Pillar Page）',
    anchorText: '所有攤位遊戲租借',
    linkType: 'spoke-to-hub',
  },
  {
    from: '/services',
    fromLabel: '嘉年華服務',
    to: '/booths',
    toLabel: '攤位遊戲租借（Hub/Pillar Page）',
    anchorText: '攤位遊戲租借選擇',
    linkType: 'spoke-to-hub',
  },
  {
    from: '/',
    fromLabel: '首頁',
    to: '/booths',
    toLabel: '攤位遊戲租借（Hub/Pillar Page）',
    anchorText: '探索攤位遊戲',
    linkType: 'spoke-to-hub',
  },

  /* ── Spoke → Spoke (cross-linking supporting content) ── */
  {
    from: '/blog/2026-carnival-planning-guide',
    fromLabel: '2026 策劃全攻略',
    to: '/blog/sports-fan-zones',
    toLabel: '欖球 Fan Zone',
    anchorText: '欖球主題 Fan Zone 方案',
    linkType: 'spoke-to-spoke',
  },
  {
    from: '/blog/2026-carnival-planning-guide',
    fromLabel: '2026 策劃全攻略',
    to: '/blog/green-carnival',
    toLabel: '環保嘉年華',
    anchorText: '綠色嘉年華 ESG 方案',
    linkType: 'spoke-to-spoke',
  },
  {
    from: '/blog/sports-fan-zones',
    fromLabel: '欖球 Fan Zone',
    to: '/blog/2026-carnival-planning-guide',
    toLabel: '2026 策劃全攻略',
    anchorText: '2026 嘉年華活動策劃全攻略',
    linkType: 'spoke-to-spoke',
  },
  {
    from: '/blog/green-carnival',
    fromLabel: '環保嘉年華',
    to: '/blog/sports-fan-zones',
    toLabel: '欖球 Fan Zone',
    anchorText: '欖球主題 Fan Zone 方案',
    linkType: 'spoke-to-spoke',
  },

  /* ── Contextual (from About/Contact to relevant content) ── */
  {
    from: '/about',
    fromLabel: '關於我們',
    to: '/blog/2026-carnival-planning-guide',
    toLabel: '2026 策劃全攻略',
    anchorText: '了解我們的 2026 活動策劃方案',
    linkType: 'contextual',
  },
  {
    from: '/contact',
    fromLabel: '聯絡我們',
    to: '/booths',
    toLabel: '攤位遊戲租借（Hub/Pillar Page）',
    anchorText: '先瀏覽攤位遊戲選擇',
    linkType: 'contextual',
  },
]

/* ─────────────────────────────────────────────
   3. TOPICAL AUTHORITY MAP (Visual Reference)
   ─────────────────────────────────────────────

   The following represents the Hub-and-Spoke model:

                        ┌──────────────────┐
                        │     首頁 (/)     │
                        └────────┬─────────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
            ┌───────▼──────┐ ┌──▼──────────┐ ┌▼──────────────┐
            │  關於我們     │ │ 聯絡我們    │ │ 嘉年華服務    │
            │  /about      │ │ /contact    │ │ /services     │
            └──────────────┘ └─────────────┘ └───────┬───────┘
                                                     │
                              ┌───────────────────────┤
                              │                       │
                    ┌─────────▼──────────┐            │
                    │  ★ 攤位遊戲租借    │◄───────────┘
                    │  /booths (HUB)     │
                    │  Target: 攤位遊戲   │
                    │  租借 (Pillar)     │
                    └──┬──────┬──────┬───┘
                       │      │      │
            ┌──────────▼┐ ┌──▼──────▼──────────┐ ┌──────────────┐
            │ 2026 策劃  │ │ 欖球 Fan Zone      │ │ 環保嘉年華   │
            │ 全攻略     │ │ /blog/sports-fan-  │ │ /blog/green- │
            │ /blog/     │ │ zones              │ │ carnival     │
            │ 2026-…     │ │ Target: 欖球主題   │ │ Target: 環保 │
            │ Target:    │ │ 遊戲, 大型戶外     │ │ 攤位, 無塑   │
            │ 攤位遊戲   │ │ 活動器材租借       │ │ 活動, ESG    │
            │ 租借, 啟德  │ └────────────────────┘ │ 慶祝活動     │
            │ 可持續,    │                        └──────────────┘
            │ 夜光遊戲   │
            └────────────┘

   ★ = Hub/Pillar Page (receives most internal links)
   All Spoke pages link TO and FROM the Hub page.
   Spoke pages also cross-link to each other where relevant.

   ───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   4. KEYWORD-TO-PAGE MAPPING (Quick Reference)
   ───────────────────────────────────────────── */
export const keywordPageMapping = [
  { keyword: '一站式嘉年華租借', primaryPage: '/', supportingPages: ['/booths', '/services'] },
  { keyword: '2026 活動策劃', primaryPage: '/', supportingPages: ['/blog/2026-carnival-planning-guide'] },
  { keyword: '中華文化日', primaryPage: '/services', supportingPages: ['/blog/2026-carnival-planning-guide'] },
  { keyword: '校園週', primaryPage: '/services', supportingPages: ['/blog/2026-carnival-planning-guide'] },
  { keyword: '文化攤位遊戲', primaryPage: '/services', supportingPages: ['/booths'] },
  { keyword: 'ESG 團隊建設', primaryPage: '/services', supportingPages: ['/blog/green-carnival'] },
  { keyword: '公司週年晚宴', primaryPage: '/services', supportingPages: ['/blog/green-carnival'] },
  { keyword: '員工福利日', primaryPage: '/services', supportingPages: ['/blog/green-carnival'] },
  { keyword: '保齡狂潮', primaryPage: '/booths', supportingPages: [] },
  { keyword: '攤位遊戲租借', primaryPage: '/booths', supportingPages: ['/blog/2026-carnival-planning-guide', '/blog/sports-fan-zones'] },
  { keyword: '啟德體育園活動', primaryPage: '/blog/2026-carnival-planning-guide', supportingPages: ['/blog/sports-fan-zones'] },
  { keyword: '可持續活動策劃', primaryPage: '/blog/green-carnival', supportingPages: ['/blog/2026-carnival-planning-guide'] },
  { keyword: '夜光遊戲租借', primaryPage: '/blog/2026-carnival-planning-guide', supportingPages: ['/blog/sports-fan-zones', '/booths'] },
  { keyword: '欖球主題遊戲', primaryPage: '/blog/sports-fan-zones', supportingPages: ['/blog/2026-carnival-planning-guide'] },
  { keyword: '大型戶外活動器材租借', primaryPage: '/blog/sports-fan-zones', supportingPages: ['/booths'] },
  { keyword: '環保攤位', primaryPage: '/blog/green-carnival', supportingPages: ['/services'] },
  { keyword: '無塑活動', primaryPage: '/blog/green-carnival', supportingPages: [] },
  { keyword: 'ESG 慶祝活動', primaryPage: '/blog/green-carnival', supportingPages: ['/services'] },
] as const
