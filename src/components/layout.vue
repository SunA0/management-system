<template>
    <div>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>
<script>
    import AppHeader from './AppHeader'
    import AppMain from './AppMain'
    import AppNavbar from './AppNavbar'
    export default{
        components:{AppHeader,AppMain,AppNavbar}
    }
</script>
<style scoped>
/* header */
.header{
    position: absolute;
    line-height: 50px;
    padding-left: 10px;
    top:0px;
    left:0px;
    right:0px;
    background-color:black;
    font-family: 'Courier New', Courier, monospace;
    color:antiquewhite;
}
.navbar{
    position: absolute;
    width: 230px;
    top:50px;
    left:0px;
    bottom: 0px;
    overflow-y:auto;
    background-color: darkgrey;
}
.main{
    position: absolute;
    left: 230px;
    right:0px;
    top:50px;
    bottom:0px;
    padding: 10px;
    overflow-y: auto;
    background-color: floralwhite;
    
}
</style>