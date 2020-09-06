import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login";            //登录
import Layout from "@/components/layout.vue"; //整体布局
import Home from "./views/home";              //首页
import Members from "./views/members";        //会员
import Suppliers from "./views/suppliers";    //供应商
import Goods from "./views/goods";            //商品
import Workers from "./views/workers";        //员工 

Vue.use(Router);

export default new Router({
    routes:[
        { path:'/login', name: 'login', component:Login },
        { path:'/', name: 'layout', component:Layout, redirect: '/home',
        children:[
            { path:'/home', component: Home, meta:{title: '首页'} },
            { path:'/members', component: Members, meta:{title: '会员管理'} },
            { path:'/suppliers', component: Suppliers, meta:{title: '供应商管理'} },
            { path:'/goods', component: Goods, meta:{title: '商品管理'} },
            { path:'/workers', component: Workers, meta:{title: '员工管理'} }
        ]},
        
    ]
})