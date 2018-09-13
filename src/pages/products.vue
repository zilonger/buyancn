<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="android-cart"></Icon> {{$t('product.title')}}
      </h4>
      <div class="probox">
        <Row type="flex" justify="space-around">
          <Col :xs="24" :sm="7" class="pros" v-for="(item,index) in products" :key="index">
            <a :href="'/goods/' + index" class="proitem">
              <div class="img-wrap"><img :src="'../../static/product/' + item.image[0]" alt=""></div>
              <h4>{{item.title}} <span class="price" style="display: none;">{{item.price}}</span></h4>
              <p>{{item.text}}</p>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import Pagetop from '@/components/pagetop'

export default {
  name: 'Products',
  components: {
    Pagetop
  },
  data () {
    return {
      bgimg: '../../static/images/page_top1.jpg',
      title: 'Product Center',
      products: [{
        image: [
          'loosesweater/1.jpg',
          'loosesweater/2.jpg',
          'loosesweater/3.jpg',
          'loosesweater/4.jpg',
          'loosesweater/5.jpg',
          'loosesweater/6.jpg'
        ],
        title: this.$t('product.goods1.title'),
        text: this.$t('product.goods1.text'),
        price: '$9.99'
      },
      {
        image: [
          'sweater/1.jpg',
          'sweater/2.jpg',
          'sweater/3.jpg',
          'sweater/4.jpg',
          'sweater/5.jpg',
          'sweater/6.jpg'
        ],
        title: this.$t('product.goods2.title'),
        text: this.$t('product.goods2.text'),
        price: '$16.99'
      },
      {
        image: [
          'coat/1.jpg',
          'coat/2.jpg',
          'coat/3.jpg',
          'coat/4.jpg',
          'coat/5.jpg'
        ],
        title: this.$t('product.goods3.title'),
        text: this.$t('product.goods3.text'),
        price: '$9.99'
      },
      {
        image: [
          'shirt/1.jpg',
          'shirt/2.jpg',
          'shirt/3.jpg',
          'shirt/4.jpg'
        ],
        title: this.$t('product.goods4.title'),
        text: this.$t('product.goods4.text'),
        price: '$9.99'
      },
      {
        image: [
          'blackbag/1.jpg',
          'blackbag/2.jpg',
          'blackbag/3.jpg',
          'blackbag/4.jpg',
          'blackbag/5.jpg'
        ],
        title: this.$t('product.goods5.title'),
        text: this.$t('product.goods5.text'),
        price: '$14.99'
      },
      {
        image: [
          'brownbag/1.jpg',
          'brownbag/2.jpg',
          'brownbag/3.jpg',
          'brownbag/4.jpg'
        ],
        title: this.$t('product.goods6.title'),
        text: this.$t('product.goods6.text'),
        price: '$36.99'
      },
      {
        image: [
          'woolbag/1.jpg',
          'woolbag/2.jpg',
          'woolbag/3.jpg',
          'woolbag/4.jpg',
          'woolbag/5.jpg'
        ],
        title: this.$t('product.goods7.title'),
        text: this.$t('product.goods7.text'),
        price: '$9.99'
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
        title: this.$t('product.goods8.title'),
        text: this.$t('product.goods8.text'),
        price: '$9.99'
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
        title: this.$t('product.goods9.title'),
        text: this.$t('product.goods9.text'),
        price: '$9.99'
      },
      {
        image: [
          'skirt/1.jpg',
          'skirt/2.jpg',
          'skirt/3.jpg'
        ],
        title: this.$t('product.goods10.title'),
        text: this.$t('product.goods10.text'),
        price: '$9.99'
      },
      {
        image: [
          'sandals/1.jpg',
          'sandals/2.jpg',
          'sandals/3.jpg',
          'sandals/4.jpg',
          'sandals/5.jpg',
          'sandals/6.jpg'
        ],
        title: this.$t('product.goods11.title'),
        text: this.$t('product.goods11.text'),
        price: '$9.99'
      },
      {
        image: [
          'handmadeshoe/1.jpg',
          'handmadeshoe/2.jpg',
          'handmadeshoe/3.jpg',
          'handmadeshoe/4.jpg'
        ],
        title: this.$t('product.goods12.title'),
        text: this.$t('product.goods12.text'),
        price: '$9.99'
      }
    ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.proitem {
  display: block;
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #e9eaec;
}
.proitem:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
  text-decoration: underline;
  color: #858b9a;
}
.img-wrap {
  height: 220px;
  overflow: hidden;
}
.proitem img {
  width: 100%;
  display: block;
}
.proitem h4 {
  color: #3f424b;
  font-weight: normal;
  padding: 10px 5px;
}
.proitem p {
  color: #858b9a;
  padding: 0 5px 10px 5px;
  line-height: 16px;
  min-height: 42px;
}
.pros {
  margin-bottom: 15px;
}
.price {
  color: #86d102;
  float: right;
}
</style>
