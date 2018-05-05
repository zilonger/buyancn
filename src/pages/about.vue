<template>
  <div>
    <Pagetop :bgimage="bgimg" :toptitle="title"></Pagetop>
    <div class="center-content">
      <h4 class="positions">
        <Icon type="home"></Icon> 公司简介
      </h4>
      <div class="com-info">
        <p>武汉不言科技公司（Wuhan buyan Technology Co.Ltd）成立于2018年，我们专注于跨国B2C电子商务，深耕于Amazon网络平台，创建了厨房家居类自主品牌并且不断丰富和拓展新的产品品类，竭力自主开发优质产品将其销售到北美及欧洲国家并受到一致好评。不言遵循“先行其言而后从之”的原则，有着黄牛般默默深耕的精神，抱着从心出发，走向世界的决心，致力打造更多优质产品，提供更好的优质服务！</p>
        <p>创始团队中Ellen毕业于报关与国际货运专业，毕业后在国际物流有着四年经验，深知国际海运空运快递行业及操作的各流程；后从业于跨境电商软件服务行业，了解Amazon、Ebay、 Wish、 aliexpress等跨境电商平台及中小企业中每个操作流程及管理问题。</p>
        <p>创始团队中Cynthia毕业于本科法语专业，有着Amazon北美站及欧洲站五年的运营经验，了解Amazon平台政策和规定，熟悉市场上产品开发方法及技巧，擅长Amazon产品页面的搜索的搜索关键字优化，优秀的分析能力。</p>
        <h4>不言使命：优质产品 客户至上</h4>
        <h4>不言愿景：跨境电商领跑者</h4>
        <h4>不言价值观：乐观自信 担承谦逊 兼容创新 团结合作</h4>
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
      bgimg: '../../static/images/page_top2.jpg',
      title: 'About Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .com-info{
    padding: 0 15px;
    font-size: 14px;
    line-height: 22px;
    text-align: justify;
  }
  .com-info p{
    text-indent: 25px;
    margin-bottom: 15px;
  }
  .com-info h4{
    margin-bottom: 20px;
  }
</style>
