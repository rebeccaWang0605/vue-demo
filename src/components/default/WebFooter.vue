<template>
    <footer class="footer">
        <ul>
            <router-link tag="li" to="/loan"><span>借款</span></router-link>
            <router-link tag="li" to="/credit"><span>信用</span></router-link>
            <router-link tag="li" to="/user"><span>个人中心</span></router-link>
        </ul>   
    </footer>
</template>


<script>
export default {


}
</script>


<style lang="scss">
@import "@/assets/css/default/web-footer.scss"

</style>