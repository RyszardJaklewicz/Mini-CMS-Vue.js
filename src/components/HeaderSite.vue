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
				textHeaderSite1: settingsApplication.textHeaderDemo1,
				textHeaderSite2: settingsApplication.textHeaderDemo2,
				arrayDataHeader: [],
				backgroundColorTopNav: '',
				imageHeaderDemo: { backgroundImage: "url(/images/header-image-demo.png)", backgroundPosition: "Left"},
				errorMsg: '',
			}
		} else if(settingsApplication.typeOfApplication == 'S'){
			return {
				whatWebsite: 'slavic',
				textHeaderSite1: settingsApplication.textHeaderS1,
				textHeaderSite2: settingsApplication.textHeaderS2,
				arrayDataHeader: [],
				backgroundColorTopNav: '',
				imageHeader: { backgroundImage: "url(/images/header-image-slavic.jpg)", backgroundPosition: "Left"},
				imageHeaderMobileSmartphone: { backgroundImage: "url(/images/header-image-slavic-mobile-smartphone.jpg)", backgroundPosition: "Left"},
				errorMsg: '',
			}
		} else if(settingsApplication.typeOfApplication == 'L'){
			return {
				whatWebsite: 'left-screen',
				textHeaderSite1: settingsApplication.textHeaderL1,
				textHeaderSite2: settingsApplication.textHeaderL2,
				arrayDataHeader: [],
				backgroundColorTopNav: '',
				errorMsg: '',
			}
		}
    },
	setup() {

    },
    mounted() {
		
    }
};
</script>
<template>
    <header id="header">
		<div v-if="whatWebsite=='demo'" :style="imageHeaderDemo" id="div-header-demo">
			<br>
			<div id="header-text-demo" class="header-text-demo">
				<p id="text-header1">{{textHeaderSite1}}</p>
				<p id="text-header2">{{textHeaderSite2}}</p>
			</div>
		</div>
		<div v-if="whatWebsite=='left-screen'" id="div-header-leftscreen">
			<br>
			<div id="header-text-leftscreen" class="header-text-demo">
				<p id="text-header1">{{textHeaderSite1}}</p>
				<p id="text-header2">{{textHeaderSite2}}</p>
			</div>
		</div>
		<div v-if="whatWebsite=='slavic'" :style="imageHeader" id="div-header-slavic">
			<br>
			<div id="header-text-slavic" class="header-text">
				<p id="text-header1">{{textHeaderSite1}}</p>
				<p id="text-header2">{{textHeaderSite2}}</p>
			</div>
		</div>
		<div v-if="whatWebsite=='slavic'" :style="imageHeaderMobileSmartphone"  id="div-header-slavic-mobile-smartphone">
			<br>
			<div id="header-text-slavic" class="header-text">
				<p id="text-header1">{{textHeaderSite1}}</p>
				<p id="text-header2">{{textHeaderSite2}}</p>
			</div>
		</div>
	</header>
</template>
<style scoped lang="scss">

	#div-header-demo {
		width: 100%;
		background-color: #33326e;
		height:200px;
		color: #008080;
		background-repeat: no-repeat;
	}

	#div-header-leftscreen {
		width: 100%;
		background-color: #33326e;
		height:200px;
		color: #008080;
	}

	#div-header-slavic-mobile-smartphone {
		width: 100%;
		height:200px;
		color: #008080;
	}

	#div-header-slavic {
		width: 100%;
		height:400px;
		color: #008080;
	}

	#div-header-slavic-mobile-smartphone {
		display:none;
	}

	.header-text{
		margin-left: 450px;
	}

	.header-text-demo{
		margin-left: 380px;
		margin-top: -40px;
	}

	#text-header1{
		font-size:2.5em;
		font-weight: 900;
		margin:20px;
	}

	#text-header2{
		font-size:1.3em;
		font-weight: 900;
		margin:20px;
	}

	@media screen and (max-width: 1200px) and (min-width: 100px) { 
		/* jeśli szerokość jest mniejsza od 1100px i większa od 100px */ 
		body{
			margin:0;
			padding:0;
		}

		#div-header-slavic {
			display:none;
		}

		#slavic_symbol img{
			width:30px;
			margin-right: 5px;
		}

		#div-header-slavic-mobile-smartphone {
			display:block;
		}

		.header-text{
			margin-left: 150px;
			width:100px;
		}

		.header-text-demo{
		margin-left: 0px;
		margin-top: 0px;
		width:250px;
	}

		#text-header1{
			font-size:2.5em;
			font-weight: 900;
			margin:10px;
		}

		#text-header2{
			font-size:1.1em;
			font-weight: 900;
			margin:10px;
		}

	}

	@media screen and (min-width: 800px) { 
		/* jeśli szerokość jest większa od 800px */ 
		body{
		margin:0;
		padding:0;
		}
		#header-text-rj-mobile {
			display: none;
		}

		#div-header-mobile {
			display: none;
		}
	}
</style>