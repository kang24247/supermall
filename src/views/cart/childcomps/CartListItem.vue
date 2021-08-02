<template>
  <div class="CartListItem">
     <div class="button">
        <div class="checked" @click="ischecked" v-show="product.checked">
            <img src="@/assets/img/cart/tick.svg">
        </div>
        <div class="check-button" @click="ischecked" v-show="!product.checked" >
            <img src="@/assets/img/cart/tick.svg">
        </div>
     </div>
     <div class="product-picture">
         <img :src="product.image" alt="">
     </div>
     <div class="product-font">
        <div class="product-title">
            {{product.title}}
        </div>
        <div class="product-desc">
            {{product.desc}}
        </div>
        <div class="price-number">
            <div class="product-price">
            ￥{{productprice}}
            </div>
            <div id="wrapper">
                <div class="minus" @click="minusnumber"><button> ▼ </button></div>
                <div class="product-number">x{{product.count}} </div>
                <div class="add" @click="addnumber"><button> ▲ </button></div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>

export default {
    name:"CartListItem",
    props: {
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        ischecked(){
            this.product.checked = !this.product.checked
        },
        minusnumber(){
            if (this.product.count > 1) {
                this.product.count--
            }
        },
        addnumber(){
            this.product.count++
        }
    },
    computed: {
        productprice(){
            let price = parseInt(this.product.price).toFixed(2)
            return price
        }
    }
}
</script>

<style scoped>
    .CartListItem{
        display: flex;
        border-bottom: rgb(238, 235, 235) 4px solid;
        padding: 10px 5px 10px 10px;
    }
    .button{
        width: 5%; 
    }
    .check-button{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        position: relative;
        top: 40%;
        border: 1px solid rgb(190, 189, 189);
    }
    .checked{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        position: relative;
        top: 40%;
        border: none;
        background-color: orange;
    }
    
    .product-picture img{
        width: 60px;
        border-radius: 5px;
        margin-left: 10px;
    }
    .product-font{
        margin-left: 10px;
        margin-right: 5px;
        width: 66%;
    }
    .product-font .product-title ,.product-font .product-desc{
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .product-font .product-desc{
        margin: 10px 0;
        font-size: 14px;
        color: rgb(151, 148, 148);
    }
    .product-font .price-number{
        display: flex;
        justify-content: space-between;
    }
    .price-number .product-price{
        color: rgb(243, 19, 19);
    }
    #wrapper{
        display: flex;
        justify-content: space-evenly;
        width: 40%;
    }
    .price-number button{
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #fff;

    }
</style>>
