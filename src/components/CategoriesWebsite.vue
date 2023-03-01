<script>
	/*
		Komponent przeznaczony do pobrania danych o kategoriach serwisu i wyswietlenia 
		ich w postaci menu w zaokraglonych div-ach
	*/
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
					errorMsg: '',
					logoVue: 'vue-logo.png',
					arrayDataHeader: [],
					errorMsg: '',
					BackgroundBright: '',
					BackgroundDark: '',
				}
    		} else if(settingsApplication.typeOfApplication == 'S'){
				return {
					whatWebsite: 'slavic',
					errorMsg: '',
					logoVue: 'vue-logo.png',
					arrayDataHeader: [],
					errorMsg: '',
					BackgroundBright: '',
					BackgroundDark: '',
				}
			} else if(settingsApplication.typeOfApplication == 'L'){
				return {
					whatWebsite: 'left-screen',
					errorMsg: '',
					logoVue: 'vue-logo.png',
					arrayDataHeader: [],
					errorMsg: '',
					BackgroundBright: '',
					BackgroundDark: '',
				}
			}
		},
		mounted() {
			const settingsApplication = useConfigStore()
            if(settingsApplication.typeOfApplication == 'demo'){
				axios.get(settingsApplication.urlGetAllDataDemo)
					.then((response) => {
								console.log("arrayDataHeader");
								console.log(response.data)
								this.arrayDataHeader = response.data
								//alert('AXIOS response OK')
							})
							.catch((error) => {
								console.log(error)
								this.errorMsg = 'Error retieving data'
								alert('AXIOS błąd response'+error)
							})
							this.backgroundColorListCategorySite = '#ecf1f8'
            } else if(settingsApplication.typeOfApplication == 'S'){
				axios.get(settingsApplication.urlGetCategoriesS)
						.then((response) => {
							console.log("arrayDataHeader");
							console.log(response.data)
							this.arrayDataHeader = response.data
						})
						.catch((error) => {
							console.log(error)
							this.errorMsg = 'Error retieving data'
						})
						this.backgroundColorListCategorySite = '#dfddca'
            } else if(settingsApplication.typeOfApplication == 'L'){
				axios.get(settingsApplication.urlGetCategoriesL)
						.then((response) => {
							console.log("arrayDataHeader");
							console.log(response.data)
							this.arrayDataHeader = response.data
						})
						.catch((error) => {
							console.log(error)
							this.errorMsg = 'Error retieving data'
						})
						this.backgroundColorListCategorySite = '#ecf1f8'
            }
		},
		setup(){
			
		},
	};
</script>

<template>
    <nav id="menu-navigation" :style="{ 'background-color': this.backgroundColorListCategorySite }">
        <div class="container">
            <div v-for="arraydataheader in arrayDataHeader" :key="arraydataheader.id">
				<a v-bind:href="'#'+ arraydataheader.tytul">{{arraydataheader.tytul}}</a>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
	#menu-navigation {
		margin: auto;
		width: 95%;
		margin-top:10px;
		margin-bottom:10px;
		border-radius: 10px;
		padding: 10px;
	}

	.container {
		width:98%;
		display: flex;
		flex-wrap: wrap;
	}

	.container > div {
		border:1px solid black;
		border-radius: 5px;
		background-color: #f1f1f1;
		width: 130px;
		margin: 2px;
		padding:5px;
		text-align: center;
		/* line-height: 5px; */
		font-size: 1.0em;
		min-height: 50px;
	}
	.topnav {
		overflow: hidden;
		background-color: #7e8496;
	}

	.topnav a {
	float: left;
	display: block;
	color: #f2f2f2;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	font-size: 17px;
	}

	.topnav a:hover {
	background-color: #ddd;
	color: black;
	}

	.topnav a.active {
	background-color: #808080;
	color: white;
	}

	.topnav .icon {
	display: none;
	}

	#div-header {
	width: 100%;
	/* background-image: url("../image/header-image.jpg"); */
	background-color: #33326e;
	background-position: center; 
	height:300px;
	color: #008080;
	}

	#div-header-mobile {
	padding:10px;
	}

	#header-text-rj-big {
	font-size: 1.5em;
	}
	#header-text-rj-small {
	font-size: 1em;
	}

	#header-text-rj-mobile {
		color: #c23f3e;
	}

	@media screen and (max-width: 1200px) and (min-width: 100px) { 
	/* jeśli szerokość jest mniejsza od 1200px i większa od 100px */ 
		body{
			margin:0;
			padding:0;
		}
		#header-text-rj {
			
			margin-top: 20px;
			margin-left:20px;
		}
		#header-text-rj-mobile-big {
			display: none;
			font-size: 2em;
			font-weight: 900;
			color: #c23f3e;
		}

		#header-text-rj-mobile-small {
			font-size: 1em;
			color: #c23f3e;
		}

		.text-description {
			text-align: left;
			width:85%;
			margin-left: auto;
			margin-right: auto;
		}

		.background-dark {
			margin: auto;
			width: 85%;
			margin-top:10px;
			margin-bottom:10px;
			
		}

		.background-bright {
			margin: auto;
			width: 85%;
			margin-top:10px;
			margin-bottom:10px;
		}

		#menu-navigation {
			margin: auto;
			width: 85%;
			margin-top:10px;
			margin-bottom:10px;
			border-radius: 10px;
			background: #ecf1f8;
			padding: 10px;
		}

		#section-notes {
			margin: auto;
			width: 85%;
			margin-top:10px;
			margin-bottom:10px;
			border-radius: 10px;
			padding: 20px;
		}

		#slavic_symbol img{
			width:30px;
			margin-right: 5px;

		}
	}
</style>