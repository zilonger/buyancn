<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="home"></Icon> 联系我们
      </h4>
      <div class="contact-info">
        <Row type="flex" justify="space-around">
          <Col :xs="24" :sm="10">
            <img src="../../static/images/address.jpg" alt="" class="addr">
          </Col>
          <Col :xs="24" :sm="10">
            <div class="addr-item" style="font-weight: bold;">武汉市不言科技有限公司</div>
            <div class="addr-item">
              <p class="itl">地址：</p>
              <p>湖北省武汉市东湖新技术开发区光谷大道特1号<br>国际企业中心三期20栋12层30号</p>
            </div>
            <div class="addr-item">
              <p class="itl">邮编：</p>
              <p>430205</p>
            </div>
            <div class="addr-item">
              <p class="itl">联系人：</p>
              <p>陈小姐</p>
            </div>
            <div class="addr-item">
              <p class="itl">联系方式：</p>
              <p>+86 13297959213</p>
            </div>
            <div class="addr-item">
              <p class="itl">邮箱：</p>
              <p>3589781688@qq.com</p>
            </div>
          </Col>
        </Row>
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
      bgimg: '../../static/images/page_top3.jpg',
      title: 'Contact Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact-info {
    padding: 0 15px;
    font-size: 14px;
  }
  .addr {
    width: 100%;
  }
  .addr-item{
    display: flex;
    padding: 10px 0;
  }
  .itl {
    white-space: nowrap;
  }
</style>
