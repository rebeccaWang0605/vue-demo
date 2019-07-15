<template>
    <div class="detail-page">
        <div class="img">
            <img :src="list.imgSrc" alt="">
            <p class="title">
                <span>{{list.mainTitle}}</span>
                {{list.subTitle}}
            </p>
            <div class="return-to">
                <span @click="returnBack"></span>
            </div>
        </div> 
        <div class="detail-content">
            <need-info :data-list="list.productPoint"
            :show="true"/>
            <need-info :data-list="list.needInfo"
            :show="true"/>
            <need-info :data-list="list.productCharacter"
            :show="showCharacter">
                <span @click="showC" :class="{'presude':true,'active':showCharacter}"></span>
            </need-info>
            <need-info :data-list="list.productSuggest"
            :show="showSuggest">
                <span @click="showS" :class="{'presude':true,'active':showSuggest}"></span>
            </need-info>
        </div>
        
        
        <application-loan />

    </div>
</template>


<script>
import needInfo from './needInfo.vue'
import applicationLoan from "./applicationLoan.vue"
export default {
    components:{
        needInfo,
        applicationLoan
    },
    props:['list'],
    data(){
        return{
            showCharacter:false,
            showSuggest:false,
        }
    },
    methods:{
        showC(){
            this.showCharacter = !this.showCharacter;
        },
        showS(){
            this.showSuggest = !this.showSuggest;
        },
        returnBack(){
            this.$router.push('/loan');
        }
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/loan/public/product-detail.scss'
</style>