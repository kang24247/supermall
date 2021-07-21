<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center" class="navbar-name">购物车({{length}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <div v-if="cartlist.length==0" class="defaultshow">
        <img src="https://gw.alicdn.com/tfs/TB1U0RydwoQMeJjy1XaXXcSsFXa-220-220.png_190x190q90_.webp" alt="">
        <div class="titleone">购物车竟然是空的</div>
        <div class="titletwo">再忙 ~ 也要记得买点什么犒劳自己呀</div>
      </div>
      <cart-list/>
    </scroll>
    <cart-payments :cartlist="cartlist" v-if="cartlist.length > 0"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childcomps/CartList'
import Scroll from '@/components/common/scroll/Scroll'
import CartPayments from './childcomps/CartPayments'
import { mapGetters } from 'vuex'
export default {
  name:'Cart',
  components: {
    NavBar,
    CartList,
    CartPayments,
    Scroll
  },
  computed: {
    ...mapGetters({
      length:'cartLength',
      cartlist:'cartList'
    })
  },
  activated () {
    console.log('购物车页面唤醒----启动刷新');
  this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: rgb(255,142,150);
  }
  .navbar-name{
    text-align: center;
  }
  .cart .content{
    overflow: hidden;
    height: calc(100% - 44px - 49px - 30px);
  }
  .defaultshow{
    text-align: center;
    position: relative;
    margin-top: 100px;
  }
  .defaultshow img{
    width: 20%;
    height: 20%;
    margin-bottom: 20px;
  }
  .defaultshow .titletwo{
    margin-top: 10px;
    color: rgb(192, 187, 187);
  }
</style>