import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/*
const urlGetCategoriesDemo = 'https://demo-admin-cms-vue.acvkadmiza.cfolks.pl/_api/get-datademo.php'

https://acvkadmiza.cfolks.pl/__APIMyMIniCms/__GET_ElementsReturnedByAjax/GET_data_Left--Screen.php

//axios.get('https://demo-admin-cms-vue.acvkadmiza.cfolks.pl/__APIMyMIniCms/__GET_ElementsReturnedByAjax/GET_demo_minicms_vue_ListCategory.php')

*/


export const useConfigStore = defineStore('settingsApplication', () => {
    const typeOfApplication = 'demo'
    const textHeaderDemo1 = 'Mini CMS vue.js'
    const textHeaderDemo2 = 'Wersja demonstracyjna mini CMSa'
    const textHeaderS1 = 'ZBIÓR STRON'
    const textHeaderS2 = 'Natura, Słowianie, slow life i inne'
    const textHeaderL1 = 'ZBIÓR STRON'
    const textHeaderL2 = 'Tematyka lewicowa, świeckie państwo, prawa człowieka'
    const colorFieldHeader1L = 'Tematyka lewicowa, świeckie państwo, prawa człowieka'


    /* Pobranie danych dostepowych */
    const urlGetDataAccessDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/get_data_access_demo_minicms_vue.php'

    /* Pobranie całego zestawu danych */
    const urlGetAllDataDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/get_data_demo_minicms_vue.php'

    /* Pobranie listy kategorii na potrzeby panelu admin */
    const urlAdminGetCategoriesDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/get_demo_minicms_vue_listcategory.php'

    /* Zapis danych z formularza admin */
    const urlSavePostAllDataDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/post_demo_minicms_vue_save_data.php'


    /* WERSION S */

    const urlGetAllDataS = 'http://inny-swiat.com.pl/panel-admin/__APIMyMIniCms/__GET_ElementsReturnedByAjax/GET_data_Slavic.php'
    const urlAdminGetCategoriesS = 'http://inny-swiat.com.pl/panel-admin/__APIMyMIniCms/__GET_ElementsReturnedByAjax/GET_data_Slavic.php'


    /* WERSION L */

    const urlGetAllDataL = 'https://acvkadmiza.cfolks.pl/__APIMyMIniCms/__GET_ElementsReturnedByAjax/GET_data_Left--Screen.php'
    const urlAdminGetCategoriesL = 'https://acvkadmiza.cfolks.pl/__APIMyMIniCms/__GET_ElementsReturnedByAjax/GET_data_Left--Screen.php'

    
    
    return { 
        typeOfApplication, 
        textHeaderS1, 
        textHeaderS2, 
        textHeaderL1, 
        textHeaderL2, 
        textHeaderDemo1, 
        textHeaderDemo2, 
        urlGetAllDataDemo,
        urlGetAllDataS,
        urlGetAllDataL,
        urlAdminGetCategoriesDemo,
        urlAdminGetCategoriesS,
        urlAdminGetCategoriesL,
        urlSavePostAllDataDemo,
        urlGetDataAccessDemo
    }
})