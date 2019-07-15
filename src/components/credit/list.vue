<template>
    <div class="credit-list">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="list-con">
            <dl class="list-record">
                <dt>担保记录<span>2条</span></dt>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
            </dl>
            <dl class="list-record">
                <dt>逾期记录<span>1条</span></dt>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
            </dl>
            <dl class="list-record">
                <dt>透支记录<span class="no-record">未记录</span></dt>
            </dl>
            <dl class="list-record">
                <dt>其他记录<span>3条</span></dt>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
                <dd>2014年1月17日中国农业银行发放的贷记卡(人民币账户)。截至 2015年6月，信用额度34,00,已使用额度32,752。</dd>
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
            mainTitle:'征信报告详情',
        }    
    },


}
</script>


<style lang="scss">
    @import "@/assets/css/credit/list.scss"
</style>