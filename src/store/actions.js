import {ADD_COUNTER,ADD_TO_CART} from './mutation-types'

export default{
    addCart(context,payload){
        return new Promise((resolve,reject)=>{
            let isExistProduct = null
        for (const item of context.state.cartList) {
            if(item.iid === payload.iid){
                // 进入判断 则表示此次将要添加进购物车的商品 之前已经存在了
                isExistProduct = item
            }
        }
// let isExistProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if(isExistProduct){
            // isExistProduct.count += 1
            context.commit(ADD_COUNTER,isExistProduct)
            resolve('当前商品数量+1')
        }else{
            payload.count = 1
            // state.cartList.push(payload)
            context.commit(ADD_TO_CART,payload)
            resolve('加入购物车成功')
        }
        })
    }
}