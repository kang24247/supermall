<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goods"  :goodsItem='item' :key="item.iid" />
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