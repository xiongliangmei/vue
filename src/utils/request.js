import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  //  baseURL: 'http://localhost:8080',
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    //  请求头加入 token
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
