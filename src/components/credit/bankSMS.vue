<template>
    <div class="bank-sms">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="bank-sms-content">
            <p>
                绑卡需要您的短信验证码，短信已发送至您的手机:<br>
                {{phone ? phone: '136****9087'}} 
            </p>
            <div class="verify-content">
                <label for="sms-verify">
                    <span>验证码</span>
                    <input type="number" id="sms-verify"
                    placeholder="请输入验证码" v-model='msg'>
                </label>
                <span class="miao" v-if="showTime">{{time}}秒后重发</span>
                <span class="resend" v-if="!showTime" @click="resend">重新发送</span>
            </div>
            <button @click="clickEvent">确认</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapState,mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
    },
    created(){ 
        let str = this.addBankInfo.bankPhone.split('') ;
        let len = str.length;
        for(var i = 3;i < len-4; i++){
            str.splice(i,1,"*");
        }
        this.phone = str.join('');
        this.resend();
    },
    data(){
        return{
            mainTitle:'添加银行卡',
            phone:'',
            time:60,
            timer:null,
            showTime:true,
            msg:'',
            tips:''
        }
    },
    methods:{
        clickEvent(){
            if(this.msg ==='' || this.msg.length !== 6 || !this.showTime){
                this.tips = '验证码错误';
            }else {
                this.tips = '保存成功';
                this.isSuccess(false);
                this.$router.push({name:'bank-info'});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)
        },
        ...mapMutations(['isSuccess']),
        resend(){
            this.showTime = true;
            this.time = 60;
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                this.time --;
                if(this.time == 0){
                    clearInterval(this.timer);
                    this.showTime = false;
                }
            },1000)
        }
    },
    computed:{
        ...mapState(['addBankInfo'])
    }


}
</script>


<style lang="scss">
@import "@/assets/css/credit/bank-sms.scss"
</style>