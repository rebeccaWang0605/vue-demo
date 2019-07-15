<template>
    <div class="credit-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <h3>资料越完善，借款成功的概率越高，信用状况越好，需要支付的借款费用越少。</h3>
        <ul class="credit-content">
            <li v-for="(item,index) in dataList" :key="index" class="no-pseudo" @click="touploadPic(index)">
                <a href="javascript:void(0);">
                    <div>
                        <span class="info">{{item.tit}}</span>
                        <span class="un-complete complete" >未提供</span>
                        <!-- <span class="complete" >已提供</span> -->
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import dataUploan from '@/data/dataUploan.json'
export default {
    components:{
        WebHeader,
    },
    created(){
        this.params = Object.keys(dataUploan);
        for(let prop of this.params){
            this.dataList.push(dataUploan[prop]);
        }   
    },
    data(){
        return{
            mainTitle:'其他资料',
            dataList:[],
            params:''
        }
    },
    methods:{
        touploadPic(index){
            this.$router.push({name:'uploadPic',params:{id:this.params[index]}});
        }
    },
}
</script>


<style lang="scss">
    @import "@/assets/css/credit/credit.scss"
</style>