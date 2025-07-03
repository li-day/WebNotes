import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
  title: "li的学习笔记",
  description: "前端开发学习笔记，涵盖 HTML、CSS、JavaScript 等技术",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '开始', link: '/directory' },
      {text: '更新记录', link: '/updateHistory/index'}
    ],
    sidebar: {
      '/': [
        {
          text: '前端笔记',
          collapsed: false,
          items: [
            { text: 'HTML', link: '/notes/web' },
            { text: 'CSS', link: '/notes/CSS' },
            { text: 'JavaScript', link: '/notes/JavaScript' },
            { text: 'TypeScript笔记', link: '/notes/TypeScript' },
            { text: 'Vue', link: '/notes/vue' },
            { text: 'React', link: '/notes/react' },
            { text: '小程序', link: '/notes/miniprogram' }
          ]
        },
        {
          text: '后端技术笔记',
          items: [
            {
              text: 'Go语言',
              link: '/notes/Go'
            }
          ]
        },
        {
          text: '记录问题',
          items: []
        }
      ],
      '/notes/': [
        {
          text: 'Web 技术',
          items: [
            { text: 'HTML', link: '/notes/web' },
            { text: 'CSS', link: '/notes/CSS' },
            { text: 'JavaScript', link: '/notes/JavaScript' },
            { text: 'TypeScript', link: '/notes/TypeScript' },
          ]
        },
        {
          text: '前端框架',
          items: [

            { text: 'Vue', link: '/notes/vue' },
            { text: 'React', link: '/notes/react' }
          ]
        },
        {
          text: '后端技术笔记',
          items: [
            {
              text: 'Go语言',
              link: '/notes/Go'
            }
          ]
        }
      ],
      '/updateHistory/': [
        {
          text: '更新记录',
          items: [
            { text: 'HTML', link: '/notes/web' },
            { text: 'CSS', link: '/notes/CSS' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github-username' }
    ]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(timeline);
    },
  },
  base: '/webNotes/',
  vite: {
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
