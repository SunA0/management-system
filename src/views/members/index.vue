<template>
    <div>
        <el-table :data="list" height="250" border style="width: 100%">
            <el-table-column type='index' label="序号" width="180"></el-table-column>
            <el-table-column prop="cardNum" label="卡号" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="birth" label="生日" width="180"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" width="180"></el-table-column>
            <el-table-column prop="payType" label="支付类型" width="180">
                <template slot-scope="scope">
                    <span>{{scope.row.payType|payTypeFilter}}</span>
                </template>
            </el-table-column>

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
const payTypeOptions = [
    {type:'1',name:'现金'},
    {type:'2',name:'信用卡'},
    {type:'3',name:'支付宝'},
    {type:'4',name:'微信'},
]
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
    },
    filters:{
        payTypeFilter(type){ 
            const payObj = payTypeOptions.find(obj => obj.type === type)
            return payObj ? payObj.name:null
        }
    }
}
</script>
