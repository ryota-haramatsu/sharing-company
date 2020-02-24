<template>
<virtual-list :size="50" :remain="8" :variable="getVariableHeight" id="chat-board">
    <v-card
      class="ms-0"
      width="300"
    >
    <template v-for="(comment, index) in comments">
      <v-list-item
          :key="index"
      >
        <v-list-item-content>
          <v-col>
            <v-avatar><img :src="comment.avatar" alt=""></v-avatar>
            <v-text class="user_name">{{ comment.user_name }}</v-text>
          </v-col>
          
          <v-col>
            <v-text class="text--primary comment-content">{{comment.content}}</v-text>
            <v-list-item-subtitle>
              {{comment.createdAt.toDate().toLocaleString()}}
            </v-list-item-subtitle>
          </v-col>
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
        comments: db.collection('comments').where('company_id', '==', companyId).orderBy('createdAt', 'asc'),
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