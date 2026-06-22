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
    outline: {
      level: [2, 6],
    },
    sidebar: {
      '/': [
        {
          text: '前端笔记',
          collapsed: false,
          items: [
            { text: 'HTML', link: '/notes/html' },
            { text: 'CSS', link: '/notes/css' },
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
          items: [
            {
              text: 'web前端常见问题',
              link: '/commonProblem/常见问题处理'
            }
          ]
        }
      ],
      '/notes/': [
        {
          text: 'Web 技术',
          items: [
            { text: 'HTML', link: '/notes/html' },
            { text: 'CSS', link: '/notes/css' },
            { text: 'JavaScript', link: '/notes/JavaScript' },
            
          ]
        },
        {
          text: '前端框架',
          items: [

            { text: 'Vue', link: '/notes/vue' },
            { text: 'React', link: '/notes/react' },
            { text: 'TypeScript', link: '/notes/TypeScript' },
            {text: 'jQuery', link: '/notes/jQuery'},
            {
              text: 'Node.js',
              link: '/notes/nodeJs'
            },
            {
              text: 'StencilJs 一个web component框架',
              link: '/notes/stencilJs'
            }
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
          text: '工具',
          items: [
            { text: 'Git常用指令', link: '/notes/git' },
            { text: 'npm常用指令', link: '/notes/npm' },
            { text: 'VitePress', link: '/notes/vitepress' },
            { text: 'ClaudeCode', link: '/notes/ClaudeCode' },
            { text: 'Claude指令', link: '/notes/claude指令' },
          ]
        }
      ],
      '/updateHistory/': [
        {
          text: '更新记录',
          items: [
            { text: 'HTML', link: '/notes/html' },
            { text: 'CSS', link: '/notes/css' },
          ]
        }
      ],
      '/commonProblem/': [
         {
          text: '记录问题',
          items: [
            {
              text: 'web前端常见问题',
              link: '/commonProblem/常见问题处理'
            }
          ]
        }
      ]
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/your-github-username' }
    // ]
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
    },
  }
})
