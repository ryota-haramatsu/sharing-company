<template>
    <v-app>
        <div style="margin-top:150px;">
        <router-link to="/list">list</router-link>
         <router-view></router-view>
      </div>
    </v-app>
</template>

<script>
// import Header from './Header.vue'

export default {
  name: 'Home',
  components: { 
    // Header,
  },
};
</script>