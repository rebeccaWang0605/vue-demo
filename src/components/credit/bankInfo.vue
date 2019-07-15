<template>
    <div class="add-bank user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="help">帮助</span>
        </web-header>
        <div class="bank-content user-content" v-if="fillBankInfo">
            <p class="support">
                目前支持16家银行的储蓄卡，
                <span class="support-bank" @click="support">查看支持银行</span>
            </p>
            <p>请输入银行卡号添加银行卡的过程中，需要从您的银行卡暂扣3元到我们平台的资金账户, 添加银行卡成功之后，暂扣的3元会在24小时之内归还到您的银行卡中去</p>
            <ul class="list">
                <li>
                    <label for="bank-name"><span class="info">姓名</span></label>
                    <input type="text" id="bank-name" placeholder="请输入真实姓名" v-model="addBank.bankName">
                </li>
                <li>
                    <label for="add-id"><span class="info">身份证</span></label>
                    <input type="number" id="add-id" placeholder="请输入本人身份证号" v-model="addBank.bankId">
                </li>
            </ul>
            <h3></h3>
            <ul class="list">
                <li>
                    <label for="recieve-bank"><span class="info">收款银行卡</span></label>
                    <input type="number" id="recieve-bank" placeholder="本人银行卡卡号" v-model="addBank.bankSno">
                </li>
                <li>
                    <label for="bank-phone"><span class="info">手机号码</span></label>
                    <input type="number" id="bank-phone" placeholder ='银行预留手机号' v-model="addBank.bankPhone">
                </li>
            </ul>
            <h3>开户行详情</h3>
            <ul class="list">
                <li class="has-arrow" @click="clickEvent('province')" >
                    <span class="info">开户省</span>
                    <div class='select-con'>{{addBank.provinceCon}}</div>
                    <div class="select-hide" v-if="addBank.province">
                        <span @click.stop="changeProvince(item.address,'province',item.code)"
                              v-for="(item,index) in provinceDataList" :key="index">
                              {{item.address}}
                        </span>
                    </div>
                </li>
                <li class="has-arrow" @click="clickEvent('city')" >
                    <span class="info">开户市</span>
                    <div class='select-con'>{{addBank.cityCon}}</div>
                    <div class="select-hide" v-if="addBank.city">
                        <span @click.stop="changeCity(item.address,'city',item.code)"
                              v-for="(item,index) in cityDataList" :key="index">
                            {{item.address}}      
                        </span>
                    </div>
                </li> 
                 <li>
                    <label for="bank-info"><span class="info">开户行</span></label>
                    <input type="text" id="bank-info" placeholder ='请选择开户行' v-model="addBank.bankInfo">
                </li>
            </ul>
            <button @click="next">下一步</button>
        </div>
        <div class="add-success" v-if="!fillBankInfo">
            <div>
                <p>
                    <b>{{addBank.bankInfo}}</b>
                    <span class="weihao">尾号{{addBank.bankSno.slice(15)}}</span>
                    <b class="recieve">收款卡</b>
                </p>
                <span class="limit">限额：单笔1.00万元，单日2.00万元，单月10.00万元</span>
            </div>   
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
            mainTitle:'添加银行卡',
            addBank:{
                bankName:'',
                bankId:'',
                bankSno:'',
                bankPhone:'',
                bankInfo:'',
                provinceCon:'',
                cityCon:'',
                areaCon:'',
                province:false,
                city:false,
                area:false,
            },
            provinceDataList:[],
            cityDataList:[],
            areaDataList:[],
            tips:'',
            fillBankInfo:true,
        }
    },
    created(){
        this.provinceDataList = cityData['86'];
        for(let prop in this.addBankInfo){
            this.addBank[prop] = this.addBankInfo[prop];
        };
        this.fillBankInfo = this.success;
        if(!this.fillBankInfo){
            this.changeComplete({index:10,value:true});
            this.selectDataComplete({index:2,value:true})
        }
    },
    methods:{
        clickEvent(info){
            this.addBank[info] = !this.addBank[info];
        },
        changeActive(e,info){
            this.addBank[info+'Con'] = e;
            this.addBank[info] = false;
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
        support(){
            this.$router.push({
                name:'support'
            })
        },
        help(){
            this.$router.push({name:'help'})
        },
        next(){
            let reg = /^1([34578])\d{9}$/;
            let matchPhone = reg.test(parseInt(this.addBank.bankPhone));
            let matchId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(parseInt(this.addBank.bankId));
            
            if(this.addBank.bankName === ''){
                this.tips = '用户姓名不能为空';
            }else if(this.addBank.bankId === '' || !matchId){
                this.tips = '身份证号码格式不正确';
            }else if(this.addBank.bankSno === '' ||this.addBank.bankSno.length !== 19){
                this.tips = '银行卡账号格式不正确';
            }else if(this.addBank.bankPhone === '' || !matchPhone){
                this.tips = '手机号码格式不正确';
            }else if(this.addBank.provinceCon === ''){
                this.tips = '请选择开户省';
            }else if(this.addBank.cityCon === ''){
                this.tips = '请选择开户市'
            }else if(this.addBank.bankInfo === ''){
                this.tips = '请填写正确的开户行';
            }else {
                this.getAddBank(this.addBank);
                this.$router.push({name:'bankSMS'});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000)
        },

        ...mapMutations(['getAddBank','changeComplete','selectDataComplete'])
    },
    computed:{
        ...mapState(['addBankInfo','success'])
    }
}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss';
    @import '@/assets/css/credit/bankInfo.scss';
    
</style>