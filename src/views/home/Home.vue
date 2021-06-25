<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="nav-center" slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommend'/>
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from '@/network/home.js'
import RecommendView from './childComps/RecommendView'
export default {
  name:'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data () {
    return {
      banners:[],
      recommend:[]
    }
  },
  created () {
    getHomeMultidata().then(result=>{
      console.log(result)
      this.banners=result.data.banner.list
      this.recommend=result.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
  }
  .nav-center{
    text-align: center;
    color: #fff;
  }
</style>