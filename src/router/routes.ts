/*
 * @Author: Aardpro
 * @Date: 2021-03-24 21:55:45
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 12:00:59
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
      title: 'Home',
      notFluid: true
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
    path: '/jsrun/:id?',
    name: 'JSRun',
    component: () => import('../views/jsrun/index.vue'),
    meta: {
      title: 'JSRun'
    }
  },
  {
    path: '/json-data/:id?',
    name: 'JsonData',
    component: () => import('../views/json-data/index.vue'),
    meta: {
      title: 'JSON-Data'
    }
  },
  {
    path: '/graffiti/:id?',
    name: 'HTMLGraffiti',
    component: () => import('../views/html-graffiti/index.vue'),
    meta: {
      title: 'HTML Graffiti'
    }
  },
  {
    path: '/jwt-decoder/:id?',
    name: 'JWTDecoder',
    component: () => import('../views/jwt-decoder/index.vue'),
    meta: {
      title: 'JWT Decoder'
    },
  },
  {
    path: '/cloud-code',
    name: 'CloudCode',
    component: () => import('../views/cloud-code/index.vue'),
    meta: {
      title: 'Cloud Code', notFluid: true
    },
  },
  {
    path: '/token/:token',
    name: 'AccessToken',
    component: () => import('../views/login/token.vue'),
    meta: {
      title: 'AccessToken'
    },
  },
]
export default routes
