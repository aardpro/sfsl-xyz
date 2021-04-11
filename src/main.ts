/*
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-10 22:31:09
 * @Description: 
 */
import { createApp } from 'vue'
import Router from './router'
import App from './App.vue'
import SvgIcon from './components/SvgIcon.vue'
import GoHome from "./components/GoHome.vue"
import SaveCloudButton from "./components/SaveCloudButton.vue"

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.component('GoHome', GoHome)
app.component('SaveCloudButton', SaveCloudButton)

app.provide("getPath", (suffix = "") => Router.currentRoute.value.path + suffix)
app.provide("routeName", () => Router.currentRoute.value.name)
app.provide("getRoute", () => Router.currentRoute.value)
app.provide("getToken", () => localStorage.getItem('TOKEN'))

app.use(Router)

app.mount('#app')
