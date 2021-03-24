/*
 * @Author: Aardpro
 * @Date: 2021-03-21 10:25:12
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-03-21 11:13:00
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()]
})
