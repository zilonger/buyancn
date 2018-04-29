<template>
  <header class="header">
    <Row>
        <Col :sm="24" :md="12">
          <div class="logobox">
            <img src="http://via.placeholder.com/320x60" alt="">
          </div>
        </Col>
        <Col :sm="24" :md="12">
          
        </Col>
    </Row>
  </header>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    margin: 0 auto;
    max-width: 1170px;
  }
</style>
