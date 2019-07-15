<template>
    <div class="user-container water">
        <web-header :title="$route.params.id" :show-return="true"  :show-save="false"></web-header>
        <div class="user-content">
            <ul class="list">
                <li>
                    <label for="bank-sno"><span class="info">银行卡号</span></label>
                    <input type="number" id="bank-sno" placeholder="请输入银行卡号" v-model="inputBank" >
                </li>
                <li>
                    <label for="user-id"><span class="info">账号/身份证号</span></label>
                    <input type="number" id="user-id" placeholder="请输入身份证号/用户名" v-model='inputId'>
                    <span class="notify">注意：必须先开通网银，如未开通，请先在官网开通网银</span>
                </li>
                <li>
                    <label for="login-psd"><span class="info">登录密码</span></label>
                    <input type="number" id="login-psd" placeholder="请输入登录密码" v-model='inputPsd'>
                    <span class="forget">如忘记密码请登录官网找回</span>
                </li>
                <li >
                    <label for="bank-ver"><span class="info">验证码</span></label>
                    <input type="text" id="bank-ver" placeholder="请输入右侧验证码" v-model="inputVer">
                    <ver @check="recieveVerify"/>
                </li>
            </ul>
            <button @click="submitBank">确认</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import ver from "@/components/credit/ver"
import { mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
        ver
    },
    data(){
        return{
            verifyInfo:'',
            inputVer:'',
            inputBank:'',
            inputPsd:'',
            inputId:'',
            tips:'' 
        }
    },
    methods:{
        recieveVerify(ver){
            this.verifyInfo = ver;
        },
        submitBank(){
            let match = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(parseInt(this.inputId));
            if(this.inputBank === '' || this.inputBank.length !== 19){
                this.tips = '银行卡信息错误';
            }else if(this.inputId === '' || !match){
                this.tips = '身份证信息错误';
            }else if(this.inputPsd === '' || this.inputPsd.length !== 6){
                this.tips = '密码错误';
            }else if(this.inputVer ==='' || this.inputVer !== this.verifyInfo){
                this.tips = '验证码错误'
            }else{
                this.tips = '保存成功';
                setTimeout(()=>{
                    this.$router.back();
                },1500)
                this.changeComplete({index:8,value:true});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 
        },
        ...mapMutations(['changeComplete'])
    } 

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss';
     @import '@/assets/css/credit/water.scss'
</style>