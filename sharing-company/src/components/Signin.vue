<template>
<div>
  <div class="signin">
    <div>
        <h2>ログイン</h2>
        <v-text-field type="text" :rules="rules" v-model="email"  placeholder="Email"></v-text-field>
        <v-text-field type="password" :rules="rules" v-model="password"  placeholder="Password"></v-text-field>
        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2 signIn_mail" @click="signInmail">
                <v-btn>ログイン</v-btn>
            </div>
        </v-col> 
        <hr>
        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2 signin_google" @click="signIngoogle">
                <v-btn color="error">
                  <v-icon color="white" class="google_email">
                    mdi-email</v-icon>
                    Googleでログイン
                </v-btn>
            </div>
        </v-col> 
        <p>You don't have an account? 
        <router-link to="/signup">create account now!!</router-link>
        </p>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'


export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signInmail: function() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert("success", user.username)
                this.$router.push('/')
            })
            .catch(error => {
            alert(error.message)
        }))
    },
    signIngoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
        firebase.auth().signInWithPopup(provider)
        .then(obj => {
            alert('Create account: ' + obj.user.displayName)
            this.$router.push('/')
        })
        .catch(error => {
          alert(error.message)
        }))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>