<script>
/* PINIA */
import { useConfigStore } from '@/stores/settingsApplication'
import axios from 'axios'
//import { ref } from vue;
export default {
    name: 'AdminSaveDataPost',
    mounted() {
        const settingsApplication = useConfigStore();
        const access = '';
        const infoAccess = '';
        if(settingsApplication.typeOfApplication == 'demo'){
            axios.get(settingsApplication.urlGetDataAccessDemo)    
                        .then((response) => {
                            console.log(response.data)
                            this.dataAccess = response.data
                            if(this.dataAccess[0]['access'] != "4543545#3222XpPF"){
                                this.access = 0
                                alert("Wersja poglądowa brak dostępu do zapisu");
                                this.infoAccess = "Wersja poglądowa brak możliwości zapisu."
                            }else{
                                this.access = 1
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                            this.errorMsg = 'Error retieving data'
                        })
            axios.get(settingsApplication.urlAdminGetCategoriesDemo)    
            .then((response) => {
                        console.log(response.data)
                        this.listElements = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMsg = 'Error retieving data'
                    })
		} else if(settingsApplication.typeOfApplication == 'S'){
            axios.get(settingsApplication.urlAdminGetCategoriesS)
                    .then((response) => {
                        console.log(response.data)
                        this.listElements = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMsg = 'Error retieving data'
                    })
		} else if(settingsApplication.typeOfApplication == 'L'){
			axios.get(settingsApplication.urlAdminGetCategoriesL)
                    .then((response) => {
                        console.log(response.data)
                        this.listElements = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMsg = 'Error retieving data'
                    })
		}
    },
    data() {
        return {
            categoryNotOK: false,
            nameTitleNotOK: false,
            websiteNotOK: false,
            fbNotOK: false,
            YTNotOK: false,
            addressNotOK: false,
            PhoneEmailNotOK: false,
            imageNotOK: false,
            errorForm: false,
            textReturnResponseError: '',
            textReturnResponseOK: '',
            titlePage: 'Panel admin zapis danych',
            logoVue: 'vue-logo.png',
            listElements: [],
            errorMsg: '',
            formData :{
                listCategory: '',
                nameTitle: '',
                website: '',
                facebook: '',
                address: '',
                phoneEmail: '',
                youtube: '',
                note: '',
                image: '',
            },
            users: null,
        }
    },
   
    methods: {
        checkForm(){
            this.textReturnResponseOK = false;
            this.runSaveForm = true;
            this.categoryNotOK = false;
            this.nameTitleNotOK = false;
            this.websiteNotOK = false;
            this.FBNotOK = false;
            this.YTNotOK = false;
            this.addressNotOK = false;
            this.PhoneEmailNotOK = false;
            this.imageNotOK = false;
            if(this.formData.listCategory == '' || this.formData.listCategory == 'wybierz'){
                this.categoryNotOK = true;
                this.textErrorCategory = "Wybierz kategorię!";
                this.runSaveForm = false;
            }else{
                this.categoryNotOK = false;
            }
            if(this.formData.nameTitle == ''){
                this.nameTitleNotOK = true;
                this.textErrorNameTitle = "Nazwa / tytuł nie może być puste!";
                this.runSaveForm = false;
            }else{
                if( (this.formData.nameTitle.length) < 3 ){
                    this.nameTitleNotOK = true;
                    this.textErrorNameTitle = "Nazwa / tytuł nie może być krótsza niż 3 znaki!";
                    this.runSaveForm = false;
                }else{
                    
                }
            }
            if( (this.formData.website) != ''){
                if( (this.formData.website.length) < 5 ){
                    this.websiteNotOK = true;
                    this.textErrorWebsite = "Adres WWW nie może być krótszy niż 5 znaków!";
                    this.runSaveForm = false;
                }else{
                    this.websiteNotOK = false;
                }
            }
            if( (this.formData.facebook) != ''){
                if( (this.formData.facebook.length) < 8 ){
                    this.fbNotOK = true;
                    this.textErrorFB = "Adres Facebook nie może być krótszy niż 8 znaków!";
                    this.runSaveForm = false;
                }else{
                    this.fbNotOK = false;
                }
            }
            if( (this.formData.address) != ''){
                if( (this.formData.address.length) < 3 ){
                    this.addressNotOK = true;
                    this.textErrorAddress = "Adres nie może być krótszy niż 8 znaków!";
                    this.runSaveForm = false;
                }else{
                    this.addressNotOK = false;
                }
            }
            if( (this.formData.phoneEmail) != ''){
                if( (this.formData.phoneEmail.length) < 9 ){
                    this.PhoneEmailNotOK = true;
                    this.textErrorPhoneEmail = "Telefon / email nie może być krótszy niż 9 znaków!";
                    this.runSaveForm = false;
                }else{
                    this.PhoneEmailNotOK = false;
                }
            }
            if( (this.formData.youtube) != ''){
                if( (this.formData.youtube.length) < 10 ){
                    this.YTNotOK = true;
                    this.textErrorYT = "Adres YouTube nie może być krótszy niż 10 znaków!";
                    this.runSaveForm = false;
                }else{
                    this.YTNotOK = false;
                }
            }
            if( (this.formData.image) != ''){
                if( (this.formData.image.length) < 3 ){
                    this.imageNotOK = true;
                    this.textErrorImage = "Image nie może być krótsze niż 3 znaki!";
                    this.runSaveForm = false;
                }else{
                    this.imageNotOK = false;
                }
            }
            if(this.runSaveForm){
                this.errorForm = false;
                this.createPost();
            }else{
                this.errorForm = true;
            }
        },
        createPost() {
            const settingsApplication = useConfigStore()
            if(settingsApplication.typeOfApplication == 'demo'){
                axios.post(settingsApplication.urlSavePostAllDataDemo, this.formData)
                .then((response) => console.log("RESPONSE: "+response), this.printResponseOk())
                .catch((error) => console.log("RESPONSE ERROR: "+error), this.printErrorResponse())
                this.clearForm()
            } else if(settingsApplication.typeOfApplication == 'S'){
                axios.post(settingsApplication.urlSavePostAllDataS, this.formData)
                    .then((response) => console.log("RESPONSE: "+response), this.printResponseOk())
                    .catch((error) => console.log("RESPONSE ERROR: "+error), this.printErrorResponse())
                    this.clearForm()
            } else if(settingsApplication.typeOfApplication == 'L'){
                axios.post(settingsApplication.urlSavePostAllDataL, this.formData)
                    .then((response) => console.log("RESPONSE: "+response), this.printResponseOk())
                    .catch((error) => console.log("RESPONSE ERROR: "+error), this.printErrorResponse())
                    this.clearForm()
            }
        },
        printErrorResponse() {
            
        },
        printResponseOk() {
            console.log("run printResponseOk");
            this.textReturnResponseOK = true;
        },
        clearForm(){
            this.formData.listCategory = '';
            this.formData.nameTitle = '';
            this.formData.website = '';
            this.formData.facebook = '';
            this.formData.note = '';
            this.formData.youtube = '';
            this.formData.address = '';
            this.formData.phoneEmail = '';
            this.formData.image = '';
        }
    }
}
</script>

<template>
    <div id="adminMainSite">
        <!--
            Przykłady tworzenia list
            https://stackoverflow.com/questions/70568994/setting-default-dynamic-value-for-select-option-in-vue-js
            https://forum.vuejs.org/t/dynamic-select-to-have-the-first-option-to-be-selected-and-passed-to-v-model/23398
            https://v2.vuejs.org/v2/guide/list.html
            https://www.freecodecamp.org/news/an-introduction-to-dynamic-list-rendering-in-vue-js-a70eea3e321/
        -->
        <!--
        <div class="textResponseError" v-html="textReturnResponseError"></div>
        -->
        <div class="textResponseOK" v-if="textReturnResponseOK">Zapisano dane.</div>
        <p class="categoryError" v-if="categoryNotOK">{{textErrorCategory}}</p>
        <p class="categoryError" v-if="nameTitleNotOK">{{textErrorNameTitle}}</p>
        <p class="categoryError" v-if="websiteNotOK">{{textErrorWebsite}}</p>
        <p class="categoryError" v-if="fbNotOK">{{textErrorFB}}</p>
        <p class="categoryError" v-if="YTNotOK">{{textErrorYT}}</p>
        <p class="categoryError" v-if="addressNotOK">{{textErrorAddress}}</p>
        <p class="categoryError" v-if="PhoneEmailNotOK">{{textErrorPhoneEmail}}</p>
        <p class="categoryError" v-if="imageNotOK">{{textErrorImage}}</p>

        <form @submit.prevent="checkForm" class="formSaveData">
            <div>
                <label for="listCategory">Kategoria wpisu</label>
                <select name="listCategory" id="listCategory" v-model="formData.listCategory">
                    <option value="wybierz">Wybierz kategorię wpisu</option>
                    <option  v-for="list in listElements" :key="list.id" :value="list.titleListElement">
                        {{list.titleListElement}}
                    </option>
                </select>
            </div>
            <div>
                <label for="nameTitle">Nazwa / tytuł</label>
                <input type="text" name="nameTitle" id="nameTitle" maxlength="80" v-model="formData.nameTitle">
            </div>
            <div>
                <label for="website">Strona WWW:</label>
                <input type="text" id="website" maxlength="250" v-model="formData.website">
            </div>
            <div>
                <label for="facebook">Strona Facebook:</label>
                <input type="text" id="facebook" maxlength="250" v-model="formData.facebook">
            </div>
            <div>
                <label for="youtube">Youtube:</label>
                <input type="text" id="youtube" maxlength="250" v-model="formData.youtube">
            </div>
            <div>
                <label for="address">Adres:</label>
                <input type="text" id="address" maxlength="150" v-model="formData.address">
            </div>
            <div>
                <label for="phoneEmail">Telefon / email:</label>
                <input type="text" id="phoneEmail" maxlength="80" v-model="formData.phoneEmail">
            </div>
            <div>
                <label for="image">Grafika:</label>
                <input type="text" id="image" maxlength="80" v-model="formData.image">
            </div>
            <div>
                <label for="note">Notatka:</label>
                <textarea id="note" maxlength="1200" v-model="formData.note"></textarea>
            </div>
            <br /><br />
            <div class="textResponseOK" v-if="textReturnResponseOK">Zapisano dane.</div>
            <p class="categoryError" v-if="errorForm">Popraw formularz!</p>
            {{ infoAccess }}<br />
            <button class="Button" id="buttonFormSaveDataAjax" :disabled="access==0">Zapisz dane</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/style.scss";
    #adminMainSite {
        padding:15px;
    }
    .categoryError{
        font-size: 1.0em;
        font-weight:900;
        color: red;
    }
    .textResponseError{
        font-size: 1.5em;
        font-weight:900;
        color: red;
    }
    .textResponseOK{
        font-size: 1.5em;
        font-weight:900;
        color: green;
    }
    #note{
        width: 300px;
        height: 100px;
    }
    #listCategory{
        width:300px;
    }

    label {
        display:inline-block;
        width:150px;
        margin-top:20px;
    }

    #listCategory{
        width: 280px;
        height:40px;
    }

    .formSaveData input {
        width:280px;
        height:30px;
        border: 1px solid #817e4f;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-box-shadow: 2px 2px 3px #666;
        -webkit-box-shadow: 2px 2px 3px #666;
        box-shadow: 2px 2px 3px #666;
        padding: 4px 7px;
        outline: 0;
    }

    .formSaveData textarea {
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-box-shadow: 2px 2px 3px #666;
        -webkit-box-shadow: 2px 2px 3px #666;
        box-shadow: 2px 2px 3px #666;
        border: 1px solid #817e4f;
        margin-top:30px;
    }

    #buttonFormSaveDataAjax {
        width: 300px;
        height: 50px;
        border: 1px solid #817e4f;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    #footerText{
        size: 0.8em;
    }

    @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
    }

    @media (max-width: 1024px) {
        .formSaveData textarea, input {
            font-size:1.2em;
        }
    }
</style>
