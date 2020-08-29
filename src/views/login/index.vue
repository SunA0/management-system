<template>
  <div class="login-contrainer">
    <el-form ref="form" :rules= "rules" :model="form" label-width="80px" class='login-form' >
    <h2 class="login-title">管理系统</h2>
      <!-- input -->
      <el-form-item prop="username">
        <el-input v-model="form.username"  placeholder="账户"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password"  type="password" placeholder="密码"></el-input>
      </el-form-item>
      <!-- button -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Login</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules:{
        username:[{required: true,message: '请输入用户名',trigger: 'blur'}],
        password:[{required: true,message: '密码不为空',trigger: 'blur'}]
      }
    };
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          alert('submit');
        }else{
          console.log('xx');
          return false;
        }
      });
    }
  }
};
</script>

<!-- scoped 只作用于当前页面 -->
<style scoped>
    .login-form{
        width: 350px;
        margin: 160px auto;
        padding: 30px;
        border-radius: 20px;
        background: lightslategray;
    }
    .login-contrainer{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: darkslategray;
    }
    .login-title{
        color: cornsilk;
        text-align: center;
    }
</style>