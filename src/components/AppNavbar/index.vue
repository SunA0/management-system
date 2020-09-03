<template>
    <div class = "navbar">
        <el-menu
        :router="true" 
        default-active="/"
        background-color="#545c64" 
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
             <el-menu-item index="/members/">
                <i class="el-icon-star-off"></i>
                <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item index="/suppliers/">
                <i class="el-icon-brush"></i>
                <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/goods/">
                <i class="el-icon-shopping-cart-2"></i>
                <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="/workers/">
                <i class="el-icon-user"></i>
                <span slot="title">员工管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>