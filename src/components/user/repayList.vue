<template>
    <div class="my-repay">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true">
            <span @click="jumpToRepayRecord">还款记录</span>
        </web-header>
        <ul class="my-repay-list">
            <li><span class="bold">还款日 2016-03-19</span><span>2/3期</span></li>
            <li><span>已还款 0</span><span class="bold">已逾期</span></li>
            <li><span>应还本金</span><span>1000</span></li>
            <li><span>应还利息</span><span>70</span></li>
            <li><span>管理费</span><span>120</span></li>
            <li><span>逾期费用</span><span>134</span></li>
            <li><span>已还款</span><span>0</span></li>
            <li><span class="bold">应还总额</span><span class="bold">1324</span></li>
        </ul>
        <div class="repay-btn" @click="jumpToRepayGo">还款</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
export default {
     components:{
        WebHeader
    },
    data(){
        return{
            mainTitle:'我的还款',
        }
    },
    methods:{
        jumpToRepayRecord(){
            this.$router.push({name:'repay-record'})
        },
        jumpToRepayGo(){
            this.$router.push({name:'repay-go'})
        }
    }

}
</script>


<style lang="scss">
     @import "@/assets/css/user/repay-list.scss"
</style>