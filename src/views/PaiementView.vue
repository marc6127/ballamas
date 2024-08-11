<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  name: "CheckoutView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="mx-auto px-5 pt-[14%] pb-[14%] lg:px-8">
    <div class="flex flex-col items-center justify-center space-y-3">
      <div>
        <img src="../assets/icons/check.svg" alt="">
      </div>
      <div>
        <h4 class="text-base sm:text-lg text-center font-semibold" style="font-family: 'archivoSemiBold';">
          Thanks for your order !
        </h4>
        <p class="text-xs text-center font-medium" style="font-family: 'archivoMedium';">
          The order confirmation has been sent to johndoe@gmail.com
        </p>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<style scoped>

</style>
