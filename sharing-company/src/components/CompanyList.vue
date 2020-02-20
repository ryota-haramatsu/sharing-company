<template>
 <div class="company-list">    
   <v-card
    class="mx-auto"
    max-width="800"
    style="margin-bottom:50px;"
    v-for="item in company"
    v-bind:key="item.key"
  >   
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
        <v-list-item-subtitle>住所 : {{item.address}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
      tile
      size="80"
      width="200"
      color="grey"
      >
        <v-avator>
          <img src="" id="image"/>
        </v-avator>

      </v-list-item-avatar>
    </v-list-item>
      
      <hr>
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
        <v-icon color="white">mdi-pencil</v-icon>
      </router-link>
      <router-view></router-view>
    </v-btn>
  </div>
 </div>
</template>
<script>
import { db } from '../main' 

export default {
  name: 'companyList',

  // props:['id'],
  data() {
    return {
      company: {}, 
      url: null
    }
  },
  firestore() {
    const company = db.collection('company')

    //fire storageから画像を取得 どうすればいいだろうか？
    // const name = storage.ref().child('images')
    // name.getDownloadURL().toString(function(ref) {
    //       document.getElementById('image').src = ref;
    // });
    
    // const name = storage.ref().child('images/${file_name}')
    
    // name.getDownloadURL().then(function(ref) {
    //   document.getElementById('human_image').src = ref
    // })
    return {
      company: company, 
    }
  },

  methods: {

  }
}
</script>