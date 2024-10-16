import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  description: '創造性と愛情でテイワットの二次創作を再構築する組織',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/ja/' },
      { 
        text: 'ナビゲーション', 
        link: '/ja/navigation/about',
        activeMatch: '^/ja/navigation/'
      },
      {
        text: 'コミュニティ',
        items: [
          { text: 'フォーラム', link: '/ja/bbs' },
          { text: 'チャットルームに参加', link: '/ja/har/community' }
        ]
      },
      {
        text: '購入',
        items: [
          { text: '購入', link: '/ja/shop' },
          { text: '購入履歴', link: '/ja/hatsu' }
        ]
      },
      {
        text: 'その他',
        items: [
          { text: 'E.U.L.A', link: '/ja/documents/E.U.L.A' },
          { text: '謝辞リスト', link: '/ja/har/arigatou!' },
        ]
      },
    ],
    sidebar: {
      '/ja/navigation/': [
        {
          text: 'ナビゲーション',
          items: [
            {
              text: '私たちについて',
              collapsed: false,
              items: [
                { text: 'チーム紹介', link: '/ja/navigation/about' },
                { text: 'メンバーリスト', link: '/ja/navigation/members' },
                { text: 'お問い合わせ', link: '/ja/navigation/contactus' }
              ]
            },
            {
              text: '創作作品',
              collapsed: false,
              items: [
                { 
                  text: '書籍',
                  collapsed: true,
                  items: [
                    { text: '原音', link: '/ja/navigation/works/books/genmusic' },
                    { text: '原学', link: '/ja/navigation/works/books/genology' },
                    { text: 'テイワット年代記', link: '/ja/navigation/works/books/chronicle' },
                    { text: '穹学', link: '/ja/navigation/works/books/starrailics' },
                    { text: '言語', link: '/ja/navigation/works/books/language' },
                    { text: 'テイワット生物誌', link: '/ja/navigation/works/books/biology' }
                  ]
                },
              ]
            },
            {
              text: '最新情報/アップデート',
              collapsed: false,
              items: [
                { text: '最新情報', link: '/ja/navigation/doutai' },
                { text: 'お知らせ', link: '/ja/navigation/koukoku' },
                { text: 'ファイル', link: '/ja/navigation/fairu' },
                { text: 'ウェブサイトの更新情報', link: '/ja/navigation/doutai-website' }
              ]
            },
            {
              text: '風の里 Minecraft',
              collapsed: false,
              items: [
                { text: 'サーバー情報', link: '/ja/navigation/kazenosato-minecraft/info' },
                { text: 'KaedeEssential', link: '/ja/navigation/kazenosato-minecraft/kaedeessential' }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      message: '萌ICP備20240287号 #2024 I ❤ TICS',
      copyright: 'Copyright © 2023-present テイワット文化科学研究所 & 運営広報部門 貢献者',
    },
    globalNotice: {
      text: '公式ウェブサイト正式版 V4.1.4 R18292812(VitePress 1.4,Vue 3)'
    },
  }
})