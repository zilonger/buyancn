import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: Head
    }
  ]
})
