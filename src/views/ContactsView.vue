<!--
  To jest cała strona CONTACT
-->
<script>
    // @ is an alias to /src
  import HeaderSite from '../components/HeaderSite.vue';
  import CategoriesWebsite from '../components/CategoriesWebsite.vue';
  import ContactSite from '@/components/ContactSite.vue';
  import FooterSite from '@/components/FooterSite.vue';
    
  export default {
      name: 'ContactsView',
      components: {
        HeaderSite,
        ContactSite,
        FooterSite
      }
  }
</script>

<template>
   <HeaderSite/>
   <CategoriesWebsite/>
   <ContactSite/>
   <FooterSite/>
</template>