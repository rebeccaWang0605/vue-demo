import Vue from 'vue'
import Router from 'vue-router'

const Default = () => import("@/components/default/default.vue");
const Blank = () => import("@/components/default/blank.vue");
const loan = () => import("@/views/loan.vue");
const credit = () => import("@/views/credit.vue");
const user = () => import("@/views/user.vue");
const loginPage = () => import("@/views/login.vue");
const sjLoan = () => import('@/components/loan/sjLoan.vue');
const autoPay = () => import('@/components/loan/autoPay.vue');
const microLoan = () => import('@/components/loan/micro-loan/microLoan.vue');
const smallLoan = () => import('@/components/loan/small-loan/smallLoan.vue');
const largeLoan = () => import('@/components/loan/large-loan/largeLoan.vue');
const dataMust = () => import('@/components/loan/public/dataMust.vue');
const submitApply = () => import('@/components/loan/public/submitApply.vue');
const dataSelect = () => import('@/components/loan/public/dataSelect.vue');
const loanDes = () => import('@/components/loan/public/loanDes.vue');
const loanRecom = () => import('@/components/loan/public/loanRecom.vue');
const sureMsg = () => import('@/components/loan/public/sureMsg.vue');
const sureMore = () => import('@/components/loan/public/sureMore.vue');
const cancelSup = () => import('@/components/loan/public/cancelSup.vue');
const payRecord = () => import('@/components/loan/public/payRecord.vue');

const userInfo = () => import('@/components/credit/userInfo.vue');
const contacts = () => import('@/components/credit/contacts.vue');
const scan = () => import('@/components/credit/scan.vue');
const mobile = () => import('@/components/credit/mobile.vue');
const workInfo = () => import('@/components/credit/workInfo.vue');
const idCardInfo = () => import('@/components/credit/idCardInfo.vue');
const ggjCity = () => import('@/components/credit/ggjCity.vue');
const sbsqCity = () => import('@/components/credit/sbsqCity.vue');
const waterBank = () => import('@/components/credit/waterBank.vue');
const zhimaInfo = () => import('@/components/credit/zhimaInfo.vue');
const bankInfo = () => import('@/components/credit/bankInfo.vue');
const creditReport = () => import('@/components/credit/creditReport.vue');
const alipay = () => import('@/components/credit/alipay.vue');
const otherInfo = () => import('@/components/credit/otherInfo.vue');
const agreement = () => import ('@/components/credit/agreement.vue');
const water = () => import('@/components/credit/water.vue');
const support = () => import('@/components/credit/support.vue');
const help = () => import('@/components/credit/help.vue');
const bankSMS = () => import('@/components/credit/bankSMS.vue');
const login = () => import('@/components/credit/login.vue');
const register = () => import('@/components/credit/register.vue');
const creditDetail = () => import('@/components/credit/creditDetail.vue');
const detail = () => import('@/components/credit/detail.vue');
const list = () => import('@/components/credit/list.vue');
const uploadPic = () => import('@/components/credit/uploadPic.vue');

const borrowList = () => import('@/components/user/borrowList.vue');
const repayList = () => import('@/components/user/repayList.vue');
const rewardList = () => import('@/components/user/rewardList.vue');
const helpList = () => import('@/components/user/helpList.vue');
const feedback = () => import('@/components/user/feedback.vue');
const aboutUs = () => import('@/components/user/aboutUs.vue');

const all = () => import('@/components/user/borrow/all.vue');
const repay = () => import('@/components/user/borrow/repay.vue');
const repayRecord = () => import('@/components/user/repay/repayRecord.vue');
const repayGo = () => import('@/components/user/repay/repayGo.vue');
const repayTips = () => import('@/components/user/repay/repayTips.vue');

const noUse = () => import('@/components/user/reward/noUse.vue');
const expired = () => import('@/components/user/reward/expired.vue');

const helpDetail = () => import('@/components/user/help/helpDetail.vue');

