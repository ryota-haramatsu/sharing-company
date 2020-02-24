<template>
<virtual-list :size="50" :remain="8" :variable="getVariableHeight">
    <v-card
      class="ms-0"
      width="300"
    >
    <template v-for="(comment, index) in comments">
      {{comment.companyId}}
      <v-list-item
          :key="index"
          avatar
      >
        <v-list-item-avatar>
          <img :src="comment.avatar">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-subtitle class="text--primary subheading">{{comment.content}}</v-list-item-subtitle>
          <v-list-item-subtitle>
            {{comment.createdAt.toDate().toLocaleString()}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="comment.id"></v-divider>
      </template>
      
      </v-card>
  </virtual-list>
</template>

<script>
import {db} from '../main'
import virtualList from 'vue-virtual-scroll-list'


export default {
     name: "ChatBoard",
    data: () => ({
      comments: [],
    }),
    firestore() {
        const companyId = String(this.$route.params.id)
      return {
        // firestoreのcommentsコレクションを参照
        comments: db.collection('comments').where('company_id', '==', companyId).orderBy('createdAt', 'asc')
      }
    },
    components: {'virtual-list': virtualList },
    
    methods: {
      getVariableHeight(itemIndex) {
        return itemIndex 
      },

      // getCompanyId() {
      //   const companyId = String(this.$route.params.id)
      //   const commentsCompanyId = db.collection('comments').where('company_id', '==', companyId)
      //   return commentsCompanyId
      // }
    }
}

</script>