<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    this.initFont(window,document,750);
    window.onresize = () => {
      this.initFont(window,document,750);
    }
  },
  methods:{
    initFont(window,document,designWidth){
      const doc = document.documentElement;
      const width = doc.clientWidth;
      console.log(width)
      if(width > designWidth){
        doc.style.fontSize = '100px'
      }else{
        doc.style.fontSize = width/designWidth * 100 + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/reset.scss"
</style>
