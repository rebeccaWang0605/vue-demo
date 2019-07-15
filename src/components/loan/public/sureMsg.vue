<template>
    <div class="sure-msg">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="cancelSup">取消上标</span>
        </web-header>
        <div class="sure-content">
            <dl class="sure-loan">
                <dt>
                    <span>项目编号 <b>20151206100122</b></span>
                    <span>借款期限(月）<b>3</b></span>
                </dt>
                <dd>
                    <span class='money'>2900</span>
                    <span class='help'>收款金额(元)
                        <i @click="showMask">？</i>
                    </span>
                </dd>
                <dd>
                    <span class='money'>3000</span>
                    <span class='help'>授信金额(元)
                        <i @click="showMask">？</i>
                    </span>
                </dd>
                <dd>
                    <span class='money'>100</span>
                    <span class='help'>期初服务费(元)
                        <i @click="showMask">？</i>
                    </span>
                </dd> 
            </dl>
            <div class='more' @click="sureMore">更多详情</div>
            <dl class="loan-plan">
                <dt>还款计划</dt>
                <dd>
                    <span>期数</span>
                    <span>应还本金</span>
                    <span>应还利息</span>
                    <span>管理费</span>
                </dd>
                <dd>
                    <span>第一期</span>
                    <span>2000.00</span>
                    <span>100.81</span>
                    <span>21.0</span>
                </dd>
                <dd>
                     <span>第二期</span>
                    <span>2000.00</span>
                    <span>100.81</span>
                    <span>21.0</span>
                </dd>
                <dd>
                     <span>第三期</span>
                    <span>2000.00</span>
                    <span>100.81</span>
                    <span>21.0</span>
                </dd>
                <dd>
                    <span>合计</span>
                    <span>6000.00</span>
                    <span>302.42</span>
                    <span>63.0</span>
                </dd>
            </dl>
            
        </div>
        <div :class="{'agree':true, 'active':agree}" @click="agreeClick">
            我已阅读并同意
            <span @click.stop="goAgreement">《借款协议》</span>
            <span @click.stop="goAgreement">《委托确认协议书》</span>
        </div>
        <button @click="sureSuccess">确认信息</button>
        <tips :tips="tips"></tips> 
        <div class="mask" v-if="mask" @click="hideMask">
            <div class="sure-tips" @click.stop="showMask">
                <p class="text-center">收款金额</p>
                <p>
                   收款金额=
                    <br>
                    授信金额-期初服务费-保证金
                </p>
            </div>
        </div>
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
            mainTitle:'确认信息',
            agree:true,
            tips:'',
            mask:false
        }
    },
    methods:{
        cancelSup(){
            this.$router.push({name:'cancel-sup'});
        },
        showMask(){
            this.mask = true;
        },
        hideMask(){
            this.mask = false;
        },
        sureMore(){
            this.$router.push({name:'sure-more'});
        },
        sureSuccess(){
            if(!this.agree){
                this.tips = "请勾选确认委托协议";
            }else{
                this.tips = "确认成功";
                setTimeout(()=>{
                    this.$router.push({name:'loan'});
                },1500)
            }
            setTimeout(()=>{
                this.tips = "";
            },1500)
           
        },
        agreeClick(){
            this.agree = !this.agree; 
            this.showGrey = !this.showGrey;   
        },
        goAgreement(){
            this.$router.push({
                name:'agreement'
            })
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/loan/public/sure-msg.scss"
</style>