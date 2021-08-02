<template>
  <div class="login">
    <div class="top-div"></div>
    <div class="content">
      <div class="logo"><img src="@/assets/img/funny/mls.jpg" alt=""></div>
      <form>
        <span>账户</span><input class="username" type="text" v-model="login_info.username" ><br>
        <span>密码</span><input class="password" type="password" v-model="login_info.password" ><br>
        <input class="login-button" type="button" value="登录" @click="loginbutton">
      </form>
      <toast></toast>
      <div class="register-forget">
        <div class="register">注册美丽说</div>
        <div class="forget">忘记密码</div>
      </div>
      <div class="third-party">
        <div class="text-info">第三方登录</div>
        <div class="picture">
          <div class="picture-icon">
            <img src="../../../assets/img/funny/weixin (1).png" >
          </div>
          <div class="picture-icon">
            <img src="../../../assets/img/funny/qq (1).png" >
          </div>
          <div class="picture-icon">
            <img src="../../../assets/img/funny/weibo.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Toast from '../toast/Toast'
export default {
  data () {
    return {
      login_info:{
        username: 'admin',
        password: '123456'
      }  
    }
  },
  components: {
    Toast
  },
  methods: {
    loginbutton(){
      let promise = axios.post('http://127.0.0.1:8888/api/private/v1/login',this.login_info)
      promise.then(res => {
        if(res.data.meta.status === 200 ) {
          this.$toast.show('登录成功')
          window.sessionStorage.setItem('token',res.data.data.token)
          this.$router.push('/profile')
          console.log(res);
        }else{
          this.$toast.show('账户信息不正确，请重新输入')
        }  
      },err => {
        this.$toast.show('服务器未响应，请稍后重试')
      })
    }
  }
}
</script>

<style scoped>
  .top-div{
    width: 100vw;
    height: 30%;
    background: url('../../../assets/img/funny/bgc.png');
    background-size: 64px;
  }
  .login{
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom right, rgb(250,96,127), rgb(253,166,133));
    opacity: 0.8;
  }
  .content{
    height: 80%;
    width: 90%;
    background-color: #fff;
    position: fixed;
    bottom: 40px;
    left: 5%;
    border-radius: 4%;
    padding-left: 6%;
  }
  .content .logo{
    width: 100%;
    height: 30%;
    margin: auto;
  }
  .content .logo img{
    transform: scale(0.4);
    border-radius: 20px;
    position: fixed;
    left: -30%;
    top: 8%;
  }
  form{
    margin-top: 0;
  }
  form input{
    width: 80%;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid #c8cccf;
    border-radius: 30px;
    outline: 0;
    margin-bottom: 20px;
    margin-left: 6px;
    font-size: 18px;
  }
  .login-button{
    width: 96%;
    margin-left: -2%;
    background-color: rgb(250,96,127);
    color: #fff;
    font-size: 16px;
    padding-left: 10%;
  }
  .register-forget{
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    font-size: 14px;
  }
  .register{
    color: rgb(250,96,127);
  }
  .third-party{
    margin-top: 10%;
    margin-left: -18px;
    width: 80%;
    height: 28%;
    position: fixed;
    box-shadow: 0 -1px 1px rgb(243, 240, 240);
  }
  .third-party .text-info{
    color: gray;
    margin-top: -10px;
    margin-left: 24px;
    text-align: center;
  }
  .picture{
    margin-left: 20px;
    width: 80vw;
    display: flex;
    margin-top: -10%;
    justify-content: space-around;
    align-items: flex-end;
    margin-top: 10%;
    padding-top: 10%;
  }
  .picture img{
    width: 36px;
    height: 36px;
  }
</style>
