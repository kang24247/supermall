<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <div class="login-registration" @click="toLogin">
      <div class="profilepicture">
        <img src="@/assets/img/profile/DogNightFork.jpg" alt="">
      </div>
      <div class="loginregist">
        <div class="loginregist-one">Admin,欢迎回来 ~</div>
      </div>
    </div>

    <div class="count-info">
      <div>
        <div><span>0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div>
        <div><span>0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div>
        <div><span>0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
    <div class="mess-mall-vip-cart-app">
      <div>
        <img src="@/assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div>
        <img src="@/assets/img/profile/pointer.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="vip">
        <img src="@/assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
      <div>
        <img src="@/assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div>
        <img src="@/assets/img/profile/shopping.svg" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name:'Profile',
  components: {
    NavBar
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .profile-navbar{
    text-align: center;
    font-size: 18px;
    color: rgb(240, 234, 234);
    background-color: rgb(255,141,150);
  }
  .login-registration{
    height: 100px;
    width: 100%;
    background-color: rgb(255,141,150);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(240, 234, 234);
  }
  .profilepicture{
    width: 60px;
    height: 60px;
    margin-left: -20px;
  }
  .profilepicture img{
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  .loginregist{
    margin-left: -40px;
  }
  .login-icon{
    font-size: 24px;
  }
  .count-info{
    text-align: center;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: rgb(248, 247, 247) solid 8px;
  }
  .count-info span{
    color: red;
    font-size: 20px;
  }
  .mess-mall-vip-cart-app div{
    height: 40px;
    width: 100%;
    line-height: 40px;
    padding-left: 10px;
    border-top: rgb(241, 234, 234) solid 1px;
  }
  .mess-mall-vip-cart-app img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .mess-mall-vip-cart-app .vip{
    height: 48px;
    border-bottom: rgb(248, 247, 247) solid 8px;
  }
</style>

