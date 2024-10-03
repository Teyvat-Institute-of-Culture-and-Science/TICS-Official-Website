import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "T.I.C.S",
  description: "以创意与热爱重塑提瓦特的二创组织",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '详细导航', link: '/navigation/about' },
      { text: '论坛', link: '/bbs' }
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
                    { text: '原数', link: '/navigation/works/books/genmath' },
                    { text: '穹学', link: '/navigation/works/books/starrailics' },
                    { text: '语文', link: '/navigation/works/books/language' },
                    { text: '提瓦特生物志', link: '/navigation/works/books/biology' }
                  ]
                },
              ]
            },
            {
              text: '新闻动态',
              collapsed: false,
              items: [
                { text: '最新动态', link: '/navigation/news/' },
                { text: '活动公告', link: '/navigation/news/events' },
                { text: '创作分享', link: '/navigation/news/creations' }
              ]
            },
            {
              text: '风之里 Minecraft',
              collapsed: false,
              items: [
                { text: '服务器信息', link: '/navigation/kazenosato-minecraft/' },
                { text: '游戏指南', link: '/navigation/kazenosato-minecraft/guide' },
                { text: '模组列表', link: '/navigation/kazenosato-minecraft/mods' },
                { text: '地图展示', link: '/navigation/kazenosato-minecraft/maps' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-organization/your-repo' },
      { icon: 'twitter', link: 'https://twitter.com/your-organization' }
    ],

    footer: {
      message: '本网站基于 VitePress,Vue,Vite 和 Tailwind CSS 等项目开发 | 开发 流雲澄',
      copyright: '© 2024 提瓦特文化科学研究院 运营宣传部所有 | 提瓦特文化科学研究院 保留所有权利'
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
          }
        }
      }
    },

    // 添加全局通知配置
    globalNotice: {
      show: true,
      text: '欢迎访问 T.I.C.S 官方网站！'
    }
  },

  // 使用 transformHtml 钩子来插入全局通知
  transformHtml: (code, id, { pageData }) => {
    if (pageData.frontmatter.layout !== 'home') return code

    const { globalNotice } = pageData.site.themeConfig

    if (!globalNotice.show) return code

    const noticeHtml = `
      <div id="global-notice" style="
        background-color: #f0f0f0;
        color: #333;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        font-size: 14px;">
        ${globalNotice.text}
      </div>
      <style>
        body {
          padding-top: 40px;
        }
      </style>
    `

    return code.replace('</body>', `${noticeHtml}</body>`)
  }
})