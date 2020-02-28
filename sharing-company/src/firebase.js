import firebase from "@firebase/app";
import "@firebase/auth";
import store from "./store";
import config from './firebase-config'

export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider)
    firebase.auth().signInWithRedirect(provider)
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user.uid ? true : false);
    });
  },
};