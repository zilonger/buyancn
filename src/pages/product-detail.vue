<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="android-cart"></Icon> <a href="/products">{{$t('product.title')}}</a> / {{products[id].title}}
      </h4>
      <div class="probox">
        <img v-for="item in products[id].image" :key="item" :src="'../../static/images/products/' + item" alt="">
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
      products: [{
        image: [
          'HN19FDR0005/HN19FDR0005-1.jpg',
          'HN19FDR0005/HN19FDR0005-2.jpg',
          'HN19FDR0005/HN19FDR0005-3.jpg',
          'HN19FDR0005/HN19FDR0005-4.jpg',
          'HN19FDR0005/HN19FDR0005-5.jpg',
          'HN19FDR0005/HN19FDR0005-6.jpg'
        ],
        title: this.$t('product.goods1.title'),
        text: this.$t('product.goods1.text'),
        price: '$9.99'
      },
      {
        image: [
          'H104FHO0003BU/H104FHO0003BU-1.jpg',
          'H104FHO0003BU/H104FHO0003BU-2.jpg',
          'H104FHO0003BU/H104FHO0003BU-3.jpg',
          'H104FHO0003BU/H104FHO0003BU-4.jpg',
          'H104FHO0003BU/H104FHO0003BU-5.jpg',
          'H104FHO0003BU/H104FHO0003BU-6.jpg',
          'H104FHO0003BU/H104FHO0003BU-7.jpg'
        ],
        title: this.$t('product.goods2.title'),
        text: this.$t('product.goods2.text'),
        price: '$16.99'
      },
      {
        image: [
          'HM09FEK0002BK/HM09FEK0002BK-1.jpg',
          'HM09FEK0002BK/HM09FEK0002BK-2.jpg',
          'HM09FEK0002BK/HM09FEK0002BK-3.jpg',
          'HM09FEK0002BK/HM09FEK0002BK-4.jpg'
        ],
        title: this.$t('product.goods3.title'),
        text: this.$t('product.goods3.text'),
        price: '$9.99'
      },
      {
        image: [
          'HM09FEK0003BK/HM09FEK0003BK-1.jpg',
          'HM09FEK0003BK/HM09FEK0003BK-2.jpg',
          'HM09FEK0003BK/HM09FEK0003BK-3.jpg',
          'HM09FEK0003BK/HM09FEK0003BK-4.jpg'
        ],
        title: this.$t('product.goods4.title'),
        text: this.$t('product.goods4.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0001BK/H805FBV0001BK-1.jpg',
          'H805FBV0001BK/H805FBV0001BK-2.jpg'
        ],
        title: this.$t('product.goods5.title'),
        text: this.$t('product.goods5.text'),
        price: '$14.99'
      },
      {
        image: [
          'H805FBV0001GY/H805FBV0001GY-1.jpg',
          'H805FBV0001GY/H805FBV0001GY-2.jpg'
        ],
        title: this.$t('product.goods6.title'),
        text: this.$t('product.goods6.text'),
        price: '$36.99'
      },
      {
        image: [
          'H805FBV0001OR/H805FBV0001OR-1.jpg',
          'H805FBV0001OR/H805FBV0001OR-2.jpg',
          'H805FBV0001OR/H805FBV0001OR-3.jpg'
        ],
        title: this.$t('product.goods7.title'),
        text: this.$t('product.goods7.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0001PK/H805FBV0001PK-1.jpg',
          'H805FBV0001PK/H805FBV0001PK-2.jpg'
        ],
        title: this.$t('product.goods8.title'),
        text: this.$t('product.goods8.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0001RD/H805FBV0001RD-1.jpg',
          'H805FBV0001RD/H805FBV0001RD-2.jpg',
          'H805FBV0001RD/H805FBV0001RD-3.jpg'
        ],
        title: this.$t('product.goods9.title'),
        text: this.$t('product.goods9.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0001YE/H805FBV0001YE-1.jpg',
          'H805FBV0001YE/H805FBV0001YE-2.jpg',
          'H805FBV0001YE/H805FBV0001YE-3.jpg'
        ],
        title: this.$t('product.goods10.title'),
        text: this.$t('product.goods10.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0004/H805FBV0004-1.jpg',
          'H805FBV0004/H805FBV0004-2.jpg',
          'H805FBV0004/H805FBV0004-3.jpg',
          'H805FBV0004/H805FBV0004-4.jpg'
        ],
        title: this.$t('product.goods11.title'),
        text: this.$t('product.goods11.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0008BR/H805FBV0008BR-1.jpg',
          'H805FBV0008BR/H805FBV0008BR-2.jpg',
          'H805FBV0008BR/H805FBV0008BR-3.jpg',
          'H805FBV0008BR/H805FBV0008BR-4.jpg',
          'H805FBV0008BR/H805FBV0008BR-5.jpg'
        ],
        title: this.$t('product.goods12.title'),
        text: this.$t('product.goods12.text'),
        price: '$9.99'
      },
      {
        image: [
          'H805FBV0009/H805FBV0009-1.jpg',
          'H805FBV0009/H805FBV0009-2.jpg',
          'H805FBV0009/H805FBV0009-3.jpg',
          'H805FBV0009/H805FBV0009-4.jpg',
          'H805FBV0009/H805FBV0009-5.jpg'
        ],
        title: this.$t('product.goods13.title'),
        text: this.$t('product.goods13.text'),
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
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 0 auto 25px;
    border: 1px solid #e9eaec;
  }
</style>
