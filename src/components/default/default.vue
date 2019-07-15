<template>
    <div class="page">
        <div class="web-header">
            <web-header />
        </div>
        <div class="web-content">
            <router-view></router-view>
        </div>
        <div class="web-footer">
            <web-footer />
        </div>
    </div>
</template>


<script>
import WebHeader from "./WebHeader"
import WebFooter from "./WebFooter"
export default {
    components:{
        WebHeader,
        WebFooter
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/default/default.scss"
</style>