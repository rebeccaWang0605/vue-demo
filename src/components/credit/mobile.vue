<template>
    <div class="mobile-container">
         <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
         <div class="mobile-content">
             <div class="img-icon"></div>
             <ul class="mobile-info">
                <li class="has-border">
                     <input type="number" placeholder="请输入手机号码" v-model="phoneConfirm.inputPhone">
                </li>
                <li>
                     <input type="number" placeholder="请输入服务密码" v-model="phoneConfirm.inputPassd">
                </li>
             </ul>
             <button @click="confirm">确认</button>
             <p>忘记服务密码,请拨打<span>手机运营商客服电话</span>进行重置</p>
         </div>
         <div class="tips" v-if="tips">{{tips}}</div>
         <div class="mask" v-if="showMask">
             <div class="model">
                 <h4>本次操作需要验证，请输入验证信息。</h4>
                 <div class="ipt">
                     <input type="number" placeholder="请输入短信验证码" v-model="inputCode">
                     <button v-if="!showActive">{{time}}秒后重发</button>
                     <button class="active" v-if="showActive" @click="reSend">重新发送</button>
                 </div>
                 <div class="ipt" >
                     <input type="text" placeholder="请输入验证码" v-model="inputVerify">
                     <ver @check="recieveVerify"/>
                 </div>
                 <div class="confirm">
                     <span @click="cancel">取消</span>
                     <span @click="confirmVerify">确定</span>
                 </div>
             </div>
         </div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import ver from "@/components/credit/ver"
import { mapState, mapMutations } from 'vuex';
export default {
    components:{
        WebHeader,
        ver
    },
    data(){
        return {
            mainTitle:'手机认证',
            phoneConfirm:{
                inputPassd:'',
                inputPhone:'',
            },
            tips:'',
            time:60,
            timer:null,
            showMask:false,
            showActive:false,
            inputCode:'',
            inputVerify:'',
            verifyInfo:''
        }
    },
    created(){
        for(let prop in this.phoneInfo){
            this.phoneConfirm[prop] = this.phoneInfo[prop]
        }
    },
    methods:{
        confirm(){
            let reg = /^1([34578])\d{9}$/;
            let match = reg.test(parseInt(this.phoneConfirm.inputPhone));
            if(this.phoneConfirm.inputPhone === '' || !match){
                this.tips = '请输入正确的手机号码';
            }else if(this.phoneConfirm.inputPassd === '' || this.phoneConfirm.inputPassd.length !== 6){
                 this.tips = '请输入正确的服务密码';
            }else{
                this.showMask = true;
                this.reSend();
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 

        },
        cancel(){
            clearInterval(this.timer);
            this.showMask = false;
        },
        reSend(){
            this.showActive = false;
            this.time = 60;
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                this.time --;
                if(this.time == 0){
                        clearInterval(this.timer);
                        this.showActive = true;
                }
            },1000)
        },
        confirmVerify(){
            if(this.inputCode === '' || this.inputCode.length !== 6 ){
                this.tips = '短信验证码错误';
            }else if(this.showActive !== false){
                this.tips = '请重新请求验证码';
                this.inputCode = '';
            }else if(this.inputVerify === '' || this.inputVerify !== this.verifyInfo){
                this.tips = '验证码错误';
            }else{
                this.tips = '手机验证成功';
                setTimeout(()=>{
                    this.tips = '';
                    this.$router.back();
                },1000)
                this.getPhoneInfo(this.phoneConfirm);
                this.changeComplete({index:3,value:true});
                this.mustDataComplete({index:3,value:true});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)
        },
        recieveVerify(verify){
            this.verifyInfo = verify;
        },
         ...mapMutations(['changeComplete','getPhoneInfo','mustDataComplete'])
    },
    computed:{
        ...mapState(['phoneInfo'])
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/mobile.scss'
</style>