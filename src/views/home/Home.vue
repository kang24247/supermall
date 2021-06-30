<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="nav-center" slot="center">购物街</div>
    </nav-bar>
  <scroll class="content" ref="scroll" :probeTypeValue='3' @scrollevent='scrollevent' @pullingUpevent='loadMore'>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommend" />
    <feature-view />
    <tab-control
      :titles="titles"
      class="tabcontrol-pos"
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </scroll>
  <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
    
  },
  data() {
    return {
      banners: [],
      recommend: [],
      titles: [
        { id: 1, name: "流行" },
        { id: 2, name: "新款" },
        { id: 3, name: "精选" },
      ],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType : "pop",
      isShowBackTop:false
    };
  },
  created() {
    // 1.请求多个数据给banner和recommend
    this.getHomeMultidata();

    // 2.请求首页流行、新款、精选三大板块数据
    this.getHomeGoods("pop")
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    tabClick(index) {
      switch(index){
        case 0: 
          this.currentType = "pop"
        break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
          break
      }
    },
    scrollevent(position){
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000 
    },
    loadMore(){
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType) 
      this.$refs.scroll.scroll.refresh()
    },
    // 以下是网络请求的相关方法
    getHomeMultidata() {
      getHomeMultidata().then((result) => {
        this.banners = result.data.banner.list;
        this.recommend = result.data.recommend.list;
      });
    },
    // 接口没有办法用了等待老师回复
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((result) => {
        // console.log(result.data.list);
        this.goods[type].list.push(...result.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      });
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
      // console.log('-------------');
    }
  }
};
</script>

<style scoped>
#home{
  height: 100vh;
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}
.nav-center {
  color: #fff;
  text-align: center;
}

/* 给better-scroll设置高度 */
.content{
  height: calc(100% - 93px);
  /* overflow: hidden; */
  /* margin-top: 44px; */
  /* top: 44px; */
}


.tabcontrol-pos {
  position: sticky;
  top: 44px;
  z-index: 10;
  background-color: #fff;
}
</style>