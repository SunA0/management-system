import request from '@/utils/request'

// request.get('/db.json').then(response =>{
//     console.log(response)
//     console.log(response.data)
// })
//等价于
// request({
//     method: 'get',
//     url: '/db.json'

// }).then(response=>{
//     console.log(response.data)
// })
export default{
    getList(){
        const req = request({
            method: 'get',
            url: '/db.json'
        })
        return req
    }
}
