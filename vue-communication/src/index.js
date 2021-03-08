import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
export const eventBus=new Vue()
new Vue({
    el: '#main',
    router,
    render: h => h(App)
})