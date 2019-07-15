<template>
    <div class="user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="isComplete">保存</span>
        </web-header>
        <div class="user-content loan-des">
            <h3>我的简介<span v-if="baseState">(还可输入{{100-baseState.length}}字)</span></h3>
            <ul class="list">
                <li>
                    <textarea  placeholder="请简单介绍您的基本情况。例如:本人在浙江杭州上班，从事的行业是互联网行业。(字数在100字以内)" v-model="baseState"></textarea>
                </li>
            </ul>
            <h3>我的还款能力<span v-if="repayment">(还可输入{{100-repayment.length}}字)</span></h3>
            <ul class="list">
                <li>
                     <textarea  placeholder="请简单介绍您的还款能力。例如:本人在公司任职的岗位是Java开发，月收入稳定，能按时归还借款。(字数在100字以内)" v-model="repayment"></textarea>
                </li>
            </ul>
            <h3>本次申请借款的用途<span v-if="loanUse">(还可输入{{100-loanUse.length}}字)</span></h3>
            <ul class="list">
                <li>
                     <textarea  placeholder="请介绍本次申请借款的用途。例如:本次申请借款主要是因为新家装修，急需用钱。(字数在100字以内)" v-model="loanUse"></textarea>
                </li>
            </ul>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapMutations } from 'vuex';
export default {
    components:{
        WebHeader
    },
    data(){
        return{
            mainTitle:'借款描述',
            tips:'',
            baseState:'',
            repayment:'',
            loanUse:''
        }
    },
    methods:{
        isComplete(){
            if(this.baseState === '' || this.baseState.length < 5){
                this.tips = '简介介绍不能小于5个字'
            }else if(this.repayment === '' || this.repayment.length < 5){
                this.tips = '还款能力介绍不能小于5个字'
            }else if(this.loanUse === '' || this.loanUse.length < 5){
                this.tips = '借款原因不能小于5个字'
            }else{
                this.tips = '保存成功';
                this.getLoanDes(true);
                 setTimeout(()=>{
                    this.$router.back();
                },1500)
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)
        },
         ...mapMutations(['getLoanDes'])
    }
}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss';
    @import '@/assets/css/credit/loan-des.scss';
    
</style>