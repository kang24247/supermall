<template>
  <div class="goodslistitem" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imagLoad" >
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
  methods: {
    imagLoad(){
      this.$bus.$emit("itemImagLoad")
    },
    itemClick(){
      // console.log('跳转详情页');
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
  .goodslistitem{
    width: 46%;
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
    /* background: url('../../../assets/img/common/collect.svg'); */
  }
</style>