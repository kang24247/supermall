import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装插件
Vue.use(Vuex)

// 创建store对象

const state = {
    cartList:[]
    // ischeckone:false,
    // ischeckall:false
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
// 导出用于挂在在vue实例上  
export default store