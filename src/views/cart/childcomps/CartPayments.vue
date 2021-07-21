<template>
  <div class="CartPayments">
    <div class="selectall">
        <div class="check-button" @click="ischecked" v-show="!isselectall">
            <img src="@/assets/img/cart/tick.svg">
        </div>
        <div class="checked" @click="ischecked" v-show="isselectall">
            <img src="@/assets/img/cart/tick.svg">
        </div>
    </div>
    <div class="allcheck">
        全选
    </div>
    <div class="amount">合计:{{totalamount}}</div>
    <div class="gotopay">去结算</div>
  </div>
</template>

<script>

export default {
    name:'CartPayments',
    data () {
        return {
            isshow:true
        }
    },
    props: {    
        cartlist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods: {
        ischecked(){
            this.isshow = !this.isshow
            if(this.isshow){
                this.cartlist.forEach(item => item.checked = true)
            }else{
                this.cartlist.forEach(item => item.checked = false)
            }
        }
    },
    computed: {
        totalamount(){
            let totalprice = 0
            let pricearray = []
            //有时间研究这里为什么不行。。。
            // this.cartlist.forEach(item => {
            //     if(item.checked){
            //       pricearray.push(parseInt(item.price)*item.count)  
            //     }
            // })
            // for (let i = 0; i < pricearray.length; i++) {
            //     parseInt(pricearray[i]) + totalprice
            // }
           for (let index = 0; index < this.cartlist.length; index++) {
               if(this.cartlist[index].checked){
                    pricearray.push(parseInt(this.cartlist[index].price)*this.cartlist[index].count)
               }
           }
            for (let i = 0; i < pricearray.length; i++) {
                totalprice = parseInt(pricearray[i]) + totalprice
            }
           return totalprice.toFixed(2)
        },
        isselectall(){
            let count = 0
            this.cartlist.forEach(item => {
                if(item.checked){
                    count++
                }else{
                    count--
                }
            })
            if(this.cartlist.length == count){
                this.isshow = true
            }else{
                this.isshow = false
            }
            return  this.isshow
        }

    }
}
</script>

<style scoped>
    .CartPayments{
        height: 40px;
        width: 100%;
        line-height: 40px;
        background-color: rgb(236,236,236);
        position: relative;
        bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
    .selectall{
        width: 14%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .selectall .check-button{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid rgb(209, 206, 206);
        text-align: center;
        margin: auto ;
    }
    .selectall .checked{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: orange;
        border: 1px solid rgb(236,236,236);
    }
    .selectall img{
        width: 18px;
        height: 18px;
        transform: translate(0,-6px);
    }
    .allcheck{
        width: 10%;
        margin-left: -26px;
    }
    .gotopay{
        height: 100%;
        width: 30%;
        background-color: orange;
        text-align: center;
        margin-left: 40px;
    }
</style>>
