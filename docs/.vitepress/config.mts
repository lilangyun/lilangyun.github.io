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
        // 2026
        text: '2026',
        items: [
          // 技术博客
          {
            text: '技术博客',
            link: '/2026/tju_tcp_lab',
            items: [
              {
                text: 'TCP实验',
                link: '/2026/tju_tcp_lab'
              },
              { 
                text: 'Vim学习',
                link: '/2026/vim_learning'
              },
            ]
          },
          // 经验总结
          {
            text: '经验总结',
            link: '/2026/team_managing',
            items: [
              { 
                text: '团队管理经验',
                link: '/2026/team_managing'
              },
            ]
          },
          // 生活随笔
          {
            text: '生活随笔',
            link: '/2026/new_semester',
            items: [
              { 
                text: '大三新学期',
                link: '/2026/new_semester',
              },
            ]
          },
          // 下一个分类

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lilangyun' },
      { icon: 'gitee', link: 'https://gitee.com/lilangyun'}
    ], 

    outline: {
      level: 'deep', 
    }, 
  }
})
