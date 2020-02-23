import Vue from 'vue'
import Home from './components/Home.vue'
// import firebase from 'firebase'
import Firebase from './firebase'
import firebase from 'firebase'
import 'firebase/firestore'
import '@google-cloud/firestore'
import router from './router.js'
import store from './store'
import { firestorePlugin } from 'vuefire'
import './assets/main.css'
import vuetify from './plugins/vuetify';
// import firebaseConfig from './firebase-config'
import Buefy from "buefy";
import "buefy/dist/buefy.min.css";

// 認証状態の永続性 LOCAL
// firebase.init()
// firebase.initializeApp(firebaseConfig);
Firebase.init()
Vue.config.productionTip = false

Vue.use(firestorePlugin,Buefy)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
 
