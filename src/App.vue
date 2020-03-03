<template>
  <v-app>
    <Header /> 
    <v-content>
      <CompanyList />  
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header'
import CompanyList from './components/CompanyList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { 
    Header,
    CompanyList,
    Footer
  },
};
</script>
