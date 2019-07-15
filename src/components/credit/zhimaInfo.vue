<template>
    <div class="zhima">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" /> 
        <div class="zhima-info">
            <p>
                系统开小差了，没有找到您要的数据。
            </p>
            <button>查看最新芝麻分</button>
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
            mainTitle:'芝麻信用分'
        }
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/zhima.scss"
</style>