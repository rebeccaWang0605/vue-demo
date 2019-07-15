<template>
    <div class="my-borrow">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <ul class="my-borrow-list">
            <router-link tag="li" :to="{name:'all'}" >全部</router-link>
            <router-link tag="li" :to="{name:'apply'}">申请中</router-link>
            <router-link tag="li" :to="{name:'repay'}">待归还</router-link>
            <router-link tag="li" :to="{name:'over'}">已结束</router-link>
        </ul>
        <router-view></router-view>
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
            mainTitle:'我的借款',
        }
    }

}
</script>


<style lang="scss">
     @import "@/assets/css/user/borrow-list.scss"
</style>