<template>
    <div class="user-container">
         <web-header :title="mainTitle" :show-return="true"  :show-save="false" /> 
         <div class="user-content">
            <h3></h3>
            <ul class="list">
                <li>
                    <label for="alipay-name"><span class="info">姓名</span></label>
                    <input type="text" id="alipay-name" placeholder="请输入支付宝账号" v-model="alipayName">
                </li>
                <li>
                    <label for="alipay-pasd"><span class="info">身份证号</span></label>
                    <input type="text" id="alipay-pasd" placeholder="请输入支付宝密码" v-model="alipayPasd">
                </li>
            </ul>
            <button @click="submitAlipay">确认提交</button>
            <p class="notice">温馨提示：我们会严格保护您的隐私，您的账号信息不会被记录</p>
         </div>
         <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import {  mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
    },
    data(){
        return{
            mainTitle:'支付宝认证',
            tips:'',
            alipayName:'',
            alipayPasd:''
        }
    },
    methods:{
        submitAlipay(){
            let match1 = /^1([34578])\d{9}$/.test(parseInt(this.alipayName));
            let match2 = this.alipayName.indexOf('@') != -1;
            if(this.alipayName === '' || (!match1 && !match2) ){
                this.tips = '用户名不合法';
            }else if(this.alipayPasd === '' || this.alipayPasd.length < 6 || this.alipayPasd.length > 16){
                 this.tips = '密码不合法';
            }else{
                this.tips = '需对接支付宝接口';
                this.changeComplete({index:12,value:true});
                this.selectDataComplete({index:3,value:true})
                setTimeout(()=>{
                    this.$router.back();
                },1500)
            }
            setTimeout(()=>{
                this.tips = ''
            },1000);
        },
        ...mapMutations(['changeComplete','selectDataComplete'])
    }
}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss';
    .notice{
        color:#999;
    }
</style>