<template>
<div>
  <Header />
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-subheader>会社名</v-subheader>
      <v-card-text>
        {{company.name}}
      </v-card-text>
      <v-card-text>
        {{company.address}}
      </v-card-text>
      <v-card-text v-for="skills in company.skills" v-bind:key="skills.id">
        {{skills}}
      </v-card-text>
      <v-card-text>
        {{company.vision}}
      </v-card-text>
      <v-card-text v-for="welfare in company.welfare" v-bind:key="welfare.id">
        {{welfare}}
      </v-card-text>
    </v-card>
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