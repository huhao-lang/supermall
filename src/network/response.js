import Axios from 'axios'


export function Response(config) {
  
  const instance = new Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    console.log(err);
  })
 
// 响应拦截器 这里是私有拦截器 全局写在外面就行
  instance.interceptors.response.use(res => {
  
    return res.data
  }, err => {
    console.log(err);
  });
   // 发送真正的网络请求
   return instance(config)
}