import Vue from 'vue'
import Router from 'vue-router'
import Forms from '@/components/Forms'
import Results from '@/components/Results'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }

  ]
})
