// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueI18n from 'vue-i18n'
import zhCN from 'iview/dist/locale/zh-CN'
import zhTW from 'iview/dist/locale/zh-TW'
import en from 'iview/dist/locale/en-US'

import 'iview/dist/styles/iview.css'

Vue.use(VueI18n)
Vue.use(iView)
Vue.locale = () => {}

const messages = {
  en: Object.assign({ message: 'hello' }, en),
  zhCN: Object.assign({ message: '你好' }, zhCN),
  zhTW: Object.assign({ message: '你好' }, zhTW)
}

const i18n = new VueI18n({
  locale: 'zhCN', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
