<script>
  /* PINIA */
  import { useConfigStore } from '@/stores/settingsApplication'
  export default {
      data() {
        const settingsApplication = useConfigStore()

        if(settingsApplication.typeOfApplication == 'demo'){
          return {
            whatWebsite: 'demo',
            backgroundColorFooter: '#948282',
            errorMsg: '',
            logoVue: '/images/vue-logo.png',
            showInfoFooter: 1
          }
		    } else if(settingsApplication.typeOfApplication == 'S'){
          return {
            whatWebsite: 'slavic',
            errorMsg: '',
            backgroundColorFooter: '#817e4f',
            logoVue: '/images/vue-logo.png',
            showInfoFooter: 0
          }
		    } else if(settingsApplication.typeOfApplication == 'L'){
          return {
            whatWebsite: 'left-screen',
            errorMsg: '',
            backgroundColorFooter: '#948282',
            logoVue: '/images/vue-logo.png',
            showInfoFooter: 0
          }
		    }
      },
      mounted() {
       
      },
  }
</script>
<template>
  <div :style="{ 'background-color': this.backgroundColorFooter }" id="footer">
    <div class="footerDiv">
    <div v-if="showInfoFooter==1">
      2022 / 2023 Ryszard Jaklewicz <img :src="logoVue" width="50"/>
    </div>
    <div v-if="showInfoFooter==0">
      2022 / 2023  <img :src="logoVue" width="50"/>
    </div>
    </div>
    <div class="footerDiv">
      <a href="#span-top">Początek strony</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
  #footer {
    padding:20px;
  }

  .footerDiv {
      width:100%;
      height:60px;
      color: white;
      top:20px;
  }

  .footerDiv a {
    color: white;
  }

  .footerDiv a:visited {
    color: white;
  }

  #linkTopWebsite a {
    color: white;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>