<template>
  <div class="CategoryRightTop">
    <category-right-top-item v-for="(item,index) in topiteminfo" 
    :key="index" 
    :itemInfo='item'/>
  </div>
</template>

<script>
import CategoryRightTopItem from './CategoryRightTopItem'

export default {
  name: 'CategoryRightTop',
  props: {
    topiteminfo: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    CategoryRightTopItem
  }
}
</script>

<style scoped>
  .CategoryRightTop{
    width: 75vw;
    display: flex;
    flex-wrap: wrap;
    
  }
</style>
