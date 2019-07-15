<template>
    <div class="product-point">
        <div class="product">
            <div class="product-intro">
                <span>{{dataList.title}}</span>
                <slot ></slot>
            </div>
            <ul v-if="show">
                <li class="info" v-for="(item,index) in dataList.data" :key="index" >
                    <p>{{item.productName}}</p>
                    <p v-if="item.des">{{item.des}}</p>
                </li>  
            </ul>     
        </div>  
    </div>
  
</template>


<script>
export default {
    props:['dataList','show'],
        
    

}
</script>


<style lang='scss'>
    @import '@/assets/css/loan/public/need-info.scss'
</style>