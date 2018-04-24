<template>
  <header class="row">
    <div class="col-md-6">
      <a href="/"><img src="http://via.placeholder.com/150x60" alt=""></a>
    </div>
    <div class="col-md-6">
      <ul class="nav nav-pills">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
    </div>
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
</style>
