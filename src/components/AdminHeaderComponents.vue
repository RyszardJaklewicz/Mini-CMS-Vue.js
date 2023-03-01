<script>
    import { useConfigStore } from '@/stores/settingsApplication'
    export default {
        name: 'HeaderSiteAdmin',
        setup() {
            const settingsApplication = useConfigStore()
            if(settingsApplication.typeOfApplication == 'demo'){
                return {
                    logoAdmin: 'images/vue-logo.png',
                    titlePage: 'Panel administracyjny wersja demonstracyjna',
                }
            } else if(settingsApplication.typeOfApplication == 'S'){
                return {
                    logoAdmin: 'images/admin-logo.webp',
                    titlePage: 'Panel administracyjny',
                }
            } else if(settingsApplication.typeOfApplication == 'L'){
                return {
                    logoAdmin: 'images/logo-admin-l.png',
                    titlePage: 'Panel administracyjny',
                }
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<template>
	<div id="divHeader">
        <div>
            <img :src="logoAdmin" width="60"/>
		</div>
        <div>
            <h3>{{titlePage}}</h3>
        </div>
		<hr />
	</div>
</template>

<style scoped lang="scss">
    @import "../assets/style.scss";

    #divHeader {
		max-width: 100%;
        padding: 20px;
	}
    #divHeader div {
		border:0px solid black;
        display:inline-block;
	}
</style>