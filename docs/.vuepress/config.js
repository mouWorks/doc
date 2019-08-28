module.exports = {
  title: 'MouWorks blog',
  description: 'MouWorks',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'DevOps', link: '/devops/',
        items: [
          { text: 'CircleCI', link: '/devops/circleci.html'},
          { text: 'Deployer', link: '/devops/deployer.html'},
        ]
      },
      {text: '後端', link: '/backend/',
        items: [
          { text: 'DB備份', link: '/backend/DB_backup.html'},
          { text: 'Redis', link: '/backend/redis.html'},
          { text: 'Cassandra', link: '/backend/cassandra.html'},
        ]
      },
      {text: 'Protip', link: '/protip/',
        items: [
          { text: 'Alias', link: '/protip/alias.html'},
          { text: 'Makefile', link: '/protip/makefile.html'},
        ]
      },
      {text: 'LeetCode', link: '/leetcode/'},
      {text: 'About',
        items: [
          { text: 'Site', link: 'https://m0u.work'},
          { text: 'Github', link: 'https://github.com/mouWorks'},
        ]
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 1, // 侧边栏显示2级
  }
};
