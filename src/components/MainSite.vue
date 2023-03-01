<script>
    /* PINIA */
    import { useConfigStore } from '@/stores/settingsApplication'
    import axios from 'axios'
    import { ref } from "vue";
    export default{
        data() {
            const settingsApplication = useConfigStore()
            if(settingsApplication.typeOfApplication == 'demo'){
                return {
                    whatWebsite: 'demo',
                    backgroundColorFooter: '#948282',
                    errorMsg: '',
                    logoVue: 'vue-logo.png',
                    arrayDataMain: [],
                    errorMsg: '',
                    BackgroundBright: '',
                    BackgroundDark: '',
                }
            } else if(settingsApplication.typeOfApplication == 'S'){
                return {
                    whatWebsite: 'slavic',
                    errorMsg: '',
                    backgroundColorFooter: '#817e4f',
                    logoVue: 'vue-logo.png',
                    arrayDataMain: [],
                    errorMsg: '',
                    BackgroundBright: '',
                    BackgroundDark: '',
                }
            } else if(settingsApplication.typeOfApplication == 'L'){
                return {
                    whatWebsite: 'left-screen',
                    errorMsg: '',
                    backgroundColorFooter: '#948282',
                    logoVue: 'vue-logo.png',
                    arrayDataMain: [],
                    errorMsg: '',
                    BackgroundBright: '',
                    BackgroundDark: '',
                }
            }
        },
        name: 'MainSite',
        mounted() {
            const settingsApplication = useConfigStore()
            if(settingsApplication.typeOfApplication == 'demo'){
                axios.get(settingsApplication.urlGetAllDataDemo)
                    .then((response) => {
                                console.log("arrayDataHeader");
                                console.log(response.data)
                                this.arrayDataMain = response.data
                            })
                            .catch((error) => {
                                console.log(error)
                                this.errorMsg = 'Error retieving data'
                            })
                            this.BackgroundBright = '#dde1ee'
                            this.BackgroundDark = '#c9d7fc' 
            } else if(settingsApplication.typeOfApplication == 'S'){
                axios.get(settingsApplication.urlGetCategoriesS)
                        .then((response) => {
                            console.log("arrayDataHeader");
                            console.log(response.data)
                            this.arrayDataMain = response.data
                        })
                        .catch((error) => {
                            console.log(error)
                            this.errorMsg = 'Error retieving data'
                        })
                        this.BackgroundBright = '#edecdd'
                        this.BackgroundDark = '#b8b47d' 
            } else if(settingsApplication.typeOfApplication == 'L'){
                axios.get(settingsApplication.urlGetCategoriesL)
                        .then((response) => {
                            console.log("arrayDataHeader");
                            console.log(response.data)
                            this.arrayDataMain = response.data
                        })
                        .catch((error) => {
                            console.log(error)
                            this.errorMsg = 'Error retieving data'
                        })
                        this.BackgroundBright = '#dde1ee'
                        this.BackgroundDark = '#c9d7fc' 
            }
        },
        computed: {
            innerHtml() {
                return "<b>To jest tekst boldem</b>";
            },
            daneTxtPodarray1() {
                return "<b>To jest tekst boldem</b>";
            },
            withBrTags: function() {
                /* Zamana znakow */
                const doc = this.item.licensedocument.legal.documentText
                return doc.replace(/(\\r)*\\n/g, '<br>')
            }
        },
        methods: {
            getPost() {
               
            }
        }
    }
</script>

