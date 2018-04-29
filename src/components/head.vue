<template>
  <header class="header">
    <Row>
        <Col :xs="24" :sm="12">
          <div class="logobox">
            <img src="http://via.placeholder.com/320x60" alt="">
            <div class="navicon" @click="switchNav">
              <Icon type="navicon-round"></Icon>
            </div>
          </div>
        </Col>
        <Col :xs="24" :sm="12">
          <ul class="c_nav">
            <li><a href="#" target="_blank">公司简介</a></li>
            <li><a href="#" target="_blank">产品中心</a></li>
            <li><a href="#" target="_blank">联系我们</a></li>
            <li>
              <Dropdown>
                <a href="javascript:void(0)">
                  语言切换
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
          <ul class="moblie_nav" v-show="navList">
            <li><a href="#" target="_blank">公司简介</a></li>
            <li><a href="#" target="_blank">产品中心</a></li>
            <li><a href="#" target="_blank">联系我们</a></li>
            <li>
              <Dropdown>
                <a href="javascript:void(0)">
                  语言切换
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
    </Row>
  </header>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      navList: false
    }
  },
  methods: {
    switchNav () {
      this.navList = !this.navList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    margin: 0 auto;
    max-width: 1170px;
  }
  .logobox{
    position: relative;
  }
  .c_nav{
    display: flex;
    height: 79px;
    line-height: 79px;
  }
  .c_nav li {
    list-style: none;
    flex: 1;
    text-align: center;
  }
  .c_nav li a{
    font-size: 16px;
    color: #878787;
    padding: 10px;
    position: relative;
  }
  .c_nav li a::before, .c_nav li a::after{
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #a0a0a0;
    content: "";
    opacity: 0;
    transition: opacity .3s, transform .3s;
    transform: translateY(10px);
  }
  .c_nav li a::after{
    bottom: 0;
  }
  .c_nav li a:hover::before{
    opacity: 1;
    transform: translateY(20px);
  }
  .c_nav li a:hover::after{
    opacity: 1;
    transform: translateY(0);
  }
  .moblie_nav{
    display: none;
    height: auto;
    line-height: 39px;
  }
  .moblie_nav li {
    display: block;
    list-style: none;
    text-align: left;
  }
  .moblie_nav li a{
    font-size: 14px;
    color: #878787;
  }
  .navicon {
    color: #878787;
    font-size: 20px;
    float: right;
    padding: 5px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    right: 20px;
    display: none;
  }
  @media screen and (max-width: 767px) {
    .c_nav{
      display: none;
    }
    .moblie_nav{
      display: block;
    }
    .navicon{
      display: block;
    }
  }
</style>
