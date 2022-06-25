// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)
// 引入路由组件
import  Home from '../components/Home'
import Book from '@/components/Book'
import Add from '@/components/Add'
import Update from '@/components/Update'
import NameSelect from '@/components/NameSelect'
import IdSelect from '@/components/IdSelect'


// 先把VueRouter原型对象的push，先保存一份,备份
let originpush = VueRouter.prototype.push;
let originreplace = VueRouter.prototype.replace;

// 重写push|replace方法
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location,resolve,reject) { 
    if (resolve && reject) {
        // call||apply相同点，都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数，call传递的参数用逗号隔开，apply方法执行，传递数组
        originpush.call(this, location, resolve, reject)
    }
    else { 
        originpush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location,resolve,reject) { 
    if (resolve && reject) {
        // call||apply相同点，都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数，call传递的参数用逗号隔开，apply方法执行，传递数组
        originreplace.call(this, location, resolve, reject)
    }
    else { 
        originreplace.call(this, location, () => { }, () => { })
    }
}
//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true },
            
        },
        {
            path: '/book',
            component: Book,
            meta: { show: true },
            
        },
        {
            path: '/add',
            component: Add,
            meta: { show: false },
        },
        {
            path: '/update',
            component: Update,
            name:'up',
            meta: { show: false },
        },
        {
            path: '/nameselect',
            component: NameSelect,
            meta: { show: true },
        },
        {
            path: '/idselect',
            component: IdSelect,
            meta: { show: true },
       },
        // 进去时默认登录界面
        {
            path: '*',
            redirect:'/home'
        }
     
    ] 
})