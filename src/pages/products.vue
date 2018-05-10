<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="android-cart"></Icon> 产品中心
      </h4>
      <div class="probox">
        <Row type="flex" justify="space-around">
          <Col :xs="24" :sm="7">
            <a href="javascript:void(0)" class="proitem">
              <img src="http://via.placeholder.com/640x600" alt="">
              <h4>惠而浦 MWA268SL 微波 烧烤 解冻 极速启动 童锁</h4>
              <p>惠而浦美国百年家电 105年感谢您的陪伴！惠而浦百年经典纪念款微波炉MAX系列，3D微波立体加热、石英烧烤健康美味、快速解冻均匀受热、一键启动简易便捷。</p>
            </a>
          </Col>
          <Col :xs="24" :sm="7">
            <a href="javascript:void(0)" class="proitem">
              <img src="http://via.placeholder.com/640x600" alt="">
              <h4>惠而浦 MWA268SL 微波 烧烤 解冻 极速启动 童锁</h4>
              <p>惠而浦美国百年家电 105年感谢您的陪伴！惠而浦百年经典纪念款微波炉MAX系列，3D微波立体加热、石英烧烤健康美味、快速解冻均匀受热、一键启动简易便捷。</p>
            </a>
          </Col>
          <Col :xs="24" :sm="7">
            <a href="javascript:void(0)" class="proitem">
              <img src="http://via.placeholder.com/640x600" alt="">
              <h4>惠而浦 MWA268SL 微波 烧烤 解冻 极速启动 童锁</h4>
              <p>惠而浦美国百年家电 105年感谢您的陪伴！惠而浦百年经典纪念款微波炉MAX系列，3D微波立体加热、石英烧烤健康美味、快速解冻均匀受热、一键启动简易便捷。</p>
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
      title: 'Product Center'
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
</style>
