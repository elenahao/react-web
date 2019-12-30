import axios from 'axios'
import Cookie from 'js-cookie'
// import router from '@/router.js'
import {
    Message
} from 'antd'
// import qs from 'qs'
// import { commonBase } from '../config.js'

// axios.defaults.baseURL = commonBase
axios.defaults.timeout = 10000;
// http请求拦截器
axios.interceptors.request.use(config => {
    // element ui Loading方法
    return config
}, error => {
    Message.error('请求超时')
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
    return data
}, error => {
    Message.error('加载失败')
    return Promise.reject(error)
})
// 检查http返回码
const checkHttpResponse = (response) => {
    if (response && (response.status === 200 || response.status === 304)) {
        return response
    } else if (parseInt(response.status) === 401) {
        localStorage.clear()
        Cookie.set('access_token', '')
        // router.replace({
        //     path: '/login'
        // })
    } else {
        return response
    }
}
export default {
    // 上传文件
    postFile(url, formData, host) {
        // host = host || BASEURL
        return axios({
            method: 'POST',
            url: host + url,
            data: formData,
            timeout: 600000,
            headers: {
                'X-Auth-Token': Cookie.get('access_token'),
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(checkHttpResponse)
    },
    // 上传图片之类的文件
    postFormData(url, data) {
        return axios({
            method: 'post',
            url,
            data,
            timeout: 600000,
            headers: {
                'X-Auth-Token': Cookie.get('access_token'),
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8; multipart/form-data;'
            }
        })
            .then(checkHttpResponse)
    },
    request(config) {
        return axios(
            Object.assign(config, {
                headers: {
                    // 'X-Auth-Token': Cookie.get('access_token') ? Cookie.get('access_token') : ""
                    'X-Auth-Token': "MjgzMjhiMzRhM2VmYWNmMzQ0NTBmMjI5NWE1MGZiMWY="
                }
            })
        ).then(checkHttpResponse)
    }
}