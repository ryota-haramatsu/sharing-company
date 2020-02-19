import Vue from 'vue'
import Home from './components/Home.vue'
// import App from './App.vue'
import firebase from 'firebase'
import 'firebase/firestore'
import '@google-cloud/firestore'
import router from './router.js'

import { firestorePlugin } from 'vuefire'
import './assets/main.css'
import vuetify from './plugins/vuetify';
import firebaseConfig from './firebase-config'

firebase.initializeApp(firebaseConfig);
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
