<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="N-price">{{goods.newPrice}}</span>
      <span class="O-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="info-service">
      <div v-for="num in 3" :key='num+"`"'>
        <img :src="goods.services[num-1].icon">
        <span>{{goods.services[num-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props: {
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .info-title{
    margin-top: 10px;
    text-indent: 5px; 
    color: rgb(95,104,118);
    margin-left: 6px;
    padding-right: 5px;
  }
  .info-price{
    margin-top: 10px;
  }
  .N-price{
    color: rgb(255,104,126);
    font-size: 22px;
    margin-left: 5px;
  }
  .O-price{
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 5px;
  }
  .discount{
    position: absolute;
    font-size: 12px;
    color: #fff;
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: rgb(255,104,126);
    border-radius: 20px;
    margin-left: 5px;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    margin: 10px 5px 0 5px;
    padding: 0 5px;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: solid rgb(252, 246, 246) 2px;
  }
  .info-service{
    display: flex;
    justify-content: space-around;
    height: 50px;
    margin: 15px 0;
    border-bottom: rgb(250, 244, 244) solid 6px;
  }
  .info-service img{
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
  .info-service span{
    font-size: 14px;
  }
</style>