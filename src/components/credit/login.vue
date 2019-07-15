<template>
    <div class="login">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="login-content">
            <ul class="list">
               <li>
                    <label for="login-name"></label>
                    <input type="text" id="login-name" placeholder="请输入登录名" v-model="loginName">
                </li>
                <li>
                    <label for="login-pasd"></label>
                    <input type="text" id="login-pasd" placeholder="请输入密码" v-model="loginPasd">
                </li>
                <li>
                    <label for="login-ver"></label>
                    <input type="text" id="login-ver" placeholder="请输入验证码" v-model="loginVer">
                    <ver @check="recieveVerify"/>
                </li>
            </ul>
            <button @click="submit">确定提交</button>
            <button @click="register">注册征信查询账号</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import ver from "@/components/credit/ver"
import { mapState, mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
        ver
    },
    data(){
        return{
            mainTitle:'央行征信登录',
            loginName:'',
            loginPasd:'',
            loginVer:'',
            ver:'',
            tips:''
        }    
    },
    methods:{
        recieveVerify(item){
            this.ver = item;
        },
        submit(){
            if(this.loginName === ''){
                this.tips =  '登录名不能为空';
            }else if(this.loginPasd === ''){
                this.tips =  '密码不能为空';
            }else if(this.loginVer === '' || this.loginVer !== this.ver){
                this.tips =  '验证码错误';
            }else{
                console.log('待开发')
            }
            setTimeout(()=>{
                this.tips = ''
            },1000)
        },
        register(){
            this.$router.push({name:'register'});
        }
    }


}
</script>


<style lang="scss">
    @import "@/assets/css/credit/login.scss"
</style>