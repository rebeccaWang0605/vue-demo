<template>
    <div class="about-page">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <dl class="about">
            <dt>关于我们</dt>
            <dd>
                杭州琅格金融信息服务有限公司成立于2015年，公司注册资本1000万元人民币，宋江贷(www.cgjr.com)由杭州琅格金融信息服务有限公司开发和运营。
            </dd>
            <dd>
                杭州琅格金融信息服务有限公司是以实现投融资双方共赢为宗旨的互联网金融中介服务企业。宋江贷的经营管理团队均为金融、法律、互联网领域的资深专业人士，在相关领域有丰富的从业经验，平台拥有强大的服务网络，为客户提供全方位的普惠金融服务。
            </dd>
            <dd>
                宋江贷是一个创新的互联网金融平台，为有资金需求和投资需求的年轻人提供互联网金融服务。公司积极响应政府“优化企业结构”“大众创业，万众创新”的政策，为实现多元化资产配置，在2016年全面深入布局创新业务，特别是个人信贷服务业务，推出草根贷产品，除了为个人提供线上现金贷款服务外，同时提供分期贷款服务，满足个人旅游、装修、教育、医疗、日常消费、婚庆等方面的贷款需求。宋江贷致力于为个人消费者提供信贷服务，满足个人随时贷款需求。
            </dd>
        </dl>
        <dl class='about contact'>
            <dt>联系我们</dt>
            <dd>
                <span>办公地址</span>
                <span>杭州市余杭区仓前街道景兴路999号梦想小镇天使村10幢</span>
            </dd>
            <dd>
                <span>市场合作</span>
                <span>kai.fang@cgtz.com</span>
            </dd>
            <dd>
                <span>客服电话</span>
                <span>
                    400-877-0890
                    <br>
                    早09:00-晚18:00 （工作日）
                    <br>
                    早09:00-晚18:00 （节假日）
                </span>
            </dd>
        </dl>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
export default {
     components:{
        WebHeader
    },
    data(){
        return{
            mainTitle:'关于我们',
        }
    }
}
</script>


<style scoped>
    .about-page{
        margin-top:1.3rem;
    }
    .about-page .about{
        margin-top:0.3rem;
        background:#fff;
    }
    .about dt{
        height:1rem;
        line-height:1rem;
        font-weight: bold;
        padding:0 0.4rem;
        position:relative;
    }
    .about dt::before{
        position:absolute;
        left:0.2rem;
        top:50%;
        transform:translateY(-50%);
        display:inline-block;
        content:'';
        width:4px;
        height:40%;
        background:#3297fd;
    }
    .about dt::after{
        position:absolute;
        left:0;
        bottom:0;
        content:'';
        width:100%;
        height:1px;
        background:#ccc;
        transform:scaleY(0.5);
    }
    .about >dd{
        margin:0;
        padding:0.2rem 0.25rem;
        text-indent:2em;
        color:#333;
        font-size:0.3rem;
    }
    .contact >dd{
        text-indent:0;
        display:flex;
    }
    .contact >dd >span:nth-of-type(1){
        flex:0 0 2rem;
    }
</style>