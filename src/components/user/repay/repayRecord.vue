<template>
    <div>
        <web-header :title="mainTitle" :show-return="true"  :show-save="false"/> 
        <record />
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import Record from "@/components/public/record"
export default {
     components:{
        WebHeader,
         Record
    },
    data(){
        return{
            mainTitle:'还款记录',
        }
    }

}
</script>


<style scoped>

</style>