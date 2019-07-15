<template>
    <div class='credit-detail-page'>
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="credit-detail">
            <div class='report'>
                报告编号：2015070703000178126968<br>
                报告时间：2015.07.07
                <p>
                    <span>700</span>
                    得分
                </p>
            </div>
            <dl class="record" v-for="(item,index) in dataList" :key="index">
                <dt @click="goDetails">{{item}}</dt>
                <dd>
                    <span >账户数</span>
                    <span class='num'>4</span>
                </dd>
                <dd>
                    <span>未结清/未销户</span>
                    <span class="grey">0</span>
                </dd>
                <dd>
                    <span>逾期数</span>
                    <span class='num'>1</span>
                </dd>
                <dd>
                    <span>逾期90天以上</span>
                    <span class='num'>2</span>
                </dd>
                <dd>
                    <span>担保数</span>
                    <span class='num'>3</span>
                </dd>
            </dl>
            <dl class="record" @click="toList">
                <dt>担保记录<span>2条</span></dt>
            </dl>
            <dl class="record no-margin" @click="toList">
                <dt>强制执行记录<span>1条</span></dt>
            </dl>
            <dl class="record no-margin mar" @click="toList">
                <dt>查询记录<span class='no-record'>无记录</span></dt>
            </dl>

        </div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapState, mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
    },
    data(){
        return{
            mainTitle:'征信报告详情',
            dataList:['信用卡记录','房贷记录','车贷记录','其他贷款记录']
        }    
    },
    methods:{
        goDetails(){
            this.$router.push({name:'detail'});
        },
        toList(){
            this.$router.push({name:'list'}); 
        }
    }


}
</script>


<style lang="scss">
    @import "@/assets/css/credit/creditDetail.scss"
</style>