import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store'



// import Home from '../components/Home.vue'
// import Search from '../components/Search.vue'

// 懒加载 动态加载
const Home = () =>
    import ('../components/Home.vue')
const Search = () =>
    import ('../components/Search.vue')
const Login = () =>
    import ('../components/common/Login registration/login.vue')

Vue.use(VueRouter)
Vue.use(VueAxios, Axios)




Vue.prototype.$cookie = Cookie;


// 路由操作 no-referrer 解决跨域问题
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: "ViliVili",
            name: "referrer",
            content: "no-referrer"
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            title: "ViliVili",
            name: "referrer",
            content: "no-referrer"
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: "ViliVili",
            name: "referrer",
            content: "no-referrer"
        }
    },
]


function beforeEach(param) {

}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,




    router: beforeEach((to, from, next) => {
        const token = store.state.token
        if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
            if (token) { // 通过vuex state获取当前的token是否存在
                next()
            } else {
                console.log('该页面需要登陆')
                next({
                    // path: '/login'
                    // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        } else {
            next()
        }
    })
})




export default router
