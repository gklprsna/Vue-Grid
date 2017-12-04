import Vue from 'vue'
import Router from 'vue-router'
import ContactComponent from '@/components/ContactComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component: ContactComponent
    }
  ]
})
