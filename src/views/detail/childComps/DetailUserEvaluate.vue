<template>
  <div class="detail-evaluate">
      <div class="menu">
        <span class="left">用户评价</span>
        <span class="right">更多</span>
      </div>
      <div class="menu-content">
        <img :src="EvaluateData.avatar">
        <span>{{EvaluateData.uname}}</span>
        <div class="evacontent">{{EvaluateData.content}}</div>
        <span class="time">{{EvaluateData.createdTime}}</span>
        <span class="style-cloth">{{EvaluateData.style}}</span>
      </div>
  </div>
  
</template>


<script>

 export default {
  name:'DetailUserEvaluate' ,
  props: {
    EvaluateData:{
      type:Object,
      default(){
        return {}
      }
    }
  }

 }

</script>


<style scoped>
  .detail-evaluate{
    padding: 10px;
    /* margin-bottom: 140px;  */
    font-size: 14px;
  }
  .menu{
    width: 100%;
    height: 40px;
    border-bottom: rgb(248, 244, 244) 3px solid;
  }
  .menu span{
    height: 30px;
    line-height: 30px;
  }
  .menu-content img{
    width: 26px;
    height: 26px;
    vertical-align: middle;
    margin: 0 20px 0 10px;
  }
  .menu-content span{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: rgb(172, 171, 171);
  }
  .menu-content .style-cloth{
    margin-left: 20px;
  }
  
</style>