/*
 * @Author: Aardpro
 * @Date: 2021-03-24 21:55:45
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-24 22:13:01
 * @Description: 
 */
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('../views/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/vue3-image-slim',
    name: 'Vue3ImageSlim',
    component: () => import('../views/vue3-image-slim/index.vue'),
    meta: {
      title: 'vue3-image-slim'
    }
  },
  {
    path: '/jsrun',
    name: 'JSRun',
    component: () => import('../views/jsrun/index.vue'),
    meta: {
      title: 'JSRun'
    }
  },
  {
    path: '/json-data',
    name: 'JsonData',
    component: () => import('../views/json-data/index.vue'),
    meta: {
      title: 'JSON-Data'
    }
  },
  {
    path: '/html-coder',
    name: 'HTMLCoder',
    component: () => import('../views/html-coder/index.vue'),
    meta: {
      title: 'HTML Coder'
    }
  },
  {
    path: '/jwt-decoder',
    name: 'JWTDecoder',
    component: () => import('../views/jwt-decoder/index.vue'),
    meta: {
      title: 'JWT Decoder'
    },
  }
]
export default routes
