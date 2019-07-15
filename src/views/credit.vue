<template>
    <div class="credit-page">
        <web-header :title="mainTitle" :show-return="false"  :show-save="false"/> 
        <ul class="credit-content">
            <li v-for="(item,index) in baseDataList" :key="index">
                <router-link :to="{name:item.to}">
                    <div>
                        <span class="info">{{item.info}}</span>
                        <span class="complete" v-if="item.isComplete">已完成</span>
                    </div>
                </router-link>
            </li>
        </ul>
        <web-footer /> 
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import WebFooter from "@/components/default/WebFooter"

import { mapState } from 'vuex';
export default {
    components:{
        WebHeader,
        WebFooter
    },
    data(){
        return{
            mainTitle:'宋江贷',
        }
    },
    computed:{
        ...mapState(['baseDataList'])
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/credit.scss"
</style>