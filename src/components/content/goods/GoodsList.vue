<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in goods"  :goodsItem='item' :key="index" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
  components: { 
    GoodsListItem
  },
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  
}
</script>

<style scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5px;
  }
</style>