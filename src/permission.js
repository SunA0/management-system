//权限校验
//vue router
import router from './router'
import {getUserInfo} from './api/login'

//前置过滤
router.beforeEach((to,from,next)=>{
    //1.获取token
    const token = localStorage.getItem('vue-user')
    if(!token){
    //1.1 没获取到，访问非登录页无法访问，转登录页
        if(to.path != '/login'){
            next({path:'/login'})
        }else{ 
            next()
        }    
    }else{
    //1.2 获取token
    //  1.2.1 请求login，允许
        if(to.path ==='/login'){
            next()
        }else{
            //  1.2.2 请求非login，通过token获取信息
            const userInfo = localStorage.getItem('vue-user')
            if(userInfo){
                //本地获取到，直接去目标路由
                next()
            }else{
                getUserInfo(token).then(response => {
                    //本地获取不到，获取信息保存
                    const resp = response.data
                    if(resp.flag){
                        localStorage.setItem('vue-user',JSON.stringify(resqUser.data))
                        next()
                    }else{
                        next({path:'/login'})
                    }   
                })
                
            }

        }
    }
    
    //  1.2.2.1 如果获取到，进行非登录页面，否则（超时）登录页
})