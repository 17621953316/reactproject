import axios from 'axios'

const baseURL = "http://localhost:8888/api/private/v1"

axios.defaults.baseURL = baseURL

//登陆验证函数
export const checkUser = params => {
    return axios.post('login',params).then(res => res.data)
}