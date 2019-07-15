<template>
    <ul class="debit-page">
        <li v-for="(item,index) in dataList" :key="index"
            @click="toLoan(index)">
            <a href="javascript:void(0);">
                <div class="bg-img"></div>
                <div class="debit-con">
                    <p class="title">{{item.title}}</p>
                    <p>{{item.des}}</p>
                </div>
            </a>
        </li>
    </ul>
</template>


<script>
export default {
    data(){
        return{
            dataList:[
                {
                    to:'micro-loan',
                    title:'微额借款',
                    des:'金额500、1000元，期限7天、14天、21天'
                },
                {
                    to:'small-loan',
                    title:'小额借款',
                    des:'最高金额5000元,最长期限6个月'
                },
                {
                    to:'large-loan',
                    title:'草根福利借款',
                    des:'最高金额10000元,期限30天'
                }
            ]
        }
    },
    methods:{
        toLoan(index){
            this.$router.push({name:this.dataList[index].to});    
        }
    }
    

}
</script>


<style lang="scss">
    @import "@/assets/css/loan/debit.scss"
</style>