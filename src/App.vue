<template>
  <div id="app">
    <Head></Head>
    <router-view/>
    <Foot></Foot>
    <BackTop :height="150">
      <div class="backtop">
        <Icon type="chevron-up"></Icon>
      </div>
    </BackTop>
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
.backtop{
    background-color: rgba(0,0,0,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: all .2s ease-in-out;
}
</style>
