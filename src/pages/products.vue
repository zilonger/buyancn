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
              <div class="img-wrap"><img :src="'../../static/images/products/' + item.image[0]" alt=""></div>
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
  /* height: 174px;
    overflow: hidden; */
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
