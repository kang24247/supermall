<template>
  <div class="CategoryRightTopItem">
    <a :href="itemInfo.link">
      <img :src="itemInfo.image" alt="">
      <div>{{itemInfo.title}}</div>
    </a>
  </div>
</template>
 
<script>
export default {
  name:'CategoryRightTopItem',
  props: {
    itemInfo: {
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .CategoryRightTopItem{
    width: 26%;
    font-size: 12px;
    text-align: center;
    margin-left: 15px;
    margin-bottom: 10px;
    padding: 4px;
  }

  .CategoryRightTopItem a{
    color: #000;
  }
  .CategoryRightTopItem a img{
    width: 100%;
    vertical-align: middle;
  }
</style>
