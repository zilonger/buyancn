<template>
  <header class="header">
    <Row>
        <Col :xs="24" :sm="9">
          <div class="logobox">
            <!-- <a href="/"><img src="http://via.placeholder.com/320x60" alt=""></a> -->
            <a href="/"><img src="../assets/images/by-logo.png" alt=""></a>
            <div class="navicon" @click="switchNav">
              <Icon type="navicon-round"></Icon>
            </div>
          </div>
        </Col>
        <Col :xs="24" :sm="15">
          <ul class="c_nav">
            <li><a href="/">{{$t('web.home')}}</a></li>
            <li><a href="/about">{{$t('about.title')}}</a></li>
            <li><a href="/products">{{$t('product.title')}}</a></li>
            <li><a href="/contact">{{$t('contact.title')}}</a></li>
            <li class="langs">
              <Dropdown trigger="click" @on-click="setLan">
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
          <ul class="moblie_nav" v-show="navList">
            <li class="nav-item"><a href="/">{{$t('web.home')}}</a></li>
            <li class="nav-item"><a href="/about">{{$t('about.title')}}</a></li>
            <li class="nav-item"><a href="/products">{{$t('product.title')}}</a></li>
            <li class="nav-item"><a href="/contact">{{$t('contact.title')}}</a></li>
            <li class="nav-item langs">
              <Dropdown trigger="click" @on-click="setLan">
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
    </Row>
  </header>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      navList: false,
      lang: localStorage.getItem('b_locale') || 'en'
    };
  },
  methods: {
    switchNav() {
      this.navList = !this.navList;
    },
    setLan (lan) {
      localStorage.setItem('b_locale', lan)
      window.location.reload()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  margin: 0 auto;
  max-width: 1170px;
}
.logobox {
  position: relative;
  height: 79px;
}
.logobox a{
  display: inline-block;
  margin-top: 13px;
}
.logobox a img{
  height: 52px;
}
.c_nav {
  display: flex;
  height: 79px;
  line-height: 79px;
}
.c_nav li {
  list-style: none;
  flex: 1;
  text-align: center;
}
.c_nav li a {
  height: 38px;
  font-size: 16px;
  color: #878787;
  padding: 10px;
  position: relative;
  white-space: nowrap;
}
.c_nav li a:hover {
  color: #86d102;
}
.c_nav li a::before,
.c_nav li a::after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #86d102;
  content: "";
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}
.c_nav li a::before {
  top: 0;
  transform: translateY(-10px);
}
.c_nav li a::after {
  bottom: 0;
  transform: translateY(10px);
}
.c_nav li a:hover::before {
  opacity: 1;
  transform: translateY(0);
}
.c_nav li a:hover::after {
  opacity: 1;
  transform: translateY(0);
}
.moblie_nav {
  display: none;
  height: auto;
  line-height: 39px;
  transition: all .3s ease-out;
}
.moblie_nav .nav-item {
  display: block;
  list-style: none;
  text-align: left;
}
.moblie_nav .nav-item a {
  display: block;
  font-size: 14px;
  color: #878787;
  padding: 0 22px;
}
.moblie_nav .nav-item a:active {
  color: #86d102;
}
.navicon {
  color: #878787;
  font-size: 28px;
  float: right;
  padding: 5px 10px;
  position: absolute;
  top: 50%;
  margin-top: -26px;
  right: 15px;
  display: none;
}
@media screen and (max-width: 767px) {
  .c_nav {
    display: none;
  }
  .moblie_nav {
    display: block;
  }
  .navicon {
    display: block;
  }
}
</style>
