<template>
    <div class="observe-bank">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="observe-content">
            <p>现支持的银行</p>
            <ul>
                <li v-for="(item,index) in bankList" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
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
            mainTitle:'查看支持银行',
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
                '华夏银行'
            ]
        }
    }

}
</script>


<style lang="scss">
@import "@/assets/css/credit/support.scss"

</style>