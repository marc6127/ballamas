<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import axios from 'axios';

export default {
  name: "CartView",
  components: {
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
  },
  data() {
    return {
      lesImages: []
    };
  },
  created() {
    this.getImage();
  },
  methods: {
    async getImage() {
      try {
        const response = await axios.get('https://mock.shop/api?query=%7B%20products(first%3A%2020)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20featuredImage%20%7B%20id%20url%20%7D%20variants(first%3A%203)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D');
        this.lesImages = response.data.data.products.edges;
      } catch (error) {
        console.error(error);
      }
    }
  },

};
</script>

<template>
  <NavbarComponent />
  <div class="mx-auto px-5 pt-11 pb-16 lg:px-8">
    <div class="space-y-10 lg:flex lg:space-x-10">
      <div class="cart space-y-5">
        <div class="cartTitle flex items-center justify-between">
          <h4 class="text-lg sm:text-2xl font-semibold" style="font-family: 'chillaxSemiBold';">
            Cart(3)
          </h4>
          <ButtonComponent 
            :iconStart="'../assets/icons/trash.svg'"
            :name="'Clear Cart'" 
            :classes="['bg-[#E5E5E5] py-2 px-2 sm:px-3 justify-center']"
            :styleNameButton="{ fontFamily: 'archivoMedium'}"
            :classNameButton="['text-[10px] font-medium sm:text-xs ml-1 text-center']"
            iconWidth="14px" 
            iconHeight="14px"
          />
        </div>
        <table class="table-fixed w-full">
          <thead>
            <tr>
              <th class="px-4 font-medium py-2 text-start text-[#7e7e7e] text-[10px] sm:text-xs" style="font-family: 'archivoMedium';">Product</th>
              <th class="px-4 font-medium py-2 text-end text-[#7e7e7e] text-[10px] sm:text-xs" style="font-family: 'archivoMedium';">Quantity</th>
              <th class="px-4 font-medium py-2 text-end text-[#7e7e7e] text-[10px] sm:text-xs w-12 sm:w-24" style="font-family: 'archivoMedium';">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-y items-center py-4" v-for="(item, index) in lesImages.slice(6, 9)" :key="index">
              <td class="py-4 text-start ">
                <div class="flex space-x-1">
                  <img class="w-11 h-11 sm:w-[70px] sm:h-[70px] lg:w-[72px] lg:h-[72px] rounded-md" :src="item.node.featuredImage.url" alt="">
                  <div class="justify-between">
                    <p style="font-family: 'archivoSemiBold';" class="text-[10px] sm:text-sm font-semibold">{{ item.node.title }}</p>
                    <p style="font-family: 'archivoMedium';" class="text-[10px] sm:text-xs font-medium text-[#7e7e7e]">Large - Green</p>
                    <p style="font-family: 'archivoSemiBold';" class="text-[10px] sm:text-sm font-semibold">$ {{ item.node.variants.edges[0].node.price.amount }}</p>
                  </div>
                </div>
              </td>
              <td class="py-8 sm:py-10 flex space-x-1 items-center justify-end">
                <ButtonComponent 
                  :iconStart="'../assets/icons/remove.svg'"
                  :iconEnd="'../assets/icons/plus.svg'"
                  :name="'2'" 
                  :classes="['bg-[#E5E5E5] py-2 px-4']"
                  :styleNameButton="{ fontFamily: 'archivoMedium'}"
                  :classNameButton="['text-xs mx-2']"
                  iconWidth="16px" 
                  iconHeight="16px"
                />
                <ButtonComponent 
                  :iconStart="'../assets/icons/trash.svg'"
                  :classes="['bg-[#E5E5E5] py-2 px-2']"
                  iconWidth="16px" 
                  iconHeight="16px"
                />
              </td>
              <td style="font-family: 'archivoSemiBold';" class="py-4 font-semibold text-end w-12 text-xs sm:text-sm">
                $ {{ item.node.variants.edges[0].node.price.amount*2 }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="callToCheckout">
        <div class="rounded-xl border-[#E5E5E5] space-y-4 border-2 mx-auto w-[285px]">
          <p style="font-family: 'archivoSemiBold';" class="text-[16px] pt-4 px-6 font-semibold lg:text-lg">
            Order summary
          </p>
          <div class="px-6">
            <div style="font-family: 'archivoMedium';" class="text-xs space-y-1 pb-3 border-b-[1px] border-[#7e7e7e] text-[#7e7e7e] font-medium">
              <div class="flex justify-between">
                <p>Subtotal</p>
                <p>$524.00</p>
              </div>
              <div class="flex justify-between" >
                <p>Discount</p>
                <p>$0</p>
              </div>
            </div>
            <div style="font-family: 'archivoSemiBold';" class="text-xs text-black pt-3 pb-4 space-y-2 font-semibold">
              <div class="flex justify-between pb-2">
                <p>Order total</p>
                <p>$524.00</p>
              </div>
              <router-link to="/checkout">
                <ButtonComponent 
                  :name="'Checkout now'" 
                  :classes="['bg-black py-3 w-full justify-center']"
                  :styleNameButton="{ fontFamily: 'archivoSemiBold'}"
                  :classNameButton="['text-sm text-white text-center']"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<style scoped>

</style>
