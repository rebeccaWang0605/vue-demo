<template>
    <div class="loanDes-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="payRecord">还款记录</span>
        </web-header>
        <ul class="loan-list">
            <li>
                <span>
                    收款银行卡
                    <i @click.stop="showMask">？</i>
                </span>
                <span>562365411956231256</span>
            </li>
            <li>
                <span>开户行省市</span>
                <span>浙江省杭州市</span>
            </li>
            <li>
                <span>开户行</span>
                <span>建设银行</span>
            </li>
            <li>
                <span>开户行支行</span>
                <span>萍水西街支行萍水西街支行萍水西街支行萍水西街支行</span>
            </li>
            <li>
                <span>保证金（元）</span>
                <span>200</span>
            </li>
        </ul>
         <div class="mask" v-if="mask" @click="hideMask">
            <div class="sure-tips" @click.stop="showMask">
                <p class="text-center">收款银行卡</p>
                <p>
                   放款时，财务会把借款本金打到这张银行卡。
                </p>
            </div>
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
            mainTitle:'借款详情',
            mask:false
        }
    },
    methods:{
        payRecord(){
            this.$router.push({name:'pay-record'});
        },
        showMask(){
            this.mask = true;
        },
        hideMask(){
            this.mask = false;
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/loan/public/sure-more.scss"
</style>