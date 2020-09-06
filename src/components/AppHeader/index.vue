<template>
    <div class = "header">
       JOSHUA
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command='edit' >修改密码</el-dropdown-item>
                <el-dropdown-item command='logout'>退出登录</el-dropdown-item> 
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import {logout} from '@/api/login'
export default {
    methods:{
        handleCommand(command){
           // this.$message('${command}`)
           switch(command){
               case 'edit':
                   //edit password
                   break;
                case 'logout':
                    //logout
                    const token = localStorage.getItem('vue-user-token')
                    logout(token).then(response=>{
                        const resp = response.data
                        if(resp.flag){
                            localStorage.removeItem('vue-user')
                            localStorage.removeItem('vue-user-token')
                            this.$router.push('/login')
                        }else{
                            this.$message({
                                $message:'退出失败',
                                type: 'warning'
                            })
                        };
                    })
                    break;
                default:
                    break;

           }
        }
    }
}
</script>>