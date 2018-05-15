<template>
  <footer class="footer">
    <Row class="footcontent">
      <Col :xs="24" :sm="12">
        <ul class="footlist">
          <h4><a href="/">首页</a></h4>
          <li><a href="/about">公司简介</a></li>
          <li><a href="/products">产品中心</a></li>
          <li><a href="/contact">联系我们</a></li>
          <li class="langs">
            <Dropdown @on-click="setLan">
                <a href="javascript:void(0)">
                  <span v-if="lang == 'zhCN'">简体中文</span>
                  <span v-if="lang == 'zhTW'">繁体中文</span>
                  <span v-if="lang == 'en'">English</span>
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="zhCN" v-if="lang != 'zhCN'">简体中文</DropdownItem>
                    <DropdownItem name="zhTW" v-if="lang != 'zhTW'">繁体中文</DropdownItem>
                    <DropdownItem name="en" v-if="lang != 'en'">English</DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </li>
        </ul>
      </Col>
      <Col :xs="24" :sm="12">
        <div class="ftwrap">
          <h3 class="ft">不言科技</h3>
          <a href="tel:13297959213" class="ft">
            <Icon type="ios-telephone"></Icon>
            +86 13297959213
          </a>
          <a href="mailto:3589781688@qq.com" class="ft">
            <Icon type="ios-email"></Icon>
            3589781688@qq.com
          </a>
        </div>
      </Col>
      <Col :xs="24" class="copyright">
        <p>Copyright ©2018 buyancn.com 版权所有</p>
      </Col>
    </Row>
  </footer>
</template>

<script>
export default {
  name: "Foot",
  data() {
    return {
      lang: localStorage.getItem('b_locale') || 'zhCN'
    };
  },
  methods: {
    setLan (lan) {
      localStorage.setItem('b_locale', lan)
      window.location.reload()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: #22263e;
  color: #41519f;
}
.footcontent {
  margin: 0 auto;
  max-width: 1170px;
}
.copyright {
  text-align: center;
  font-size: 12px;
  border-top: 1px solid #41519f;
  padding-top: 10px;
}
.footlist {
  float: left;
  margin: 0 0 10px;
  zoom: 1;
  padding: 0 22px;
}
.footlist h4 {
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 13px;
}
.footlist h4 a {
  color: #ffffff;
}
.footlist li {
  list-style: none;
  display: block;
  line-height: 30px;
  font-size: 12px;
}
.footlist li a {
  color: #5363ae;
  text-decoration: none;
}
.footlist li a:hover,
a.ft:hover {
  color: #ffffff;
}
.ftwrap {
  padding: 0 22px;
}
.ft {
  display: block;
  padding: 0 0 9px;
  color: #5363ae;
}
.ft i {
  font-size: 16px;
}
.langs li {
  line-height: 1.2;
}
</style>
