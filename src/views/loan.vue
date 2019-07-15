<template>
    <div class="loan-page">
        <web-header :title="mainTitle" :show-return="false"  :show-save="false"/> 
        <banner />
        <debit />   
        <web-footer /> 
    </div>
</template>


<script>
import Banner from '@/components/loan/Banner.vue'
import Debit from "@/components/loan/Debit.vue"
import WebHeader from "@/components/default/WebHeader"
import WebFooter from "@/components/default/WebFooter"
export default {
    components:{
        Banner,
        Debit,
        WebHeader,
        WebFooter
    },
    data(){
        return{
            mainTitle:'宋江贷'
        }
    }

}
</script>


<style scoped>

</style>