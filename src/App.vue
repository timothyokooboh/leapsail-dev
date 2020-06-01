<template>
  <v-app>
    <Header/>
    <v-content id="content">
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  #content{
    background-color: #F5F5F5;
  }
</style>
