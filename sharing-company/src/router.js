import Vue from 'vue'
import Router from 'vue-router'
// コンポーネントを読み込む
import Home from './components/Home'
import CompanyList from './App'
import CompanyListDetail from './components/CompanyListDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',      // このパスにアクセスしたら
      name: 'home',
      component: Home // このコンポーネントを呼ぶ
    },
    {
      path: '/list',
      name: 'list',
      component: CompanyList
    },
    {
      path: '/list/:company',
      name: 'list-detail',
      component: CompanyListDetail
    }
  ]
})