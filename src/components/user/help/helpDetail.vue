<template>
    <div class="help-detail">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <dl class="detail-list">
            <dt>{{renderData.title}}</dt>
            <dd v-if="typeof renderData.content=== 'string'">{{renderData.content}}</dd>
            <dd v-else >
                <p v-for="(it,i) in renderData.content" :key="i">
                    <span v-if="it.methods" class="blue">{{it.methods}}</span>
                    <span v-if="it.alipay">{{it.methods}}</span>
                    {{it.con}}
                </p>
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
            mainTitle:'疑问解答',
            renderData:'',
            dataList:[
                {
                    title:'如何进行还款？',
                    content:[
                        {
                            methods:'方式一：',
                            con:'借款订单到期前，您只需要将资金存入绑定的银行卡即可，系统会自动划扣银行卡余额来归还借款本息。'
                        },
                        {
                            methods:'方式二：',
                            con:'在“个人中心”找到“还款”，选择需要还款的订单之后，可以使用已绑定的收款银行卡直接进行还款，如果想要分多次进行还款，可以在支付时修改还款的金额。如果在还款过程中有任何疑问，请致电我们的客服人员'
                        },
                        {
                            methods:'方式三：',
                            con:'无法通过收款银行卡还款时，您可以通过支付宝转账的方式还款到我们的支付宝账户。转账时，请在备注栏填写“姓名+手机号码”，转账成功后，请联系我们的客服人员'
                        },
                        {
                            alipay:'支付宝帐户：',
                            con:`账户名：浙江草根网络科技有限公司   
                                账　户：cgtz.com@cgtz.com`
                        },
                        {
                            methods:'方式四：',
                            con:'如果您通过方式一和方式二还款均失败时，还可以采用网银转账的方式还款到我们的对公银行账户。转账时，请在备注栏填写“姓名+手机号码”，转账成功后，请联系我们的客服人员'
                        },
                        {
                            alipay:'对公银行账户：',
                            con:`账户名：浙江草根网络科技有限公司
                             账　户：571907566810301 
                             开户行：招行高新支行`
                        }
                    ]
                },
                {
                    title:'利息从哪一天开始计算？还款日期怎么确定？',
                    content:'您在草根金融借款，利息从财务操作放款的当天开始计算。还款日是按照借款的实际发放日期，顺延借款期限，借款发放之后，您可以在订单详情页面查看详细信息。'
                },
                {
                    title:'完成身份认证时，有什么需要特别注意的吗？',
                    content:'进行身份认证时，请务必填写本人的姓名和身份证号码，姓名和身份证号码一旦确认，将永远无法修改，如果姓名和身份证号码填写有误，会导致您无法提交借款申请，所以填写时请务必仔细检查信息！完成身份认证时，请尽量使用拍照功能，以便我们能自动识别您的身份信息，减少您手工填写资料的麻烦。上传身份证正反面照片时，请务必上传内容清晰可见的照片，如果身份证照片模糊，内容无法辨认，会导致您提交的借款申请无法审核通过。'
                },
                {
                    title:'怎样进行手机认证？',
                    content:'在进行手机认证时，您需要输入手机号码、服务密码、验证码，然后点击“确认”按钮，根据系统提示操作即可完成手机认证。如果多次尝试认证手机不成功，可能是我们与运营商对接数据的过程中出现了问题，我们会尽快改进，请您及时联系我们的客服人员处理。'
                },
                {
                    title:'如何完成人脸识别？',
                    content:'在“信用”页面，找到“人脸识别”按钮，点击之后按照提示一步步操作对应动作即可。在完成人脸识别的过程中，请保持周围环境光线明亮，并取下会遮挡面部的物件，保持整个脸部在屏幕中央。'
                },
                {
                    title:'为什么要上传手持身份证的照片？怎样拍摄手持身份证照片会更好？',
                    content:'上传手持身份证照片是我们风控的要求，可以证明您已知晓并确认提交的借款申请订单。拍摄手持身份证照片时，请保持身份证内容和本人脸部清晰可辨，并完全露出持证的手臂。'
                },
                {
                    title:'绑定银行卡时需要注意什么？',
                    content:[
                         {
                            methods:'方式一：',
                            con:'只能绑定储蓄卡，不能使用信用卡'
                        },
                        {
                            methods:'方式二：',
                            con:'收款银行卡，只能绑定本人名下的储蓄卡'
                        },
                        {
                            methods:'方式三：',
                            con:'必须填写正确的开户行以及分支行信息，否则会导致我们财务放款失败，由此造成的后果，需要您来承担'
                        },
                    ]
                },
                {
                    title:'什么是逾期？',
                    content:'如果您在约定还款日当天中午12：00尚未还清借款本金、利息、管理费，则算作逾期，逾期需要缴纳逾期违约金。'
                },
                {
                    title:'借款成功后，是否可以提前还款？',
                    content:'借款成功后，您可以选择提前还款，但利息不予减免，还款金额不变。'
                },
                {
                    title:'我提交借款申请审核没有通过，能否再次提交申请？',
                    content:'如果您提交的借款申请暂时未能获得批准，可能是由于您提交的资料不符合要求。如果您的个人资料无重大变化，不建议您在短期内再次提交申请。'
                },

            ]
        }
    },
    created(){
       this.renderData = this.dataList[this.$route.params.id];
    }


}
</script>


<style scoped>
    .detail-list{
        margin:1.345rem 0.3rem 0.3rem;
        background:#fff;
    }
    .detail-list >dt,
    .detail-list >dd{
        padding:0.25rem;
        font-weight:bold;
        font-family: '微软雅黑';
        color:#333;
        position:relative;
        margin:0;
    }
    .detail-list >dt::after{
        position:absolute;
        content:'';
        bottom:0;
        left:0;
        width:100%;
        height:1px;
        background:#ccc;
        transform:scaleY(0.5);
    }
    .detail-list >dd{
        font-weight:normal;
        font-size:0.28rem;
    }
    .detail-list >dd >p{
        margin:0;
        margin-bottom:0.3rem
    }
    .detail-list >dd >p >span{
        display:block;
        font-weight:bold;
    }
    .detail-list >dd >p >span.blue{
        color:#3297fd;
    }
</style>