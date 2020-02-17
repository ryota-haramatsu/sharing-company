<template>
    <v-app-bar
      app
      color="primary"
      dark 
    >
      <div class="d-flex align-center">
            <router-link to="/" style="color:white;"><h1>Logo</h1></router-link>
            <router-view></router-view>    
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>
</template>