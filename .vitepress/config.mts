import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "提瓦特文化科学研究院",
  description: "以创意与热爱重塑提瓦特的二创组织",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      description: '創造性と愛情でテイワットの二次創作を再構築する組織',
      title: 'テイワット文化科学研究院',
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
              { text: 'チャットルームに参加', link: '/ja/har/community' }
            ]
          },
          {
            text: 'その他',
            items: [
              { text: 'E.U.L.A', link: '/ja/documents/E.U.L.A' },
              { text: '謝辞リスト', link: '/ja/har/arigatou!' },
            ]
          },
          { text: 'バージョン4.2.3', link: '' },
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
                  text: '動態/更新',
                  collapsed: false,
                  items: [
                    { text: '最新情報', link: '/ja/navigation/doutai' },
                    { text: 'お知らせ', link: '/ja/navigation/koukoku' },
                    { text: 'ウェブサイト更新情報', link: '/ja/navigation/doutai-website' }
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
      }
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/head&favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/head&favicon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    logo: '/head&favicon.png',
    nav: [
      { text: '主页', link: '/' },
      { 
        text: '导航', 
        link: '/navigation/about',
        activeMatch: '^/navigation/'
      },
      {
        text: '社区',
        items: [
          { text: '论坛', link: '/bbs' },
          { text: '加入聊天室', link: '/har/community' }
        ]
      },
      {
        text: '购买',
        items: [
          { text: '购买', link: '/shop' },
          { text: '购买查询', link: '/shop-dhcx' },
          { text: '往期购买查询(24年10月5日前)', link: '/hatsu' },
          { text: '订单号说明', link: '/documents/zzdh' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'E.U.L.A', link: '/documents/E.U.L.A' },
          { text: '鸣谢名单', link: '/har/arigatou!' },
        ]
      },
      { text: 'V4.2.3', link: '' },
    ],
    sidebar: {
      '/navigation/': [
        {
          text: '导航',
          items: [
            {
              text: '关于我们',
              collapsed: false,
              items: [
                { text: '团队介绍', link: '/navigation/about' },
                { text: '成员列表', link: '/navigation/members' },
                { text: '寻找我们', link: '/navigation/contactus' }
              ]
            },
            {
              text: '创作作品',
              collapsed: false,
              items: [
                { 
                  text: '书籍',
                  collapsed: true,
                  items: [
                    { text: '原音', link: '/navigation/works/books/genmusic' },
                    { text: '原学', link: '/navigation/works/books/genology' },
                    { text: '提瓦特编年史', link: '/navigation/works/books/chronicle' },
                    { text: '穹学', link: '/navigation/works/books/starrailics' },
                    { text: '语文', link: '/navigation/works/books/language' },
                    { text: '提瓦特生物志', link: '/navigation/works/books/biology' }
                  ]
                },
                { 
                  text: '程序',
                  collapsed: true,
                  items: [
                    { text: 'HoYoAlarms', link: '/navigation/works/programs/HoYoAlarms' },
                  ]
                },
              ]
            },
            {
              text: '动态/更新',
              collapsed: false,
              items: [
                { text: '最新动态', link: '/navigation/doutai' },
                { text: '公告', link: '/navigation/koukoku' },
                { text: '文件', link: '/navigation/fairu' },
                { text: '网站更新动态', link: '/navigation/doutai-website' }
              ]
            },
            {
              text: '风之里 Minecraft',
              collapsed: false,
              items: [
                { text: '服务器信息', link: '/navigation/kazenosato-minecraft/info' },
                { text: 'KaedeEssential', link: '/navigation/kazenosato-minecraft/kaedeessential' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-organization/your-repo' },
      { icon: 'twitter', link: 'https://twitter.com/TeyvatEduPress' },
      { icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bilibili</title><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>'
      }, 
      link: 'https://space.bilibili.com/3546620878654067'
    }
    ],
    footer: {
      message: '萌ICP备20240287号 #2024 I ❤ TICS',
      copyright: 'Copyright © 2023-present Teyvat Institute of Culture and Science & Operational Publicity Department Contributors',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          ja: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '関連する結果が見つかりません',
                resetButtonTitle: '検索条件をクリア',
                footer: {
                  selectText: '選択',
                  navigateText: '切り替え'
                }
              }
            }
          }
        }
      }
    },
    globalNotice: {
      text: '这是一个全局通知。'
    },
    banner: {
      show: true,
      text: '如您在中华人民共和国境内且无法正常访问本网站（因为中华人民共和国网络审查机制"防火长城"屏蔽或部分省/市/区反诈中心网站拦截等原因或其他原因），请移步 "http://tics.top"'
    },
    generalMembers: [
      { name: '阿巴阿巴' },
      { name: '黑默' },
      { name: '卢少爷' },
      { name: 'Ayn.' },
      { name: 'Duke 小丁' },
      { name: '老杨' },
      { name: '谭开元' },
      { name: '心里危险的东西' },
      { name: '云生' },
      { name: 'asdfg' },
      { name: '糖钠锝·铽锒镨' },
      { name: '同山月工作室' },
      { name: '钟离' },
      { name: '毛毛' },
      { name: '神话筱樱' },
      { name: 'Feng の枫' },
      { name: '天才少年丶墨白' },
      { name: '帕姆爱邦布' },
      { name: '直木胡杨' },
      { name: 'Calvin·Harris' },
      { name: '南山无梅落' },
      { name: 'Pecarius' },
      { name: 'jr4570（上課隨時偷滑手機）' },
      { name: 'プラナ(A.R.O.N.A)' },
      { name: 'Asuka 燮' },
      { name: '玄兕' },
      { name: '叶' },
      { name: '然' },
      { name: 'Eupotia' },
      { name: '那一抹蓝天' },
      { name: 'The 昊子' },
      { name: '林罹殁' },
      { name: 'さかな（多吃冰块）' },
      { name: '爱吃鱼の愚者先生' },
      { name: '千星.' },
      { name: '符华' },
      { name: '不可以吃的糖豆' },
      { name: 'Starson' },
      { name: 'Il Ⅱ' },
      { name: 'W.' },
      { name: '暂倚晚晴' },
      { name: '可视化' },
      { name: '账号已注销' },
      { name: 'Yanbol' },
      { name: 'Pencil' },
      { name: '名余曰正则兮' },
      { name: '隙' },
      { name: '阴间水蜜桃' },
      { name: '假面鱼鱼鱼者' },
      { name: '名侦探柯北' },
      { name: '真菌零·菌菌子' },
      { name: '伊蕾娜一生推' },
      { name: '落叶归根' },
      { name: 'kid.' },
      { name: '不知名的路人' },
      { name: '√龙' },
      { name: '舒琳' },
      { name: 'YinNery' },
      { name: '太狠了木頭' },
      { name: '汝可知梓露松山' },
      { name: '林子大了什么鸟都吃' }
    ]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 使用 markdown-it 插件
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})