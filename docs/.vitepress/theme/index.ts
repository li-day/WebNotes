import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
  }
}