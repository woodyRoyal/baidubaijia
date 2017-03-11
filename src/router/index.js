import Vue from 'vue'
import Router from 'vue-router'
import Selection from '@/components/Selection/Selection'
import Contend from '@/components/Contend/Contend'
import Author from '@/components/Author/Author'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Selection
    }, {
      path: '/jx',
      component: Selection
    }, {
      path: '/zm',
      component: Contend
    }, {
      path: '/zz',
      component: Author
    }
  ]
})
