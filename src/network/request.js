//axios的封装 避免作者不再维护
import axios from 'axios'

export function request(config){
  const instance = new axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  //拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })

  instance.interceptors.response.use(result=>{
    return result.data
  },err=>{
    console.log(err);
  })

  return instance(config)
}
