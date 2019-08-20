import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 1000 * 60
  })

  //axios的拦截器
  //请求拦截的作用
  instance.interceptors.request.use(config => {
    return config; //拦截过后一定要返回出去，后者才能拿到数据
  },err => {
    console.log(err)
  })

  //响应拦截的作用
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })


  return instance(config)
}

