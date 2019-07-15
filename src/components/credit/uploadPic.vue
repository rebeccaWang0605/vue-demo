<template>
    <div class="upload">
        <web-header :title="pars.tit" :show-return="true"  :show-save="true"> 
            <span class="save" @click="saveData">保存</span>
        </web-header >
        <div class="upload-content">
            <h3>{{pars.des}}</h3>
            <ul class="upload-list">
                <li v-for="(item,index) in imgList" :key="index" @click="delClick(index)">
                    <img :src="item" alt="">
                </li>
                <li class="active">
                    <label for="file" >
                        <input type="file" id="file" @change="submit">
                    </label>
                    <span>上传图片</span>
                </li>
            </ul>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader";
import dataUploan from '@/data/dataUploan.json'
import { mapState,mapMutations } from 'vuex';
export default {
    components:{
        WebHeader,
    },
    data(){
        return{
            imgList:[],
            tips:''
        }
    },
    created(){
        this.pars = dataUploan[this.$route.params.id]; 
        this.imgList = this.picList[this.$route.params.id] || [];
    },
    methods:{
        submit(e){
            let that = this;
            let thisFile = e.target.files[0];
            let support = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
            if (thisFile && support.indexOf(thisFile.type) >= 0) {
            //上传图片格式正确，开始试着转base64
                if (typeof FileReader !== 'undefined') {
                    let reader = new FileReader();
                    reader.readAsDataURL(thisFile);
                    reader.onload = function () {
                        if (that.checkArry(that.imgList, this.result)){ 
                            that.tips = "请不要重复上传同一张图片";
                        }else {
                            that.imgList.push(this.result);
                        }
                    }
                } else {
                    that.tips = "您的浏览器版本过低无法预览";
                }
            //转base64完成
            } else {
                that.tips = '上传图片格式不对';
            }
            setTimeout(()=>{
                that.tips = '';
            },1000)
        },
        checkArry(arr, str) {
            let i = arr.length || 0;
            while (i--) {
                if (arr[i] === str) return true
            }
            return false;
        },
        saveData(){
            if(this.imgList.length != this.pars.num ){
                this.tips = `请传入${this.pars.num}张图片`;
            }else{
                this.tips = '保存成功';
                setTimeout(()=>{
                    this.$router.back();
                })  
                this.getPicList({[this.$route.params.id]:this.imgList});
            }
             setTimeout(()=>{
                this.tips = '';
            },1000)
        },
        delClick(index){
            this.imgList.splice(index,1);
        },
        ...mapMutations(['getPicList'])
    },
    computed:{
        ...mapState(['picList'])
    }

}
</script>


<style lang="scss">
    @import "@/assets/css/credit/upload.scss"
</style>