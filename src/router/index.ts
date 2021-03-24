/*
 * @Author: Aardpro
 * @Date: 2021-03-24 21:55:18
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-24 22:02:58
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.title) {
    window.document.title = to.meta.title as string
  }
  next()
})

export default router
