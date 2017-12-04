// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import Paginate from 'vuejs-paginate';
//import demogrid from './components/GridComponent'

//Vue.component('paginate', Paginate)

Vue.config.productionTip = false

/* eslint-disable no-new */
export const gridEvent = new Vue();

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
