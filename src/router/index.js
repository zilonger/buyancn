import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import About from '@/pages/about'
import Products from '@/pages/products'
import Contact from '@/pages/contact'
import ProductDetail from '@/pages/product-detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/goods/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
