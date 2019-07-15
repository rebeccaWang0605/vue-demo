<template>
    <ul class="expired-list">
        <li>
            <P class="price"><b>5</b>元</P>
            <P class="info">
                <span>推荐奖励</span>
                有效期至2016-06-20 15:27:27
                <br>
                所有奖励券之间均不能叠加使用
            </P>
        </li>
        <li>
            <P class="price"><b>5</b>元</P>
            <P class="info">
                <span>推荐奖励</span>
                有效期至2016-06-20 15:27:27
                <br>
                所有奖励券之间均不能叠加使用
            </P>
        </li>
        <li>
            <P class="price"><b>5</b>元</P>
            <P class="info">
                <span>推荐奖励</span>
                有效期至2016-06-20 15:27:27
                <br>
                所有奖励券之间均不能叠加使用
            </P>
        </li>
    </ul>
</template>


<script>
export default {


}
</script>


<style scoped>
    .expired-list >li{
        margin:0.2rem;
        height:1.95rem;
        background:#999;
        display:flex;
        background-position:0 -89%;
        color:#fff;
        background-size:100%;
        padding:0.3rem;
        box-sizing: border-box;
        background-image:url("https://jingjingke.github.io/vuePro-demo/dist/static/img/prizeBg.92b084d.png");
    }
    .expired-list >li .price{
        width:30%;
        height:100%;
        margin:0;
        text-align: center;
        border-right:2px dashed #ccc;
    }
    .expired-list >li .price b{
        font-size:1rem;
    }
    .expired-list >li .info{
        padding-left:0.3rem;
        margin:0;
        font-size:0.26rem;
    }
    .expired-list >li .info >span{
        display:block;
        margin-bottom:0.15rem;
        margin-top:0.08rem;
    }
</style>