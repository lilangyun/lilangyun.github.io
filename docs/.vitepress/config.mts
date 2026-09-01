import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "李浪云的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', 
        link: '/' 
      },
    ],

    sidebar: [
      {
        text: '2026',
        items: [
          { text: 'TCP实验',
            link: '/2026/tju_tcp_lab'
          },
          { text: 'Vim学习',
            link: '/2026/vim_learning'
          },
          { text: '团队管理经验',
            link: '/2026/team_managing'
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lilangyun' }
    ], 

    outline: {
      level: 'deep', 
    }, 
  }
})
