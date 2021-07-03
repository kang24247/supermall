<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" v-for="(item,index) in titles"
     :key="item.id"
     :class="{active:currentindex===index}"
     @click="btncontrol(index)">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabConteol',
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentindex:0
    }
  },
  methods: {
    btncontrol(index){
      this.currentindex=index;
      this.$emit("tabClick", index)
    }
  }
}
</script>

<style>
  .tabcontrol{
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
  }
  .tabcontrol-item{
    width: 50px;
    
  }
  .active{
    color: var( --color-high-text);
    border-bottom: solid 2px var(--color-tint);
  }
</style>