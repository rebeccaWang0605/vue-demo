<template>
    <div>
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span @click="submit">提交</span>
        </web-header>
        <div class="feed-back">
            <textarea placeholder="感谢您对宋江贷的关注，您的意见和建议能帮助我们做的更好"
                v-model="inpVal"></textarea>
            <span>还可以输入{{200-inpVal.length}}个字</span>
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
            mainTitle:'意见反馈',
            inpVal:'',
             tips:'',
        }
    },
    methods:{
        submit(){
            if(this.inpVal.length < 5){
                this.tips = "字数不能小于5"
            }else{
                this.$router.push({name:'user'});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)  
        }
    }

}
</script>


<style scoped>
    .feed-back{
        margin-top:1.3rem;
    }
    .feed-back textarea{
        display:block;
        width:92%;
        margin:0 auto;
        height:3.5rem;
        border:none;
        padding:0.2rem;
        box-sizing:border-box;
        -webkit-appearance: none;
        font-family: "微软雅黑";
        color:#333;
        outline:none;
    }
    .feed-back >span{
        text-align: right;
        display:block;
        margin-top:0.3rem;
        margin-right:0.3rem;
        color:#999;
    }
</style>