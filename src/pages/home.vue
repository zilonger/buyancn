<template>
  <Row class="homewrap">
    <Col>
      <Carousel
          v-model="value3"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :radius-dot="setting.radiusDot"
          :trigger="setting.trigger"
          :arrow="setting.arrow">
          <CarouselItem v-for="(item,index) in banners" :key="index">
              <div class="demo-carousel swiper-item">
                <a :href="item.link"><img :src="item.url" alt=""></a>
              </div>
          </CarouselItem>
          <!-- http://via.placeholder.com/1920x820 -->
      </Carousel>
      <div class="blockwrap">
        <Row type="flex" justify="space-around">
          <Col :xs="24" :sm="10">
            <div class="infoblock">
              <h3 class="blocktit">{{$t('about.title')}} <a href="/about">{{$t('home.more')}}>></a></h3>
              <img src="../../static/images/intro.jpg" alt="">
              <p>{{$t('home.aboutInfo')}}</p>
            </div>
          </Col>
          <Col :xs="24" :sm="10">
            <div class="infoblock">
              <h3 class="blocktit">{{$t('product.title')}} <a href="/products">{{$t('home.more')}}>></a></h3>
              <img src="../../static/images/pros.jpg" alt="">
              <p>{{$t('home.productInfo')}}</p>
            </div>
          </Col>
        </Row>
      </div>
      <div class="addrpic">
        <img src="../assets/images/addr.png" alt="">
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "hover"
      },
      banners: [
        {
          link: "javascript:void(0)",
          url: "../../static/images/banner_3.jpg"
        },
        {
          link: "javascript:void(0)",
          url: "../../static/images/banner_1.jpg"
        },
        {
          link: "javascript:void(0)",
          url: "../../static/images/banner_2.jpg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-item img {
  width: 100%;
}
.blockwrap {
  margin: 0 auto;
  max-width: 1170px;
  padding-top: 25px;
  padding-bottom: 35px;
}
.infoblock {
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #e9eaec;
}
.infoblock:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
.infoblock:hover > img {
  opacity: 1;
}
.infoblock img {
  width: 100%;
  opacity: 0.6;
  transition: all 0.3s linear;
  display: block;
}
.infoblock p {
  color: #3f424b;
  padding: 10px 5px;
  line-height: 16px;
  height: 58px;
  overflow: hidden;
}
.blocktit {
  color: #3f424b;
  font-weight: normal;
  line-height: 30px;
  margin-bottom: 10px;
}
.blocktit a {
  color: #858b9a;
  float: right;
  padding: 0 10px;
}
.addrpic {
  text-align: center;
  background-color: #455090;
}
.addrpic img {
  max-width: 100%;
}
</style>
