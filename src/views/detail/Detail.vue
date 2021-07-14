<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo' @infoimageload='infoimageload'></detail-goods-info>
      <detail-param-info :paramInfo='paramInfo' />
      <detail-user-evaluate :EvaluateData='EvaluateData'/>
    </scroll>
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

import Scroll from '@/components/common/scroll/Scroll'

import {getDetail,Goods,Shop,GoodsParam} from '../../network/detail'

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
      EvaluateData:{}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailUserEvaluate,
    Scroll
    
    
    
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
      //请求商品商品详情页的用户评论数据   评论时间没有找到具体点的毫秒数据 待探索@@@
      this.EvaluateData = data.rate.list[0]
      
    })
  },
  methods: {
    infoimageload(){
        this.$refs.scroll.refresh()
    }
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
    height: calc(100% - 44px);
  }
</style>