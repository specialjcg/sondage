import Vue from 'vue'
import Router from 'vue-router'
import sondage from '@/components/sondage1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: sondage
    }
  ]
})
