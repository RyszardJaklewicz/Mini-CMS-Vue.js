<!--
  W wersji z routerem w pliku App.vue nie składamy wynikowego pliku
  z poszczególnych komponentów.<template>
  PLik App.vue przyjmuje do <router-view/> to co wygenerowane zostanie 
  w plikach okreslonych przez router

  ==========================================================================
  Do <router-view/> sa wrzucane CAŁE "strony" które są trzymane w katalogu
  src/views

  Te całe strony są składane z poszczególnych komponentów z katalogu 
  src/components
  ==========================================================================
-->
<script>
/* PINIA */
import { useConfigStore } from '@/stores/settingsApplication'
import axios from "axios";
import { ref } from "vue";
export default {
	data() {
    const settingsApplication = useConfigStore()
    if(settingsApplication.typeOfApplication == 'demo'){
			return {
				whatWebsite: 'demo',
				backgroundColorTopNav: '#948282',
				errorMsg: '',
			}
		} else if(settingsApplication.typeOfApplication == 'S'){
			return {
				whatWebsite: 'S',
				errorMsg: '',
        backgroundColorTopNav: '#817e4f'
			}
		} else if(settingsApplication.typeOfApplication == 'L'){
			return {
				whatWebsite: 'L',
				errorMsg: '',
        backgroundColorTopNav: '#948282',
			}
		}
  },
  mounted() {
   
  },
  setup(){
      
  },
};
</script>

<template>
  <span id="span-top"></span>
  <nav>
  </nav>
  <div :style="{ 'background-color': this.backgroundColorTopNav }" class="topnav" id="myTopnav">
    <router-link to="/">Home</router-link><span id="linkSpace">|</span>
    <router-link to="/addPost">Admin</router-link>
  </div>
  <router-view/>
</template>

<style scoped lang="scss">
  .topnav {
    height:40px;
    color: white;
    padding: 10px;
  }

  #linkSpace {
    margin-left: 20px;
    margin-right: 20px;
  }

  #myTopnav a {
    color: white;
  }

  #myTopnav a.active {
    color: #948282;
  }
</style>

