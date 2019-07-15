<template>
    <div class="tips" v-if="tips">{{tips}}</div>
</template>


<script>
export default {
    props:['tips'],

}
</script>


<style scoped>
    .tips{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        padding:0.5rem 0.4rem;
        color:#fff;
        border-radius:0.3rem;
        background:rgba(0,0,0,0.8);
    }
</style>