<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar" @titleclick='titleclick' ref="navbar"/>
    <scroll class="content" ref="scroll" @scrollevent='scrollevent'>
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo' @infoimageload='infoimageload'></detail-goods-info>
      <detail-param-info :paramInfo='paramInfo' ref='params'/>
      <detail-user-evaluate :EvaluateData='EvaluateData' ref="evaluate"/>
      <goods-list :goods='reconmends' ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addShoppingCart='addShoppingCart'/>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailUserEvaluate from './childComps/DetailUserEvaluate'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '../home/childComps/goods/GoodsList'

import {getDetail,Goods,Shop,GoodsParam,EvaluateData,getRecommend} from '../../network/detail'
import {itemListenerMixin,backtopMixin} from '@/common/mixin'
import {debounce} from '@/common/utils'
import { mapActions } from 'vuex'
export default {
  name:"Detail",
  data () {
    return {
      iid : null,
      topImages:[],
      goods:{} ,
      shop:{},
      detailInfo:{
        desc:'',
        imgdata:''
      },
      paramInfo:{
        Infos:'',
        sizes:''
      },
      EvaluateData:{
      },
      reconmends:[],
      detailscrollY:[],
      debouncegetoffsettop:null,
      currentindex:null
      
      
    }
  },
  mixins: [itemListenerMixin,backtopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailUserEvaluate,
    Scroll,
    GoodsList,
    DetailBottomBar
    
    
  },
  methods: {
    ...mapActions(["addCart"]),
    infoimageload(){
        this.refresh()
        // console.log('详情页图片加载完成了一次');
        this.debouncegetoffsettop()
    },
    titleclick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.detailscrollY[index],200)
    },
    scrollevent(position){
      let length = this.detailscrollY.length 
      let positionY = -position.y
      for (let index = 0; index < length-1; index++) {
          if(this.currentindex !== index && (positionY >= this.detailscrollY[index] && positionY < this.detailscrollY[index+1])){
              this.currentindex = index
              this.$refs.navbar.currentIndex = this.currentindex
          }
      }
    },
    scrollevent(position){
      // 滚动事件监听backtop是否显示与隐藏
      this.isShowBackTop = (-position.y) > 1000 
    },
    addShoppingCart(){
      // 1.获取购物车所需要的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 将商品添加到购物车
      // this.$store.commit('addCart', product)

      this.addCart(product).then(res=>{
        // console.log(res);
        console.log(this.$toast);
        this.$toast.show(res)
      })

      


    }
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 根据iid请求详情数据
    getDetail(this.iid).then(res=>{
      console.log(res);
      // 获取商品详情页顶部banner img数据
      const data = res.result
      this.topImages = data.itemInfo.topImages
      // 获取商品的基本信息数据
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      // 获取店铺信息数据
      this.shop = new Shop(data.shopInfo)
      // 请求商品详情页的展示图片数据
      this.detailInfo.desc = data.detailInfo.desc
      this.detailInfo.imgdata = data.detailInfo.detailImage[0]
      // 请求商品详情页的规格数据
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //请求商品商品详情页的用户评论数据  
      if(data.rate.cRate>0){
        this.EvaluateData = new EvaluateData(data.rate.list[0],data.rate.list[0].user)
      }
    }),
    //请求推荐部分的数据
    getRecommend().then(res=>{
      // console.log(res);
      this.reconmends = res.data.list
    })

    this.debouncegetoffsettop = debounce(()=>{
        this.detailscrollY = []
        this.$nextTick(()=>{
          this.detailscrollY.push(0)
          this.detailscrollY.push(this.$refs.params.$el.offsetTop)
          this.detailscrollY.push(this.$refs.evaluate.$el.offsetTop)
          this.detailscrollY.push(this.$refs.recommend.$el.offsetTop)
          this.detailscrollY.push(Number.MAX_VALUE)
        })
        // console.log(this.detailscrollY)
    },200)
    
  },
  mounted () {
     
  }, 
  destroyed () {
    this.$bus.$off('itemImagLoad',this.itemImgListener)
  }
}
</script>

<style scoped>
  .detail{
    height: 100vh;
    background-color: #fff;
    position: relative;
    z-index: 10;
  }
  .detail-navbar{
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
</style>