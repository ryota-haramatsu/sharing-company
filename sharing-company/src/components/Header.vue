<template>
    <v-app-bar
      app
      color="primary"
      dark 
    >
      <div class="d-flex align-center">
            <router-link to="/" style="color:white;"><h1>Sharing Company</h1></router-link>
            <router-view></router-view>    
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="/list"
        text
      >
        <span class="mr-2">Company List</span>
      </v-btn>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Register</span>
      </v-btn>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2" @click="signOut">Logout</span>
      </v-btn>
      <v-avator>{{name}}</v-avator>
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