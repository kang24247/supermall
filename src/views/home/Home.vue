<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="nav-center" slot="center">购物街</div>
    </nav-bar>
  <div class="surprise" v-show="showFunny">
    <img src="@/assets/img/funny/funny.gif">
  </div>
  <tab-control v-show="isShow" ref="tabControlNew" :titles="titles" @tabClick="tabClick" class="tab-cotrol"></tab-control>
  <scroll class="content" ref="scroll" :probeTypeValue='3' @scrollevent='scrollevent' @pullingUpevent='loadMore'>
    <home-swiper :banners="banners" @swiperImagLoad="swiperImagLoad"></home-swiper>
    <recommend-view :recommends="recommend" />
    <feature-view />
    <tab-control v-show="!isShow" ref="tabControl" :titles="titles" @tabClick="tabClick"></tab-control>
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
import {debounce} from '@/common/utils'

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
      isShowBackTop:false,
      TabControlOffTop:0,
      isShow:false,
      SaveY:0,
      showFunny:true
    }
  },
  created() {
    // 1.请求多个数据给banner和recommend
    this.getHomeMultidata();

    // 2.请求首页流行、新款、精选三大板块数据
    this.getHomeGoods("pop")
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh,100)
    
    this.$bus.$on('itemImagLoad',()=>{
      // console.log('事件总线方式。。。');
    // this.$refs.scroll.refresh()
    refresh()
    })
  
    
  },
  // 通过keep-alve缓存 以下activated和deactivated两个函数 实现路由切换之前的页面浏览位置不变
  activated () {
    this.$refs.scroll.scrollTo(0,this.SaveY,0)  
    this.$refs.scroll.refresh()  
  },
  deactivated () {
    this.SaveY = this.$refs.scroll.getScrollY()
    // console.log('SaveY : '+this.SaveY);
  },
  methods: {
    swiperImagLoad(){
      this.TabControlOffTop = this.$refs.tabControl.$el.offsetTop
    },
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
      //使tabctrol两个的样式同步
    this.$refs.tabControlNew.currentindex = index
    this.$refs.tabControl.currentindex = index
    },
    scrollevent(position){
      // 滚动事件监听backtop是否显示与隐藏
      this.isShowBackTop = (-position.y) > 1000 
      //设置tabCtrol滚动到指定位置便吸顶
      this.isShow = (-position.y) > this.TabControlOffTop
      // console.log(position.y)

      // 设置滑稽 滚动到50的高度就隐藏
      this.showFunny = !((-position.y) > 50)
    },
    loadMore(){
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType) 
      
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
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}
.surprise img{
  position: fixed;
  z-index: 0;
  width: 100px;
  height: 100px;
  left: 36%;
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
.tab-cotrol{
  position: relative;
  z-index: 10;
}
</style>