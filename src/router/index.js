import Vue from 'vue'
import Router from 'vue-router'
import MarkDown from '../components/markdown/MarkDown'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarkDown',
      component: MarkDown
    }
  ]
})
