<template>
  <div class="topbox" :style="styleObject">
    <div class="opa"></div>
    <div class="titbox">
      <p class="toptit">{{toptitle}}</p>
    </div>    
  </div>
</template>

<script>
export default {
  name: "Pagetop",
  props: {
    bgimage: {
      type: String,
      required: true
    },
    toptitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    styleObject () {
      return {
        backgroundImage: 'url(' + this.bgimage + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topbox{
    position: relative;
    height: 250px;
    background-size: cover;
  }
  .opa {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    opacity: .2;
  }
  .titbox {
    margin: 0 auto;
    max-width: 1170px;
    height: 100%;
    position: relative;
  }
  .toptit {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    right: 15%;
    color: #ffffff;
    font-size: 24px;
    font-style: italic;
  }
</style>