// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')


// import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'

// const app = createApp(App)

// app.use(ElementPlus)
// app.use(store).use(router)
// app.mount('#app')

// import './element-variables.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')