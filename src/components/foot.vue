<template>
  <footer class="footer">
    <Row class="footcontent">
      <Col :xs="24" :sm="12">
        <ul class="footlist">
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
        <h3>不言科技</h3>
        <p>
          <Icon type="ios-telephone"></Icon>
          +86 13927440213
        </p>
        <p>
          <Icon type="ios-email"></Icon>
          13927440213@163.com
        </p>
      </Col>
      <Col :xs="24" class="copyright">
        <p>Copyright ©2018 buyancn 版权所有</p>
        <p>鄂ICP备xxxxxxxx号-x</p>
      </Col>
    </Row>
  </footer>
</template>

<script>
export default {
  name: "Foot",
  data() {
    return {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    padding-top: 45px;
    padding-bottom: 45px;
    background-color: #22263e;
    color: #41519f;
  }
  .footcontent{
    margin: 0 auto;
    max-width: 1170px;
  }
  .copyright{
    border-top: 1px solid #41519f;
  }
  .footlist li{
    list-style: none;
  }
  .footlist li a{
    color: #41519f;
  }
</style>
