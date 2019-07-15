<template>
    <div class="login-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="login-page-content">
            <ul class="list">
                <li>
                    <label for="set-name">账号</label>
                    <input type="text" id="set-name" placeholder="请输入手机号" v-model="setName">
                </li>
                <li>
                    <label for="set-ver">验证码</label>
                    <input type="text" id="set-ver" placeholder="请输入短信验证码" v-model="setVer">
                    <span v-if="send" @click="sendVer" class="send">发送验证码</span>
                    <span v-if="miao" class="send miao">{{time}}秒后重发</span>
                    <span v-if="resend" @click="resendVer" class="send">重新发送</span>
                </li>
                <li>
                    <label for="set-pasd">设置密码</label>
                    <input :type="type" id="set-pasd" placeholder="请输入6-12位密码" v-model="setPasd">
                    <span class="open-eye" v-if="openEyes" @click="isOpen"></span>
                    <span class="close-eye" v-if=!openEyes @click="isOpen"></span>
                </li>
            </ul>
            <button @click="completeClick">完成</button>
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
            mainTitle:'忘记密码',
            type:'password',
            openEyes:false,
            setPasd:'',
            setName:'',
            setVer:'',
            time:60,
            send:true,
            miao:false,
            resend:false,
            tips:''
        }
    },
    methods:{
        isOpen(){
            this.openEyes = !this.openEyes;
            if(this.openEyes){
                this.type = 'text';
            }else{
                this.type = 'password';
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
        completeClick(){
            let match = /^1([34578])\d{9}$/.test(parseInt(this.setName));
            if(this.setName === '' || !match){
                this.tips = '手机号格式不正确';
            }else if(this.setVer === '' || this.setVer.length < 6 || !this.miao){
                this.tips = '短信验证码格式不正确';
            }else if(this.setPasd === '' || this.setPasd.length < 6 || this.setPasd.length > 12){
                this.tips = '密码格式不正确';
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