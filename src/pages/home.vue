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
              <h3 class="blocktit">公司简介 <a href="#">更多></a></h3>
              <img src="http://via.placeholder.com/640x400" alt="">
              <p>武汉不言科技公司（Wuhan buyan Technology Co.Ltd）成立于2018年，我们专注于跨国B2C电子商务，深耕于Amazon网络平台，竭力自主开发优质产品将其销售到北美及欧洲国家并受到一致好评。</p>
            </div>
          </Col>
          <Col :xs="24" :sm="10">
            <div class="infoblock">
              <h3 class="blocktit">产品中心 <a href="#">更多></a></h3>
              <img src="http://via.placeholder.com/640x400" alt="">
              <p>公司主要经营的产品品类说明，我们的主要品类是厨房及家居，创建了厨房家居类自主品牌并且不断丰富和拓展新的产品品类，其它关于产品的文字。</p>
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
          link: "#",
          url: "../../static/images/banner_3.jpg"
        },
        {
          link: "#",
          url: "../../static/images/banner_1.jpg"
        },
        {
          link: "#",
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
  padding-top: 45px;
  padding-bottom: 45px;
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
}
.infoblock p {
  color: #3f424b;
  padding: 10px 5px;
  line-height: 16px;
  height: 68px;
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
}
.addrpic {
  text-align: center;
  background-color: #455090;
}
.addrpic img {
  max-width: 100%;
}
</style>
