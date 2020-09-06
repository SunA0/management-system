<template>
    <div class = "main">
        <!--use link -->
        <app-link v-show="$route.path !== '/home'"></app-link>
        <router-view></router-view>
    </div>
</template>

<script>
    //引入该文件下的link组件
    import AppLink from './link.vue'
    export default {
        components:{AppLink}
    }

</script>
