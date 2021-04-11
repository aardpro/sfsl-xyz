/*
 * @Author: Aardpro
 * @Date: 2021-04-08 22:12:32
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 12:20:30
 * @Description: 
 */
import request from './axios-interceptor'
import { AxiosRequestConfig } from 'axios'

// 获取captcha图片和token
export async function getCaptcha(params: object) {
  const option: AxiosRequestConfig = {
    method: 'GET',
    url: 'captcha',
    params
  }
  return await request(option)
}

// 以登录名、密码或者手机、密码登录
export async function userLogin(data: object) {
  const option: AxiosRequestConfig = {
    method: 'POST',
    url: 'user/login',
    data
  }
  return await request(option)
}

// 新建一个code 记录
export async function createCode(data: object) {
  const option: AxiosRequestConfig = {
    method: 'POST',
    url: 'code',
    data
  }
  return await request(option)
}
// 修改一个code 记录
export async function saveCode(id: String, data: object) {
  const option: AxiosRequestConfig = {
    method: 'PATCH',
    url: `code/id/${id}`,
    data
  }
  return await request(option)
}

// 删除一个code 记录
export async function deleteCode(id: String) {
  const option: AxiosRequestConfig = {
    method: 'DELETE',
    url: `code/id/${id}`
  }
  return await request(option)
}

// 获取一个code 记录
export async function getCode(id: String) {
  const option: AxiosRequestConfig = {
    method: 'GET',
    url: `code/id/${id}`,
  }
  return await request(option)
}

// 获取我的code列表，不包含content记录
export async function getCodeMylist() {
  const option: AxiosRequestConfig = {
    method: 'GET',
    url: `code/mylist`,
  }
  return await request(option)
}
