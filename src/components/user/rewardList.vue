<template>
    <div class="my-borrow">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <ul class="my-borrow-list reward">
            <router-link tag="li" :to="{name:'no-use'}" >未使用</router-link>
            <router-link tag="li" :to="{name:'used'}">已使用</router-link>
            <router-link tag="li" :to="{name:'expired'}">已失效</router-link>
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
            mainTitle:'我的奖励',
        }
    }

}
</script>


<style lang="scss">
     @import "@/assets/css/user/borrow-list.scss";
     .reward  >li{
         width:33.33333333%!important;
         font-weight: bold;
     }
</style>