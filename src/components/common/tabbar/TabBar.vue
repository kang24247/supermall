<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>

export default {
  name:'TabBar',
  components: {
    
  }
}
</script>

<style>
   #tabbar{
    display: flex;
    background-color: #f6f6f6;
    justify-content: space-around;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px rgba(100, 100, 100, .1); 
    
  }
  
</style>