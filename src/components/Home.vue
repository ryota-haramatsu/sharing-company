<template>
    <v-app>
        <div style="margin-top:150px;">
        <!-- <router-link to="/list">list</router-link> -->
        <router-view></router-view>
      </div>
    </v-app>
</template>

<script>

export default {
  name: 'Home',
  components: { 
  },
};
</script>