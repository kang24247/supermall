<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div><!-- :class="{active:isActive}" -->
    
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'indianred' 
    }
  },
  data () {
    return {
      // isActive:true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
 
 .tab-bar-item{
    flex:1;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  .tab-bar-item .item-text{
      font-size: 14px;
  }
  /* .active{
    color: indianred;
  } */
</style>