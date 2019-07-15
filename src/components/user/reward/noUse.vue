<template>
    <div class='no-use'>
        暂无抵用券~
    </div>
</template>


<script>
export default {


}
</script>


<style scoped>
    .no-use{
        margin-top:1rem;
        text-align: center;
        color:#666;
        font-size:0.28rem;
        font-weight: bold;
    }
    .no-use::before{
        content: "\E620";
        display:block;
        width:100%;
        height:2rem;
        line-height:2rem;
        color:#ccc;
        font-size:2rem;
        text-align: center;
    }
</style>