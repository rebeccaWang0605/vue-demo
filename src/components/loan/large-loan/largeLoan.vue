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
                imgSrc:'https://jingjingke.github.io/vuePro-demo/dist/static/img/loanBanner3.ad43349.jpg',
                mainTitle:'草根福利借款',
                subTitle:'草根投资项目担保，费率超低',
                productPoint:{
                    title:'产品要点',
                    data:[
                        {productName:'借款金额',des:'1000元-10000元'},{productName:'借款期限',des:'30天'},
                        {productName:'借款利率',des:'年化7%'},
                        {productName:'初期服务费',des:'0.9%'},
                        {productName:'还款方式',des:'到期一次性还本付息'}
                    ]
                },
                needInfo:{
                    title:'需要资料',
                    data:[
                        {productName:'本人身份证、银行卡'},{productName:'在草根投资网有投资中的项目'},
                    ]
                },
                productCharacter:{
                    title:'产品特点',
                    data:[
                        {productName:'申请福利借款的用户需要在草根投资账户中拥有还本付息时间超过还款日期30天且金额大于借款额度2倍的投资项目。'}
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