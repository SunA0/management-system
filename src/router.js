import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login";
import Layout from "@/components/layout.vue";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/login',
            name: 'login',
            component:Login
        },
        {
            path:'/',
            name: 'layout',
            component:Layout
        }
        
    ]
})