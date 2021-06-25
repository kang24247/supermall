<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    justify-content:space-around;
    padding: 20px 0 ;
    border-bottom: 8px solid rgb(241, 239, 239);
  }
  .recommend a{
    color: #000;
    font-size: 12px;
    text-align: center;
  }
  .recommend img{
    flex: 1;
    width: 70px;
    height: 70px;
  }
  
</style>