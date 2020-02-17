<template>
<div>
    <div v-for="item in company" v-bind:key="item.key">
        {{ item }}
    </div>
</div>
</template>

<script>
import { db } from '../main' 

export default {
  name: 'company-list',

  props:['id'],
  data() {
    return {
      company: {}, 
    }
  },
  firestore() {
    const company = db.collection('company')
    return {
      company: company,
    }
  },
  methods: {
      //
  }
}
</script>