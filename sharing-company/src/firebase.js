import firebase from 'firebase'
import store from './store'
import firebaseConfig from './firebase-config'

export default {
    init() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },
    logout() {
        firebase.auth().signOut()
    },
    onAuth() {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {};
            store.commit('setUser', user);
            store.commit('setSignIn', user.uid ? true : false);
        });
    }
};