<template>
  <div class="goods-info">
    <div class="describtion">
      <div class="gradient-left"></div>
      <div class="element-info">{{detailInfo.desc}}</div>
      <div class="gradient-right"></div>
    </div>
    <div class="photo-desc">{{detailInfo.imgdata.key}}</div>
    <ul class="photo-list" v-for="(item,index) in detailInfo.imgdata.list " 
    :key='index'>
      <li>
        <img :src="item" @load="infoimageload">
      </li>
    </ul>
  </div>
</template>

<script>
 export default {
  name:'DetailGoodsInfo',
  props: {
    detailInfo:{
      type:Object
    }
  },
  data () {
    return {
      counter:0,
      imagesLength:0  
    }
  },
  methods: {
    infoimageload(){
      // console.log('图片加载完成一张');
      // if ( ++this.counter === this.imagesLength ){
        this.$emit("infoimageload")
        // console.log('我进来了');//逻辑没有进去  目前考虑是watch问题 暂未解决
      // }
    
    }
  },
  // watch: {
  //   detailInfo(){
  //     this.imagesLength = this.detailInfo.imgdata.list.length
  //   }
  // }
 }
</script>


<style scoped>
  .describtion{
    padding: 20px 10px;
  }
  .gradient-left{
    /* margin-top: 20px; */
    height: 2px;
    background-color: green;
    background: linear-gradient(to right,orange,white);
  }
  .element-info{
    /* height: 140px; */
    padding: 5px 10px;
  }
  .gradient-right{
    /* margin-top: 20px; */
    height: 2px;
    background-color: green;
    background: linear-gradient(to left,orange,white)
  }
  .photo-desc{
    padding: 10px ;
  }
  .photo-list img{
    width: 100%;
  }
</style>