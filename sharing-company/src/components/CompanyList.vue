<template>
 <div class="company-list">    
   <v-card
    class="mx-auto"
    max-width="800"
    style="margin-top:50px;"
    v-for="item in company"
    v-bind:key="item.key"
  >   
    <v-list-item three-line>
      <v-list-item-avatar
      tile
      size="80"
      color="grey"
      ></v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
        <v-list-item-subtitle>住所 : {{item.address}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      
      <hr>
    <v-list-item>
      <v-list-item-title class="mb-1 font-italic">Vision</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="mb-1 font-italic">"{{item.vision}}"</v-list-item-title>
    </v-list-item>
    
    <v-list-item>
      <v-list-item-avatar
          tile
          size="45"
          color="grey"
        ></v-list-item-avatar>
      
      <ul>
        <v-list-item class="text--primary" v-for="(comment) in item.comments" v-bind:key="comment.key"> 
          {{comment}}
        </v-list-item>
      </ul>
    </v-list-item>
    
    <v-card-actions>
      <v-btn
        color="orange"
        text  
      >
        <router-link :to="{name: 'list-detail', params: {company: item.id}}">
          MORE
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
 </div>
</template>
<script>
import { db } from '../main' 

export default {
  name: 'company-list',

  props:['id'],
  data() {
    return {
      company: {}, 
    }
  },
  firestore() {
    const company = db.collection('company')
    return {
      company: company,
    }
  },
  methods: {

  }
}
</script>