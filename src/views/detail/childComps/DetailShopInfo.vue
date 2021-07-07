<template>
  <div class="shopInfo">
      <div class="logName">
        <div class="logoImg"><img :src="'http:'+shop.logo" ></div>
        <div class="shopName">{{shop.name}}</div>
      </div>
      <div class="sales-data">
        <div class="left">
          <p>{{((shop.sells)/10000).toFixed(1)}} 万</p>
          <span>总销量</span>
        </div>
        <div class="center">
          <p>{{shop.goodsCount}}</p>
          <span>全部宝贝</span>
        </div>
        <div class="right">
          <div class="one-row" v-for="(item,index) in shop.score" :key="item+index">
            <span class="one">{{item.name}}</span>
            <span class="two">{{item.score.toFixed(2)}}</span>
            <span class="three">
              <span v-if="!item.isBetter" class="three-low"> 低 </span>
              <span v-else class="three-height"> 高 </span>
            </span>
          </div>
        </div>
      </div>
      <p class="welcome">进店逛逛</p>
      <div class="shopInfoBottom"></div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props: {
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .logName{
    height: 60px;
    display: flex;
    align-items: center;
  }
  .logName img{
    width: 50px;
    height: 50px;
    margin: auto 8px;
  }
  .sales-data{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    height: 80px;
  }
  .sales-data .left p{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;

  }
  .sales-data .center{
    padding-right: 20px;
    border-right: rgb(228, 226, 226) solid 2px;
  }
  .sales-data .center p{
    margin-left: 16px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    
  }
  .sales-data .right .one-row{
      margin-bottom: 8px;
  }
  .sales-data .right .one-row .one{
    margin-right: 10px;
  }
  .sales-data .right .one-row .three{
    font-size: 14px;
    position: relative;
    right: -8px;
    display: inline-block;
  }
  .sales-data .right .one-row .three .three-low{
    background-color: green;
    color: white;
    
  }
  .sales-data .right .one-row .three .three-height{
    background-color: red;
    color: white;
  }
  .welcome{
    height: 20px;
    width: 100px;
    background-color: rgb(236, 234, 234);
    text-align: center;
    border-radius: 5px;
    margin: 5px auto;
    color: rgb(212, 205, 205);
  }
  .shopInfoBottom{
    margin-top: 20px;
    height: 1px;
    width: 100%;
    border-bottom: rgb(239, 241, 241) 8px solid;
  }
  
</style>