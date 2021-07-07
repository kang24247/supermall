<template>
    <div class="scroll" ref="scroll">
      <div class="wrapper" >
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  props: {
  probeTypeValue:{
    type:Number,
    default:0
  }  
  },
  data () {
    return {
      scroll:null,
      
    }
  },
  mounted () {
// 使用better-scroll必须先引入（官方先下载源文件或者npm下载）需要注意！滚动的元素只能有一个直接子元素
// 而其直接子元素的下面就可以放需要滚动的标签组件等内容了 
// 使用vue给设定的 ref 属性 能够精确的找到某个元素标签或者组件 避免了重名的影响！    
    this.scroll = new BScroll(this.$refs.scroll,{
      // observeDOM:false,
      click:true,
      probeType:this.probeTypeValue,
      pullUpLoad:true
    })

    this.scroll.on('scroll',position=>{
      // console.log(position);
      this.$emit("scrollevent", position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUpevent')
    })
  },
  methods: {
    scrollTo(x,y,time=500){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>

