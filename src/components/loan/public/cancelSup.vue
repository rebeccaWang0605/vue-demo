<template>
    <div class='cancel-sup'>
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" /> 
        <div class="cancel-content">
            <h3>
                是否确认取消本次借款申请？取消之后借款本金不会发放，也不会产生任何费用
            </h3>
            <div class="text">
                <textarea placeholder="请填写您取消上标的理由。如果本次取消订单是因为我们产品做得不好，您的建议能帮助我们进一步优化服务。" v-model="inpVal"></textarea>
                <span>还可以输入{{200-inpVal.length}}字</span>
            </div>
            <button @click="sure">确认</button>    
        </div>
        <div class="mask" v-if="mask">
            <div class="sure-tips">
                <p class="text-center">取消上标</p>
                <p>
                    是否确认取消本次借款申请？
                    <br>
                    取消之后借款本金不会发放，也不会产生任何费用
                </p>
                <span @click="sureCancel">确认取消</span>
            </div>
        </div>
        <tips :tips="tips"></tips>  
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import tips from "@/components/loan/public/tips"
export default {
    components:{
        WebHeader,
        tips
    },
    data(){
        return{
            mainTitle:'取消上标',
            tips:'',
            inpVal:'',
            mask:false
        }
    },
    methods:{
        sure(){
            if(this.inpVal.length < 5){
                this.tips = "字数不能小于5"
            }else{
                this.mask = true;
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)
        },
        sureCancel(){
            this.mask = false;
            this.$router.back();
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/loan/public/cancel-sup.scss"
</style>