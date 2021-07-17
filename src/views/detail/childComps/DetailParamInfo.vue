<template>
  <div class="detailparaminfo">
    <div class="topimg">
      <img :src="paramInfo.image" alt="">
    </div>
    <table v-for="(item1,index) in paramInfo.sizes" :key="index+item1">
      <tr v-for="(item2,index) in item1" :key="index+item2">
        <td>{{item2}}</td>
      </tr>
    </table>
    <div class="seller-info" v-for="(item,index) in paramInfo.infos" :key='item+index'>
        <div class="row">
          <div class="left">{{item.key}}</div>
          <div class="right">{{item.value}}</div>
        </div>
    </div>
  </div>
</template>


<script>

 export default {
  name:'DetailParamInfo',
  props: {
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }

 }

</script>


<style scoped>
  .topimg img{
    width: 100%;
  }
  table{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: rgb(231, 226, 226) solid 5px;
  }
  table tr{
    margin: 10px 4px;
  }
  table td{
    width: 30px;
    text-align: center;
    font-size: 14px;
  }
  .seller-info .row{
    box-sizing: content-box;
    padding: 10px 0;
    border-bottom: rgb(231, 226, 226) solid 5px;
    font-size: 15px;
  }
  .seller-info .row .left{
    margin:0 30px 10px 10px;
  }
  .seller-info .row .right{
    float:unset;
    color: rgb(224,134,150);
    overflow: hidden;
    
  }
</style>