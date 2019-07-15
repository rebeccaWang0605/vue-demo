<template>
    <div class="banner-page">
        <ul class="banner-list" :style="{'width':imgArr.length * 100 + '%','left':changeLeft}">
            <li v-for="(imgItem,imgIndex) in imgArr" :key="imgIndex">
                <router-link :to="{name:imgItem.linkSrc}">
                    <img :src="imgItem.imgSrc" alt="">
                </router-link>    
            </li>
        </ul>
        <div class="spot">
            <span v-for="(item,index) in 2" :key="index" :class="{'active':showSpot === index}"
            @click.stop="changeBanner(index)"></span>
        </div>   
    </div>
</template>


<script>
export default {
    data(){
        return {
            imgArr:[
                {
                    imgSrc:'https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/27/250A55FF-89BC-AA19-5D4A-89C897F80FAF.png',
                    linkSrc:'sjLoan'
                },
                {
                    imgSrc:'https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg',
                    linkSrc:'autoPay'
                }
            ],
            showSpot:0,
            changeLeft:0
        }
    },
    methods:{
        changeBanner(index){
            this.showSpot = index;
            this.changeLeft = -index * 100 + '%'
        }
    }
}
</script>


<style lang="scss">
    @import "@/assets/css/loan/banner.scss"
</style>