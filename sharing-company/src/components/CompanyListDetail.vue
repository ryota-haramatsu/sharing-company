<template>
<div>
  <Header />
    <div>
      {{company.logo}}
      {{company.name}}
    </div>
    <div>
      {{company.address}}
    </div>
    <div v-for="skills in company.skills" v-bind:key="skills.id">
      {{skills}}
    </div>
    <div>
      {{company.vision}}
    </div>
    <div v-for="welfare in company.welfare" v-bind:key="welfare.id">
      {{welfare}}
    </div>
</div>

</template>

<script>
import { db } from '../main' 
import Header from '../components/Header'

export default {
  name: 'companyListDetail',
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
    // ドキュメントID=クエリが同じものをテンプレートで使えるようにcompanyを定義
    const company = db.collection('company').doc(companyId)
    return {
      company: company,
    }
  },
  methods: {
      //
  }
}
</script>