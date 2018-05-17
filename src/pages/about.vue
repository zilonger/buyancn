<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="home"></Icon> {{$t('about.title')}}
      </h4>
      <div class="com-info">
        <p>{{$t('about.part1')}}</p>
        <p>{{$t('about.part2')}}</p>
        <p>{{$t('about.part3')}}</p>
        <h4>{{$t('about.part4')}}</h4>
        <h4>{{$t('about.part5')}}</h4>
        <h4>{{$t('about.part6')}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Pagetop from '@/components/pagetop'

export default {
  name: 'About',
  components: {
    Pagetop
  },
  data () {
    return {
      bgimg: '../../static/images/page_top2.jpg',
      title: 'About Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .com-info{
    padding: 0 15px;
    font-size: 14px;
    line-height: 22px;
    text-align: justify;
  }
  .com-info p{
    text-indent: 25px;
    margin-bottom: 15px;
  }
  .com-info h4{
    margin-bottom: 20px;
  }
</style>
