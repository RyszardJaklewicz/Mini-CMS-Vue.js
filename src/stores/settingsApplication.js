import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('settingsApplication', () => {
    const typeOfApplication = 'demo'
    const textHeaderDemo1 = 'Mini CMS vue.js'
    const textHeaderDemo2 = 'Wersja demonstracyjna mini CMSa'
    const textHeaderS1 = ''
    const textHeaderS2 = ''
    const textHeaderL1 = ''
    const textHeaderL2 = ''

    /* VERSION DEMO */
    /* Pobranie danych dostepowych */
    const urlGetDataAccessDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/get_data_access_demo_minicms_vue.php'

    /* Pobranie całego zestawu danych */
    const urlGetAllDataDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/get_data_demo_minicms_vue.php'

    /* Pobranie listy kategorii na potrzeby panelu admin */
    const urlAdminGetCategoriesDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/get_demo_minicms_vue_listcategory.php'

    /* Zapis danych z formularza admin */
    const urlSavePostAllDataDemo = 'https://demo-minicms-vue.acvkadmiza.cfolks.pl/__api-mini-cms/post_demo_minicms_vue_save_data.php'



    /* VERSION S */
    /* Pobranie danych dostepowych */
    const urlGetDataAccessS = 'https://qwerty/__api-mini-cms/get_data_access_l.php'

    /* Pobranie całego zestawu danych */
    const urlGetAllDataS = 'https://qwerty/__api-mini-cms/get_data_all_s.php'

    /* Pobranie listy kategorii na potrzeby panelu admin */
    const urlAdminGetCategoriesS = 'https://qwerty/__api-mini-cms/get_s_listcategory.php'

    /* Zapis danych z formularza admin */
    const urlSavePostAllDataS = 'https://qwerty/__api-mini-cms/post_s_save_data.php'



    /* VERSION L */
    /* Pobranie danych dostepowych */
    const urlGetDataAccessL = 'https://qwerty/__api-mini-cms/get_data_access_l.php'

    /* Pobranie całego zestawu danych */
    const urlGetAllDataL = 'https://qwerty/__api-mini-cms/get_data_all_l.php'

    /* Pobranie listy kategorii na potrzeby panelu admin */
    const urlAdminGetCategoriesL = 'https://qwerty/__api-mini-cms/get_l_listcategory.php'

    /* Zapis danych z formularza admin */
    const urlSavePostAllDataL = 'https://qwerty/__api-mini-cms/post_l_save_data.php'

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
        urlGetDataAccessDemo,
        urlGetDataAccessS,
        urlSavePostAllDataS,
        urlGetDataAccessL,
        urlSavePostAllDataL
    }
})