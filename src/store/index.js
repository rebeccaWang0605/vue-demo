import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        baseDataList:[
            {
                info:'个人信息',
                isComplete:false,
                to:'user-info'
            },
            {
                info:'紧急联系人',
                isComplete:false,
                to:'contacts'
            },
            {
                info:'人脸识别',
                isComplete:false,
                to:'scan'
            },
            {
                info:'手机认证',
                isComplete:false,
                to:'mobile'
            },
            {
                info:'工作信息',
                isComplete:false,
                to:'work-info'
            },
            {
                info:'身份证认证',
                isComplete:false,
                to:'idCard-info'
            },
            {
                info:'公积金授权',
                isComplete:false,
                to:'ggjCity'
            },
            {
                info:'社保授权',
                isComplete:false,
                to:'sbsqCity'
            },
            {
                info:'储蓄卡流水导入',
                isComplete:false,
                to:'water-bank'
            },
            {
                info:'芝麻信用授权',
                isComplete:false,
                to:'zhima-info'
            },
            {
                info:'银行卡信息',
                isComplete:false,
                to:'bank-info'
            },
            {
                info:'查询央行征信',
                isComplete:false,
                to:'credit-report'
            },
            {
                info:'支付宝认证',
                isComplete:false,
                to:'alipay'
            },
            {
                info:'其他资料',
                isComplete:false,
                to:'other-info'
            }
        ],
        userInfoData:{
            userName:'',
            idCard:'',
            sexCon:'',
            degreeCon:'',
            marriedCon:'',
            provinceCon:'',
            cityCon:'',
            areaCon:'',
            detailCon:'',
            timeCon:''
        },
        contactInfo:{
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
        phoneInfo:{
            inputPassd:'',
            inputPhone:'',
        },
        workInfoData:{
            name:'',
            phone:'',
            classifyCon:'',
            enterTime:'',
            salary:'',
            provinceCon:'',
            cityCon:'',
            areaCon:'',
            detailAddr:''
        },
        idInfoData:{
            name:'',
            idCard:'',
            authorize:'',
            expiry:'',
            showReverse:false,
            showFront:false
        },
        addBankInfo:{
            bankName:'',
            bankId:'',
            bankSno:'',
            bankPhone:'',
            bankInfo:'',
            provinceCon:'',
            cityCon:'',
            areaCon:'',
        },
        success:true,
        picList:{},
        mustDataList:[
            {
                step:'第一步',
                info:'身份认证',
                to:'user-info',
                active:true,
                isComplete:false
            },
            {
                step:'第二步',
                info:'人脸识别',
                to:'scan',
                active:false,
                isComplete:false
            },
            {
                step:'第三步',
                info:'紧急联系人',
                to:'contacts',
                active:false,
                isComplete:false
            },
            {
                step:'第四步',
                info:'手机认证',
                to:'mobile',
                active:false,
                isComplete:false
            },
            {
                step:'第五步',
                info:'工作信息',
                to:'work-info',
                active:false,
                isComplete:false
            }
        ],
        selectDataList:[
            {
                info:'身份认证',
                to:'user-info',
                isComplete:false
            },
            {
                info:'查询央行征信',
                to:'credit-report',
                isComplete:false
            },
            {
                info:'银行卡信息',
                to:'bank-info',
                isComplete:false
            },
            {
                info:'支付宝认证',
                to:'alipay',
                isComplete:false
            },
            {
                info:'储蓄卡流水导入',
                to:'water-bank',
                isComplete:false
            },
            {
                info:'其他资料',
                to:'other-info',
                isComplete:false
            }
        ],
        loanDesInfo:false,
        submitInfo:{
            pay:false,
            loan:false,
            loanTime:false,
            conTime:false,
            loanDes:false,
            payCon:'',
            loanCon:'',
            loanTimeCon:'',
            conTimeCon:'',
        },
    },
    mutations:{
        setMeta(state,value){
            let i = state.metaId.length;
            while (i--) {
                if (state.metaId[i] === value) return;
            }
            state.metaId.push(value);
        },
        getMeta(state){
            state.getMetaId = state.metaId.pop();
        },
        getUserInfo(state,obj){
            for(let prop in obj){
                if(state.userInfoData.hasOwnProperty(prop)){
                    state.userInfoData[prop] = obj[prop];
                }    
            }
        },
        getContactInfo(state,obj){
            for(let prop in obj){
                if(state.contactInfo.hasOwnProperty(prop)){
                    state.contactInfo[prop] = obj[prop];
                }    
            }
        },
        changeComplete(state,obj){
            state.baseDataList[obj['index']].isComplete = obj.value;
        },
        mustDataComplete(state,obj){
            state.mustDataList[obj['index']].isComplete = obj.value;
        },
        selectDataComplete(state,obj){
            state.selectDataList[obj['index']].isComplete = obj.value;
        },
        getPhoneInfo(state,obj){
            for(let prop in obj){
                if(state.phoneInfo.hasOwnProperty(prop)){
                    state.phoneInfo[prop] = obj[prop];
                }    
            }
        },
        getworkInfo(state,obj){
            for(let prop in obj){
                if(state.workInfoData.hasOwnProperty(prop)){
                    state.workInfoData[prop] = obj[prop];
                }    
            }
        },
        getIdInfo(state,obj){
            for(let prop in obj){
                if(state.idInfoData.hasOwnProperty(prop)){
                    state.idInfoData[prop] = obj[prop];
                }    
            }
        },
        getAddBank(state,obj){
            for(let prop in obj){
                if(state.addBankInfo.hasOwnProperty(prop)){
                    state.addBankInfo[prop] = obj[prop];
                }    
            }  
        },
        isSuccess(state,value){
            state.success = value;
        },
        getPicList(state,obj){
            for(let prop in obj){
                state.picList[prop] = obj[prop];
            }
        },
        getLoanDes(state,value){
            state.loanDesInfo = value;
        },
        getSubmitInfo(state,obj){
            for(let prop in obj){
                state.submitInfo[prop] = obj[prop];
            }
        }
    },
    actions:{

    }
})