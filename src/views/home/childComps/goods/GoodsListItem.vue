<template>
  <div class="goodslistitem" @click="itemClick" v-if="showImage">
    <img v-lazy="showImage" @load="imagLoad" :key="showImage">
    <div class="goodsinfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}} </span> 
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  // data () {
  //   return {
  //     goodsItem: this.goodsItem
  //   }
  // },
  methods: {
    imagLoad(){
      this.$bus.$emit("itemImagLoad")
    },
    itemClick(){
      let iid = this.goodsItem.iid;
      
      this.$router.push('/detail/' + iid)
      
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .goodslistitem{
    width: 48%;
    position: relative;
    padding-bottom: 25px;
    padding: 5px;
  }
  .goodslistitem img{
    width: 100%;
    border-radius: 5px;
    margin: 5px auto;
  }
  .goodsinfo{
    font-size: 12px;
    position: relative;
  }
  .goodsinfo p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .collect::before{
    content: '☆';
    font-size: 0.9rem;
  }
</style>