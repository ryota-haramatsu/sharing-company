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
      <Authentication />
    </v-app-bar>
</template>

<script>
import Authentication from './Authentication'

export default {
  name: 'Header',
  components: {
    Authentication
  },
  created() {
    if (window.innerWidth < 920) {
      this.menuPosition = !this.menuPosition;
    }
  },
  data() {
    return {
      menuActive: false,
      menuPosition: false
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>
<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #555;
}
#nav a.router-link-exact-active {
  color: #3273dc;
}
</style>