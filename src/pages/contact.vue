<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="home"></Icon> {{$t('contact.title')}}
      </h4>
      <div class="contact-info">
        <Row type="flex" justify="space-around">
          <Col :xs="24" :sm="10">
            <img src="../../static/images/address.jpg" alt="" class="addr">
          </Col>
          <Col :xs="24" :sm="10">
            <div class="addr-item" style="font-weight: bold;">{{$t('contact.companyName')}}</div>
            <div class="addr-item">
              <p class="itl">{{$t('contact.address')}}</p>
              <p>{{$t('contact.addressPart1')}}<br>{{$t('contact.addressPart2')}}</p>
            </div>
            <div class="addr-item">
              <p class="itl">{{$t('contact.zipcode')}}</p>
              <p>430205</p>
            </div>
            <div class="addr-item">
              <p class="itl">{{$t('contact.contactUser')}}</p>
              <p>{{$t('contact.user')}}</p>
            </div>
            <div class="addr-item">
              <p class="itl">{{$t('contact.contactType')}}</p>
              <p>+86 13297959213</p>
            </div>
            <div class="addr-item">
              <p class="itl">{{$t('contact.email')}}</p>
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
