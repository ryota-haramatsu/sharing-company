import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
// stateではuserとuserのログイン状態を保持する
  state: {
    user: {},
    status: false
  },

// ここでstateを更新する
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; //firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; //ログインしてるかどうか true or false
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    }
  }
});