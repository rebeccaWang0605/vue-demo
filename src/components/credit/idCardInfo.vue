<template>
    <div class="user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="false" /> 
        <div class="user-content">
            <h3>请拍摄身份证正反两面，以便确认身份</h3>
            <div class="id-photo">
                <div :class="{'idd':true,'front':true, 'active':idData.showFront}">
                    <img src="https://cgtzimage.b0.upaiyun.com/projectTests//151800/00/00/81/2016/11/07/4EFEC782-8B33-7886-CE53-BBFCA82CE419.jpg" v-if="idData.showFront">
                    <span class="icon front-icon" @click="addFrontImage">正面</span>
                </div>
                <div :class="{'idd':true, 'active':idData.showReverse}">
                    <img src="https://cgtzimage.b0.upaiyun.com/projectTests//151800/00/00/81/2016/11/07/4EFEC782-8B33-7886-CE53-BBFCA82CE419.jpg" v-if="idData.showReverse">
                    <span class="icon reverse-icon" @click="addReverseImage">背面</span>
                </div>
            </div>
            <ul class="list">
                <li class="pad">请确认身份证信息，如<span class="repeat"@click="takeRepeat">有误请重拍</span></li>
                <li>
                    <label for="my-name"><span class="info">姓名</span></label>
                    <input type="text" id="my-name" v-model="idData.name" placeholder="点击上方按钮拍照识别">
                </li>
                <li>
                    <label for="idCard"><span class="info">身份证</span></label>
                    <input type="text" id="idCard" v-model="idData.idCard">
                </li>
                <li>
                    <label for="authorize"><span class="info">签发机关</span></label>
                    <input type="text" id="authorize" v-model="idData.authorize">
                </li>
                <li>
                    <label for="expiry"><span class="info">有效期限</span></label>
                    <input type="date" id="expiry" v-model="idData.expiry">
                </li>
            </ul>
            <button @click="confirmClick">确认</button>
        </div>
         <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import { mapState, mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
    },
    data(){
        return{
            mainTitle:'工作信息',
            tips:'',
            idData:{
                name:'',
                idCard:'',
                authorize:'',
                expiry:'',
                showReverse:false,
                showFront:false
            },    
        }
    },
    created(){
        for(let key in this.idInfoData){
            this.idData[key] = this.idInfoData[key];
        }
    },
    methods:{
        addFrontImage(){
            this.idData.showFront = true;
            this.idData.name = '张三';
            this.idData.idCard = 320721199010022431;
        },
        addReverseImage(){
            this.idData.showReverse = true;
            this.idData.authorize = '杭州市公安局';
            this.idData.expiry = '2028-10-20';
        },
        takeRepeat(){
            this.idData.showFront = false;
            this.idData.showReverse = false;
            this.idData.name = '';
            this.idData.idCard = '';
            this.idData.authorize = '';
            this.idData.expiry = '';
        },
        confirmClick(){
            if(this.idData.name === '' || this.idData.idCard === ''){
                this.tips = '请重拍正面照片';
            }else if( this.idData.authorize === '' ||this.idData.expiry === ''){
                this.tips = '请重拍背面照片';
            }else{
                this.tips = '保存成功';
                this.getIdInfo(this.idData);
                setTimeout(()=>{
                    this.$router.back();
                },1500)
                this.changeComplete({index:5,value:true});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)  
        },
        ...mapMutations(['getIdInfo','changeComplete'])
    },
    computed:{
        ...mapState(['idInfoData'])
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss'
</style>