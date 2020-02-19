<template>
    <v-app>
    <Header /> 
    <v-content>
        <div class="company-register">
            <div>
                <form @submit.prevent="saveCompany">
                <v-col>
                    <!-- <h2>ロゴ</h2> -->
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>会社名</h2>
                    <v-text-field class="input" type="text" placeholder="Company Name" v-model="name" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>Vision</h2>
                    <v-text-field class="input" type="text" placeholder="Vision" v-model="vision" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>会社規模</h2>
                    <v-select
                        v-model="scale"
                        :items="people"
                    ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>住所</h2>
                    <v-text-field class="input" type="text" placeholder="Address" v-model="address" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>技術</h2>
                    <v-select
                        v-model="skills"
                        :items="languages"
                        attach
                        chips
                        label="プログラミング言語"
                        multiple
                    ></v-select>
                </v-col> 
                <v-col cols="12" sm="6" md="3">
                    <h2>福利厚生</h2>
                    <v-combobox
                        v-model="welfare"
                        :items="welfares"
                        label="Combobox"
                        multiple
                    ></v-combobox>
                </v-col>
                <v-col class="register-center">
                    <v-btn type="submit" class="button is-link register" large>
                         <router-link to="/list">登録</router-link>
                    </v-btn>
                </v-col>
                </form>
            </div>
        </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from './Header'
import {db} from '../main'
// import firebase from 'firebase'
// import {autoId} from '@google-cloud/firestore/build/src/util'

export default {
  name: 'company-register',
  components: { 
    Header,
  },
  data: () => ({
        id: null,
        name: null,
        address: null,
        logo: null,
        people: ['~30人','30~50人', '50~100人', '100~200人', '300人以上' ],
        scale: [],
        vision: null,
        languages: ['Java', 'PHP', 'JavaScript', 'Python', 'Ruby',
         'C++', 'C', 'C#', 'Unity', 'COBOL', 'Swift', 'Go', 'Scala','Kotlin', 'TypeScript',
         'R','Perl', 'その他'],
        skills: [],
        welfare: [],
        welfares: [],
        timestamp: null
  }),
  methods: {
    saveCompany () {
        //UNIXタイムスタンプ(ミリ秒)を取得
        const created_at = new Date().getTime()
        db.collection('company').add({
            name: this.name,
            address: this.address,
            logo: this.logo,
            scale: this.scale,
            vision: this.vision,
            skills: this.skills,
            welfare: this.welfare,
            created_at: created_at,
        }).then(function (docRef) {
            console.log('Document written with ID: ', docRef.id);
        }).catch(function (error) {
            console.error('Error adding document: ', error);
        });
    },
    makeId() {
        
    }
    
  }
}
</script>