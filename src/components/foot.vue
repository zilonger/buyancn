<template>
  <footer class="footer">
    <Row class="footcontent">
      <Col :xs="24" :sm="12">
        <ul class="footlist">
          <h4><a href="/">首页</a></h4>
          <li><a href="/about">公司简介</a></li>
          <li><a href="/products">产品中心</a></li>
          <li><a href="/contact">联系我们</a></li>
          <li>
            <Dropdown>
              <a href="javascript:void(0)">
                简体中文
                <Icon type="arrow-down-b"></Icon>
              </a>
              <DropdownMenu slot="list">
                  <DropdownItem>简体中文</DropdownItem>
                  <DropdownItem>繁体中文</DropdownItem>
                  <DropdownItem>English</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </Col>
      <Col :xs="24" :sm="12">
        <div class="ftwrap">
          <h3 class="ft">不言科技</h3>
          <a href="tel:13927440213" class="ft">
            <Icon type="ios-telephone"></Icon>
            +86 13927440213
          </a>
          <a href="mailto:13927440213@163.com" class="ft">
            <Icon type="ios-email"></Icon>
            13927440213@163.com
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
    return {};
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
</style>
