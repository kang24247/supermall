<template>
<scroll id="content">
  <div class="tabmenu">
    <div class="tabmenu-item" v-for="(item, index) in titles" 
      :key="index" @click="menuClik(index)" :class="{menuactive: index == currentIndex}">
        {{ item }}
    </div>
  </div>
</scroll>
</template>

<script>
import scroll from "@/components/common/scroll/Scroll"
export default {
  data () {
    return {
      currentIndex : 0  
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    scroll
  },
  methods: {
    menuClik(index){
      this.currentIndex = index
      this.$emit("menuclik", index)
    }
  }
}
</script>

<style scoped>
.tabmenu {
  width: 25vw;
}
.tabmenu-item {
  height: 45px;
  line-height: 45px;
  padding: 0 6px;
  text-align: center;
  background-color: rgb(246,246,246);
}
#content {
  height: 65%;
  width: 25vw;
}
.menuactive{
  background-color: #fff;
  border-left: 2px solid rgb(241, 82, 82);
}
</style>
