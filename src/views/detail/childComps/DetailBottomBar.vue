<template>
  <div class="detailbottombar">
      <div class="iconblock">
        <div class="bottombar-service">
            <div class="img"></div>
            <span>客服</span>
        </div>
        <div class="bottombar-store">
            <div class="img"></div>
            <span>店铺</span>
        </div>
        <div class="bottombar-collect" > 
            <div class="collectimg" @click="collectclick" :class="{collectactive:isactive}"></div>
            <span>收藏</span>
        </div>
      </div>
    <div class="rightmenu">
        <div class="left" @click="addCart">加入购物车</div>
        <div class="right">购买</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    data () {
        return {
            isactive:false    
        }
    },
    methods: {
        collectclick(){
            this.isactive = !this.isactive
        },
        addCart(){
            this.$emit('addShoppingCart')
            
        }
    }
}
</script>

<style scoped>
    .detailbottombar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 49px;
        display: flex;
        font-size: 15px;
    }
    .iconblock{
        text-align: center;
    }
    .detailbottombar .iconblock{
        height: 100%;
        width: 50%;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
    }
    .detailbottombar .iconblock .img{
        width: 44px;
        height: 44px;
        transform:scale(0.5);
        margin-bottom: -12px;
    }
     .iconblock .bottombar-service .img{
        background: url('../../../assets/img/detail/detail_bottom.png');
        background-position: 0 -106px;
    }
     .iconblock .bottombar-store .img{
        background: url('../../../assets/img/detail/detail_bottom.png');
        background-position: 0 -200px;
    }
     .collectimg{
        width: 44px;
        height: 44px;
        background: url('../../../assets/img/detail/detail_bottom.png');
        transform:scale(0.5);
        margin-bottom: -12px;
    }
    .collectactive{
        width: 44px;
        height: 44px;
        background: url('../../../assets/img/detail/detail_bottom.png');
        transform:scale(0.5);
        margin-bottom: -12px;
        background-position: 0 -54px;
    }
    .detailbottombar .rightmenu{
        height: 49px;
        width: 50%;
        text-align: center;
    }
    .detailbottombar .rightmenu .left{
        width: 60%;
        height: 49px;
        line-height: 49px;
        background: rgb(245, 164, 13);
    }
    .detailbottombar .rightmenu .right{
        width: 40%;
        height: 49px;
        line-height: 49px;
        background-color: rgb(241, 94, 119);
    }
    
</style>>

