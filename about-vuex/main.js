// - タスク一覧を表示できる
// - ラベルを追加できる
// - タスクを追加できる
// - タスクをラベルでフィルタできる
// - タスクを完了状態にできる
// - タスク、ラベルは保存、復元できる
// - タスクにはラベルを付与できる
// 「Vue.js入門 基礎から実践アプリケーション開発まで」
// のページから引用

import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
    el: '#app',

    store,
    render: h => h(App)
})