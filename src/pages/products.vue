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
            <a href="javascript:void(0)" class="proitem">
              <img :src="item.image" alt="">
              <h4>{{item.title}}</h4>
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
      products: [
        {
          image: 'http://via.placeholder.com/640x600',
          title: this.$t('product.goods1.title'),
          text: this.$t('product.goods1.text')
        },
        {
          image: 'http://via.placeholder.com/640x600',
          title: this.$t('product.goods2.title'),
          text: this.$t('product.goods2.text')
        },
        {
          image: 'http://via.placeholder.com/640x600',
          title: this.$t('product.goods3.title'),
          text: this.$t('product.goods3.text')
        },
        {
          image: 'http://via.placeholder.com/640x600',
          title: this.$t('product.goods4.title'),
          text: this.$t('product.goods4.text')
        },
        {
          image: 'http://via.placeholder.com/640x600',
          title: this.$t('product.goods5.title'),
          text: this.$t('product.goods5.text')
        },
        {
          image: 'http://via.placeholder.com/640x600',
          title: this.$t('product.goods6.title'),
          text: this.$t('product.goods6.text')
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
  }
  .pros{
    margin-bottom: 15px;
  }
</style>
