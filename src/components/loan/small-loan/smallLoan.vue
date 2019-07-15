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
                imgSrc:'https://jingjingke.github.io/vuePro-demo/dist/static/img/loanBanner2.2bd63e8.jpg',
                mainTitle:'小额借款',
                subTitle:'无抵押、免担保、减你资金压力',
                productPoint:{
                    title:'产品要点',
                    data:[
                        {productName:'借款金额',des:'1000元-5000元'},{productName:'借款期限',des:'30天、3个月、6个月'},
                        {productName:'借款利率',des:'年化7%-12%'},
                        {productName:'初期服务费',des:'3%-8.5%'},
                        {productName:'月管理费',des:'0%-1.3%'},
                        {productName:'还款方式',des:'等额本息/一次性还本付息'}
                    ]
                },
                needInfo:{
                    title:'需要资料',
                    data:[
                        {productName:'本人身份证、银行卡'},{productName:'有实名认证的手机号码，且使用时长超过3个月'},
                        {productName:'30天以内的央行征信报告'},
                        {productName:'3个月以上的工资流水'}
                    ]
                },
                productCharacter:{
                    title:'产品特点',
                    data:[
                        {productName:'申请普通借款需要提供较为详细的征信资料，适合有稳定工作、资信状况良好的用户。'}
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