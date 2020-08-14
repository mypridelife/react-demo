import axios from 'axios'
import { Toast } from 'vant'
import { bridge } from '@/lanren/mixins/bridge'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 300000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (getToken()) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['accessToken'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
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
    if (res.status === 2001) {
      Toast({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res.message || 'error')
    }
    if (res.status === 9666) {
      console.log('9666')

      try {
        // eslint-disable-next-line no-undef
        app.doUserLogin(
          JSON.stringify({
            isRefreshCurrent: 1
          })
        )
        bridge.methods.callNative({
          method: 'doUserLogin',
          data: {
            isRefreshCurrent: 1
          }
        })
      } catch (error) {
        Toast({
          message: res.message || '未登录',
          type: 'error',
          duration: 5 * 1000
        })
      }
    } else {
      return res
    }
  },
  error => {
    Toast({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
