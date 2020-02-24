<template>
<div>
  <Header />
  <v-row class="justify-center mb-3">
    <v-card
      class="ms-0"
      width="500"
    >
    <div class="company-list-detail">
      <v-card-text  class="company-name">
        {{company.name}}
      </v-card-text>
      <v-list-item-title><v-icon class="fas fa-flag"></v-icon> ビジョン</v-list-item-title>
      <v-card-text>
         {{company.vision}}
      </v-card-text>
      <v-list-item-title><v-icon class="fas fa-map-marker-alt"></v-icon> 住所</v-list-item-title>
      <v-card-text>
         {{company.address}}
      </v-card-text>
            
      <v-list-item-title><v-icon class="fas fa-laptop-code"></v-icon> 使用技術</v-list-item-title>
      <v-card-text v-for="skills in company.skills" v-bind:key="skills.id">
        ・{{skills}}
      </v-card-text>      
      <v-list-item-title><v-icon class="fas fa-award"></v-icon> 福利厚生</v-list-item-title>
      <v-card-text v-for="welfare in company.welfare" v-bind:key="welfare.id">
        ・{{welfare}}
      </v-card-text>
    </div>
    </v-card>
    <ChatBoard/>
    <ChatForm />
  </v-row>
</div>

</template>

<script>
import { db } from '../main' 
import Header from './Header'
import ChatBoard from './ChatBoard'
import ChatForm from './ChatForm'

export default {
  name: 'companyListDetail',
  props: { id: String },
  // props:['id'],
  components: { 
    Header,
    ChatBoard,
    ChatForm
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