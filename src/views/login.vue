<template>
    <div class="login-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <div class="login-page-content">
            <div class="img">宋江贷</div>
            <ul class="list">
               <li>
                    <label for="login-name">账号</label>
                    <input type="text" id="login-name" placeholder="请输入手机号" v-model="loginName">
                    <span class="re-input" @click="reInputClick"></span>
                </li>
                <li>
                    <label for="login-pasd">密码</label>
                    <input :type="type" id="login-pasd" placeholder="请输入6-12位密码" v-model="loginPasd">
                    <span class="open-eye" v-if="openEyes" @click="isOpen"></span>
                    <span class="close-eye" v-if=!openEyes @click="isOpen"></span>
                </li>
                <li>
                    <label for="login-ver">验证码</label>
                    <input type="text" id="login-ver" placeholder="请输入图形验证码" v-model="loginVer">
                    <ver @check="recieveVerify"/>
                </li>
            </ul>
            <button @click="loginClick">登录</button>
            <p class="reg-for">
                <span class=reg-immid @click="jumpToReg">马上注册</span>
                <span class="forget-psd" @click="jumpToForget">忘记密码？</span>
            </p>
        </div>
        <tips :tips="tips"></tips>  
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import ver from "@/components/credit/ver"
import tips from "@/components/loan/public/tips"
export default {
    components:{
        WebHeader,
        ver,
        tips
    },
    data(){
        return{
            mainTitle:'登录',
            ver:'',
            tips:'',
            loginName:'',
            loginPasd:'',
            loginVer:'',
            openEyes:false,
            type:'password'

        }
    },
    methods:{
        recieveVerify(item){
            this.ver = item;
        },
        loginClick(){
            let match = /^1([34578])\d{9}$/.test(parseInt(this.loginName));
            if(this.loginName === '' || !match){
                this.tips = '账号不正确';
            }else if(this.loginPasd === '' || this.loginPasd.length < 6 || this.loginPasd.length > 12){
                this.tips = '密码不正确';
            }else if(this.loginVer !== this.ver){
                this.tips = '验证码不正确';
            }else{
                this.$router.push({name:'loan'})
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 
        },
        reInputClick(){
            this.loginName = '';
        },
        isOpen(){
            this.openEyes = !this.openEyes;
            if(this.openEyes){
                this.type = 'text';
            }else{
                this.type = 'password';
            }
        },
        jumpToReg(){
            this.$router.push({name:'reg'});
        },
        jumpToForget(){
            this.$router.push({name:'forget-pasd'});
        }
    }
}
</script>


<style lang="scss">
    @import "@/assets/css/login/login.scss"
</style>