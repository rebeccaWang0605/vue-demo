<template>
    <header class="header">
        <span v-if="showReturn" class="back" @click="goBack">返回</span>
        <span class="title">{{title}}</span>
        <slot v-if="showSave"></slot>
    </header>
</template>


<script>
export default {
    props:['title','showReturn','showSave'],
    methods:{
        goBack(){
            this.$router.back()
        }
    }
}
</script>


<style lang="scss">
@import "@/assets/css/default/web-header.scss"
</style>