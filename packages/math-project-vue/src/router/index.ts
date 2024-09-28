import HomeView from '../pages/HomeView.vue'
import MockView from '../pages/MockView.vue'
import { createRouter,createWebHistory } from 'vue-router'
import ZhihuHot from '../pages/ZhihuHot.vue'
import Apifox from '../pages/Apifox.vue'
import I18n from '../pages/I18n.vue'
import test from '../pages/test.vue'

const routes = [
    {name:'home',path:'/',component:HomeView},
    {name:'theme',path:'/theme',component:test},
    {name:'mock',path:'/mock',component:MockView},
    // {name:'zhihu',path:'/zhihu',component:ZhihuHot},
    {name:'Apifox',path:'/api',component:Apifox},
    {name:'I18n',path:'/I18n',component:I18n}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router;