<template>
    <div>
        <product-detail :list="productInfo"/>
    </div>
</template>


<script>
import productDetail from '@/components/loan/public/productDetail.vue'
export default {
    components:{
        productDetail
    },
    data(){
        return{
            productInfo:{
                imgSrc:'https://jingjingke.github.io/vuePro-demo/dist/static/img/loanBanner1.52bb9bb.jpg',
                mainTitle:'微额借款',
                subTitle:'应急首选，解你燃眉之急',
                productPoint:{
                    title:'产品要点',
                    data:[
                        {productName:'借款金额',des:'500元、1000元'},{productName:'借款期限',des:'7天、14天、21天'},
                        {productName:'借款利率',des:'年化7%'},
                        {productName:'初期服务费',des:'3%-8%'},
                        {productName:'还款方式',des:'到期一次性还本付息'}
                    ]
                },
                needInfo:{
                    title:'需要资料',
                    data:[
                        {productName:'本人身份证、银行卡'},{productName:'有实名认证的手机号码，且使用时长超过3个月'},
                    ]
                },
                productCharacter:{
                    title:'产品特点',
                    data:[
                        {productName:'申请快速借款需要的资料较少，审批速度快，适合急切需要小额资金的用户。'}
                    ]
                },
                productSuggest:{
                    title:'好借好还，再借不难',
                    data:[
                        {productName:'勿递交虚假材料，否则会被认定为骗贷；'},
                        {productName:'请给审核流程多一点耐心，审核时间 1-2 天；'},
                        {productName:'勿逾期还款，珍惜信用。'},
                    ]
                },
            }
        }
    }

}
</script>


<style scoped>

</style>