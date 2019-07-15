<template>
    <div class="user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="saveClick">保存</span>
        </web-header>
        <div class="user-content">
            <h3>真实有效的信息会提高我们风控审核通过的概率，请如实填写您的工作单位信息及工作内容。</h3>
            <ul class="list">
                <li>
                    <label for="company-name"><span class="info">公司名称</span></label>
                    <input type="text" id="company-name" v-model="companyData.name">
                </li>
                <li>
                    <label for="company-phone"><span class="info">公司固定电话</span></label>
                    <input type="text" id="company-phone" v-model="companyData.phone">
                </li>
                <li class="has-arrow" @click="clickEvent('classify')">
                    <span class="info">公司性质</span>
                    <div class='select-con'>{{companyData.classifyCon}}</div>
                    <div class="select-hide" v-if="companyData.classify">
                        <span v-for="(item,index) in companyInfo" :key="index"
                        @click.stop="changeActive(item,'classify')">
                        {{item}}
                        </span>
                    </div>
                </li>
                <li>
                    <label for="company-time"><span class="info">入职时间</span></label>
                    <input type="date" id="company-time" v-model="companyData.enterTime">
                </li>
                <li>
                    <label for="salary"><span class="info">月均收入</span></label>
                    <input type="text" id="salary" v-model="companyData.salary">
                </li>
            </ul>
            <h3>公司地址</h3>
           <ul class="list">
                <li class="has-arrow" @click="clickEvent('province')" >
                    <span class="info">省</span>
                    <div class='select-con'>{{companyData.provinceCon}}</div>
                    <div class="select-hide" v-if="companyData.province">
                        <span @click.stop="changeProvince(item.address,'province',item.code)"
                              v-for="(item,index) in provinceDataList" :key="index">
                              {{item.address}}
                        </span>
                    </div>
                </li>
                <li class="has-arrow" @click="clickEvent('city')" >
                    <span class="info">市</span>
                    <div class='select-con'>{{companyData.cityCon}}</div>
                    <div class="select-hide" v-if="companyData.city">
                        <span @click.stop="changeCity(item.address,'city',item.code)"
                              v-for="(item,index) in cityDataList" :key="index">
                            {{item.address}}      
                        </span>
                    </div>
                </li>
                 <li class="has-arrow" @click="clickEvent('area')" >
                    <span class="info">选择区</span>
                    <div class='select-con'>{{companyData.areaCon}}</div>
                    <div class="select-hide" v-if="companyData.area">
                        <span v-for="(item,index) in areaDataList" :key="index" 
                              @click.stop="changeActive(item.address,'area')">
                            {{item.address}}
                        </span>
                    </div>
                </li>
                <li>
                    <label for="company-address"><span class="info">详细地址</span></label>
                    <input type="text" id="company-address" placeholder="不必填写省市区" v-model="companyData.detailAddr">
                </li>
            </ul>
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
            mainTitle:'工作信息',
            tips:'',
            companyInfo:['国家机关','公共事业单位','学校','医院','银行','全球500强','上市公司','国企','非营利性公益组织','民营企业','自由职业者','其他'],
            companyData:{
                name:'',
                phone:'',
                classifyCon:'',
                enterTime:'',
                salary:'',
                provinceCon:'',
                cityCon:'',
                areaCon:'',
                detailAddr:'',
                classify:false,
                province:false,
                city:false,
                area:false
            },
            provinceDataList:[],
            cityDataList:[],
            areaDataList:[]
        }
    },
    created(){
        this.provinceDataList = cityData['86'];
        for(let key in this.workInfoData){
            this.companyData[key] = this.workInfoData[key];
        }
    },
    methods:{
        clickEvent(info){
            this.companyData[info] = !this.companyData[info];
        },
        changeActive(e,info){
            this.companyData[info+'Con'] = e;
            this.companyData[info] = false;
        },
        changeProvince(e,info,code){
             this.changeActive(e,info);
             this.cityDataList=[];
             if(code){
                 let obj = cityData[code];
                 let o = Object.keys(obj);
                 for(let key of o){
                     this.cityDataList.push({
                         code:key,
                         address:obj[key]
                     })
                 }
                 
             }
        },
        changeCity(e,info,code){
            this.changeActive(e,info);
            this.areaDataList=[];
             if(code){
                 let obj = cityData[code];
                 let o = Object.keys(obj);
                 for(let key of o){
                     this.areaDataList.push({
                         code:key,
                         address:obj[key]
                     })
                 }
                 
             }
        },
        saveClick(){
            let match = /^1([34578])\d{9}$/.test(parseInt(this.companyData.phone));
            if(this.companyData.name === ''){
                this.tips = "公司名称格式错误";
            }else if(this.companyData.phone === '' || !match){
                 this.tips = "公司号码格式错误";
            }else if(this.companyData.classifyCon === ''){
                 this.tips = "请选择公司性质";
            }else if(this.companyData.enterTime === ''){
                 this.tips = "请选择入职时间";
            }else if(this.companyData.salary === ''){
                 this.tips = "请填写薪资水平";
            }else if(this.companyData.provinceCon === ''){
                this.tips = '请选择省份';
            }else if(this.companyData.cityCon === ''){
                this.tips = '请选择城市';
            }else if(this.companyData.areaCon === ''){
                this.tips = '请选择区域';
            }else if(this.companyData.detailAddr === ''){
                this.tips = '详细地址信息错误';
            }else{
                this.tips = '保存成功';
                this.getworkInfo(this.companyData);
                this.getMeta();
                setTimeout(()=>{
                   this.$router.back();
                },1500)
                this.changeComplete({index:4,value:true});
                this.mustDataComplete({index:4,value:true});
                this.selectDataComplete({index:4,value:true});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 
        },
        ...mapMutations(['getworkInfo','changeComplete','mustDataComplete','selectDataComplete'])
    },
    computed:{
        ...mapState(['workInfoData'])
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss'
</style>