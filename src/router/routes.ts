/*
 * @Author: Aardpro
 * @Date: 2021-03-24 21:55:45
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-27 14:56:16
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
    path: '/vue-image-slim',
    name: 'VueImageSlim',
    component: () => import('../views/vue-image-slim/index.vue'),
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
    path: '/html-graffiti',
    name: 'HTML Graffiti',
    component: () => import('../views/html-graffiti/index.vue'),
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
