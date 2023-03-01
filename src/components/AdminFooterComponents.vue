<script>
  export default {
    data() {
        return {
          logoVue: '/images/vue-logo.png',
        }
    },
    name: 'FooterAdmin',
    components: {
      
  },
}
</script>

<template>
  <div id="footer">
    <hr />
    Copyright © 2022-2023 Ryszard Jaklewicz
    <img :src="logoVue" width="50"/>
  </div>
</template>

<style scoped lang="scss">
  @import "../assets/style.scss";
  #footer{
    margin-top:50px;
    padding: 20px;
    /* font-size: 0.8em; */
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>