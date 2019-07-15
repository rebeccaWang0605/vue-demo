<template>
    <div class="content-container user-container">
        <web-header :title="mainTitle" :show-return="true"  :show-save="true"> 
            <span class="save" @click="submitContact">保存</span>
        </web-header>
        <div class="contact-content user-content">
            <p>在您提交借款申请之后，平台需要向您填写的紧急联系人进行电话核实，核实您填写资料的真实性，请知晓。</p>
            <h3>联系人一</h3>
            <ul class="list">
                <li>
                    <label for="contact-name1"><span class="info">姓名</span></label>
                    <input type="text" id="contact-name1" v-model="contactData.contactName1">
                </li>
                <li class="has-arrow" @click="clickEvent('Relation1')">
                    <span class="info">关系</span>
                    <div class='select-con'>{{contactData.contactRelation1}}</div>
                    <div class="select-hide" v-if="contactData.Relation1">
                        <span v-for="(item,index) in relation" :key="index"
                              @click.stop="selectItem(item,'Relation1')">
                        {{item}}
                        </span>
                    </div>
                </li>
                <li>
                    <label for="contact-phone1"><span class="info">手机号码</span></label>
                    <input type="text" id="contact-phone1" v-model="contactData.contactPhone1">
                </li>
            </ul>
            <h3>联系人二</h3>
            <ul class="list">
                <li>
                    <label for="contact-name2"><span class="info">姓名</span></label>
                    <input type="text" id="contact-name2" v-model="contactData.contactName2">
                </li>
                <li class="has-arrow" @click="clickEvent('Relation2')">
                    <span class="info">关系</span>
                    <div class='select-con'>{{contactData.contactRelation2}}</div>
                    <div class="select-hide" v-if="contactData.Relation2">
                        <span v-for="(item,index) in relation" :key="index"
                              @click.stop="selectItem(item,'Relation2')">
                        {{item}}
                        </span>
                    </div>
                </li>
                <li>
                    <label for="contact-phone2"><span class="info">手机号码</span></label>
                    <input type="text" id="contact-phone2" v-model="contactData.contactPhone2">
                </li>
            </ul>
            <h3>联系人三</h3>
            <ul class="list">
                <li>
                    <label for="contact-name3"><span class="info">姓名</span></label>
                    <input type="text" id="contact-name3" v-model="contactData.contactName3">
                </li>
                <li class="has-arrow" @click="clickEvent('Relation3')">
                    <span class="info">关系</span>
                    <div class='select-con'>{{contactData.contactRelation3}}</div>
                    <div class="select-hide" v-if="contactData.Relation3">
                        <span v-for="(item,index) in relation" :key="index"
                              @click.stop="selectItem(item,'Relation3')">
                        {{item}}
                        </span>
                    </div>
                </li>
                <li>
                    <label for="contact-phone3"><span class="info">手机号码</span></label>
                    <input type="text" id="contact-phone3" v-model="contactData.contactPhone3">
                </li>
            </ul>
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
        for(let prop in this.contactInfo){
            this.contactData[prop] = this.contactInfo[prop];
        }
    },
    data(){
        return {
            mainTitle:'联系人信息',
            relation:['亲人','朋友','同事'],
            contactData:{
                Relation1:false,
                Relation2:false,
                Relation3:false,
                contactName1:'',
                contactRelation1:'',
                contactPhone1:'',
                contactName2:'',
                contactRelation2:'',
                contactPhone2:'',
                contactName3:'',
                contactRelation3:'',
                contactPhone3:'',
            },
            tips:''
        }
    },
    methods:{
        clickEvent(info){
            this.contactData[info] = !this.contactData[info];
        },
        selectItem(item,info){
            this.contactData['contact'+info] = item;
            this.contactData[info] = false;
        },
        submitContact(){
            let reg = /^1([34578])\d{9}$/;
            let match1 = reg.test(parseInt(this.contactData.contactPhone1));
            let match2 = reg.test(parseInt(this.contactData.contactPhone2));
            let match3 = reg.test(parseInt(this.contactData.contactPhone3));
            if(this.contactData.contactName1 === ''){
                this.tips = '联系人一姓名格式错误'
            }else if(this.contactData.contactRelation1 === ''){
                this.tips = '请选择与联系人一的关系'
            }else if(this.contactData.contactPhone1 === '' || !match1){
                this.tips = '联系人一手机号格式错误'
            }else if(this.contactData.contactName2 === ''){
                this.tips = '联系人二姓名格式错误'
            }else if(this.contactData.contactRelation2 === ''){
                this.tips = '请选择与联系人二的关系'
            }else if(this.contactData.contactPhone2 === '' || !match2){
                this.tips = '联系人二手机号格式错误'
            }else if(this.contactData.contactName3 === ''){
                this.tips = '联系人三姓名格式错误'
            }else if(this.contactData.contactRelation3 === ''){
                this.tips = '请选择与联系人三的关系'
            }else if(this.contactData.contactPhone3 === '' || !match3){
                this.tips = '联系人三手机号格式错误'
            }else{
                this.tips = '保存成功';
                this.getContactInfo(this.contactData);
                setTimeout(()=>{
                    this.$router.back();
                },1500);
                this.changeComplete({index:1,value:true});
                this.mustDataComplete({index:2,value:true});
            }
            setTimeout(()=>{
                this.tips = '';
            },1000) 
        },
        ...mapMutations(['changeComplete','getContactInfo','mustDataComplete'])
    },
    computed:{
        ...mapState(['contactInfo'])
    }

}
</script>


<style lang="scss">
    @import '@/assets/css/credit/user-info.scss'
</style>