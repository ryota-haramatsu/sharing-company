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



// 認証状態の永続性 LOCAL
// firebase.init()
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
Vue.config.productionTip = false

Vue.use(firestorePlugin)


export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage();



new Vue({
  vuetify,
  router,
  render: h => h(Home)
}).$mount('#app')
 
