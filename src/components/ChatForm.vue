<template>
  <div id="chat-form-button">
    <!--フォームの表示ボタン-->
    <v-btn
        color="blue"
        dark
        center
        fab
        fixed
        right
        @click="showCreateForm"
    >
      <v-icon class="far fa-comment-dots chat-form-icon"></v-icon>
    </v-btn>
    <v-dialog v-model="displayForm" max-width="500px">
      <!--コメント入力フォーム-->
      <v-card>
        <v-container>
          <h2>コメント追加</h2>
          <v-form ref="form" v-model="valid" lazy-validation onsubmit="return false;">
            <v-text-field
                v-model="inputComment"
                :rules="commentRules"
                label="コメント"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                @click="addComment"
                id="post-button"
            >
              投稿
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {db} from '../main'
import firebase from 'firebase'

export default {
    name: 'CreateForm',
    data: () => ({
      companyId: "",
      userName: "",
      avatar: "",
      // form入力データ
      inputComment: "",
      // バリデーション
      valid: true,
      commentRules: [
        v => !!v || 'コメントは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
    }),
    methods: {
      // コメント追加
      addComment() {
        const now = new Date()
        const companyId = String(this.$route.params.id)
        const userName = firebase.auth().currentUser.displayName
        const avatar = firebase.auth().currentUser.photoURL
        // コメントをFirestoreへ登録
        db.collection('comments').add({
          company_id: companyId,
          user_name: userName,
          avatar: avatar,
          content: this.inputComment,
          createdAt: now
        })
        // ダイアログを閉じる
        this.hideCreateForm()
      },
      // Formの初期化
      clear() {
        this.$refs.form.reset()
      },
      // Formダイアログの表示
      showCreateForm() {
        this.displayForm = true
      },
      //
      // Formダイアログの非表示
      hideCreateForm() {
        this.clear()
        this.displayForm = false
      },
    }
}
</script>