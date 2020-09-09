<template>
    <div>
        <el-table :data="list" height="250" border style="width: 100%">
            <el-table-column type='index' label="序号" width="180"></el-table-column>
            <el-table-column prop="cardNum" label="卡号" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="birth" label="生日" width="180"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" width="180"></el-table-column>
             <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import memberApi from '@/api/member'

export default{
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            memberApi.getList().then(response=>{
             const resp = response.data.data
             this.list = resp
            })
        },
        handleEdit(id){

        },
        handleDelete(id){
            
        }
    }
}
</script>