const reg = () => import('@/components/login/reg.vue');
const forgetPasd = () => import('@/components/login/forgetPasd.vue');

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component:Blank,
      children:[
        {
          path: '/',
          redirect: '/loan'
        },
        {
          path: 'loan',
          component:Blank,
          children:[
            {
              path: '/',
              name:'loan',
              meta:{
                id:'loan'
              },
              component: loan
            },
            {
              path: 'sjLoan',
              name:'sjLoan',
              component:sjLoan,
            },
            {
              path: 'autoPay',
              name:'autoPay',
              component:autoPay,
            },
            {
              path: 'micro-loan',
              name:'micro-loan',
              meta:{
                id:'micro-loan'
              },
              component:microLoan,
            },
            {
              path: 'small-loan',
              name:'small-loan',
              meta:{
                id:'small-loan'
              },
              component:smallLoan,
            },
            {
              path: 'large-loan',
              name:'large-loan',
              meta:{
                id:'large-loan'
              },
              component:largeLoan,
            },
            {
              path: 'data-must',
              name:'data-must',
              meta:{
                id:'data-must'
              },
              component:dataMust,
            },
            {
              path: 'data-select',
              name:'data-select',
              meta:{
                id:'data-select'
              },
              component:dataSelect,
            },
            {
              path: 'submit-apply',
              name:'submit-apply',
              meta:{
                id:'submit-apply'
              },
              component:submitApply,
            },
            {
              path: 'loan-des',
              name:'loan-des',
              meta:{
                id:'loan-des'
              },
              component:loanDes,
            },
            {
              path: 'loan-recom',
              name:'loan-recom',
              meta:{
                id:'loan-recom'
              },
              component:loanRecom,
            },
            {
              path: 'sure-msg',
              name:'sure-msg',
              meta:{
                id:'sure-msg'
              },
              component:sureMsg,
            },
            {
              path: 'sure-more',
              name:'sure-more',
              meta:{
                id:'sure-more'
              },
              component:sureMore,
            },
            {
              path: 'cancel-sup',
              name:'cancel-sup',
              meta:{
                id:'cancel-sup'
              },
              component:cancelSup,
            },
            {
              path: 'pay-record',
              name:'pay-record',
              meta:{
                id:'pay-record'
              },
              component:payRecord,
            }
          ]
        },
        {
          path: 'credit',
          component:Blank,
          children:[
            {
              path: '/',
              name:'credit',
              component: credit,
              meta:{
                id:'credit'
              }
            },
            {
              path: 'user-info',
              name:'user-info',
              meta:{
                id:'user-info'
              },
              component:userInfo,
            },
            {
              path: 'contacts',
              name:'contacts',
              component:contacts,
            },
            {
              path: 'scan',
              name:'scan',
              component:scan,
            },
            {
              path: 'mobile',
              name:'mobile',
              component:mobile,
            },
            {
              path: 'work-info',
              name:'work-info',
              component:workInfo,
            },
            {
              path: 'idCard-info',
              name:'idCard-info',
              component:idCardInfo,
            },
            {
              path: 'ggjCity',
              name:'ggjCity',
              component:ggjCity,
            },
            {
              path: 'sbsqCity',
              name:'sbsqCity',
              component:sbsqCity,
            },
            {
              path: 'water-bank',
              name:'water-bank',
              meta:{
                id:'water-bank'
              },
              component:waterBank,
            },
            {
              path: 'zhima-info',
              name:'zhima-info',
              component:zhimaInfo,
            },
            {
              path: 'bank-info',
              name:'bank-info',
              meta:{
                id:'bank-info'
              },
              component:bankInfo,
            },
            {
              path: 'credit-report',
              component:Blank,
              children:[
                {
                  path: '/',
                  name:'credit-report',
                  meta:{
                    id:'credit-report'
                  },
                  component:creditReport,
                },
                {
                  path: 'login',
                  name:'login',
                  meta:{
                    id:'login'
                  },
                  component:login,
                },
                {
                  path: 'register',
                  name:'register',
                  meta:{
                    id:'register'
                  },
                  component:register,
                },
                {
                  path: 'creditDetail',
                  name:'creditDetail',
                  meta:{
                    id:'creditDetail'
                  },
                  component:creditDetail,
                },
                {
                  path: 'detail',
                  name:'detail',
                  meta:{
                    id:'detail'
                  },
                  component:detail,
                },
                {
                  path: 'list',
                  name:'list',
                  meta:{
                    id:'list'
                  },
                  component:list,
                }
              ]
            },
            {
              path: 'alipay',
              name:'alipay',
              component:alipay,
            },
            {
              path: 'other-info',
              name:'other-info',
              meta:{
                id:'other-info'
              },
              component:otherInfo,
            },
            {
              path: 'agreement',
              name:'agreement',
              meta:{
                id:'agreement'
              },
              component:agreement,
            },
            {
              path:'water/:id',
              name:'water',
              component:water
            },
            {
              path:'support',
              name:'support',
              component:support
            },
            {
              path:'help',
              name:'help',
              component:help
            },
            {
              path:'bankSMS',
              name:'bankSMS',
              component:bankSMS
            },
            {
              path: 'uploadPic/:id',
              name:'uploadPic',
              component:uploadPic,
            },

          ]
        },
        {
          path: 'user',
          component:Blank,
          children:[
            {
              path: '/',
              name:'user',
              meta:{
                id:'user'
              },
              component: user
            },
            {
              path: 'borrow-list',
              name:'borrow-list',
              meta:{
                id:'borrow-list'
              },
              component: borrowList,
              redirect:'borrow-list/all',
              children:[
                {
                  path: 'all',
                  name:'all',
                  meta:{
                    id:'all'
                  },
                  component: all
                },
                {
                  path: 'apply',
                  name:'apply',
                  meta:{
                    id:'apply'
                  },
                  component: all
                },
                {
                  path: 'repay',
                  name:'repay',
                  meta:{
                    id:'repay'
                  },
                  component: repay
                },
                {
                  path: 'over',
                  name:'over',
                  meta:{
                    id:'over'
                  },
                  component: repay
                },
              ]
            },
            {
              path: 'repay-list',
              name:'repay-list',
              meta:{
                id:'repay-list'
              },
              component: repayList
            },
            {
              path: 'reward-list',
              name:'reward-list',
              meta:{
                id:'reward-list'
              },
              component: rewardList,
              redirect:'reward-list/no-use',
              children:[
                {
                  path: 'no-use',
                  name:'no-use',
                  meta:{
                    id:'no-use'
                  },
                  component: noUse
                },
                {
                  path: 'used',
                  name:'used',
                  meta:{
                    id:'used'
                  },
                  component: noUse
                },
                {
                  path: 'expired',
                  name:'expired',
                  meta:{
                    id:'expired'
                  },
                  component: expired
                },
              ]
            },
            {
              path: 'help-list',
              name:'help-list',
              meta:{
                id:'help-list'
              },
              component: helpList
            },
            {
              path: 'feedback',
              name:'feedback',
              meta:{
                id:'feedback'
              },
              component: feedback
            },
            {
              path: 'about-us',
              name:'about-us',
              meta:{
                id:'about-us'
              },
              component: aboutUs
            },
            {
              path: 'repay-record',
              name:'repay-record',
              meta:{
                id:'repay-record'
              },
              component:repayRecord
            },
            {
              path: 'repay-go',
              name:'repay-go',
              meta:{
                id:'repay-go'
              },
              component: repayGo
            },
            {
              path: 'repay-tips',
              name:'repay-tips',
              meta:{
                id:'repay-tips'
              },
              component: repayTips
            },
            {
              path: 'help-detail/:id',
              name:'help-detail',
              component: helpDetail
            },
          ]
        },
        {
          path: 'login-page',
          component:Blank,
          children:[
            {
              path: '/',
              name:'login-page',
              meta:{
                id:'login-page'
              },
              component: loginPage
            },
          ]
        },
        {
          path: 'reg',
          component:Blank,
          children:[
            {
              path: '/',
              name:'reg',
              meta:{
                id:'reg'
              },
              component: reg
            },
          ]
        },
        {
          path: 'forget-pasd',
          component:Blank,
          children:[
            {
              path: '/',
              name:'forget-pasd',
              meta:{
                id:'forget-pasd'
              },
              component: forgetPasd
            },
          ]
        }
      ]
    },
  ]
})
