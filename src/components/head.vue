<template>
  <header class="row">
    {{$t('message')}}
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
