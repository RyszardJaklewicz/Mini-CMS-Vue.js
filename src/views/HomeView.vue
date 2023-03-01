<script>
// @ is an alias to /src
import HeaderSite from '@/components/HeaderSite.vue'
import CategoriesWebsite from '../components/CategoriesWebsite.vue';
import MainSite from '@/components/MainSite.vue'
import FooterSite from '@/components/FooterSite.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderSite,
    CategoriesWebsite,
    MainSite,
    FooterSite
  }
}
</script>

<template>
  <div class="home">
    <HeaderSite/>
    <CategoriesWebsite/>
    <MainSite/>
    <FooterSite/>
  </div>
</template>
