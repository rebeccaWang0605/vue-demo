<template>
    <div class="help">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="help-content">
            <dl>
                <dt>在宋江贷申请借款，一定要添加收款银行卡吗？</dt>
                <dd>您提交借款申请之后，财务给您打款时，一定要您提供银行卡信息，才能成功将资金发放给您。所以在宋江贷申请借款，一定要添加收款银行卡。目前仅支持添加储蓄卡，不支持信用卡</dd>
            </dl>
            <dl>
                <dt>银行卡可以更换吗？</dt>
                <dd>更换收款银行卡需要联系客服400-877-0890</dd>
            </dl>
            <dl>
                <dt>添加收款银行卡需要提供哪些信息?</dt>
                <dd>添加收款银行卡时请提供正确的银行卡卡号、银行预留手机号码、开户省、开户市、开户行等信息。如果提供错误的信息会导致财务无法给您打款。</dd>
            </dl>
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
            mainTitle:'帮助'
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/help.scss"
</style>