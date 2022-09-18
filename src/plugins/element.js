// import 'element-plus/theme-chalk/src/dark/css-vars.scss'//暗黑模式
import '../element-variables.scss'//自定义主题
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'//默认样式
// import 'element-plus/theme-chalk/dark/css-vars.css'//暗黑模式

import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  app.use(ElementPlus, { 
    locale ,
    // size: 'default'
    size: 'small', 
    // zIndex: 3000
  })
}
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// const app = createApp(App)

// app.use(ElementPlus)
// app.mount('#app')