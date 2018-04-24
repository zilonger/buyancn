<template>
  <div id="app" class="container-fluid">
    <Head></Head>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/components/head'
import Foot from '@/components/foot'

export default {
  name: 'App',
  components: {
    Head,
    Foot
  }
}
</script>

// http://via.placeholder.com/350x150
<style>

</style>
