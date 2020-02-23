import Vue from 'vue'
import Home from './components/Home.vue'
import "@firebase/auth";
import firebase from 'firebase'
import 'firebase/firestore'
import '@google-cloud/firestore'
import router from './router.js'

import { firestorePlugin } from 'vuefire'
import './assets/main.css'
import vuetify from './plugins/vuetify';
import firebaseConfig from './firebase-config'
import store from './store'

Vue.config.productionTip = false

Vue.use(firestorePlugin)


export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage();


export default {
  init() {
    firebase.initializeApp(firebaseConfig),
    // 認証状態の永続性を設定 ログアウトするまで状態保持(LOCAL)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {}
      store.commit('onAuthStateChanged', user)
      store.commit('onSAuthtateChanged', user.uid ? true : false)
    })
  }
}

new Vue({
  vuetify,
  router,
  render: h => h(Home)
}).$mount('#app')
 
