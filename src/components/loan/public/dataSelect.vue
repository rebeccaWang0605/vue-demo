<template>
    <div class="credit-page user-container">
       <web-header :title="mainTitle" :show-return="true"  :show-save="false" />
        <h3 class="text-center">填写更多资料，审核通过率更高，借款费率更低</h3>
        <ul class="credit-content data-must">
            <li v-for="(item,index) in dataList"                     
                :key="index"  class="select-icon"
                @click="toFillInfo(index)">
                <a href="javascript:void(0);">
                    <div>
                        <span class="info">
                            <span>{{item.step}}</span>
                            {{item.info}}
                        </span>
                        <span class="complete" v-if="item.isComplete">已完成</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import {mapState} from 'vuex'
export default {
    components:{
            WebHeader,
    },
    data(){
        return{
            mainTitle:'选填资料',
            dataList:[],
            agree:true,
            tips:'',
            showGrey:false
        }
    },
     created(){
        this.dataList = this.selectDataList;
    },
    methods:{
        toFillInfo(index){
            this.$router.push({name:this.dataList[index]['to']});
        }
    },
     computed:{
        ...mapState(['selectDataList'])
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/credit.scss";
    @import '@/assets/css/credit/user-info.scss'
</style>