<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name:'TabBar'
}
</script>

<style scoped>
   #tabbar{
    display: flex;
    justify-content: space-around;
    background-color: #f6f6f6;
    position: fixed;
    height: 49px;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px rgba(100, 100, 100, .1); 
  }
  
</style>