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

import localeZhCN from './multi-language/zhCN'
import localeZhTW from './multi-language/zhTW'
import localeEn from './multi-language/en'

import 'iview/dist/styles/iview.css'
import './styles/main.css'

Vue.use(VueI18n)
Vue.use(iView)
Vue.locale = () => {}

const multi = {
  en: Object.assign(localeEn, en),
  zhCN: Object.assign(localeZhCN, zhCN),
  zhTW: Object.assign(localeZhTW, zhTW)
}

const i18n = new VueI18n({
  // locale: 'zhCN', // set locale
  locale: localStorage.getItem('b_locale') || 'en',
  // messages // set locale messages
  messages: multi
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
