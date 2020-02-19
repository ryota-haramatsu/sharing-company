<template>
    <v-app>
    <Header /> 
    <v-content>
        <div>
            <h1>登録</h1>
            <form @submit.prevent="saveCompany">
            <h2>会社名</h2>
            <input class="input" type="text" placeholder="Company Name" v-model="name" required>
            <button type="submit" class="button is-link">Submit</button>
            </form>
        </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from './Header'
import {db} from '../main'

export default {
  name: 'company-register',
  components: { 
    Header,
  },
  data() {
      return {
        id: null,
        name: null,
        address: null,
        logo: null,
        scale: null,
        vision: null,
        skills: [],
        welfare: []
      }
  },
  methods: {
      saveCompany () {
      db.collection('company').add({
        id: this.id,
        name: this.name,
        address: this.address,
        logo: this.logo,
        scale: this.scale,
        vision: this.vision,
        skills: this.skills,
        welfare: this.welfare
      }).then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      }).catch(function (error) {
        console.error('Error adding document: ', error);
      });
    },
  }
}
</script>