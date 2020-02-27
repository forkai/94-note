//  专门放置路由的
// 为什么要把文件命名index ?
// import test from './router'  如果 router是一个文件夹的话 
// import test from './router' 相当于 获取 import test from './router/index.js'文件
// import test from './router'  等价于 import test from './router/index' 
import Vue from 'vue'
import VueRouter from 'vue-router'  // 引用路由对象
import HeroList from '../views/heroes/hero-list'  // 单文件组件
import weaponList from '../views/weapon/weapon-list'  // 单文件组件
import GearList from '../views/gear/gear-list'  // 单文件组件

Vue.use(VueRouter) // 全局注册

const router = new VueRouter({
    // 配置路由表
    //  一般挂在路由上的组件 叫做 路由级组件
    // 路由级组件一般放置在src/views目录
    // views又可以新建文件夹 或者文件
    routes: [{
        path: '/',
        redirect: '/heroes'  // 强制跳转到英雄列表
    }, {
        path: '/heroes', // 定义路径 是自己定义的
        component: HeroList
    }, {
        path: '/weapon',
        component: weaponList  // 武器组件
    }, {
        path: '/gear',
        component: GearList // 装备组件
    }]
})

export default router // 导出一个变量