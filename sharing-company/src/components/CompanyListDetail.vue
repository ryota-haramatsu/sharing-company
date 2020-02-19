<template>
<div>
  <Header />
  <div v-for="items in company" v-bind:key="items.key">
    <div>
      {{items.logo}}
      {{items.name}}
    </div>
    <div>
      {{items.address}}
    </div>
    <div>
      {{items.comments.name}}
      {{items.comments.comment}}
    </div>
    <div v-for="skills in items.skills" v-bind:key="skills.id">
      {{skills}}
    </div>
    <div>
      {{items.vision}}
    </div>
    <div v-for="welfare in items.welfare" v-bind:key="welfare.id">
      {{welfare}}
    </div>
    
  </div>

</div>

</template>

<script>
import { db } from '../main' 
import Header from '../components/Header'

export default {
  name: 'company-list',
  props: { id: String },
  // props:['id'],
  components: { 
    Header
  },
  data() {
    return {
      company: {}, 
    }
  },
  firestore() {
    const companyId = String(this.$route.params.id)
    const company = db.collection('company').where('id', '==', companyId)
    return {
      company: company
      // company: company,
    }
  },
  methods: {
      //
  }
}
</script>