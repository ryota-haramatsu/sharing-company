<template>
    <v-app-bar
      app
      color="primary"
      dark 
      class="header"
    >
      <div class="d-flex align-center">
            <router-link to="/" style="color:white;"><h2>Sharing Company</h2></router-link>
            <router-view></router-view>    
      </div>
      <v-spacer></v-spacer>
      <div class="right-bar">
      <v-avator>{{name}}</v-avator>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2" @click="signOut">Logout</span>
      </v-btn>
      </div>
    </v-app-bar>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Header',
  data () {
    return {
      name: firebase.auth().currentUser.email,
    }
  },
  methods: {
    signOut: function() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }

}
</script>