<template>
<div>
    <div id="my-company-list">
      <div>
        <h1>登録会社リスト</h1>
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
<div id="my-favorite-company-list">
      <div>
        <h1>お気に入り</h1>
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
</div>
</template>

<script>
import { db } from '../../main' 
// import firebase from 'firebase'

export default {
  name: 'myCompanyList',

  data() {
    return {
      company: {}, 
    }
  },
  firestore() { 
    const userId = String(this.$route.params.id)
    return {
      company: db.collection('company').where('user_id', '==', userId).orderBy('created_at', "desc")
    }

  },
  computed: {
    userStatus() {
    // ログインするとtrue
      return this.$store.getters.isSignedIn;
    }
  }
}
</script>