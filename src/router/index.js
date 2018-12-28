import Vue from 'vue'
import Router from 'vue-router'
import myHome from '@/components/home/home'
import myApiList from '@/components/apiList/apiList'
import myAbility from '@/components/ability/ability'
import myLogin from '@/components/login/login'
import myAccount from '@/components/account/account'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: '/apiList',
      name: 'apiList',
      component: myApiList
    },
    {
      path: '/ability',
      name: 'ability',
      component: myAbility
    },
    {
      path: '/login',
      name: 'login',
      component: myLogin
    },
    {
      path: '/account',
      name: 'account',
      component: myAccount
    },
  ]
})
