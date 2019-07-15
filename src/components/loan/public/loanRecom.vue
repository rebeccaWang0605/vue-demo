<template>
    <div class="user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" /> 
        <div class="user-content">
            <ul class="list">
                <li>
                    <input type="text" id="user-name" placeholder="请输入推荐人手机号码" v-model="recomPhone">
                </li>
            </ul>
            <button @click="isFilled">完成</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
export default {
    components:{
        WebHeader
    },
    data(){
        return{
            mainTitle:'推荐人手机号码',
            tips:'',
            recomPhone:''
        }
    },
    methods:{
        isFilled(){
            let match = /^1([34578])\d{9}$/.test(parseInt(this.recomPhone));
            if(this.recomPhone === '' || !match){
                this.tips = "请输入正确的手机号码"
            }else{
                this.tips = '保存成功';
                setTimeout(()=>{
                    this.$router.back();
                },1500);
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 
        },
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss'
</style>