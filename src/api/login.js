import request from '@/utils/request'

export function login(username,password){
   return request({
       url: 'dev-api/user/login',
       method: 'post',
       data: {
           username,
           password
        }
    })
}

export function getUserInfo(token){
    return request({
        url: `dev-api/user/info/${token}`,
        method: 'get'
     })
}