import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Canvas from '@/components/Canvas'
import Chart from '@/components/Chart'
import Tables from '@/components/Tables'
import Translate from '@/components/Translate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: Canvas
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/table',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/translate',
      name: 'Translate',
      component: Translate
    }
  ],
  linkActiveClass:'activeRoute'
})
