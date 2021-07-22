<template>
  <div class="category">
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Category',
  data () {
    return {
      scroll:null  
    }
  },
  mounted () {
    this.scroll = new BScroll(document.querySelector('.category'),{
        probeType:3,
        pullUpLoad:true
    })
    this.scroll.on('scroll',position=>{
        // console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('已经到底了，上拉加载更多');
      // 发送网络请求
      // 处理数据
      setTimeout(()=>{
          // this.finishPullUp()
      },3000)
    })
  }
}
</script>

<style scoped>
  .category{
    height: 200px;
    background-color: #bfa;
    overflow: hidden;
  }
  
</style>