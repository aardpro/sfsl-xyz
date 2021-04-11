/*
 * @Author: Aardduke
 * @Date: 2021-02-17 12:12:17
 * @LastEditors: Aardpro
 * @LastEditTime: 2021-04-11 15:06:37
 * @Description: 
 */
import axios, {
  AxiosRequestConfig,
} from 'axios'

interface IResponseData {
  code: number;
  msg: string;
  data: IData;
}

interface IData {
  id?: string;
  row?: object;
  rows?: []
}

const service = axios.create({
  baseURL: 'https://sfsl.xyz/xyz/index.php?route=/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json charset=UTF-8' }
})

service.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    if (localStorage.getItem('TOKEN')) {
      config.headers.Authorization = localStorage.getItem('TOKEN')
    }

    if (!config.responseType) {
      config.responseType = 'json'
    }

    if (!config.method) {
      config.method = 'GET'
    }
    return config
  },
  function (error) {
    console.error('request error', error.message)
    return false
  }
)
// 当出错的时候，出错信息发布到vuex
// 返回data对象
service.interceptors.response.use(
  async (response) => {
    return response
  },
  (error) => {
    return {
      data: {
        code: 500,
        msg: error.message || error + "",
        data: {}
      }
    }
  }
)

const request = async (options: AxiosRequestConfig) => {
  const response = await service(options)
  return response.data as IResponseData;
}

export default request
