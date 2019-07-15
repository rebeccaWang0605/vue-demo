<template>
    <div class="credit-page user-container">
       <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <h3 class="text-center">宋江贷承诺你的信息安全</h3>
        <ul class="credit-content data-must">
            <li v-for="(item,index) in dataList"                     
                :key="index" 
                :class="{'icon':true,'active':item.active}"
                @click="toFillInfo(index)">
                <a href="javascript:void(0);">
                    <div>
                        <span class="info">
                            <span>{{item.step}}</span>
                            {{item.info}}
                        </span>
                        <span class="complete" v-if="item.isComplete">已完成</span>
                    </div>
                </a>
            </li>
        </ul>
        <h3 class="text-center">
           <span class="data-select" @click="toSelectData">选填资料</span>
            <span class="font-xiao">资料越完善，审核通过率越高，借款费用越低</span>
        </h3>
        <button @click="application" :class="{'showGrey':showGrey}">申请借款</button>
        <div :class="{'agree':true, 'active':agree}" @click="agreeClick">
            我已阅读并同意
            <span @click.stop="goAgreement">《个人信息收集授权协议》</span>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import {mapState} from 'vuex'
export default {
    components:{
            WebHeader,
    },
    created(){
        this.dataList = this.mustDataList;
        for(let i = 0; i < this.dataList.length;i++){
            if(!this.dataList[i].isComplete){
                this.dataList[i].active = true;
                break;
            }
        }
    },
    data(){
        return{
            mainTitle:'必填资料',
            dataList:[],
            agree:true,
            tips:'',
            showGrey:false
        }
    },
    methods:{
        toFillInfo(index){
            if(this.dataList[index].active){
                this.setMeta(this.$route.meta.id);
                this.$router.push({name:this.dataList[index]['to']});
            }   
        },
        agreeClick(){
            this.agree = !this.agree; 
            this.showGrey = !this.showGrey;   
        },
        goAgreement(){
            this.$router.push({
                name:'agreement'
            })
        },
        application(){
            if(!this.agree){
                this.tips = '请阅读并同意协议';
            }else if(!this.dataList[0].isComplete){
                this.tips = '请进行身份认证';
            }else if(!this.dataList[1].isComplete){
                this.tips = '请进行人脸识别';
            }else if(!this.dataList[2].isComplete){
                this.tips = '请填写紧急联系人信息';
            }else if(!this.dataList[3].isComplete){
                this.tips = '请进行手机认证';
            }else if(!this.dataList[4].isComplete){
                this.tips = '请填写工作信息';
            }else{
                this.$router.push({
                    name:'submit-apply'
                })
            }
           setTimeout(()=>{
               this.tips = '';
           },1000)
        },
        toSelectData(){
            this.$router.push({
                name:'data-select'
            })
        }
    },
    computed:{
        ...mapState(['mustDataList'])
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/credit.scss";
    @import '@/assets/css/credit/user-info.scss'
</style>