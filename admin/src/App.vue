<template>
  <div id="app">
      <Nav />
    

      <router-view />
  </div>
</template>

<script>
// import AuthNav from "./components/AuthNav";
import Nav from "./components/Nav";
import Service from '@/services/Service.js'

export default {
  name: "App",
  components: {
    Nav,
    // AuthNav
  },
 
    async created() {

      if (localStorage.getItem('token')) {
        const response = await Service.user()
        this.$store.dispatch('user', response.data)
      }

    }
};
</script>
