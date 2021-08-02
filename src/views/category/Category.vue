<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="bigwrapper">
      <div class="left-wrapper">
        <tab-menu :titles="CategoryTitleList" @menuclik="menuclik"></tab-menu>
      </div>
      <div class="right-wrapper">
        <scroll id="right-content" style="height: 48vh" ref="scroll">
            <category-right-top :topiteminfo="gettopiteminfo"/>
            <tab-control :titles='tabcontroltitles' @tabClick='tabClick'></tab-control>
            <tab-control-content :bottomItemInfo ='getBottomItemInfo'></tab-control-content>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import scroll from "@/components/common/scroll/Scroll"

import TabControl from '@/components/content/tabControl/TabControl'

import { getCategory, getSubcategory, getCategoryDetail } from '@/network/category'

import TabMenu from './childComs/TabMenu'
import CategoryRightTop from './childComs/CategoryRightTop'
import TabControlContent from './childComs/TabControlContent'
import {tabControlMixin} from "@/common/mixin";


export default {
  data () {
    return {
      CategoryData: [],
      CategoryTitleList: [],
      CurrentPageData: {},
      currentindex: -1,
      tabcontroltitles: [
        {name :'综合'},
        {name :'新品'},
        {name :'销量'}
      ]
    }
  },
  mixins: [tabControlMixin],
  components: {
    scroll,
    NavBar,
    TabMenu,
    CategoryRightTop,
    TabControl,
    TabControlContent
  },
  created () {
    this._getCategory()
    console.log(this.CurrentPageData) 
  },
  computed: {
    gettopiteminfo(){
      if(this.currentindex < 0) return []
      return this.CurrentPageData[this.currentindex].TopItemInfo
    },
    getBottomItemInfo(){
      if(this.currentindex < 0) return []
      return this.CurrentPageData[this.currentindex].BottomItemInfo[this.currentType]
    }
  }
  ,
  methods: {
    // 获取分类数据
    _getCategory(){
      getCategory().then(res => {
        console.log(res)
        this.CategoryData = res.data.category.list 

        for (let i = 0; i < this.CategoryData.length; i++) {
          this.CategoryTitleList.push(this.CategoryData[i].title)
          // 创建一个空的容器 存放当前页面需要显示的数据
          this.CurrentPageData[i] = {
            TopItemInfo: [],
            BottomItemInfo: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 第一次加载页面 获取的最初显示数据
        this._getSubcategory(0)
      })
    },
    menuclik(index){
      this._getSubcategory(index)
      console.log(this.CurrentPageData[index]);
      
    },
    _getSubcategory(index){
      this.currentindex = index
      let maiKey = this.CategoryData[index].maitKey
      let miniWallkey = this.CategoryData[index].miniWallkey
      getSubcategory(maiKey).then( res => {
      // 获取TopItemInfo的数据
        this.CurrentPageData[index].TopItemInfo = res.data.list
      })
      // 给getCategoryDetail传入参数
      this._getCategoryDetail(miniWallkey,'pop',index)
      this._getCategoryDetail(miniWallkey,'new',index)
      this._getCategoryDetail(miniWallkey,'sell',index)
    },
    // 获取 BottomItemInfo 的数据
    _getCategoryDetail(miniWallkey,type,index){
      getCategoryDetail(miniWallkey,type).then( res => {
        this.CurrentPageData[index].BottomItemInfo[type] = res

        // 对象拓展运算符  用于将该对象中的可遍历属性全部拷贝 过去
        this.CurrentPageData = {...this.CurrentPageData}
      })
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}
.bigwrapper{
  display: flex;
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 44px;
}
.bigwrapper .left-wrapper {
  width: 25vw;
} 
.bigwrapper .right-wrapper{
  width: 75vw;
}
</style>
