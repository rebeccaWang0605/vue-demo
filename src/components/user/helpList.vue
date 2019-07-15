<template>
    <div class="help-list-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <ul class="help-list">
            <li v-for="(item,index) in dataList" :key="index"
                @click="toHelpDetail(index)">{{item}}</li>
        </ul>
    </div>
    
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
export default {
     components:{
        WebHeader
    },
    data(){
        return {
            mainTitle:'帮助中心',
            dataList:['如何进行还款？','利息从哪一天开始计算？还款日期怎么确定？','完成身份认证时，有什么需要特别注意的吗？','怎样进行手机认证？','如何完成人脸识别？','为什么要上传手持身份证的照片？怎样拍摄手持身份证照片会更好？','绑定银行卡时需要注意什么？','什么是逾期？','借款成功后，是否可以提前还款？','我提交借款申请审核没有通过，能否再次提交申请？']
        }
    },
    methods:{
        toHelpDetail(index){
            this.$router.push({name:'help-detail',params:{id:index}});
        }
    }

}
</script>


<style scoped>
    .help-list{
        margin-top:1.045rem;
        background:#fff;
        padding:0 0.3rem;
    }
    .help-list >li{
        padding:0.3rem 0;
        padding-right:0.3rem;
        font-size:0.3rem;
        color:#333;
        position:relative;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .help-list >li::after{
        content: "\E61D";
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:0;
        font-size:0.36rem;
        color:#999;
    }
    .help-list >li::before{
        position:absolute;
        bottom:0;
        left:0;
        content:'';
        width:100%;
        height:1px;
        background:#ccc;
        transform:scaleY(0.5);
    }
</style>