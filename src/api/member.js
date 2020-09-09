import request from '@/utils/request'

export default {
    //获取会员列表数据
    getList(){
        return request({
            url:'dev-api/member/list',
            method:'get'
        })
    }
}