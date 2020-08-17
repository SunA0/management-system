import axios from 'axios'

// axios.get('/db.json').then(response =>{
//     const data = response.date
//     console.log(data)
// })

const request = axios.create({
        baseURL:'/',
        timeout: 5000
})

// request.get('/db.json').then(response =>{
//     console.log(response)
//     console.log(response.data)
// })

//拦截器
request.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error);
 })
request.interceptors.response.use(response =>{
    return response
},error => {
    return Promise.reject(error);
})

export default request