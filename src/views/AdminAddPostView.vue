<script>
    // @ is an alias to /src
    import AdminHeaderComponents from '@/components/AdminHeaderComponents.vue';
    import AdminMainSiteComponents from '../components/AdminMainSiteComponents.vue';
    import AdminFooterComponents from '@/components/AdminFooterComponents.vue';
    
    export default {
      name: 'ContactsView',
      components: {
        AdminHeaderComponents,
        AdminMainSiteComponents,
        AdminFooterComponents
      }
    }
</script>

<template>
   <AdminHeaderComponents/>
   <AdminMainSiteComponents/>
   <AdminFooterComponents/>
</template>