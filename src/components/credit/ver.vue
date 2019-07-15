<template>
     <div class="ver" @click="changeVerify" >
        <span :style="{'transform':changeDeg()}"
            v-for="(item,index) in verifyInfo" :key="index">
            {{item}}
        </span>
    </div>
</template>


<script>
export default {
    data(){
        return{
            verifyInfo:''
        }
    },
    created(){
        this.verifyInfo = this.verifyImage();
        this.$emit('check',this.verifyInfo);
    },
    methods:{
        verifyImage(){
            let str='123456789abcdefghijkmnpqrstuvwyzABCDEFGHJKLMNPQRSTUVWXYZ';
            let verifyStr = '';
            for(var i = 0; i < 6; i++){
                let rand = Math.floor(Math.random()*str.length);
                verifyStr += str[rand];
            }
            return verifyStr;
        },
        changeVerify(){
            this.verifyInfo = this.verifyImage();
            this.$emit('check',this.verifyInfo);
        },
        changeDeg(){
            var deg = Math.floor((Math.random()-0.5)*120);
            var x = Math.floor((Math.random()-0.5)*12);
            return `rotate(${deg}deg) translateY(${x}px)`;
        }
    },

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/ver.scss"
</style>