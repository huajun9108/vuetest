import Vue from 'vue'
import  home from '../components/home.vue'
import left1 from  '../components/left1.vue'
import left2 from  '../components/left2.vue'
import left3 from  '../components/left3.vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/left1',
      name: 'left1',
      component: left1
    },
    {
      path: '/left2',
      name: 'left2',
      component: left2
    },
    {
      path: '/left3',
      name: 'left3',
      component: left3
    },

  ]
})
