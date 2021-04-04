/*
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-27 12:47:54
 * @Description: 
 */
import { createApp } from 'vue'
import Router from './router'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import GoHome from "./components/GoHome.vue"

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.component('GoHome', GoHome)
app.use(Router)

app.mount('#app')