<template>
    <div>
        <div v-for="arraydatamain in arrayDataMain" :key="arraydatamain.id">
            <div class="goTopWebsite"><a href="#span-top">Początek strony</a></div>
            <section v-bind:id="arraydatamain.tytul" class="decoration-title">{{arraydatamain.tytul}}</section>
                  
                    <div v-if="arraydatamain.podarray[1]" class="textBlock" :style="{ 'background-color': this.BackgroundBright }">
                        <b>{{arraydatamain.podarray[1].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[1].Website">{{arraydatamain.podarray[1].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[1].FB">{{arraydatamain.podarray[1].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[1].YT">{{arraydatamain.podarray[1].YT}}</a></p>
                        <p>{{arraydatamain.podarray[1].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[1].Address}}</p>
                        <img v-if="arraydatamain.podarray[1].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[1].Image" />
                        <div v-if="arraydatamain.podarray[1].Note" class="text-block">
                            <p v-if="arraydatamain.podarray[1].Note">{{arraydatamain.podarray[1].Note}}</p>
                        </div> 
                    </div>

                    <div v-if="arraydatamain.podarray[2]" class="textBlock" :style="{ 'background-color': this.BackgroundDark }">
                        <b>{{arraydatamain.podarray[2].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[2].Website">{{arraydatamain.podarray[2].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[2].FB">{{arraydatamain.podarray[2].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[2].YT">{{arraydatamain.podarray[2].YT}}</a></p>
                        <p>{{arraydatamain.podarray[2].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[2].Address}}</p>
                        <img v-if="arraydatamain.podarray[2].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[2].Image" /> 
                        <div v-if="arraydatamain.podarray[2].Note" class="text-block">
                            <p v-if="arraydatamain.podarray[2].Note">{{arraydatamain.podarray[2].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[3]" class="textBlock" :style="{ 'background-color': this.BackgroundBright }">
                        <b>{{arraydatamain.podarray[3].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[3].Website">{{arraydatamain.podarray[3].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[3].FB">{{arraydatamain.podarray[3].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[3].YT">{{arraydatamain.podarray[3].YT}}</a></p>
                        <p>{{arraydatamain.podarray[3].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[3].Address}}</p>
                        <img v-if="arraydatamain.podarray[3].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[3].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[3].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[4]" class="textBlock" :style="{ 'background-color': this.BackgroundDark }">
                        <b>{{arraydatamain.podarray[4].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[4].Website">{{arraydatamain.podarray[4].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[4].FB">{{arraydatamain.podarray[4].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[4].YT">{{arraydatamain.podarray[4].YT}}</a></p>
                        <p>{{arraydatamain.podarray[4].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[4].Address}}</p>
                        <img v-if="arraydatamain.podarray[4].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[4].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[4].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[5]" class="textBlock" :style="{ 'background-color': this.BackgroundBright }">
                        <b>{{arraydatamain.podarray[5].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[5].Website">{{arraydatamain.podarray[5].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[5].FB">{{arraydatamain.podarray[5].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[5].YT">{{arraydatamain.podarray[5].YT}}</a></p>
                        <p>{{arraydatamain.podarray[5].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[5].Address}}</p>
                        <img v-if="arraydatamain.podarray[5].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[5].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[5].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[6]" class="textBlock" :style="{ 'background-color': this.BackgroundDark }">
                        <b>{{arraydatamain.podarray[6].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[6].Website">{{arraydatamain.podarray[6].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[6].FB">{{arraydatamain.podarray[6].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[6].YT">{{arraydatamain.podarray[6].YT}}</a></p>
                        <p>{{arraydatamain.podarray[6].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[6].Address}}</p>
                        <img v-if="arraydatamain.podarray[6].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[6].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[6].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[7]" class="textBlock" :style="{ 'background-color': this.BackgroundBright }">
                        <b>{{arraydatamain.podarray[7].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[7].Website">{{arraydatamain.podarray[7].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[7].FB">{{arraydatamain.podarray[7].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[7].YT">{{arraydatamain.podarray[7].YT}}</a></p>
                        <p>{{arraydatamain.podarray[7].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[7].Address}}</p>
                        <img v-if="arraydatamain.podarray[7].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[7].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[7].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[8]" class="textBlock" :style="{ 'background-color': this.BackgroundDark }">
                        <b>{{arraydatamain.podarray[8].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[8].Website">{{arraydatamain.podarray[8].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[8].FB">{{arraydatamain.podarray[8].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[8].YT">{{arraydatamain.podarray[8].YT}}</a></p>
                        <p>{{arraydatamain.podarray[8].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[8].Address}}</p>
                        <img v-if="arraydatamain.podarray[8].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[8].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[8].Note}}</p>
                        </div>
                    </div>


                    <div v-if="arraydatamain.podarray[9]" class="textBlock" :style="{ 'background-color': this.BackgroundBright }">
                        <b>{{arraydatamain.podarray[9].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[9].Website">{{arraydatamain.podarray[9].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[9].FB">{{arraydatamain.podarray[9].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[9].YT">{{arraydatamain.podarray[9].YT}}</a></p>
                        <p>{{arraydatamain.podarray[9].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[9].Address}}</p>
                        <img v-if="arraydatamain.podarray[9].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[9].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[9].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[10]" class="textBlock" :style="{ 'background-color': this.BackgroundDark }">
                        <b>{{arraydatamain.podarray[10].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[10].Website">{{arraydatamain.podarray[10].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[10].FB">{{arraydatamain.podarray[10].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[10].YT">{{arraydatamain.podarray[10].YT}}</a></p>
                        <p>{{arraydatamain.podarray[10].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[10].Address}}</p>
                        <img v-if="arraydatamain.podarray[10].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[10].Image" />
                        <div class="text-block">
                            <p>{{arraydatamain.podarray[10].Note}}</p>
                        </div>
                    </div>

                    <div v-if="arraydatamain.podarray[11]" class="textBlock" :style="{ 'background-color': this.BackgroundBright }">
                        <b>{{arraydatamain.podarray[11].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[11].Website">{{arraydatamain.podarray[11].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[11].FB">{{arraydatamain.podarray[11].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[11].YT">{{arraydatamain.podarray[11].YT}}</a></p>
                        <p>{{arraydatamain.podarray[11].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[11].Address}}</p>
                        <img v-if="arraydatamain.podarray[11].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[11].Image" />
                        <div v-if="arraydatamain.podarray[11].Note" class="text-block">
                            <p v-if="arraydatamain.podarray[11].Note">{{arraydatamain.podarray[11].Note}}</p>
                        </div> 
                    </div>

                    <div v-if="arraydatamain.podarray[12]" class="textBlock" :style="{ 'background-color': this.BackgroundDark }">
                        <b>{{arraydatamain.podarray[12].titleChildrenElement}}</b>
                        <p><a v-bind:href="arraydatamain.podarray[12].Website">{{arraydatamain.podarray[12].Website}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[12].FB">{{arraydatamain.podarray[12].FB}}</a></p>
                        <p><a v-bind:href="arraydatamain.podarray[12].YT">{{arraydatamain.podarray[12].YT}}</a></p>
                        <p>{{arraydatamain.podarray[12].PhoneEmail}}</p>
                        <p>{{arraydatamain.podarray[12].Address}}</p>
                        <img v-if="arraydatamain.podarray[12].Image" width="300" v-bind:src="'/images/articles/' + arraydatamain.podarray[12].Image" />
                        <div v-if="arraydatamain.podarray[12].Note" class="text-block">
                            <p v-if="arraydatamain.podarray[12].Note">{{arraydatamain.podarray[12].Note}}</p>
                        </div> 
                    </div>
          </div>
    </div>
</template>

<style scoped lang="scss">
    .textBlock {
        margin: auto;
        width: 95%;
        margin-top:10px;
        margin-bottom:10px;
        border-radius: 10px;
        padding: 20px;
        color: #c23f3e;
    }
    .background-dark {
        margin: auto;
        width: 75%;
        margin-top:10px;
        margin-bottom:10px;
        border-radius: 10px;
        padding: 20px;
        color: #c23f3e;
    }
    .background-bright {
        margin: auto;
        width: 75%;
        margin-top:10px;
        margin-bottom:10px;
        border-radius: 10px;
        padding: 20px;
        color: #c23f3e;
    }

    .text-block {
        white-space: pre-line; /* or pre-line */
    }

    .decoration-title {
        width: 300px;
        border-bottom: solid 2px #33326e;
        margin-left: 15px;
        margin-top:40px;
        font-weight: bold;
        color: #33326e;
        font-size: 1.5em;
    }

    .goTopWebsite {
        margin:auto;
        width:95%;
        text-align: right;
    }

    @media screen and (max-width: 1200px) and (min-width: 100px) { 
	/* jeśli szerokość jest mniejsza od 1200px i większa od 100px */ 
        .textBlock {
            width:80%;
        }
    }
</style>