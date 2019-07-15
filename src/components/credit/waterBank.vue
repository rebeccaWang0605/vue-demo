<template>
    <div class="water-bank">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"></web-header>
        <ul class="water-list">
            <li v-for="(item,index) in bankList" :key="index" 
                @click="changeMetaId(item)">
                {{item}}
                <span></span>
            </li>
        </ul>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
export default {
     components:{
        WebHeader,
    },
    data(){
        return{
            mainTitle:'请选择银行',
            bankList:[
                '招商银行',
                '工商银行',
                '农业银行',
                '中国银行',
                '浦发银行',
                '建设银行',
                '邮政储蓄银行',
                '交通银行',
                '北京银行',
                '光大银行',
                '兴业银行',
                '民生银行',
                '中信银行',
                '平安银行',
                '广发银行',
                '华夏银行',
                '深圳农村商业银行',
                '上海银行',
                '重庆农村商业银行'
            ]
        }
    },
    methods:{
        changeMetaId(id){
            this.$router.push({name:'water',params:{id}})
        }
    }
}
</script>


<style lang="scss">
    @import "@/assets/css/credit/water-bank.scss"
</style>