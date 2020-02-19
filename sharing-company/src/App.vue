<template>
  <v-app>
    <Header /> 
    <v-content>
      <CompanyList />  
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import CompanyList from './components/CompanyList'

export default {
  name: 'App',
  components: { 
    Header,
    CompanyList,
  },
};
</script>
