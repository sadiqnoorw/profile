<template>
  <div id="app">
      <Nav />
      <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Service from '@/services/Service.js'

export default {
  name: "App",
  components: {
    Nav,
  },
 
  async created() {

    if (localStorage.getItem('token')) {
      const response = await Service.user()
      this.$store.dispatch('user', response.data)
    }

  }
};
</script>
