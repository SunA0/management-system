<template>
    <div class = "main">
        <!--use link -->
        <app-link></app-link>
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
