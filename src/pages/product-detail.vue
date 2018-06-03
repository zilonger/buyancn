<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="android-cart"></Icon> <a href="/products">{{$t('product.title')}}</a> / {{products[id].title}}
      </h4>
      <div class="probox">
        <img v-for="item in products[id].image" :key="item" :src="'../../static/product/' + item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Pagetop from '@/components/pagetop'

export default {
  name: 'ProductDetail',
  components: {
    Pagetop
  },
  data () {
    return {
      bgimg: '../../static/images/page_top1.jpg',
      title: 'Product Center',
      id: this.$route.params.id,
      products: [
        {
          image: [
            'apron/1.jpg',
            'apron/2.jpg',
            'apron/3.jpg',
            'apron/4.jpg',
            'apron/5.jpg',
            'apron/6.jpg'
          ],
          title: this.$t('product.goods1.title'),
          text: this.$t('product.goods1.text'),
          price: '$16.99'
        },
        {
          image: [
            'ovengolve/1.jpg',
            'ovengolve/2.jpg'
          ],
          title: this.$t('product.goods2.title'),
          text: this.$t('product.goods2.text'),
          price: '$14.99'
        },
        {
          image: [
            'tablecloth/1.jpg',
            'tablecloth/2.jpg',
            'tablecloth/3.jpg',
            'tablecloth/4.jpg',
            'tablecloth/5.jpg',
            'tablecloth/6.jpg'  
          ],
          title: this.$t('product.goods3.title'), 
          text: this.$t('product.goods3.text'),
          price: '$36.99'
        },
        {
          image: [
            'lunchbag/1.jpg',
            'lunchbag/2.jpg',
            'lunchbag/3.jpg',
            'lunchbag/4.jpg',
            'lunchbag/5.jpg',
            'lunchbag/6.jpg'
          ],
          title: this.$t('product.goods4.title'),
          text: this.$t('product.goods4.text'),
          price: '$9.99'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .probox img {
    width: 600px;
    display: block;
    margin: 0 auto 25px;
    border: 1px solid #e9eaec;
  }
</style>
