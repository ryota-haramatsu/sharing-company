<template>
 <div class="company-list" v-if="userStatus">   
   <div class="company-counter">
    <p>{{company.length}}件</p>
   </div> 
   <v-card
    class="mx-auto"
    max-width="785"
    style="margin-bottom:50px;"
    v-for="item in company"
    v-bind:key="item.key"
  >   
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
        <v-list-item-subtitle><v-icon class="fas fa-map-marker-alt"></v-icon>  {{item.address}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="mb-1">Vision</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="mb-5 font-italic">"{{item.vision}}"</v-list-item-title>
    </v-list-item>
    <v-card-actions>
        <router-link :to="{name: 'list-detail', params: { id: item.id }}">
           <v-btn
            color="orange"
            text  
            >MORE</v-btn> 
        </router-link>
    </v-card-actions>
    <!-- <v-list-item>
      <button 
            v-if="!likedFlg"
            @click="addLikeUsr()"
            class="btn like-btn">
              <v-icon class="far fa-heart"></v-icon> 
          </button>
          <button 
            v-if="likedFlg"
            @click="delLikeUsr()"
            class="btn like-btn">
              <v-icon class="far fa-heart"></v-icon> 
          </button>
    </v-list-item> -->
  </v-card>
  <div class="my-2 register_button">
    <v-btn color="primary" fab large dark>
      <router-link to="/list/register">
        <v-icon class="fas fa-plus"></v-icon>
      </router-link>
      <router-view></router-view>
    </v-btn>
  </div>
 </div>
 <div v-else>
   <Top />
 </div>
</template>
<script>
import { db } from '../main'
import Top from './Top'
// import firebase from 'firebase'

export default {
  name: 'companyList',
  components: {
    Top
  },
  // props:['id'],
  data() {
    return {
      company: {}, 
      likeSum: 0,
      likedFlg: false,
      user_id: ""
    }
  },
  firestore() {
    const company = db.collection('company').orderBy('created_at', "desc")
    return {
      company: company, 
    }
  },
  methods: {
    // addLikeUsr(){
    //   // DBのcompanyコレクションにいいねを押してくれたUserを入れていく
    //   const docRef = db.collection("company").doc()
    //   console.log(docRef);
      
    //   // 配列の追加
    //   const loginUser = firebase.auth().currentUser.uid      
    //   docRef.update({
    //      "like_users": firebase.firestore.FieldValue.arrayUnion(loginUser),
    //   })
    //   this.getLikeUserByDocumentId(docRef)
    // },
    // delLikeUsr(){
    //   const docRef = db.collection("company").doc(this.user_id);
    //   const loginUser = firebase.auth().currentUser.uid
    //   docRef.update({
    //       "like_users": firebase.firestore.FieldValue.arrayRemove(loginUser),
    //     })
    //   this.getLikeUserByDocumentId(docRef)
    // },
    // getLikeUserByDocumentId(docRef){
    //   // ドキュメント取得
    //   docRef.get().then(doc => {
    //       if (doc.exists) {
    //         this.company = doc.data();
    //         this.likeSum = this.company.like_users.length
    //         const loginUser = firebase.auth().currentUser.uid
    //         // すでにいいねされていないか確認用フラグ
    //         this.likedFlg = this.company.like_users.includes(loginUser)
    //       } else {
    //           console.log("No such document!");
    //       }
    //   }).catch(function(error) {
    //       console.log("Error getting document:", error);
    //   });
    // },
  },
  computed: {
    userStatus() {
    // ログインするとtrue
      return this.$store.getters.isSignedIn;
    },
  }
}
</script>