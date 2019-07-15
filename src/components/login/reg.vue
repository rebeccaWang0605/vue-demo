<template>
    <div class="login-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <div class="login-page-content">
            <div class="img">宋江贷</div>
            <ul class="list">
                <li>
                    <label for="reg-name">手机号</label>
                    <input type="text" id="reg-name" placeholder="请输入手机号" v-model="regName">
                </li>
                <li>
                    <label for="reg-ver">图片验证码</label>
                    <input type="text" id="reg-ver" placeholder="请输入图形验证码" v-model="regVer">
                    <ver @check="recieveVerify"/>
                </li>
                <li>
                    <label for="msg-ver">短信验证码</label>
                    <input type="text" id="msg-ver" placeholder="请输入短信验证码" v-model="msgVer">
                    <span v-if="send" @click="sendVer" class="send">发送验证码</span>
                    <span v-if="miao" class="send miao">{{time}}秒后重发</span>
                    <span v-if="resend" @click="resendVer" class="send">重新发送</span>
                </li>
                <li>
                    <label for="reg-pasd">登录密码</label>
                    <input :type="type1" id="reg-pasd" placeholder="请输入6-12位密码" v-model="regPasd">
                    <span class="open-eye" v-if="openEyes1" @click="isOpen1"></span>
                    <span class="close-eye" v-if=!openEyes1 @click="isOpen1"></span>
                </li>
                <li>
                    <label for="re-pasd">确认密码</label>
                    <input :type="type2" id="re-pasd" placeholder="请输入6-12位确认密码" v-model="rePasd">
                    <span class="open-eye" v-if="openEyes2" @click="isOpen2"></span>
                    <span class="close-eye" v-if=!openEyes2 @click="isOpen2"></span>
                </li>
            </ul>
            <button @click="successToLogin">立即注册</button>
        </div>
        <div :class="{'agree':true, 'active':agree}" @click="agreeClick">
            我已阅读并同意
            <span @click.stop="goAgreement">《草根信贷用户协议》</span>
        </div>
        <tips :tips="tips"></tips> 
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import ver from "@/components/credit/ver"
import tips from "@/components/loan/public/tips"
import { mapMutations,mapState } from 'vuex'
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
            regName:'',
            regPasd:'',
            regVer:'',
            msgVer:'',
            rePasd:'',
            openEyes1:false,
            openEyes2:false,
            type1:'password',
            type2:'password',
            send:true,
            miao:false,
            resend:false,
            time:60,
            agree:true

        } 
    },
    methods:{
        recieveVerify(item){
            this.ver = item;
        },
        isOpen1(){
            this.openEyes1 = !this.openEyes1;
            if(this.openEyes1){
                this.type1 = 'text';
            }else{
                this.type1 = 'password';
            }
        },
        isOpen2(){
            this.openEyes2 = !this.openEyes2;
            if(this.openEyes2){
                this.type2 = 'text';
            }else{
                this.type2 = 'password';
            }
        },
        sendVer(){
            this.send = false;
            this.miao = true;
            this.timeInterval();
        },
        timeInterval(){
            this.time = 60;
            this.setTimer=setInterval(()=>{
                this.time--;
                if(this.time == 0){
                    clearInterval(this.setTimer);
                    this.miao = false;
                    this.resend = true;
                }
            },1000) 
        },
        resendVer(){
            this.resend = false;
            this.miao = true;
            this.timeInterval();
        },
        agreeClick(){
            this.agree = !this.agree;    
        },
        goAgreement(){
            this.$router.push({
                name:'agreement'
            })
        },
        successToLogin(){
            let match = /^1([34578])\d{9}$/.test(parseInt(this.regName));
            if(!this.agree){
                this.tips = '需先同意用户信贷协议';
            }else if(this.regName === '' || !match){
                this.tips = '手机号格式不正确';
            }else if(this.regVer !== this.ver){
                this.tips = '图片验证码不正确';
            }else if(this.msgVer === '' || this.msgVer.length < 6 || !this.miao){
                this.tips = '短信验证码格式不正确';
            }else if(this.regPasd === '' || this.regPasd.length < 6 || this.regPasd.length > 12){
                this.tips = '密码格式不正确';
            }else if(this.rePasd === '' || this.rePasd !== this.regPasd){
                this.tips = '两次密码不一致';
            }else{
                this.$router.back()
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/login/login.scss";
    .send{
        display:inline-block;
        width:2rem;
        color:#fff;
        background: #3297fd;
        border-radius:0.1rem;
        text-align:center;
        padding:0.15rem 0;
        font-size:0.3rem;
        &.miao{
            background:#ccc;
        }
    }
    .agree{
        font-size:0.28rem;
        margin-top:0.2rem;
        text-align:center;
        font-weight:700;
        color:#666;
        &::before{
            content:'\E16B';
            color:#3297fd;
        }
        &.active{
            &::before{
                content:'\E16A'; 
            }
        }
        >span{
            color:#3297fd;
        }
    }
</style>