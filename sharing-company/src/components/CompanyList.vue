<template>
 <div class="company-list"> 
    <ul>
        <li 
            v-for="item in company"
            :key="item.id"
        >
          <p>{{item.name}}</p>       
          <p>{{item.address}}</p>        
          <p>{{item.vision}}</p>
          <p>{{item.comments}}</p>
        </li>
    </ul>
 </div>
</template>

<script>
import { db } from '../main' 

export default {
  name: 'company-list',
  
  props:['id'],
  data() {
    return {
      company: []
    }
  },
  firestore() {
    return {
      company: db.collection('company')
    }
  }
}
</script>