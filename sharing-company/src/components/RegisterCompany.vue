<template>
    <v-app>
    <Header /> 
    <v-content>
        <div class="company-register">
            <div>
                <form @submit.prevent="saveCompany">
                <v-col cols="12" sm="6" md="3">
                    <h2>会社名 <span class="required">必須</span></h2>
                    <v-text-field type="text" v-model="name" required :rules="nameRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>住所 <span class="required">必須</span></h2>
                    <v-text-field type="text" v-model="address" required :rules="addressRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>Vision <span class="required">必須</span></h2>
                    <v-text-field type="text"  v-model="vision" required :rules="visionRules"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>会社規模</h2>
                    <v-select
                        v-model="scale"
                        :items="people"
                    ></v-select>
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
                        multiple
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <h2>サイトURL <span class="required">必須</span></h2>
                    <v-text-field type="text"  v-model="site_url" required :rules="siteUrlRules"></v-text-field>
                </v-col>
                <v-col class="register-center">
                    <div>
                        <v-btn type="submit" class="register" large>
                            登録
                        </v-btn>
                    </div>
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

export default {
    
  name: 'company-register',
  components: { 
    Header,
  },
  data: () => ({
        id: null,
        name: null,
        nameRules: [
            v => !!v || '会社名を入力してください。',
            v => (v && v.length <= 30) || 'Name must be less than 30 characters'
        ],
        address: null,
        addressRules: [
            v => !!v || '住所を入力してください。',
        ],
        logo: null,
        people: ['~30人','30~50人', '50~100人', '100~200人', '300人以上'],
        scale: null,
        vision: null,
        visionRules: [
            v => !!v || 'Visionを入力してください。',
        ],
        languages: ['Java', 'PHP', 'JavaScript', 'Python', 'Ruby',
         'C++', 'C', 'C#', 'Unity', 'COBOL', 'Swift', 'Go', 'Scala','Kotlin', 'TypeScript',
         'R','Perl', 'その他'],
        skills: null,
        welfare: [],
        welfares: [],
        site_url: '',
        siteUrlRules: [
            v => !!v || 'サイトURLを入力してください。',
        ],
        timestamp: null
  }),
  methods: {
    saveCompany: function() {
        const _this = this
        if (this.name && this.address && this.scale && this.vision &&
        this.skills && this.welfare) {
            const created_at = new Date().getTime()
            db.collection('company').add({
                name: this.name,
                address: this.address,
                scale: this.scale,
                vision: this.vision,
                skills: this.skills,
                welfare: this.welfare,
                site_url: this.site_url,
                created_at: created_at,
            }).then(function (docRef) {
                console.log('Document written with ID: ', docRef)
                alert('会社情報を登録しました')
                _this.$router.push({path: '/'})
            }).catch(function (error) {
                console.error('Error adding document: ', error);
            });
        }
    },
  }
}
</script>