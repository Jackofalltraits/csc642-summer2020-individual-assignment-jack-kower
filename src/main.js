import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import VCalendar from 'v-calendar'
Vue.config.productionTip = false
Vue.use(VCalendar, {
  componetPrefix: 'vc'
})
Vue.use(VeeValidate);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})