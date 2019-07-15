<template>
    <div class="rep">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <div class="rep-content">
            <div class="rep-con">
                <label for="">本次还款</label><input type="text" placeholder="300.00" readonly>
            </div>
            <div class="rep-con line">
                <label for="">身份信息</label>
                <input type="text" value="章*诺(487129********8765)" readonly>
            </div>
            <div class="rep-con">
                <label for="">银行信息</label>
                <span class="icon"></span>
                <input type="text" value="建设银行尾号(3675)" class="mar" readonly>
            </div>
            <p class="rep-tips">限额：单笔5.00万元，单日20.00万元，单月20.00万元</p>
            <button @click="toRepayTips">确定</button>
        </div>
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
            mainTitle:'还款',
        }
    },
    methods:{
        toRepayTips(){
            this.$router.push({name:'repay-tips'});
        }
    }
}
</script>


<style lang="scss">
     @import "@/assets/css/user/repay/repay-go.scss"
</style>