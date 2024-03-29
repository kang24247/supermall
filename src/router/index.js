import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../views/home/Home.vue')
const Category = ()=>import('../views/category/Category.vue')
const Cart = ()=>import('../views/cart/Cart.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Detail = ()=>import('../views/detail/Detail.vue')
const Login = ()=>import('../components/common/login/Login.vue')


// 安装组件
Vue.use(VueRouter)

//创建router
const router= new VueRouter({
  routes:[
    { path: '', redirect: '/home'},
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/detail/:iid', component: Detail },
    { path: '/login', component: Login}

  ],
  mode:'history'
})


export default router