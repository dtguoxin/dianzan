import Vue from 'vue'
import Router from 'vue-router'
import Dianzan from '@/components/Dianzan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dianzan',
      component: Dianzan
    }
  ]
})
