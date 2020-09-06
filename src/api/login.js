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
export function logout(token){
    return request({
        url: 'dev-api/user/logout',
        method: 'post',
        data: {
            token
         }
     })
 }

export function getUserInfo(token){
    return request({
        url: `dev-api/user/info/${token}`,
        method: 'get'
     })
}