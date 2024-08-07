<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<template>
  <NavbarComponent/>
    <div>
      <h1>Home View</h1>
      <p class="text-2xl text-red-700	">The quick brown fox ...</p>
      <p> </p>
    </div>
  <FooterComponent/>
</template>

<style scoped>
/* Styles pour HomeView */
</style>
