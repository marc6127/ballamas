<script>
import ButtonComponent from '../components/ButtonComponent.vue';
import axios from 'axios';

export default {
  name: 'ProductCardComponent',
  props: {
    numbersProduct: {
    type: Number,
    },
  },
  components: {
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
  <div class="pt-9 w-full" v-for="(item, index) in lesImages.slice(6, 6+numbersProduct)" :key="index">
      <div class="imageProduct py-5 px-5 relative group" :style="{ backgroundImage: `url(${item.node.featuredImage.url})` }">
        <div class="absolute transition duration-500 ease-in-out inset-0 hover:bg-black hover:bg-opacity-25 rounded-[32px]"></div>
          <ButtonComponent v-if="index % 2 === 0"
            :name="'GET OFF 20%'" 
            :classes="['bg-white py-1.5 px-2.5 z-[10] relative']"
            :styleNameButton="{ fontFamily: 'archivoSemibold'}"
            :classNameButton="['text-xs text-center']"
          />

        <div :class="'productButton flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-[10] relative'"
        :style="index % 2 === 0 ? 'margin-top: 290px;' : 'margin-top: 320px;'">
          <ButtonComponent 
            :iconStart="'src/assets/icons/cart.svg'"
            :name="'ADD TO CART'" 
            :classes="['bg-white py-3 w-full justify-center']"
            :styleNameButton="{ fontFamily: 'JetBrains Mono'}"
            :classNameButton="['text-sm text-center']"
          />
          <ButtonComponent 
            :name="'BUY NOW'" 
            :classes="['py-3 w-full justify-center border-white border-2']"
            :styleNameButton="{ fontFamily: 'JetBrains Mono'}"
            :classNameButton="['text-sm text-center text-white']"
          />
        </div>
      </div>
      <div class="bg-white pt-3">
          <div class="cardTitle text-black font-semibold text-2xl">{{ item.node.title }}</div>
          <p class="text-[#7e7e7e] text-xl cardPrice">
            $ {{ item.node.variants.edges[0].node.price.amount }}
          </p>
      </div>
  </div>
</template>

<style>
.imageProduct {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 405px;
    border-radius: 32px;
}

.cardTitle, .cardPrice{
    font-family: 'archivoSemiBold';
}

.group:hover .productButton {
    opacity: 1;
}
</style>