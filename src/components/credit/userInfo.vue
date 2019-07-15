<template>
    <div class="user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="isComplete">保存</span>
        </web-header>
        <div class="user-content">
            <h3>请仔细填写正确的个人信息</h3>
            <ul class="list">
                <li>
                    <label for="user-name"><span class="info">姓名</span></label>
                    <input type="text" id="user-name" placeholder="请输入真实姓名" v-model="showData.userName">
                </li>
                <li>
                    <label for="id-card"><span class="info">身份证号</span></label>
                    <input type="text" id="id-card" placeholder="请输入本人身份证号" v-model="showData.idCard">
                </li>
                <li class="has-arrow" @click="clickEvent('sex')" >
                    <span class="info">性别</span>
                    <div class='select-con'>{{showData.sexCon}}</div>
                    <div class="select-hide" v-if="showData.sex">
                        <span @click.stop="changeActive(item,'sex')" v-for="(item,index) in dataList.sexDataList" :key="index">
                        {{item}}
                        </span>
                    </div>
                </li>
                <li class="has-arrow" @click="clickEvent('degree')" >
                    <span class="info">学历</span>
                    <div class='select-con'>{{showData.degreeCon}}</div>
                    <div class="select-hide" v-if="showData.degree">
                        <span @click.stop="changeActive(item,'degree')" v-for="(item,index) in dataList.degreeDataList"  :key="index">
                            {{item}}
                        </span>
                    </div>
                </li>
                 <li class="has-arrow" @click="clickEvent('married')" >
                    <span class="info">婚姻状况</span>
                    <div class='select-con'>{{showData.marriedCon}}</div>
                    <div class="select-hide" v-if="showData.married">
                        <span @click.stop="changeActive(item,'married')" v-for="(item,index) in dataList.marriedDataList"  :key="index">
                            {{item}}   
                        </span>
                    </div>
                </li>
            </ul>
            <h3>联系地址</h3>
            <ul class="list">
                <li class="has-arrow" @click="clickEvent('province')" >
                    <span class="info">省</span>
                    <div class='select-con'>{{showData.provinceCon}}</div>
                    <div class="select-hide" v-if="showData.province">
                        <span @click.stop="changeProvince(item.address,'province',item.code)"
                              v-for="(item,index) in dataList.provinceDataList" :key="index">
                              {{item.address}}
                        </span>
                    </div>
                </li>
                <li class="has-arrow" @click="clickEvent('city')" >
                    <span class="info">市</span>
                    <div class='select-con'>{{showData.cityCon}}</div>
                    <div class="select-hide" v-if="showData.city">
                        <span @click.stop="changeCity(item.address,'city',item.code)"
                              v-for="(item,index) in dataList.cityDataList" :key="index">
                            {{item.address}}      
                        </span>
                    </div>
                </li>
                 <li class="has-arrow" @click="clickEvent('area')" >
                    <span class="info">区</span>
                    <div class='select-con'>{{showData.areaCon}}</div>
                    <div class="select-hide" v-if="showData.area">
                        <span v-for="(item,index) in dataList.areaDataList" :key="index" 
                              @click.stop="changeActive(item.address,'area')">
                            {{item.address}}
                        </span>
                    </div>
                </li>
                <li>
                    <label for="detail-address"><span class="info">详细地址</span></label>
                    <input type="text" id="detail-address" placeholder="不必填写省市区" v-model="showData.detailCon">
                </li>
                <li>
                    <label for="time"><span class="info">入住时间</span></label>
                    <input type="date" id="time" v-model="showData.timeCon">
                </li>
            </ul>
        </div>
        <div :class="{'agree':true, 'active':agree}" @click="agreeClick">
            我已阅读并同意
            <span @click.stop="goAgreement">《个人信息收集授权协议》</span>
        </div>
        <div class="tips" v-if="tips">{{tips}}</div>
    </div>
</template>


<script>
import WebHeader from "@/components/default/WebHeader"
import cityData from '@/data/city.json'
import { mapState, mapMutations } from 'vuex'
export default {
    components:{
        WebHeader,
    },
    data(){
        return{
            mainTitle:'个人信息',
            tips:'',
            agree:true,
            showData:{
                userName:'',
                idCard:'',
                sexCon:'',
                degreeCon:'',
                marriedCon:'',
                provinceCon:'',
                cityCon:'',
                areaCon:'',
                detailCon:'',
                timeCon:'',
                sex:false,
                degree:false,
                married:false,
                province:false,
                city:false,
                area:false
            },
            dataList:{
                sexDataList:['男','女'],
                degreeDataList:['高中及以下','专科','本科','硕士及以上'],
                marriedDataList:['未婚','已婚'],
                provinceDataList:[],
                cityDataList:[],
                areaDataList:[]
            }
        }
    },
    created(){
        this.dataList.provinceDataList = cityData['86'];
        for(let key in this.userInfoData){
            this.showData[key] = this.userInfoData[key];
        }
    },
    methods:{
        clickEvent(info){
            this.showData[info] = !this.showData[info];
        },
        changeActive(e,info){
            this.showData[info+'Con'] = e;
            this.showData[info] = false;
        },
        changeProvince(e,info,code){
             this.changeActive(e,info);
             this.dataList.cityDataList=[];
             if(code){
                 let obj = cityData[code];
                 let o = Object.keys(obj);
                 for(let key of o){
                     this.dataList.cityDataList.push({
                         code:key,
                         address:obj[key]
                     })
                 }
                 
             }
        },
        changeCity(e,info,code){
            this.changeActive(e,info);
            this.dataList.areaDataList=[];
             if(code){
                 let obj = cityData[code];
                 let o = Object.keys(obj);
                 for(let key of o){
                     this.dataList.areaDataList.push({
                         code:key,
                         address:obj[key]
                     })
                 }
                 
             }
        },
        agreeClick(){
            this.agree = !this.agree;    
        },
        goAgreement(){
            this.$router.push({
                name:'agreement'
            })
        },
        isComplete(){
            let match = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(parseInt(this.showData.idCard));
            if(!this.agree){
                this.tips = "请阅读并同意协议";
            }else if(this.showData.userName === ''){
                this.tips = "姓名格式错误";
            }else if(this.showData.idCard === '' || !match){
                 this.tips = "身份证号码格式错误";
            }else if(this.showData.sexCon === ''){
                 this.tips = "请选择性别";
            }else if(this.showData.degreeCon === ''){
                 this.tips = "请选择学历";
            }else if(this.showData.marriedCon === ''){
                 this.tips = "请选择婚姻状况";
            }else if(this.showData.provinceCon === ''){
                this.tips = '请选择省份';
            }else if(this.showData.cityCon === ''){
                this.tips = '请选择城市';
            }else if(this.showData.areaCon === ''){
                this.tips = '请选择区域';
            }else if(this.showData.detailCon === ''){
                this.tips = '详细地址信息错误';
            }else if(this.showData.timeCon === ''){
                this.tips = '日期信息错误';
            }else{
                this.tips = '保存成功';
                this.getUserInfo(this.showData);
                setTimeout(()=>{
                    this.$router.back();
                },1500)
                this.changeComplete({index:0,value:true});
                this.mustDataComplete({index:0,value:true});
                this.selectDataComplete({index:0,value:true});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)   
        },
        ...mapMutations(['getUserInfo','changeComplete','mustDataComplete','selectDataComplete'])

    },
    computed:{
        ...mapState(['userInfoData'])
    }
    

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss'
</style>