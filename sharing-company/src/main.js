import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import 'firebase/firestore'

import { firestorePlugin } from 'vuefire'
import './assets/main.css'



var firebaseConfig = {
    apiKey: "AIzaSyAvgkc0u_M1kEubRGSgniE5OTmSbTW0jrQ",
    authDomain: "share-company-13b31.firebaseapp.com",
    databaseURL: "https://share-company-13b31.firebaseio.com",
    projectId: "share-company-13b31",
    storageBucket: "share-company-13b31.appspot.com",
    messagingSenderId: "144249106976",
    appId: "1:144249106976:web:f76a87ce17639337970245",
    measurementId: "G-SN817R9J87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  Vue.config.productionTip = false
  
  Vue.use(firestorePlugin)

  export const db = firebase.firestore()
  export const auth = firebase.auth()
  

new Vue({
  render: h => h(App),
}).$mount('#app')
