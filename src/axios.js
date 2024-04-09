import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:5000'
})
// При каждом запросе будет вшиваться поле Authorization c токеном если он есть
instance.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})


export default instance;