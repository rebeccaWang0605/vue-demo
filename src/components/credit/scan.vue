<template>
    <div class="scan-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <div class="scan-content">
            <h3>需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成。</h3>
            <p v-if="complete">之前已经完成了认证</p>
            <button @click="assumeComplete">假设完成</button>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapState, mapMutations } from 'vuex';
export default {
    components:{
        WebHeader,
    },
    created(){
        this.complete = this.baseDataList[2].isComplete;
    },
    data(){
        return {
            mainTitle:'人脸识别',
            tips:'',
            complete:false
        }
    },
    methods:{
        assumeComplete(){
            if(this.complete){
                return;
            }
            this.tips = '识别完成';
            setTimeout(()=>{
                this.tips = '';
                 this.$router.back();
            },1000)
            this.changeComplete({index:2,value:true});
            this.mustDataComplete({index:1,value:true});
        },
        
        ...mapMutations(['changeComplete','mustDataComplete'])
    },
    computed:{
        ...mapState(['baseDataList'])
    }

}
</script>


<style lang='scss'>
    @import '@/assets/css/credit/scan.scss'
</style>