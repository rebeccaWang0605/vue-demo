<template>
    <div class="application-loan">
        <button @click="changePage">申请借款</button>
    </div>
</template>


<script>
export default {
    methods:{
        changePage(){
            this.$router.push('data-must')
        }
    }
}
</script>


<style lang='scss'>
    @import "@/assets/css/loan/public/application-loan.scss"
</style>