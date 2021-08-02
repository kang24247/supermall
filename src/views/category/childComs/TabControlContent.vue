<template>
  <div class="TabControlContent">
    <goods-list-item 
    v-for="(item,index) in bottomItemInfo"
     :key="index"
     :goodsItem='item'/>
  </div>
</template>

<script>
import GoodsListItem  from '../../home/childComps/goods/GoodsListItem'
export default {
  name: 'TabControlContent',
  props: {
    bottomItemInfo: {}
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.TabControlContent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5px;
}
</style>