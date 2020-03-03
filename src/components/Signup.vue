<template>
<div>
  <div class="signup">
    <div>
        <h2>新規登録</h2>
        <v-text-field type="text" :rules="rules" v-model="email"  placeholder="Email"></v-text-field>
        <v-text-field type="password" :rules="rules" v-model="password"  placeholder="Password"></v-text-field>
        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2 signUp_mail" @click="signUp_mail">
                <v-btn>新規登録</v-btn>
            </div>
        </v-col> 
        <hr>
        <v-col class="text-center" cols="12" sm="4">
            <div class="my-2 signup_google" @click="signUp_google">
                <v-btn color="error"><v-icon color="white" class="google_email">mdi-email</v-icon>Googleで登録</v-btn>
            </div>
        </v-col> 
    <p>Do you have an account? 
      <router-link to="/signin">sign in now!!</router-link>
    </p>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp_mail: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Create account: ', user.username)
          this.$router.push('/')
        })
        .catch(error => {
          alert(error.message)
        })
    },
    signUp_google: function() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(obj => {
            alert('Create account: ' + obj.user.displayName)
            this.$router.push('/')
        })
        .catch(error => {
          alert(error.message)
        })
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
.signup {
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
