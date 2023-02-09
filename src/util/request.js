import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import { getKey } from '@/util/localstorage';
import { authToken } from '@/config';
import {resetToken} from "@/util/auth.ts";

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:9999', //process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = getKey(authToken);
    if (token != null) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers[authToken] = token;
      // config.headers['role'] = store.getters.roles;
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      ElMessage({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      /**
       * 5005: 无效 token
       * 5006: Other clients logged in
       * 5007: Token 过期
       */
      if (res.code === 5005 || res.code === 5006 || res.code === 5007) {
        // to re-login
        ElMessageBox.confirm('你已经被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          resetToken().then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
