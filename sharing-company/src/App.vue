<template>
  <div id="app">
    <!-- <Header /> -->
    <CompanyList />
  </div>
</template>

<script>
import CompanyList from './components/CompanyList'
// import Header from './components/Header'
export default {
  name: 'App',
  components: {
      // Header,
      CompanyList,    
  }
}
</script>

