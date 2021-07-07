<template>
  <div class="detailNavBar">
    <nav-bar >
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg">
      </div>
      <div slot="center" class="titleItem">
        <div v-for="(item,index) in titles" 
        :key="index" 
        :class="{infoActive:index==currentIndex}"
        @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titleItem{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.infoActive{
  color: var(--color-high-text);
}
.back img{
  margin: 12px 20px;
}
</style>