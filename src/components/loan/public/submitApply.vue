<template>
    <div class="user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save person-icon" @click="toLoanRecom"></span>
        </web-header>
        <div class="user-content">
            <ul class="list">
                <li class="has-arrow" @click="clickEvent('pay')" >
                    <span class="info">还款方式</span>
                    <div class='select-con'>{{showData.payCon}}</div>
                    <div class="select-hide" v-if="showData.pay">
                        <span @click.stop="changeActive(item,'pay')" v-for="(item,index) in dataList.payDatasList" :key="index">
                        {{item}}
                        </span>
                    </div>
                </li>
                <li class="has-arrow" @click="clickEvent('loan')" >
                    <span class="info">借款金额</span>
                    <div class='select-con'>{{showData.loanCon}}</div>
                    <div class="select-hide" v-if="showData.loan">
                        <span @click.stop="changeActive(item,'loan')" v-for="(item,index) in dataList.loanDataList"  :key="index">
                            {{item}}
                        </span>
                    </div>
                </li>
                 <li class="has-arrow" @click="clickEvent('loanTime')" >
                    <span class="info">借款期限</span>
                    <div class='select-con'>{{showData.loanTimeCon}}</div>
                    <div class="select-hide" v-if="showData.loanTime">
                        <span @click.stop="changeActive(item,'loanTime')" v-for="(item,index) in dataList.loanTimeDataList"  :key="index">
                            {{item}}   
                        </span>
                    </div>
                </li>
                <li class="has-arrow" @click="toLoanDes">
                    <span class="info">借款描述</span>
                    <div class='select-con'></div>
                </li>
            </ul>
            <h3></h3>
            <ul class="list">
                <li class="has-arrow" @click="clickEvent('conTime')" >
                    <span class="info" >方便联系时间</span>
                    <div class='select-con'>{{showData.conTimeCon}}</div>
                    <div class="select-hide" v-if="showData.conTime">
                        <span @click.stop="changeActive(item,'conTime')"
                              v-for="(item,index) in dataList.conTimeDataList" :key="index">
                              {{item}}
                        </span>
                    </div>
                </li>
            </ul>
            <button @click="toSureMsg">提交申请</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapState,mapMutations } from 'vuex';
export default {
    components:{
        WebHeader
    },
    data(){
        return{
            mainTitle:'提交申请',
            showData:{
                pay:false,
                loan:false,
                loanTime:false,
                conTime:false,
                loanDes:false,
                payCon:'',
                loanCon:'',
                loanTimeCon:'',
                conTimeCon:'',
            },
            tips:'',
            dataList:{
                payDatasList:['一次性还本付息','还本付息'],
                loanDataList:['500元','1000元'],
                loanTimeDataList:['7天','14天','21天'],
                conTimeDataList:['9:00-12:00','12:00-14:00','14:00-18:00'],
            }
        }
    },
    created(){
        for(let prop in this.submitInfo){
            this.showData[prop] = this.submitInfo[prop];
        }
        this.showData.loanDes = this.loanDesInfo;
    },
    methods:{
        clickEvent(info){
            this.showData[info] = !this.showData[info];
        },
        changeActive(e,info){
            this.showData[info+'Con'] = e;
            this.showData[info] = false;
        },
        toLoanDes(){
            this.getSubmitInfo(this.showData);
            this.$router.push({
                name:'loan-des'
            })
        },
        toLoanRecom(){
            this.getSubmitInfo(this.showData);
            this.$router.push({
                name:'loan-recom'
            })
        },
        toSureMsg(){
            if(this.showData.payCon === ''){
                this.tips = "还款方式不能为空"
            }else if(this.showData.loanCon === ''){
                this.tips = "借款金额不能为空"
            }else if(this.showData.loanTimeCon === ''){
                this.tips = "借款期限不能为空"
            }else if(!this.showData.loanDes){
                this.tips = "还借款描述不能为空"
            }else if(this.showData.conTimeCon === ''){
                this.tips = "联系时间不能为空"
            }else{
                this.tips = '保存成功';
                this.getSubmitInfo(this.showData);
                this.$router.push({
                    name:'sure-msg'
                })
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)
        },
        ...mapMutations(['getSubmitInfo'])
    },
    computed:{
        ...mapState(['loanDesInfo','submitInfo'])
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss'
</style>