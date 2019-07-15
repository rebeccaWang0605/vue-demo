<template>
    <div class="credit-report">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="credit-report-content">
            <div class="img">
                <p @click="toLogin">登录央行征信查看最新报告</p>
            </div>
            <dl class="con">
                <dt>
                    历史征信报告
                    <span>未记录</span>
                </dt>
                <dd @click="toDetail">
                    <span>2016-08-23</span>
                    <span>201507073000178126968</span>
                </dd>
                <dd @click="toDetail">
                    <span>2016-08-23</span>
                    <span>201507073000178126968</span>
                </dd>
                <dd @click="toDetail">
                    <span>2016-08-23</span>
                    <span>201507073000178126968</span>
                </dd>
            </dl>
            <button @click="toLogin">申请最新征信报告</button>
            <button @click="toLogin">上传征信报告</button>
        </div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapState, mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
    },
    data(){
        return{
            mainTitle:'简版个人征信报告',
        }    
    },
    methods:{
        toLogin(){
            this.$router.push({name:'login'});
        },
        toDetail(){
            this.$router.push({name:'creditDetail'});
        }
    }


}
</script>


<style lang="scss">
    @import "@/assets/css/credit/credit-report.scss"
</style>