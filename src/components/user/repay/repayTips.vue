<template>
    <div class="repay-tips">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <div class="icon"></div>
        <p>您本次还款<span>3018.00</span>元 的申请已提交<br>后台正在处理...</p>
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
            mainTitle:'确认信息',
        }
    },


}
</script>


<style scoped>
    .repay-tips .icon{
        margin-top:1.5rem;
    }
    .repay-tips .icon::before{
        content: "\E64A";
        display:block;
        height:2rem;
        line-height:2rem;
        color:#3297fd;
        font-size:1.5rem;
        text-align:center;
    } 
     .repay-tips p{
         text-align:center;
         font-size:0.28rem;
         font-weight:bold;
     } 
     .repay-tips p span{
         color:#f00;
     }
</style>