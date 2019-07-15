<template>
    <div class="login register">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="login-content">
            <div class="step">
                <ul class="step-list">
                    <li class="active">
                        <i>1</i>
                        <span>填写信息</span>
                    </li>
                    <li :class="{'active':showActive}">
                        <i>2</i>
                        <span>补充信息</span>
                    </li>
                    <li>
                        <i>3</i>
                        <span>完成注册</span>
                    </li>
                </ul>
            </div>
            <ul class="list" v-if="showStep1">
               <li>
                    <label for="register-name"></label>
                    <input type="text" id="register-name" placeholder="请输入登录名" v-model="registerName">
                </li>
                <li>
                    <label for="register-id"></label>
                    <input type="text" id="register-id" placeholder="请输入身份证号" v-model="registerId">
                </li>
                <li>
                    <label for="register-ver"></label>
                    <input type="text" id="register-ver" placeholder="请输入验证码" v-model="registerVer">
                    <ver @check="recieveVerify"/>
                </li>
            </ul>
            <button @click="next1" v-if="showStep1">下一步</button>
            <ul class="list register-step" v-if="showStep2">
               <li>
                    <label for="register-name">
                        <span class="info">登录名</span>
                    </label>
                    <input type="text" id="register-name" placeholder="请输入登录名" v-model="registerName">
                </li>
                <li>
                    <label for="register-pasd">
                        <span class="info">密码</span>
                    </label>
                    <input type="text" id="register-pasd" placeholder="6~12位且包含数字和字母" v-model="registerPasd">
                </li>
                <li>
                    <label for="regcon-pasd">
                        <span class="info">确认密码</span>
                    </label>
                    <input type="text" id="regcon-pasd" placeholder="请再次输入密码" v-model="regConfirm">
                </li>
                <li>
                    <label for="register-phone">
                        <span class="info">手机号</span>
                    </label>
                    <input type="number" id="register-phone" placeholder="请输入手机号" v-model="registerPhone">
                </li>
                <li>
                    <label for="msg-ver">
                        <span class="info">短信验证码</span>
                    </label>
                    <input type="number" id="msg-ver" placeholder="由6位字母及数字组成" v-model="msgVer" class="ipt-ver">
                    <span v-if="send" @click="sendVer">发送验证码</span>
                    <span v-if="miao" class="miao">{{time}}秒后重发</span>
                    <span v-if="resend" @click="resendVer">重新发送</span>
                </li>
            </ul>
            <button @click="next2" class="next" v-if="showStep2">下一步</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import ver from "@/components/credit/ver"
export default {
    components:{
        WebHeader,
        ver
    },
    data(){
        return{
            mainTitle:'注册征信查询账号',
            registerName:'',
            registerId:'',
            registerVer:'',
            ver:'',
            tips:'',
            registerPasd:'',
            regConfirm:'',
            registerPhone:'',
            msgVer:'',
            send:true,
            resend:false,
            miao:false,
            time:60,
            showStep1:true,
            showStep2:false,
            showActive:false,
            setTimer:null
        }    
    },
    methods:{
        recieveVerify(item){
            this.ver = item;
        },
        next1(){
            let match = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(parseInt(this.registerId));
            if(this.registerName === ''){
                this.tips = '注册用户名不能为空';
            }else if(this.registerId === '' || !match){
                this.tips = '身份证号码格式不正确';
            }else if(this.registerVer === '' || this.registerVer !== this.ver){
                this.tips = '注册验证码不正确';
            }else{
                this.showStep1 = false;
                this.showStep2 = true;
                this.showActive = true;
            }
            setTimeout(()=>{
                this.tips = ''
            },1000) 
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
        next2(){
            let test = /^1([34578])\d{9}$/.test(parseInt(this.registerPhone));
            if(this.registerName === ''){
                this.tips = '注册用户名不能为空';
            }else if(this.registerPasd === '' || this.registerPasd.length < 6 || this.registerPasd.length > 12){
                this.tips = '密码格式不正确';
            }else if(this.regConfirm === '' || this.regConfirm !== this.registerPasd){
                this.tips = '两次密码不一致';
            }else if(this.registerPhone === '' || !test){
                this.tips = '手机号码格式不正确';
            }else if(this.msgVer === '' || this.msgVer.length < 6 || !this.miao){
                this.tips = '短信验证码格式不正确';
            }else{
                console.log('未开发');
            }
            setTimeout(()=>{
                this.tips = ''
            },1000) 
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/login.scss";
    @import "@/assets/css/credit/register.scss"
</style>