import Toast from './Toast.vue'
const obj ={}

obj.install = function(Vue){
    // 创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    // 通过new的方式创建组件对象
    const toast = new toastConstructor()

    // 将组件对象手动挂载到一个元素上
    toast.$mount(document.createElement('div'))

    // $el就是上面第10行的div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast

}

export default obj