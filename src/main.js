import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
//使用事件总线
Vue.prototype.$bus = new Vue()
// 安装自定义插件
Vue.use(Toast)
// 解决移动端300ms延迟的问题
FastClick.attach(document.body)
// 安装懒加载插件
Vue.use(VuelazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
