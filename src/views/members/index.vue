<template>
    <div>
        <!-- 搜索 -->
        <el-form ref=’searchForm‘ :inline="true" :model="searchMap" class="demo-form-inline">
            <el-form-item>
                <el-input v-model="searchMap.user" placeholder="会员名字"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="searchMap.card" placeholder="会员卡号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-select v-model="searchMap.type" placeholder="支付类型">
                    <el-option v-for="option in payTypeOptions" 
                    :key="option.type"
                    :label="option.name" 
                    :value="option.type">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="fetchData">查询</el-button>
            </el-form-item>
        </el-form>
        <!-- 表格组件 -->
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
        <!-- 分页组件 -->
        <el-pagination @size-change="fetchData" @current-change="fetchData"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
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
            list:[],
            total:0,
            currentPage:1,
            pageSize:10,
            searchMap:{},
            payTypeOptions
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            //memberApi.getList().then(response=>{
            memberApi.search(this.currentPage,this.pageSize,this.searchMap).then(response=>{
                //console.log(response)
                const resp = response.data
                console.log(resp)
                this.list = resp.data.rows
                this.total = resp.data.total
                
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
