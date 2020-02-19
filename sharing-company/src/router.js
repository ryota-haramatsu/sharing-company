import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
// コンポーネントを読み込む
// import Home from './components/Home'
import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import CompanyList from './App'
import CompanyListDetail from './components/CompanyListDetail'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '*',
    //   redirect: 'signin'
    // },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/',
      name: 'list',
      component: CompanyList,
      meta: { requiresAuth: true }
    },
    {
      path: '/list/:id',
      name: 'list-detail',
      component: CompanyListDetail,
      props: route => ({ id: String(route.params.id) })
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})
export default router