<template>
    <div class="user-page">
        <web-header :title="mainTitle" :show-return="false"  :show-save="false"/> 
        <div class="user-content">
            <div class="user-top">
                <div class="information">
                    <div>
                        <p class="welcome">您好</p>
                        <p class="tel">130****0987</p>
                        <p><span>学徒</span><span>白手起家</span></p>
                    </div>
                </div>
                <div class="pay-info"> 
                    <span>
                        申请借款
                        <strong>1笔</strong>
                    </span>
                    <span>
                        待还借款
                        <strong>0笔</strong>
                    </span>
                </div>
            </div>
            <ul class="user-list">
                <li v-for="(item,index) in userPageList" :key="item+index"
                    @click="jumpTo(item)">
                    {{item.title}}
                    <span></span>
                </li>
            </ul>
            <div class="quit" @click="quitLogin">退出登录</div>
        </div>
        <web-footer />
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import WebFooter from "@/components/default/WebFooter"
export default {
    components:{
        WebHeader,
        WebFooter
    },
    data(){
        return{
            mainTitle:'宋江贷',
            userPageList:[
                {
                    title:'我的借款',
                    to:'borrow-list'
                },
                {
                    title:'我的还款',
                    to:'repay-list'
                },
                {
                    title:'我的奖励',
                    to:'reward-list'
                },
                {
                    title:'帮助中心',
                    to:'help-list'
                },
                {
                    title:'意见反馈',
                    to:'feedback'
                },
                {
                    title:'关于我们',
                    to:'about-us'
                }
            ]
        }
    },
    methods:{
        jumpTo(item){
            this.$router.push({name:item.to});
        },
        quitLogin(){
            this.$router.push({name:'login-page'});
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/user/user.scss"
</style>